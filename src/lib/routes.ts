import type { Lang } from '@/i18n';

/**
 * Slugs de pages (identiques FR/EN, préfixés par la langue : /fr/produit, /en/produit).
 */
export const PAGE_SLUGS = {
  home: '',
  product: 'produit',
  useCases: 'cas-usage',
  catalog: 'catalogue',
  security: 'securite',
  deployment: 'deploiement',
  pricing: 'tarifs',
  contact: 'contact',
  demo: 'demo',
  documentation: 'documentation',
  legalNotice: 'mentions-legales',
  privacy: 'confidentialite',
} as const;

export type PageKey = keyof typeof PAGE_SLUGS;

/** Construit un chemin absolu localisé, ex. localizedPath('fr', 'product') => '/fr/produit'. */
export function localizedPath(lang: Lang, page: PageKey): string {
  const slug = PAGE_SLUGS[page];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

/** Toutes les pages, pour la génération du sitemap et la navigation. */
export const ALL_PAGES: PageKey[] = [
  'home',
  'product',
  'useCases',
  'catalog',
  'security',
  'deployment',
  'pricing',
  'documentation',
  'demo',
  'contact',
  'legalNotice',
  'privacy',
];

/** Pages affichées dans la navigation principale (hors accueil / CTA contact). */
export const NAV_PAGES: PageKey[] = [
  'product',
  'useCases',
  'catalog',
  'security',
  'deployment',
  'pricing',
  'documentation',
];

/**
 * Libellé de navigation de chaque page.
 *
 * Cette table vivait en DEUX exemplaires, dans `Header.tsx` et `Footer.tsx`.
 * Ajouter une page cassait la compilation aux deux endroits — ici le typage l'a
 * signalé, mais rien ne garantit qu'une clé ajoutée d'un seul côté se voie :
 * deux tables qui doivent s'accorder ne se maintiennent pas à la main.
 */
export const PAGE_LABEL_KEY: Record<PageKey, string> = {
  home: 'nav.home',
  product: 'nav.product',
  useCases: 'nav.useCases',
  catalog: 'nav.catalog',
  security: 'nav.security',
  deployment: 'nav.deployment',
  pricing: 'nav.pricing',
  contact: 'nav.contact',
  demo: 'nav.demo',
  documentation: 'nav.documentation',
  legalNotice: 'footer.legalNotice',
  privacy: 'footer.privacy',
};
