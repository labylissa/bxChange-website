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

export const LANGS = ['fr', 'en'];

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

export function lireSlugs() {
  const bloc = lire('src/lib/routes.ts').match(
    /export const PAGE_SLUGS\s*=\s*\{([\s\S]*?)\}\s*as const/,
  );
  if (!bloc) {
    throw new Error(
      'PAGE_SLUGS introuvable dans src/lib/routes.ts — la table des pages a ' +
        'changé de forme. Corriger cette lecture plutôt que de recopier la ' +
        'liste ici.',
    );
  }
  const slugs = [...bloc[1].matchAll(/:\s*'([^']*)'/g)].map((m) => m[1]);
  // Garde-fou du garde-fou : une expression qui ne lit plus rien rendrait un
  // sitemap vide et un prérendu sans page, tous deux sans erreur.
  if (slugs.length < 2) {
    throw new Error(
      `PAGE_SLUGS lu, mais ${slugs.length} entrée(s) extraite(s) — l'extraction ` +
        'ne fonctionne plus.',
    );
  }
  return slugs;
}

/** Toutes les adresses publiques, langue par langue. */
export function cheminsPublics() {
  const chemins = [];
  for (const slug of lireSlugs()) {
    for (const lang of LANGS) {
      chemins.push({ lang, slug, chemin: slug ? `/${lang}/${slug}` : `/${lang}` });
    }
  }
  return chemins;
}
