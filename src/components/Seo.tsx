import { Helmet } from 'react-helmet-async';
import { useLang } from '@/hooks/useLang';
import { SITE_URL } from '@/lib/site';
import { localizedPath, type PageKey } from '@/lib/routes';

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
      <link rel="alternate" hrefLang="fr" href={`${SITE_URL}${localizedPath('fr', page)}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${localizedPath('en', page)}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath('fr', page)}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_US'} />
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
