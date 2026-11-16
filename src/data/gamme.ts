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
  /** Capture réelle du produit, dimensions natives (réserve la place, pas de décalage au chargement). */
  capture: { src: string; largeur: number; hauteur: number };
}

export const GAMME: readonly ProduitGamme[] = [
  {
    id: 'bxreports',
    nom: 'bxReports',
    url: BXREPORTS_URL,
    // Reprise du site bxReports (site/images/tb-vue.png), qui la publie déjà
    // avec la mention « Données fictives ».
    capture: { src: '/gamme/bxreports-tableau-de-bord.png', largeur: 2400, hauteur: 1650 },
  },
];
