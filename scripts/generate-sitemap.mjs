// Génère public/sitemap.xml à partir des routes du site (FR + EN).
// Lancé automatiquement avant le build (voir "prebuild" dans package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ICI = dirname(fileURLToPath(import.meta.url));

/**
 * L'adresse du site est LUE dans `src/lib/site.ts`, jamais recopiée ici.
 *
 * Ce script en gardait sa propre valeur par défaut. Les deux ont divergé, et le
 * sitemap déployé annonçait 22 URLs sur `bxchange.pages.dev` — un domaine qui
 * n'était pas le nôtre. Le défaut ne se voit ni à l'écran ni au build : il ne se
 * constate que dans l'index d'un moteur de recherche, des semaines plus tard.
 *
 * On ÉCHOUE si la constante est introuvable, plutôt que de retomber sur une
 * valeur par défaut : c'est exactement ce repli silencieux qui a produit le
 * défaut qu'on corrige.
 */
function lireSiteUrl() {
  const source = readFileSync(resolve(ICI, '../src/lib/site.ts'), 'utf8');
  const trouve = source.match(/export const SITE_URL\s*=\s*['"]([^'"]+)['"]/);
  if (!trouve) {
    throw new Error(
      "SITE_URL introuvable dans src/lib/site.ts — le sitemap ne peut pas " +
      'deviner le domaine, et un sitemap au mauvais domaine est pire ' +
      "qu'aucun sitemap.",
    );
  }
  return trouve[1].replace(/\/+$/, '');
}

const SITE_URL = lireSiteUrl();

const SLUGS = ['', 'produit', 'cas-usage', 'catalogue', 'securite', 'tarifs', 'documentation', 'demo', 'contact', 'mentions-legales', 'confidentialite'];
const LANGS = ['fr', 'en'];

const urls = [];
for (const slug of SLUGS) {
  for (const lang of LANGS) {
    const loc = slug ? `${SITE_URL}/${lang}/${slug}` : `${SITE_URL}/${lang}`;
    const alternates = LANGS.map((l) => {
      const href = slug ? `${SITE_URL}/${l}/${slug}` : `${SITE_URL}/${l}`;
      return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`;
    }).join('\n');
    urls.push(
      `  <url>\n    <loc>${loc}</loc>\n${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>${slug === '' ? '1.0' : '0.8'}</priority>\n  </url>`,
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

const out = resolve(ICI, '..', 'public', 'sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log(`sitemap.xml généré : ${urls.length} URLs → ${out}`);

// `robots.txt` est engendré ici pour la MÊME raison que le sitemap : il porte
// l'adresse du sitemap, et sa copie écrite à la main annonçait encore
// `bxchange.pages.dev` — un robot suivait donc un lien mort vers un domaine
// étranger. Deux fichiers qui doivent s'accorder ne se maintiennent pas à la
// main ; celui qu'on oublie est toujours celui que personne ne relit.
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
const outRobots = resolve(ICI, '..', 'public', 'robots.txt');
writeFileSync(outRobots, robots, 'utf8');
console.log(`robots.txt généré → ${outRobots}`);
