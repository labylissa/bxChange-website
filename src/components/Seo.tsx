import { Helmet } from 'react-helmet-async';
import { useLang } from '@/hooks/useLang';
import { SUPPORTED_LANGS, DEFAULT_LANG, type Lang } from '@/i18n';
import { SITE_URL } from '@/lib/site';
import { localizedPath, type PageKey } from '@/lib/routes';

/**
 * La locale Open Graph de chaque langue. Typée sur `Lang` : une langue ajoutée
 * sans sa locale ne compile pas.
 *
 * `es_ES` et non `es_419` : le client visé est en Guinée équatoriale, dont
 * l'espagnol et les conventions d'écriture sont ceux de l'Espagne.
 */
const OG_LOCALES: Record<Lang, string> = {
  fr: 'fr_FR',
  en: 'en_US',
};

interface SeoProps {
  title: string;
  description: string;
  page: PageKey;
}

/** Gère <title>, meta description, lang, canonical et hreflang par page. */
export function Seo({ title, description, page }: SeoProps) {
  const { lang } = useLang();
  const canonical = `${SITE_URL}${localizedPath(lang, page)}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {/* Une ligne par langue, ENGENDRÉE : la liste était écrite à la main, et
          une langue ajoutée sans sa ligne n'est jamais annoncée à Google — la
          page existe, elle s'affiche, et elle n'est indexée dans aucune autre
          langue. Rien à l'écran ne le signale. */}
      {SUPPORTED_LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_URL}${localizedPath(l, page)}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath(DEFAULT_LANG, page)}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={OG_LOCALES[lang]} />
      {/* L'image manquait alors que `twitter:card` en promettait une grande :
          les robots qui rendent le JavaScript affichaient donc une carte vide.
          Ceux qui ne le rendent pas — LinkedIn, WhatsApp, Slack — lisent la
          version en dur d'`index.html`. */}
      <meta property="og:image" content={`${SITE_URL}/apercu-social.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${SITE_URL}/apercu-social.png`} />
    </Helmet>
  );
}
