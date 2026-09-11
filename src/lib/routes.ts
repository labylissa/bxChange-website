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

/**
 * La navigation principale : des pages, et des groupes déroulants.
 *
 * Sept entrées de premier niveau tenaient mal dans la barre et se lisaient
 * comme une liste à parcourir plutôt qu'un chemin à suivre. « Sécurité » et
 * « Déploiement » répondent à la même question — peut-on vous faire confiance,
 * et comment cela se passe-t-il concrètement — donc elles se rangent ensemble
 * plutôt que de concourir l'une contre l'autre.
 *
 * Chaque entrée de groupe porte sa propre description : un libellé de menu seul
 * (« Déploiement ») ne dit pas s'il s'agit d'installer chez soi ou d'un
 * calendrier de livraison.
 */
export type NavEntry =
  | { kind: 'page'; page: PageKey }
  | { kind: 'group'; labelKey: string; items: { page: PageKey; descKey: string }[] };

export const NAV_ENTRIES: NavEntry[] = [
  { kind: 'page', page: 'product' },
  { kind: 'page', page: 'useCases' },
  { kind: 'page', page: 'catalog' },
  {
    kind: 'group',
    labelKey: 'nav.trust',
    items: [
      { page: 'security', descKey: 'nav.securityDesc' },
      { page: 'deployment', descKey: 'nav.deploymentDesc' },
    ],
  },
  { kind: 'page', page: 'pricing' },
];

/**
 * Les mêmes pages, à plat — pour le pied de page, qui n'a pas de déroulant.
 *
 * DÉRIVÉE, jamais recopiée : une page ajoutée au menu et oubliée ici
 * disparaîtrait du pied de page sans que rien ne le signale.
 */
export const NAV_PAGES: PageKey[] = NAV_ENTRIES.flatMap((e) =>
  e.kind === 'page' ? [e.page] : e.items.map((i) => i.page),
);

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
