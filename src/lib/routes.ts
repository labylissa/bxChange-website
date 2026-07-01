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
  pricing: 'tarifs',
  contact: 'contact',
  demo: 'demo',
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
  'pricing',
  'demo',
  'contact',
];

/** Pages affichées dans la navigation principale (hors accueil / CTA contact). */
export const NAV_PAGES: PageKey[] = [
  'product',
  'useCases',
  'catalog',
  'security',
  'pricing',
];
