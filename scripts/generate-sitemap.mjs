// Génère public/sitemap.xml et public/robots.txt à partir des routes du site.
// Lancé automatiquement avant la construction (voir "prebuild" dans package.json).
//
// L'adresse du domaine et la liste des pages sont LUES dans les sources
// (`src/lib/site.ts`, `src/lib/routes.ts`), jamais recopiées ici — voir
// `routes-partagees.mjs`, qui porte le raisonnement et les garde-fous.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { LANGS, lireSiteUrl, lireSlugs } from './routes-partagees.mjs';

const RACINE = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = lireSiteUrl();

const urls = [];
for (const slug of lireSlugs()) {
  const adresse = (lang) => (slug ? `${SITE_URL}/${lang}/${slug}` : `${SITE_URL}/${lang}`);
  const alternates = LANGS.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${adresse(l)}"/>`,
  ).join('\n');
  for (const lang of LANGS) {
    urls.push(
      `  <url>\n    <loc>${adresse(lang)}</loc>\n${alternates}\n` +
        `    <changefreq>monthly</changefreq>\n` +
        `    <priority>${slug === '' ? '1.0' : '0.8'}</priority>\n  </url>`,
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

const out = resolve(RACINE, 'public', 'sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log(`sitemap.xml généré : ${urls.length} URLs → ${out}`);

// `robots.txt` est engendré ici pour la MÊME raison que le sitemap : il porte
// l'adresse du sitemap, et sa copie écrite à la main annonçait encore
// `bxchange.pages.dev` — un robot suivait donc un lien mort vers un domaine
// étranger. Deux fichiers qui doivent s'accorder ne se maintiennent pas à la
// main ; celui qu'on oublie est toujours celui que personne ne relit.
const outRobots = resolve(RACINE, 'public', 'robots.txt');
writeFileSync(outRobots, `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf8');
console.log(`robots.txt généré → ${outRobots}`);
