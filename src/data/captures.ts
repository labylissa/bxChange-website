/**
 * Captures de l'application publiées sur le site, avec leurs dimensions réelles.
 *
 * Prises sur l'instance de démonstration (tenant bxGroup), sur des dossiers
 * créés par le moteur lui-même : les références, les historiques et les pièces
 * jointes sont authentiques, les personnes, clients et montants sont fictifs.
 */
export const CAPTURES = {
  'dossier-kyc': { src: '/captures/dossier-kyc.webp', width: 1800, height: 1125 },
  'concepteur-dos': { src: '/captures/concepteur-dos.webp', width: 1800, height: 380 },
  'concepteur-kyc': { src: '/captures/concepteur-kyc.webp', width: 1800, height: 380 },
  'historique-kyc': { src: '/captures/historique-kyc.webp', width: 640, height: 1276 },
  'tableau-de-bord': { src: '/captures/tableau-de-bord.webp', width: 1800, height: 1125 },
  audit: { src: '/captures/audit.webp', width: 1800, height: 1125 },
  'dossier-sinistre': { src: '/captures/dossier-sinistre.webp', width: 1800, height: 1125 },
  'formulaire-sinistre': { src: '/captures/formulaire-sinistre.webp', width: 1344, height: 1800 },
  'connecteur-soap': { src: '/captures/connecteur-soap.webp', width: 1800, height: 1406 },
  'dossier-kyc-pays': { src: '/captures/dossier-kyc-pays.webp', width: 1800, height: 1125 },
  'referentiel-clients': { src: '/captures/referentiel-clients.webp', width: 1800, height: 1125 },
} as const;

export type CaptureId = keyof typeof CAPTURES;
