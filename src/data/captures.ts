import type { Lang } from '@/i18n';

/**
 * Captures de l'application publiées sur le site, avec leurs dimensions réelles.
 *
 * Prises sur l'instance de démonstration (tenant bxGroup), sur des dossiers
 * créés par le moteur lui-même : les références, les historiques et les pièces
 * jointes sont authentiques, les personnes, clients et montants sont fictifs.
 *
 * ## Une capture par langue, et pourquoi le repli est une DÉCISION
 *
 * Une page espagnole illustrée de captures françaises se lit comme une
 * traduction inachevée — c'est ce qui a motivé `traductions`. Mais une capture
 * n'est pas un texte : elle montre à la fois le CADRE de l'application (menus,
 * boutons, en-têtes de colonne), qui se traduit, et le CONTENU du dossier (noms
 * de process, d'étapes, de champs, données saisies), qui appartient au tenant de
 * démonstration et reste en français tant que le portefeuille livré l'est.
 * Reprendre une capture en espagnol donne donc une image à moitié espagnole.
 *
 * Le repli sur le français est écrit ici, capture par capture, plutôt que subi :
 * une entrée sans `traductions` affiche la version française dans toutes les
 * langues, et c'est un choix défendable. Ce qu'on ne veut pas, c'est qu'il passe
 * pour un oubli.
 *
 * `scripts/verifier-captures.mjs`, lancé avant chaque construction, vérifie que
 * tout fichier déclaré ici existe réellement : une traduction annoncée et
 * absente afficherait une image cassée sur la page d'un client.
 */

export interface Image {
  src: string;
  width: number;
  height: number;
}

export interface CaptureDeclaree extends Image {
  /**
   * La même capture reprise dans une autre langue. Les dimensions sont PROPRES
   * à chaque langue : l'espagnol est 15 à 25 % plus long que le français, une
   * capture reprise n'a donc presque jamais la même hauteur, et recopier celles
   * du français ferait sauter la page au chargement — le défaut même que ces
   * dimensions déclarées existent pour éviter.
   */
  traductions?: Partial<Record<Exclude<Lang, 'fr'>, Image>>;
}

export const CAPTURES = {
  'dossier-kyc': { src: '/captures/dossier-kyc.webp', width: 1800, height: 1125 },
  'concepteur-dos': { src: '/captures/concepteur-dos.webp', width: 1800, height: 380 },
  'concepteur-kyc': { src: '/captures/concepteur-kyc.webp', width: 1800, height: 380 },
  'historique-kyc': { src: '/captures/historique-kyc.webp', width: 640, height: 1276 },
  'historique-sinistre': { src: '/captures/historique-sinistre.webp', width: 640, height: 1072 },
  'tableau-de-bord': { src: '/captures/tableau-de-bord.webp', width: 1800, height: 1125 },
  audit: { src: '/captures/audit.webp', width: 1800, height: 1125 },
  'dossier-sinistre': { src: '/captures/dossier-sinistre.webp', width: 1800, height: 1125 },
  'formulaire-sinistre': { src: '/captures/formulaire-sinistre.webp', width: 1344, height: 1800 },
  'formulaire-kyc': { src: '/captures/formulaire-kyc.webp', width: 1344, height: 1900 },
  'connecteur-soap': { src: '/captures/connecteur-soap.webp', width: 1800, height: 1406 },
  'dossier-kyc-pays': { src: '/captures/dossier-kyc-pays.webp', width: 1800, height: 1125 },
  'referentiel-clients': { src: '/captures/referentiel-clients.webp', width: 1800, height: 1125 },
} as const satisfies Record<string, CaptureDeclaree>;

export type CaptureId = keyof typeof CAPTURES;

/**
 * La capture à afficher pour cette langue : sa traduction si elle existe, la
 * version française sinon.
 *
 * Point unique. La résolution était implicite (`CAPTURES[id].src` lu directement
 * par le composant), donc il n'existait aucun endroit où brancher une version
 * traduite — ni aucun endroit où lire que le français sert de repli.
 */
export function captureDansLaLangue(id: CaptureId, langue: Lang): Image {
  const declaree: CaptureDeclaree = CAPTURES[id];
  if (langue === 'fr') return declaree;
  return declaree.traductions?.[langue] ?? declaree;
}
