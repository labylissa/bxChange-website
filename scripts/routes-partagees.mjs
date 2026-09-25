// Point unique des adresses publiques du site, pour les scripts de construction.
//
// `generate-sitemap.mjs` recopiait la liste des slugs que `src/lib/routes.ts`
// détient déjà — alors que ce même script met en garde, pour l'adresse du
// domaine, contre exactement cette duplication. Le défaut est silencieux et
// coûteux : une page ajoutée au routeur s'affiche parfaitement, n'entre jamais
// dans le sitemap, et n'est donc jamais indexée. Personne ne le constate à
// l'écran ; on l'apprend des mois plus tard en cherchant pourquoi une page ne
// remonte pas.
//
// Le prérendu en aurait fait une TROISIÈME copie, et c'est celle qu'on oublie
// de mettre à jour qui décide de ce que Google voit.
//
// On LIT donc le fichier source, et on ÉCHOUE s'il ne dit plus ce qu'on
// attend : le repli sur une valeur par défaut est précisément ce qui avait
// produit un sitemap annonçant un domaine étranger.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const RACINE = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const lire = (relatif) => readFileSync(resolve(RACINE, relatif), 'utf8');

/**
 * Les langues du site, LUES dans `src/i18n/index.ts` pour la même raison que
 * les slugs et le domaine : une liste recopiée ici resterait à deux langues le
 * jour où le site en parle trois, et la troisième n'entrerait ni dans le
 * sitemap ni dans le prérendu. Ses pages s'afficheraient parfaitement et ne
 * seraient jamais indexées — le défaut exact que ce fichier existe pour éviter.
 */
export function lireLangs() {
  const bloc = lire('src/i18n/index.ts').match(
    /export const SUPPORTED_LANGS\s*=\s*\[([^\]]*)\]\s*as const/,
  );
  if (!bloc) {
    throw new Error(
      'SUPPORTED_LANGS introuvable dans src/i18n/index.ts — ni le sitemap ni ' +
        'le prérendu ne peuvent deviner les langues du site. Corriger cette ' +
        'lecture plutôt que de recopier la liste ici.',
    );
  }
  const langs = [...bloc[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  // Garde-fou du garde-fou : une expression qui ne lit plus rien rendrait un
  // sitemap vide et un prérendu sans page, tous deux sans erreur.
  if (langs.length < 1) {
    throw new Error(
      `SUPPORTED_LANGS lu, mais ${langs.length} langue(s) extraite(s) — ` +
        "l'extraction ne fonctionne plus.",
    );
  }
  return langs;
}

export const LANGS = lireLangs();

export function lireSiteUrl() {
  const trouve = lire('src/lib/site.ts').match(
    /export const SITE_URL\s*=\s*['"]([^'"]+)['"]/,
  );
  if (!trouve) {
    throw new Error(
      'SITE_URL introuvable dans src/lib/site.ts — ni le sitemap ni le ' +
        'prérendu ne peuvent deviner le domaine, et une adresse fausse est ' +
        "pire qu'une adresse absente.",
    );
  }
  return trouve[1].replace(/\/+$/, '');
}

/**
 * `PAGE_SLUGS`, PAR LANGUE : `{ fr: { product: 'produit', ... }, en: { product: 'product', ... } }`.
 *
 * La table a cessé d'être un slug unique partagé par les deux langues — c'est
 * justement ce qui faisait qu'un slug anglais restait français. Cette lecture
 * suit sa forme actuelle (un bloc par langue) plutôt que d'en recopier les
 * mots : une langue ou une page ajoutée dans la source apparaît ici sans
 * modification.
 */
export function lirePagesParLangue() {
  const source = lire('src/lib/routes.ts');
  const global = source.match(/export const PAGE_SLUGS\s*:\s*Record<Lang,\s*Record<PageKey,\s*string>>\s*=\s*\{([\s\S]*?)\n\};/);
  if (!global) {
    throw new Error(
      'PAGE_SLUGS introuvable dans src/lib/routes.ts — la table des pages a ' +
        'changé de forme. Corriger cette lecture plutôt que de recopier la ' +
        'liste ici.',
    );
  }
  const parLangue = {};
  const blocLangue = /(\w+):\s*\{([^}]*)\}/g;
  let m;
  while ((m = blocLangue.exec(global[1]))) {
    const [, lang, corps] = m;
    const pages = {};
    for (const [, cle, slug] of corps.matchAll(/(\w+):\s*'([^']*)'/g)) pages[cle] = slug;
    parLangue[lang] = pages;
  }
  // Garde-fou du garde-fou : une expression qui ne lit plus rien rendrait un
  // sitemap vide et un prérendu sans page, tous deux sans erreur.
  const langues = Object.keys(parLangue);
  if (langues.length < 1 || Object.keys(parLangue[langues[0]]).length < 2) {
    throw new Error(
      `PAGE_SLUGS lu, mais ${langues.length} langue(s) et ` +
        `${langues.length ? Object.keys(parLangue[langues[0]]).length : 0} page(s) extraite(s) — ` +
        "l'extraction ne fonctionne plus.",
    );
  }
  // PAGE_SLUGS doit nommer exactement les langues de SUPPORTED_LANGS : une
  // langue ajoutée à l'une sans l'autre resterait invisible ici — ni le
  // sitemap ni le prérendu ne sauraient qu'elle existe, ou tenteraient de
  // construire une adresse pour une langue sans page.
  const manquantes = LANGS.filter((l) => !parLangue[l]);
  if (manquantes.length) {
    throw new Error(
      `PAGE_SLUGS ne définit pas de pages pour : ${manquantes.join(', ')} — ` +
        'ajouter le bloc correspondant dans src/lib/routes.ts.',
    );
  }
  return parLangue;
}

/**
 * Le slug de chaque processus, par langue : `{ frSlug: { fr: 'note-de-frais',
 * en: 'expense-report' }, ... }`, clé sur le slug FR — stable, contrairement
 * au rang dans le portefeuille (voir `scripts/generer-catalogue.py`).
 *
 * LU dans `src/data/processes.ts`, jamais recopié : ce fichier est lui-même
 * engendré depuis le portefeuille produit, la vraie source est à deux
 * remontées de là. Une expression simple suffit — on ne cherche que la forme
 * `slug: { fr: '...', en: '...' }`, présente une fois par processus.
 */
export function lireProcessSlugs() {
  const source = lire('src/data/processes.ts');
  const paires = [...source.matchAll(/slug:\s*\{\s*fr:\s*'([^']*)',\s*en:\s*'([^']*)'\s*\}/g)].map(
    ([, slugFr, slugEn]) => ({ fr: slugFr, en: slugEn }),
  );
  // Garde-fou du garde-fou : une expression qui ne lit plus rien rendrait un
  // sitemap et un prérendu sans aucune page processus, sans erreur.
  if (paires.length < 1) {
    throw new Error(
      'Aucun slug de processus trouvé dans src/data/processes.ts — la forme ' +
        "du champ `slug` a change. Corriger cette lecture plutot que de " +
        'recopier la liste ici.',
    );
  }
  return paires;
}

/**
 * Toutes les adresses publiques, langue par langue, TOUJOURS terminées par un
 * slash — voir `localizedPath` dans `src/lib/routes.ts` pour la raison : une
 * adresse déclarée sans slash n'est pas celle que Cloudflare sert.
 *
 * Chaque entrée porte sa PAGE (pas seulement son slug), pour que le sitemap
 * puisse grouper les adresses d'une même page à travers les langues et
 * construire les bonnes paires d'alternates — le slug seul ne le permet plus,
 * puisqu'il diffère désormais d'une langue à l'autre. Les pages processus
 * suivent la même logique, groupées par leur slug FR (`processus:<slug-fr>`,
 * jamais confondu avec une `PageKey` statique).
 */
export function cheminsPublics() {
  const parLangue = lirePagesParLangue();
  const chemins = [];
  for (const lang of LANGS) {
    for (const [page, slug] of Object.entries(parLangue[lang])) {
      chemins.push({ lang, page, slug, chemin: slug ? `/${lang}/${slug}/` : `/${lang}/` });
    }
  }
  for (const { fr: slugFr, en: slugEn } of lireProcessSlugs()) {
    const page = `processus:${slugFr}`;
    const parSlug = { fr: slugFr, en: slugEn };
    for (const lang of LANGS) {
      const slug = parSlug[lang];
      if (!slug) {
        throw new Error(
          `Processus '${fr}' sans slug pour la langue '${lang}' — ` +
            'src/data/processes.ts et SUPPORTED_LANGS ont divergé.',
        );
      }
      const slugCatalogue = parLangue[lang].catalog;
      chemins.push({ lang, page, slug, chemin: `/${lang}/${slugCatalogue}/${slug}/` });
    }
  }
  return chemins;
}
