// Génère public/sitemap.xml à partir des routes du site (FR + EN).
// Lancé automatiquement avant le build (voir "prebuild" dans package.json).
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const SITE_URL = process.env.SITE_URL ?? 'https://bxchange.pages.dev';

const SLUGS = ['', 'produit', 'cas-usage', 'catalogue', 'securite', 'tarifs', 'demo', 'contact', 'mentions-legales', 'confidentialite'];
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log(`sitemap.xml généré : ${urls.length} URLs → ${out}`);
