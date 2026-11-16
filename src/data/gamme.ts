import type { Translation } from '@/i18n/locales/fr';
import { BXREPORTS_URL } from '@/lib/site';

/**
 * Les AUTRES produits de la gamme bxGroup, présentés sur l'accueil et sur la
 * page « La gamme bxGroup ».
 *
 * Point unique : un nouveau produit s'ajoute ici, et ses textes sous
 * `suite.produits.<id>` dans chaque langue — l'identifiant est typé sur ces
 * textes, donc un produit ajouté sans eux ne compile pas.
 *
 * bxFlow n'y figure pas : c'est le sujet de tout le reste du site.
 */
export type IdProduitGamme = keyof Translation['suite']['produits'];

export interface ProduitGamme {
  id: IdProduitGamme;
  /** Nom de marque, identique dans toutes les langues. */
  nom: string;
  url: string;
  /**
   * Capture réelle du produit, en WebP à deux largeurs : le navigateur prend
   * la plus petite qui suffit à l'écran. Largeur et hauteur de la plus grande
   * réservent la place (aucun décalage au chargement).
   */
  capture: { versions: { src: string; largeur: number }[]; largeur: number; hauteur: number };
}

export const GAMME: readonly ProduitGamme[] = [
  {
    id: 'bxreports',
    nom: 'bxReports',
    url: BXREPORTS_URL,
    // Reprise du site bxReports (site/images/tb-vue.png, PNG 2400 px, 209 Ko),
    // qui la publie déjà avec la mention « Données fictives ». Réencodée en
    // WebP : 21 Ko pour un téléphone, 57 Ko pour un écran large.
    capture: {
      versions: [
        { src: '/gamme/bxreports-tableau-de-bord-800.webp', largeur: 800 },
        { src: '/gamme/bxreports-tableau-de-bord-1600.webp', largeur: 1600 },
      ],
      largeur: 1600,
      hauteur: 1100,
    },
  },
];
