import type { Lang } from '@/i18n';

export type PageKey =
  | 'home'
  | 'product'
  | 'useCases'
  | 'catalog'
  | 'security'
  | 'deployment'
  | 'team'
  | 'pricing'
  | 'contact'
  | 'demo'
  | 'documentation'
  | 'legalNotice'
  | 'privacy';

/**
 * Slugs de pages, PAR LANGUE.
 *
 * Une seule table servait aux deux langues (`/fr/produit`, `/en/produit`) :
 * changer de langue ne faisait donc que remplacer le préfixe, jamais le mot
 * lui-même — un mot français sous une adresse anglaise. `Record<Lang, ...>`
 * force à en écrire un pour CHAQUE langue : une traduction oubliée ne compile
 * pas, plutôt que de laisser passer un slug français de plus.
 *
 * `contact`, `demo` et `documentation` s'écrivent pareil dans les deux
 * langues — ce n'est pas un oubli, juste que les mots coïncident.
 */
export const PAGE_SLUGS: Record<Lang, Record<PageKey, string>> = {
  fr: {
    home: '',
    product: 'produit',
    useCases: 'cas-usage',
    catalog: 'catalogue',
    security: 'securite',
    deployment: 'deploiement',
    team: 'equipe',
    pricing: 'tarifs',
    contact: 'contact',
    demo: 'demo',
    documentation: 'documentation',
    legalNotice: 'mentions-legales',
    privacy: 'confidentialite',
  },
  en: {
    home: '',
    product: 'product',
    useCases: 'use-cases',
    catalog: 'catalog',
    security: 'security',
    deployment: 'deployment',
    team: 'team',
    pricing: 'pricing',
    contact: 'contact',
    demo: 'demo',
    documentation: 'documentation',
    legalNotice: 'legal-notice',
    privacy: 'privacy',
  },
};

/**
 * Construit un chemin absolu localisé, TOUJOURS terminé par un slash
 * (`localizedPath('fr', 'product') => '/fr/produit/'`).
 *
 * Sans le slash final, l'adresse déclarée (canonical, hreflang, sitemap,
 * liens internes) n'est pas celle que le serveur sert : Cloudflare répond à
 * `/fr/produit` par une redirection 308 vers `/fr/produit/`, et une adresse
 * qu'on annonce soi-même ne devrait jamais rediriger.
 */
export function localizedPath(lang: Lang, page: PageKey): string {
  const slug = PAGE_SLUGS[lang][page];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

/**
 * Retrouve la page depuis un slug DÉJÀ débarrassé de son préfixe de langue et
 * de ses slashes (ex. `'produit'`, ou `''` pour l'accueil).
 *
 * Sert au sélecteur de langue : passer du français à l'anglais doit changer
 * de MOT (`/fr/produit` → `/en/product`), pas seulement de préfixe — ce que
 * faisait l'ancien code en recopiant le chemin tel quel.
 */
export function pageKeyFromSlug(lang: Lang, slug: string): PageKey | undefined {
  const table = PAGE_SLUGS[lang];
  return (Object.keys(table) as PageKey[]).find((key) => table[key] === slug);
}

/** Toutes les pages, pour la génération du sitemap et la navigation. */
export const ALL_PAGES: PageKey[] = [
  'home',
  'product',
  'useCases',
  'catalog',
  'security',
  'deployment',
  'team',
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
      { page: 'team', descKey: 'nav.teamDesc' },
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
  team: 'nav.team',
  pricing: 'nav.pricing',
  contact: 'nav.contact',
  demo: 'nav.demo',
  documentation: 'nav.documentation',
  legalNotice: 'footer.legalNotice',
  privacy: 'footer.privacy',
};
