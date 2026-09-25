import { Helmet } from 'react-helmet-async';
import { useLang } from '@/hooks/useLang';
import { useContent } from '@/hooks/useContent';
import { SUPPORTED_LANGS, DEFAULT_LANG, type Lang } from '@/i18n';
import { SITE_URL } from '@/lib/site';
import { localizedPath, type PageKey } from '@/lib/routes';

/**
 * Identifiant stable de l'entité bxFlow en JSON-LD — une page qui en parle
 * (`about`) ou en dépend (`isPartOf`) y renvoie par référence plutôt que de
 * redécrire l'entité à chaque fois.
 */
export const BXFLOW_ID = `${SITE_URL}/#bxflow`;

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
  /** Page statique : le chemin par langue vient de `localizedPath`. */
  page?: PageKey;
  /**
   * Page dynamique (ex. un processus du catalogue), dont le chemin ne se
   * déduit pas d'une `PageKey` — le slug diffère d'une langue à l'autre.
   * Fournir le chemin déjà construit pour CHAQUE langue.
   */
  paths?: Record<Lang, string>;
  /**
   * Données structurées PROPRES à la page (BreadcrumbList, WebPage…), un
   * objet JSON-LD par bloc — en plus du bloc `SoftwareApplication` de
   * l'entité bxFlow, commun à toutes les pages, que `Seo` engendre lui-même
   * ci-dessous (localisé : c'était un bloc identique et figé en dur dans
   * `index.html`, donc jamais dans la langue de la page anglaise).
   */
  jsonLd?: Record<string, unknown>[];
}

/** Gère <title>, meta description, lang, canonical, hreflang et JSON-LD par page. */
export function Seo({ title, description, page, paths, jsonLd }: SeoProps) {
  const { lang } = useLang();
  const c = useContent();
  const chemin = (l: Lang) => paths?.[l] ?? (page ? localizedPath(l, page) : (() => {
    throw new Error('<Seo> : fournir `page` ou `paths`.');
  })());
  const canonical = `${SITE_URL}${chemin(lang)}`;

  const bxflow = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': BXFLOW_ID,
    name: 'bxFlow',
    description: c.meta.org.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: 'bxGroup',
      url: SITE_URL,
      logo: `${SITE_URL}/icone-bxflow-512.png`,
    },
  };

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
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_URL}${chemin(l)}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${chemin(DEFAULT_LANG)}`} />

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

      <script type="application/ld+json">{JSON.stringify(bxflow)}</script>
      {jsonLd?.map((bloc, i) => (
        // eslint-disable-next-line react/no-array-index-key -- l'ordre des blocs ne change jamais pour une page donnée.
        <script key={i} type="application/ld+json">
          {JSON.stringify(bloc)}
        </script>
      ))}
    </Helmet>
  );
}
