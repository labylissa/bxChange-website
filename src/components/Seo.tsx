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
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
