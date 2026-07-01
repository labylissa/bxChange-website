import type { Lang } from '@/i18n';

/**
 * Catalogue de processus prêts à l'emploi.
 *
 * Pour AJOUTER un processus : ajoutez simplement une entrée dans le tableau
 * `processes` ci-dessous. Aucune modification de mise en page n'est nécessaire —
 * l'accueil et la page /catalogue se mettent à jour automatiquement.
 *
 * `category` doit correspondre à une clé de `PROCESS_CATEGORIES`.
 */

export const PROCESS_CATEGORIES = [
  'rh',
  'finance',
  'commercial',
  'support',
  'operations',
] as const;

export type ProcessCategory = (typeof PROCESS_CATEGORIES)[number];

export interface Process {
  id: string;
  category: ProcessCategory;
  /** Nom métier court, clair pour un non-technique. */
  name: Record<Lang, string>;
  /** Une phrase compréhensible par tous. */
  description: Record<Lang, string>;
  /** Nom d'icône (voir ProcessIcon). */
  icon: ProcessIconName;
  /** Mis en avant sur l'aperçu de l'accueil. */
  featured?: boolean;
}

export type ProcessIconName =
  | 'calendar'
  | 'receipt'
  | 'user-plus'
  | 'folder'
  | 'file-check'
  | 'clock'
  | 'shield'
  | 'inbox'
  | 'handshake'
  | 'truck'
  | 'chart'
  | 'wallet'
  | 'refresh'
  | 'clipboard'
  | 'lifebuoy'
  | 'building';

export const processes: Process[] = [
  {
    id: 'conges',
    category: 'rh',
    icon: 'calendar',
    featured: true,
    name: { fr: 'Demande de congés', en: 'Leave request' },
    description: {
      fr: 'Le collaborateur pose ses congés, la validation part au bon responsable et le solde se met à jour tout seul.',
      en: 'An employee requests leave, the approval goes to the right manager and the balance updates itself.',
    },
  },
  {
    id: 'note-de-frais',
    category: 'finance',
    icon: 'receipt',
    featured: true,
    name: { fr: 'Note de frais', en: 'Expense report' },
    description: {
      fr: 'Le justificatif est lu automatiquement, la note pré-remplie et envoyée en validation sans ressaisie.',
      en: 'The receipt is read automatically, the report pre-filled and sent for approval without re-keying.',
    },
  },
  {
    id: 'onboarding',
    category: 'rh',
    icon: 'user-plus',
    featured: true,
    name: { fr: 'Onboarding collaborateur', en: 'Employee onboarding' },
    description: {
      fr: 'À l’arrivée d’un nouvel employé, tout se déclenche : accès, matériel, documents et étapes à suivre.',
      en: 'When a new hire arrives, everything triggers: access, equipment, documents and steps to follow.',
    },
  },
  {
    id: 'dossier-client',
    category: 'commercial',
    icon: 'folder',
    featured: true,
    name: { fr: 'Ouverture de dossier client', en: 'Client file opening' },
    description: {
      fr: 'Les pièces reçues sont lues, le dossier client est créé et pré-rempli, prêt à être validé.',
      en: 'Incoming documents are read, the client file created and pre-filled, ready for validation.',
    },
  },
  {
    id: 'validation-facture',
    category: 'finance',
    icon: 'file-check',
    featured: true,
    name: { fr: 'Validation de facture', en: 'Invoice approval' },
    description: {
      fr: 'La facture reçue est lue, rapprochée et envoyée en validation au bon niveau, automatiquement.',
      en: 'The incoming invoice is read, matched and routed for approval at the right level, automatically.',
    },
  },
  {
    id: 'demande-achat',
    category: 'finance',
    icon: 'wallet',
    featured: true,
    name: { fr: 'Demande d’achat', en: 'Purchase request' },
    description: {
      fr: 'Une demande d’achat suit son circuit de validation selon le montant et le service concerné.',
      en: 'A purchase request follows its approval path based on amount and department.',
    },
  },
  {
    id: 'demande-conge-maladie',
    category: 'rh',
    icon: 'clock',
    name: { fr: 'Arrêt maladie', en: 'Sick leave' },
    description: {
      fr: 'Le justificatif est enregistré, l’absence tracée et les personnes concernées prévenues.',
      en: 'The certificate is recorded, the absence tracked and the right people notified.',
    },
  },
  {
    id: 'demande-materiel',
    category: 'operations',
    icon: 'clipboard',
    name: { fr: 'Demande de matériel', en: 'Equipment request' },
    description: {
      fr: 'Un besoin de matériel est soumis, validé et suivi jusqu’à la mise à disposition.',
      en: 'An equipment need is submitted, approved and tracked until it is delivered.',
    },
  },
  {
    id: 'ticket-support',
    category: 'support',
    icon: 'lifebuoy',
    name: { fr: 'Ticket de support', en: 'Support ticket' },
    description: {
      fr: 'Une demande d’aide est prise en charge, orientée vers la bonne équipe et suivie jusqu’à résolution.',
      en: 'A help request is picked up, routed to the right team and tracked until resolved.',
    },
  },
  {
    id: 'reclamation-client',
    category: 'support',
    icon: 'inbox',
    name: { fr: 'Réclamation client', en: 'Customer complaint' },
    description: {
      fr: 'La réclamation reçue par email est enregistrée, qualifiée et traitée sans rien perdre.',
      en: 'A complaint received by email is logged, qualified and handled without anything slipping.',
    },
  },
  {
    id: 'demande-credit',
    category: 'finance',
    icon: 'handshake',
    name: { fr: 'Demande de financement', en: 'Financing request' },
    description: {
      fr: 'Chaque demande suit un parcours clair, avec les vérifications et validations attendues.',
      en: 'Each request follows a clear path, with the expected checks and approvals.',
    },
  },
  {
    id: 'signature-contrat',
    category: 'commercial',
    icon: 'file-check',
    name: { fr: 'Signature de contrat', en: 'Contract signing' },
    description: {
      fr: 'Le contrat circule pour relecture, validation et signature, avec un suivi étape par étape.',
      en: 'The contract circulates for review, approval and signing, tracked step by step.',
    },
  },
  {
    id: 'devis',
    category: 'commercial',
    icon: 'chart',
    name: { fr: 'Demande de devis', en: 'Quote request' },
    description: {
      fr: 'Une demande entrante crée un devis à préparer, assigné à la bonne personne.',
      en: 'An incoming request creates a quote to prepare, assigned to the right person.',
    },
  },
  {
    id: 'commande-fournisseur',
    category: 'operations',
    icon: 'truck',
    name: { fr: 'Commande fournisseur', en: 'Supplier order' },
    description: {
      fr: 'La commande est validée, transmise et suivie jusqu’à la réception et la facturation.',
      en: 'The order is approved, sent and tracked until receipt and invoicing.',
    },
  },
  {
    id: 'inventaire',
    category: 'operations',
    icon: 'clipboard',
    name: { fr: 'Suivi d’inventaire', en: 'Inventory tracking' },
    description: {
      fr: 'Les mouvements de stock sont enregistrés et déclenchent les réapprovisionnements utiles.',
      en: 'Stock movements are recorded and trigger the right replenishments.',
    },
  },
  {
    id: 'demande-formation',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Demande de formation', en: 'Training request' },
    description: {
      fr: 'Une demande de formation suit son circuit d’approbation et son suivi budgétaire.',
      en: 'A training request follows its approval path and budget tracking.',
    },
  },
  {
    id: 'depart-collaborateur',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Départ collaborateur', en: 'Employee offboarding' },
    description: {
      fr: 'Au départ d’un collaborateur, les accès sont retirés et les étapes de sortie orchestrées.',
      en: 'When an employee leaves, access is removed and exit steps are orchestrated.',
    },
  },
  {
    id: 'rapprochement-bancaire',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Rapprochement bancaire', en: 'Bank reconciliation' },
    description: {
      fr: 'Les opérations sont rapprochées automatiquement et les écarts remontés pour vérification.',
      en: 'Transactions are matched automatically and discrepancies flagged for review.',
    },
  },
  {
    id: 'demande-remboursement',
    category: 'finance',
    icon: 'receipt',
    name: { fr: 'Demande de remboursement', en: 'Reimbursement request' },
    description: {
      fr: 'La demande et ses justificatifs sont lus, contrôlés et acheminés vers la validation.',
      en: 'The request and its receipts are read, checked and routed for approval.',
    },
  },
  {
    id: 'ouverture-compte',
    category: 'commercial',
    icon: 'folder',
    name: { fr: 'Ouverture de compte', en: 'Account opening' },
    description: {
      fr: 'Les informations fournies sont collectées et vérifiées pour ouvrir un compte plus vite.',
      en: 'The information provided is collected and checked to open an account faster.',
    },
  },
  {
    id: 'demande-conge-exceptionnel',
    category: 'rh',
    icon: 'calendar',
    name: { fr: 'Congé exceptionnel', en: 'Special leave' },
    description: {
      fr: 'Les demandes particulières suivent un circuit dédié avec les justificatifs requis.',
      en: 'Special requests follow a dedicated path with the required supporting documents.',
    },
  },
  {
    id: 'gestion-sinistre',
    category: 'support',
    icon: 'shield',
    name: { fr: 'Déclaration de sinistre', en: 'Claim declaration' },
    description: {
      fr: 'La déclaration et ses pièces sont enregistrées, qualifiées et suivies jusqu’au traitement.',
      en: 'The declaration and its documents are logged, qualified and tracked to resolution.',
    },
  },
  {
    id: 'demande-conge-parental',
    category: 'rh',
    icon: 'calendar',
    name: { fr: 'Congé parental', en: 'Parental leave' },
    description: {
      fr: 'La demande est instruite, validée et planifiée avec les bonnes informations RH.',
      en: 'The request is processed, approved and scheduled with the right HR information.',
    },
  },
  {
    id: 'validation-document',
    category: 'operations',
    icon: 'file-check',
    name: { fr: 'Validation de document', en: 'Document approval' },
    description: {
      fr: 'Un document circule pour relecture et approbation, avec versions et signatures tracées.',
      en: 'A document circulates for review and approval, with versions and sign-offs tracked.',
    },
  },
];

export function getFeaturedProcesses(): Process[] {
  return processes.filter((p) => p.featured);
}

export function countByCategory(category: ProcessCategory | 'all'): number {
  if (category === 'all') return processes.length;
  return processes.filter((p) => p.category === category).length;
}
