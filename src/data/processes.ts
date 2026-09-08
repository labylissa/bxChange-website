import type { Lang } from '@/i18n';

/**
 * Catalogue de processus — ENGENDRÉ depuis le portefeuille du produit.
 *
 * Ne pas modifier à la main : ce fichier est produit par
 * `scratchpad/generer_catalogue.py` à partir des fichiers `.bxflow` livrés
 * dans `backend/scripts/portfolio/`. Les noms, les catégories et les étapes
 * sont donc ceux que le produit installe réellement.
 *
 * ## Pourquoi une génération plutôt qu'une rédaction
 *
 * Le catalogue était écrit à la main : 24 processus annoncés « plus de 20 »,
 * alors que le portefeuille en comptait 71. Un catalogue tenu à part de sa
 * source ne diverge pas un jour — il diverge tout de suite, et c'est le
 * chiffre affiché sur la page d'accueil qui devient faux.
 *
 * Pour AJOUTER un processus : ajoutez-le au portefeuille du produit, puis
 * relancez la génération.
 */

export const PROCESS_CATEGORIES = [
  'rh',
  'finance',
  'client',
  'achats',
  'juridique',
  'it',
  'conformite',
  'operations',
] as const;

export type ProcessCategory = (typeof PROCESS_CATEGORIES)[number];

export interface Process {
  id: string;
  category: ProcessCategory;
  /** Nom métier, tel qu'il apparaît dans le produit. */
  name: Record<Lang, string>;
  /** Une phrase compréhensible par tous. */
  description: Record<Lang, string>;
  /**
   * Les trois premières étapes du déroulé, dans l'ordre.
   *
   * C'est ce qui distingue un catalogue d'une liste de promesses : un acheteur
   * reconnaît son propre processus, ou constate qu'il en diffère, et sait quoi
   * demander. Les étapes terminales — rejeté, annulé — sont écartées : tout
   * processus en a, elles n'apprennent rien et mangeraient la place.
   */
  steps: Record<Lang, string[]>;
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
  | 'building'
  | 'flow'
  | 'steps'
  | 'plug';

export const processes: Process[] = [
  {
    id: 'demande-de-conges-01',
    category: 'rh',
    icon: 'user-plus',
    featured: true,
    name: { fr: 'Demande de congés', en: 'Leave request' },
    description: {
      fr: 'Gestion des demandes de congés et absences',
      en: 'Leave and absence requests',
    },
    steps: {
      fr: ['Nouvelle demande', 'En attente d\'approbation', 'Approuvée'],
      en: ['New request', 'Awaiting approval', 'Approved'],
    },
  },
  {
    id: 'note-de-frais-02',
    category: 'finance',
    icon: 'wallet',
    featured: true,
    name: { fr: 'Note de frais', en: 'Expense report' },
    description: {
      fr: 'Soumission et remboursement de frais professionnels',
      en: 'Submission and reimbursement of business expenses',
    },
    steps: {
      fr: ['Nouvelle note', 'Vérification comptable', 'Approbation direction'],
      en: ['New report', 'Accounting check', 'Management approval'],
    },
  },
  {
    id: 'ticket-support-03',
    category: 'client',
    icon: 'handshake',
    featured: true,
    name: { fr: 'Ticket support', en: 'Support ticket' },
    description: {
      fr: 'Gestion des demandes, incidents et bugs',
      en: 'Requests, incidents and bugs',
    },
    steps: {
      fr: ['Nouveau ticket', 'Qualification', 'En cours de traitement'],
      en: ['New ticket', 'Triage', 'In progress'],
    },
  },
  {
    id: 'demande-d-achat-04',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Demande d\'achat', en: 'Purchase request' },
    description: {
      fr: 'Circuit d\'approbation des achats',
      en: 'Purchase approval circuit',
    },
    steps: {
      fr: ['Nouvelle demande', 'Validation N+1', 'Validation N+2 (montant élevé)'],
      en: ['New request', 'Line manager approval', 'Second-level approval (high amount)'],
    },
  },
  {
    id: 'onboarding-collaborateur-05',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Onboarding collaborateur', en: 'Employee onboarding' },
    description: {
      fr: 'Intégration d\'un nouveau collaborateur',
      en: 'Bringing a new employee on board',
    },
    steps: {
      fr: ['Nouvelle arrivée', 'Préparation IT', 'Accueil RH'],
      en: ['New arrival', 'IT preparation', 'HR welcome'],
    },
  },
  {
    id: 'reclamation-client-06',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Réclamation client', en: 'Customer complaint' },
    description: {
      fr: 'Traitement des réclamations et litiges',
      en: 'Complaints and disputes',
    },
    steps: {
      fr: ['Nouvelle réclamation', 'Analyse', 'Traitement'],
      en: ['New complaint', 'Analysis', 'Handling'],
    },
  },
  {
    id: 'habilitations-acces-07',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Habilitations & accès', en: 'Access rights' },
    description: {
      fr: 'Gestion des demandes d\'accès aux applications, bases de données et outils internes',
      en: 'Access requests to applications, databases and internal tools',
    },
    steps: {
      fr: ['Nouvelle demande', 'Validation manager', 'Validation applicative'],
      en: ['New request', 'Manager approval', 'Application owner approval'],
    },
  },
  {
    id: 'change-management-applicatif-08',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Change Management applicatif', en: 'Application change management' },
    description: {
      fr: 'Gestion des évolutions et modifications sur les applications métiers',
      en: 'Changes and releases on business applications',
    },
    steps: {
      fr: ['Soumission', 'Analyse IT', 'Validation applicative'],
      en: ['Submission', 'IT analysis', 'Application owner approval'],
    },
  },
  {
    id: 'contrats-fournisseurs-09',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Contrats fournisseurs', en: 'Supplier contracts' },
    description: {
      fr: 'Validation et sécurisation des contrats fournisseurs avant signature',
      en: 'Reviewing and securing supplier contracts before signature',
    },
    steps: {
      fr: ['Dépôt contrat', 'Analyse juridique', 'Validation financière'],
      en: ['Contract filed', 'Legal review', 'Financial approval'],
    },
  },
  {
    id: 'formations-collaborateurs-10',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Formations collaborateurs', en: 'Employee training' },
    description: {
      fr: 'Gestion des demandes de formation',
      en: 'Training requests',
    },
    steps: {
      fr: ['Demande de formation', 'Validation manager', 'Contrôle budget RH'],
      en: ['Training request', 'Manager approval', 'HR budget check'],
    },
  },
  {
    id: 'deplacements-professionnels-11',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Déplacements professionnels', en: 'Business travel' },
    description: {
      fr: 'Gestion des missions et voyages professionnels',
      en: 'Assignments and business trips',
    },
    steps: {
      fr: ['Demande de déplacement', 'Validation manager', 'Validation financière'],
      en: ['Travel request', 'Manager approval', 'Financial approval'],
    },
  },
  {
    id: 'campagne-de-recrutement-12',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Campagne de recrutement', en: 'Recruitment campaign' },
    description: {
      fr: 'Gestion de l\'ouverture d\'un poste jusqu\'à l\'intégration du candidat',
      en: 'From opening a position to the candidate joining',
    },
    steps: {
      fr: ['Besoin recrutement', 'Validation RH', 'Validation budget'],
      en: ['Hiring need', 'HR approval', 'Budget approval'],
    },
  },
  {
    id: 'audits-internes-13',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Audits internes', en: 'Internal audits' },
    description: {
      fr: 'Planification des audits internes et suivi des actions correctives',
      en: 'Planning internal audits and tracking corrective actions',
    },
    steps: {
      fr: ['Planification', 'Réalisation', 'Validation rapport'],
      en: ['Planning', 'Fieldwork', 'Report approval'],
    },
  },
  {
    id: 'demandes-juridiques-internes-14',
    category: 'juridique',
    icon: 'file-check',
    name: { fr: 'Demandes juridiques internes', en: 'Internal legal requests' },
    description: {
      fr: 'Traitement des demandes adressées au service juridique',
      en: 'Requests addressed to the legal department',
    },
    steps: {
      fr: ['Demande', 'Qualification', 'Analyse juridique'],
      en: ['Request', 'Triage', 'Legal analysis'],
    },
  },
  {
    id: 'evaluations-annuelles-15',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Évaluations annuelles', en: 'Annual reviews' },
    description: {
      fr: 'Gestion des campagnes d\'entretiens annuels',
      en: 'Annual appraisal campaigns',
    },
    steps: {
      fr: ['Lancement campagne', 'Entretien manager', 'Commentaire collaborateur'],
      en: ['Campaign launch', 'Manager interview', 'Employee comment'],
    },
  },
  {
    id: 'offboarding-collaborateur-16',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Offboarding collaborateur', en: 'Employee offboarding' },
    description: {
      fr: 'Sécurisation du départ d\'un collaborateur',
      en: 'Securing an employee\'s departure',
    },
    steps: {
      fr: ['Lancement', 'Confirmation manager', 'Désactivation IT'],
      en: ['Launch', 'Manager confirmation', 'IT deactivation'],
    },
  },
  {
    id: 'declaration-d-operation-suspecte-17',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration d\'opération suspecte', en: 'Suspicious activity report' },
    description: {
      fr: 'Signalement LCB-FT d\'une opération atypique par un collaborateur, analyse par la conformité et décision de déclaration à la cellule de renseignement financier nationale (CENTIF en zone UEMOA, ANIF en zone CEMAC, UTRF au Maroc)',
      en: 'AML reporting of an unusual transaction by an employee',
    },
    steps: {
      fr: ['Signalement', 'Analyse conformité', 'Décision de déclaration'],
      en: ['Report raised', 'Compliance analysis', 'Filing decision'],
    },
  },
  {
    id: 'entree-en-relation-kyc-18',
    category: 'conformite',
    icon: 'shield',
    featured: true,
    name: { fr: 'Entrée en relation (KYC)', en: 'Client onboarding (KYC)' },
    description: {
      fr: 'Ouverture d\'une relation d\'affaires',
      en: 'Opening a business relationship',
    },
    steps: {
      fr: ['Collecte du dossier', 'Vérification des pièces', 'Criblage & scoring'],
      en: ['File collection', 'Document verification', 'Screening and scoring'],
    },
  },
  {
    id: 'revue-periodique-kyc-19',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Revue périodique KYC', en: 'Periodic KYC review' },
    description: {
      fr: 'Campagne de mise à jour du dossier de connaissance client selon la périodicité liée au segment de risque',
      en: 'Updating the client knowledge file at the interval set by the segment',
    },
    steps: {
      fr: ['Planification de la revue', 'Collecte auprès du client', 'Analyse & réévaluation'],
      en: ['Review planning', 'Collection from the client', 'Analysis and re-rating'],
    },
  },
  {
    id: 'validation-client-a-risque-eleve-ppe-20',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Validation client à risque élevé (PPE)', en: 'High-risk client approval (PEP)' },
    description: {
      fr: 'Escalade d\'un client politiquement exposé, ressortissant d\'un pays à risque ou exerçant dans un secteur sensible',
      en: 'Escalation of a politically exposed or high-risk client',
    },
    steps: {
      fr: ['Signalement', 'Analyse conformité', 'Validation direction'],
      en: ['Case raised', 'Compliance analysis', 'Executive approval'],
    },
  },
  {
    id: 'declaration-de-conflit-d-interet-21',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration de conflit d\'intérêt', en: 'Conflict of interest disclosure' },
    description: {
      fr: 'Déclaration par un collaborateur d\'une situation de conflit d\'intérêt potentiel ou avéré',
      en: 'Disclosure of a potential or actual conflict of interest',
    },
    steps: {
      fr: ['Déclaration', 'Avis du manager', 'Analyse du déontologue'],
      en: ['Disclosure', 'Manager opinion', 'Ethics officer review'],
    },
  },
  {
    id: 'declaration-cadeau-invitation-22',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration cadeau & invitation', en: 'Gift and hospitality disclosure' },
    description: {
      fr: 'Déclaration d\'un cadeau ou d\'une invitation reçu ou offert',
      en: 'Disclosure of a gift or invitation received or offered',
    },
    steps: {
      fr: ['Déclaration', 'Contrôle du seuil', 'Décision du déontologue'],
      en: ['Disclosure', 'Threshold check', 'Ethics officer decision'],
    },
  },
  {
    id: 'comite-nouveau-produit-npap-23',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Comité nouveau produit (NPAP)', en: 'New product committee' },
    description: {
      fr: 'Instruction d\'un nouveau produit, service ou canal de distribution',
      en: 'Review of a new product, service or distribution channel',
    },
    steps: {
      fr: ['Cadrage', 'Avis risques', 'Avis conformité & juridique'],
      en: ['Scoping', 'Risk opinion', 'Compliance and legal opinion'],
    },
  },
  {
    id: 'revue-reglementaire-24',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Revue réglementaire', en: 'Regulatory review' },
    description: {
      fr: 'Prise en compte d\'un nouveau texte du régulateur',
      en: 'Taking a new regulatory text into account',
    },
    steps: {
      fr: ['Veille', 'Analyse d\'impact', 'Plan de mise en conformité'],
      en: ['Watch', 'Impact analysis', 'Compliance plan'],
    },
  },
  {
    id: 'declaration-d-incident-operationnel-25',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration d\'incident opérationnel', en: 'Operational incident report' },
    description: {
      fr: 'Collecte d\'un incident opérationnel selon la nomenclature bâloise',
      en: 'Collecting an operational incident under the Basel taxonomy',
    },
    steps: {
      fr: ['Déclaration', 'Qualification & chiffrage', 'Analyse & plan d\'action'],
      en: ['Report raised', 'Assessment and costing', 'Analysis and action plan'],
    },
  },
  {
    id: 'auto-evaluation-des-risques-rcsa-26',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Auto-évaluation des risques (RCSA)', en: 'Risk self-assessment (RCSA)' },
    description: {
      fr: 'Campagne d\'auto-évaluation des risques et des dispositifs de maîtrise par entité',
      en: 'Self-assessment of risks and controls by entity',
    },
    steps: {
      fr: ['Lancement de la campagne', 'Auto-évaluation par l\'entité', 'Challenge risques'],
      en: ['Campaign launch', 'Self-assessment by the entity', 'Risk challenge'],
    },
  },
  {
    id: 'campagne-de-controle-permanent-27',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Campagne de contrôle permanent', en: 'Permanent control campaign' },
    description: {
      fr: 'Exécution d\'un point du plan de contrôle de second niveau',
      en: 'Running a second-line control from the plan',
    },
    steps: {
      fr: ['Planification', 'Exécution du contrôle', 'Supervision risques'],
      en: ['Planning', 'Control performed', 'Risk supervision'],
    },
  },
  {
    id: 'suivi-des-recommandations-d-audit-inspec-28',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Suivi des recommandations d\'audit & inspection', en: 'Audit recommendation follow-up' },
    description: {
      fr: 'Suivi d\'une recommandation émise par l\'audit interne, l\'inspection générale, les commissaires aux comptes ou le régulateur',
      en: 'Following a recommendation from internal audit or inspection',
    },
    steps: {
      fr: ['Enregistrement', 'Plan d\'action', 'Mise en œuvre'],
      en: ['Recorded', 'Action plan', 'Implementation'],
    },
  },
  {
    id: 'declaration-d-incident-de-securite-29',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Déclaration d\'incident de sécurité', en: 'Security incident report' },
    description: {
      fr: 'Traitement d\'un incident de sécurité des systèmes d\'information',
      en: 'Handling an information security incident',
    },
    steps: {
      fr: ['Déclaration', 'Qualification', 'Traitement & notification'],
      en: ['Report raised', 'Assessment', 'Handling and notification'],
    },
  },
  {
    id: 'validation-d-exception-securite-30',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Validation d\'exception sécurité', en: 'Security exception approval' },
    description: {
      fr: 'Demande de dérogation à une règle de la politique de sécurité',
      en: 'Request to deviate from a security policy rule',
    },
    steps: {
      fr: ['Demande', 'Analyse RSSI', 'Acceptation du risque'],
      en: ['Request', 'CISO analysis', 'Risk acceptance'],
    },
  },
  {
    id: 'revue-periodique-des-habilitations-31',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Revue périodique des habilitations', en: 'Access rights recertification' },
    description: {
      fr: 'Campagne de recertification des droits d\'accès applicatifs',
      en: 'Recertification campaign of application access rights',
    },
    steps: {
      fr: ['Lancement de la campagne', 'Revue par le manager', 'Exécution des retraits'],
      en: ['Campaign launch', 'Manager review', 'Removals applied'],
    },
  },
  {
    id: 'validation-d-engagement-de-depense-32',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Validation d\'engagement de dépense', en: 'Spend commitment approval' },
    description: {
      fr: 'Autorisation préalable d\'un engagement budgétaire',
      en: 'Prior authorisation of a budget commitment',
    },
    steps: {
      fr: ['Demande d\'engagement', 'Contrôle budgétaire', 'Validation par délégation'],
      en: ['Commitment request', 'Budget check', 'Approval by delegation'],
    },
  },
  {
    id: 'validation-de-facture-fournisseur-33',
    category: 'finance',
    icon: 'wallet',
    featured: true,
    name: { fr: 'Validation de facture fournisseur', en: 'Supplier invoice approval' },
    description: {
      fr: 'Contrôle d\'une facture entrante',
      en: 'Checking an incoming invoice',
    },
    steps: {
      fr: ['Réception de la facture', 'Attestation du service fait', 'Contrôle comptable'],
      en: ['Invoice received', 'Service confirmed', 'Accounting check'],
    },
  },
  {
    id: 'creation-modification-fournisseur-compta-34',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Création / modification fournisseur comptable (RIB)', en: 'Supplier bank details change' },
    description: {
      fr: 'Création d\'un tiers ou modification de ses coordonnées bancaires, avec contre-appel obligatoire sur un numéro issu du référentiel et double validation',
      en: 'Creating a third party or changing its bank details, with mandatory call-back',
    },
    steps: {
      fr: ['Demande', 'Contre-appel & vérification', 'Double validation'],
      en: ['Request', 'Call-back and verification', 'Dual approval'],
    },
  },
  {
    id: 'validation-d-ordre-de-virement-35',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Validation d\'ordre de virement', en: 'Payment order approval' },
    description: {
      fr: 'Circuit de validation à quatre yeux d\'un ordre de virement',
      en: 'Four-eyes approval circuit for a payment order',
    },
    steps: {
      fr: ['Saisie de l\'ordre', 'Contrôle de trésorerie', 'Signature'],
      en: ['Order entered', 'Treasury check', 'Signature'],
    },
  },
  {
    id: 'demande-de-paiement-exceptionnel-36',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Demande de paiement exceptionnel', en: 'Exceptional payment request' },
    description: {
      fr: 'Paiement sortant du circuit normal — urgence, absence de bon de commande, hors échéancier ou hors budget',
      en: 'Payment outside the normal circuit — urgency, no purchase order, off schedule',
    },
    steps: {
      fr: ['Demande', 'Instruction financière', 'Arbitrage direction générale'],
      en: ['Request', 'Finance review', 'Executive arbitration'],
    },
  },
  {
    id: 'demande-de-depassement-de-limite-37',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Demande de dépassement de limite', en: 'Risk limit breach request' },
    description: {
      fr: 'Demande d\'autorisation de dépassement d\'une limite de risque — contrepartie, secteur, pays, concentration ou change',
      en: 'Authorisation to exceed a risk limit — counterparty, sector, country',
    },
    steps: {
      fr: ['Demande', 'Analyse risques', 'Décision du comité'],
      en: ['Request', 'Risk analysis', 'Committee decision'],
    },
  },
  {
    id: 'validation-de-credit-exceptionnel-38',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Validation de crédit exceptionnel', en: 'Exceptional credit approval' },
    description: {
      fr: 'Octroi de crédit dérogeant à la politique en vigueur — taux, durée, quotité, garanties ou profil du client',
      en: 'Credit granted outside policy — rate, term, ratio, collateral',
    },
    steps: {
      fr: ['Montage du dossier', 'Analyse du risque de crédit', 'Comité de crédit'],
      en: ['File prepared', 'Credit risk analysis', 'Credit committee'],
    },
  },
  {
    id: 'validation-de-remise-de-pouvoir-39',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Validation de remise de pouvoir', en: 'Delegation of authority' },
    description: {
      fr: 'Attribution, modification ou retrait d\'une délégation de pouvoir ou de signature',
      en: 'Granting, changing or withdrawing a delegation of authority or signature',
    },
    steps: {
      fr: ['Demande', 'Contrôle des incompatibilités', 'Validation direction'],
      en: ['Request', 'Incompatibility check', 'Executive approval'],
    },
  },
  {
    id: 'gestion-des-sinistres-complexes-40',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Gestion des sinistres complexes', en: 'Complex claims handling' },
    description: {
      fr: 'Traitement d\'un sinistre à enjeu — montant élevé, pluralité de victimes, suspicion de fraude ou litige de garantie',
      en: 'Handling a high-stakes claim — large amount, several victims, suspected fraud',
    },
    steps: {
      fr: ['Déclaration du sinistre', 'Expertise', 'Analyse de la garantie'],
      en: ['Claim reported', 'Assessment', 'Cover analysis'],
    },
  },
  {
    id: 'validation-d-indemnisation-exceptionnell-41',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Validation d\'indemnisation exceptionnelle', en: 'Exceptional settlement approval' },
    description: {
      fr: 'Indemnisation dérogeant au contrat ou au barème — geste commercial, dépassement de plafond, renonciation à la franchise ou au recours',
      en: 'Settlement outside the contract or scale — goodwill, cap exceeded',
    },
    steps: {
      fr: ['Demande', 'Avis technique', 'Décision direction'],
      en: ['Request', 'Technical opinion', 'Executive decision'],
    },
  },
  {
    id: 'referencement-courtier-intermediaire-42',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Référencement courtier / intermédiaire', en: 'Broker accreditation' },
    description: {
      fr: 'Habilitation d\'un intermédiaire d\'assurance',
      en: 'Accrediting an insurance intermediary',
    },
    steps: {
      fr: ['Dossier de candidature', 'Vérification de l\'agrément', 'Contrôle conformité'],
      en: ['Application', 'Licence verification', 'Compliance check'],
    },
  },
  {
    id: 'gestion-des-litiges-contentieux-43',
    category: 'juridique',
    icon: 'file-check',
    name: { fr: 'Gestion des litiges & contentieux', en: 'Litigation management' },
    description: {
      fr: 'Ouverture et suivi d\'un dossier contentieux',
      en: 'Opening and following a litigation file',
    },
    steps: {
      fr: ['Ouverture du dossier', 'Qualification juridique', 'Suivi de la procédure'],
      en: ['File opened', 'Legal assessment', 'Proceedings followed'],
    },
  },
  {
    id: 'fin-de-contrat-renouvellement-ou-resilia-44',
    category: 'juridique',
    icon: 'file-check',
    name: { fr: 'Fin de contrat : renouvellement ou résiliation', en: 'Contract renewal or termination' },
    description: {
      fr: 'Traitement d\'une échéance contractuelle avant expiration du préavis',
      en: 'Handling a contract deadline before notice expires',
    },
    steps: {
      fr: ['Alerte d\'échéance', 'Bilan de la relation', 'Arbitrage'],
      en: ['Deadline alert', 'Relationship review', 'Arbitration'],
    },
  },
  {
    id: 'referencement-fournisseur-45',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Référencement fournisseur', en: 'Supplier accreditation' },
    description: {
      fr: 'Homologation d\'un nouveau fournisseur',
      en: 'Approving a new supplier',
    },
    steps: {
      fr: ['Demande de référencement', 'Due diligence', 'Évaluation du risque tiers'],
      en: ['Accreditation request', 'Due diligence', 'Third-party risk assessment'],
    },
  },
  {
    id: 'evaluation-periodique-fournisseur-46',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Évaluation périodique fournisseur', en: 'Periodic supplier review' },
    description: {
      fr: 'Revue de performance et de risque d\'un fournisseur référencé',
      en: 'Performance and risk review of an accredited supplier',
    },
    steps: {
      fr: ['Lancement de l\'évaluation', 'Notation par le prescripteur', 'Revue risques'],
      en: ['Review launch', 'Rating by the requester', 'Risk review'],
    },
  },
  {
    id: 'consultation-appel-d-offres-47',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Consultation & appel d\'offres', en: 'Tender and sourcing' },
    description: {
      fr: 'Mise en concurrence d\'un besoin d\'achat',
      en: 'Putting a purchasing need out to tender',
    },
    steps: {
      fr: ['Préparation', 'Consultation du marché', 'Analyse des offres'],
      en: ['Preparation', 'Market consultation', 'Bid analysis'],
    },
  },
  {
    id: 'validation-de-politique-ou-procedure-int-48',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Validation de politique ou procédure interne', en: 'Internal policy approval' },
    description: {
      fr: 'Cycle de vie du corpus documentaire',
      en: 'Life cycle of the internal documentation',
    },
    steps: {
      fr: ['Rédaction', 'Relecture conformité & juridique', 'Approbation direction'],
      en: ['Drafting', 'Compliance and legal review', 'Executive approval'],
    },
  },
  {
    id: 'demande-de-nouveau-projet-49',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Demande de nouveau projet', en: 'New project request' },
    description: {
      fr: 'Instruction d\'une demande de projet informatique',
      en: 'Reviewing an IT project request',
    },
    steps: {
      fr: ['Expression du besoin', 'Cadrage & chiffrage', 'Priorisation'],
      en: ['Need expressed', 'Scoping and costing', 'Prioritisation'],
    },
  },
  {
    id: 'validation-d-architecture-50',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Validation d\'architecture', en: 'Architecture approval' },
    description: {
      fr: 'Passage d\'un dossier d\'architecture en comité',
      en: 'Taking an architecture file to committee',
    },
    steps: {
      fr: ['Soumission du dossier', 'Revue technique', 'Revue de sécurité'],
      en: ['File submitted', 'Technical review', 'Security review'],
    },
  },
  {
    id: 'incident-majeur-51',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Incident majeur', en: 'Major incident' },
    description: {
      fr: 'Gestion de crise d\'un incident critique',
      en: 'Crisis management of a critical incident',
    },
    steps: {
      fr: ['Déclaration', 'Qualification & cellule de crise', 'Rétablissement'],
      en: ['Declared', 'Assessment and crisis team', 'Service restored'],
    },
  },
  {
    id: 'gestion-des-problemes-52',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Gestion des problèmes', en: 'Problem management' },
    description: {
      fr: 'Recherche de la cause racine d\'incidents récurrents ou d\'un incident majeur non élucidé',
      en: 'Finding the root cause of recurring incidents',
    },
    steps: {
      fr: ['Ouverture du dossier', 'Analyse de la cause racine', 'Solution définitive'],
      en: ['File opened', 'Root cause analysis', 'Permanent fix'],
    },
  },
  {
    id: 'gestion-des-comptes-a-privileges-53',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Gestion des comptes à privilèges', en: 'Privileged account management' },
    description: {
      fr: 'Octroi d\'un accès privilégié ou d\'un compte d\'urgence',
      en: 'Granting privileged or emergency access',
    },
    steps: {
      fr: ['Demande', 'Analyse RSSI', 'Activation & révocation'],
      en: ['Request', 'CISO analysis', 'Activation and revocation'],
    },
  },
  {
    id: 'demande-d-ouverture-de-poste-54',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Demande d\'ouverture de poste', en: 'Position opening request' },
    description: {
      fr: 'Inscription d\'un poste au tableau des effectifs',
      en: 'Adding a position to the headcount plan',
    },
    steps: {
      fr: ['Demande du manager', 'Avis RH', 'Contrôle budgétaire'],
      en: ['Manager request', 'HR opinion', 'Budget check'],
    },
  },
  {
    id: 'mobilite-interne-promotion-55',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Mobilité interne & promotion', en: 'Internal mobility and promotion' },
    description: {
      fr: 'Candidature à une mobilité ou proposition de promotion',
      en: 'Application for a move or a promotion proposal',
    },
    steps: {
      fr: ['Candidature ou proposition', 'Avis du manager d\'origine', 'Avis du manager d\'accueil'],
      en: ['Application or proposal', 'Current manager opinion', 'Receiving manager opinion'],
    },
  },
  {
    id: 'validation-de-periode-d-essai-56',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Validation de période d\'essai', en: 'Probation period decision' },
    description: {
      fr: 'Décision d\'issue de période d\'essai avant son terme',
      en: 'Decision on the outcome of a probation period',
    },
    steps: {
      fr: ['Alerte de fin de période', 'Évaluation du manager', 'Avis RH'],
      en: ['End-of-period alert', 'Manager assessment', 'HR opinion'],
    },
  },
  {
    id: 'gestion-des-consultants-externes-57',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Gestion des consultants externes', en: 'External consultant management' },
    description: {
      fr: 'Cycle de vie d\'un intervenant externe',
      en: 'Life cycle of an external contributor',
    },
    steps: {
      fr: ['Demande d\'accueil', 'Validation sécurité', 'Mission en cours'],
      en: ['Onboarding request', 'Security approval', 'Assignment running'],
    },
  },
  {
    id: 'demande-d-attestation-rh-58',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Demande d\'attestation RH', en: 'HR certificate request' },
    description: {
      fr: 'Demande d\'attestation de travail, de salaire ou de présence',
      en: 'Request for an employment, salary or attendance certificate',
    },
    steps: {
      fr: ['Demande', 'Édition du document', 'Remise au collaborateur'],
      en: ['Request', 'Document issued', 'Handed to the employee'],
    },
  },
  {
    id: 'sanction-disciplinaire-59',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Sanction disciplinaire', en: 'Disciplinary action' },
    description: {
      fr: 'Procédure disciplinaire encadrée',
      en: 'Formal disciplinary procedure',
    },
    steps: {
      fr: ['Signalement', 'Qualification juridique', 'Entretien préalable'],
      en: ['Report raised', 'Legal assessment', 'Preliminary interview'],
    },
  },
  {
    id: 'declaration-d-accident-du-travail-60',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Déclaration d\'accident du travail', en: 'Workplace accident report' },
    description: {
      fr: 'Déclaration d\'un accident du travail ou de trajet',
      en: 'Reporting a workplace or commuting accident',
    },
    steps: {
      fr: ['Déclaration', 'Constat & lésions', 'Déclaration à l\'organisme'],
      en: ['Report raised', 'Findings and injuries', 'Filed with the authority'],
    },
  },
  {
    id: 'certification-reglementaire-collaborateu-61',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Certification réglementaire collaborateur', en: 'Regulatory certification' },
    description: {
      fr: 'Suivi des habilitations obligatoires pour tenir un poste',
      en: 'Tracking the certifications required to hold a role',
    },
    steps: {
      fr: ['Demande', 'Validation du besoin', 'Inscription & passage'],
      en: ['Request', 'Need approved', 'Enrolment and exam'],
    },
  },
  {
    id: 'agrement-commercant-62',
    category: 'client',
    icon: 'handshake',
    featured: true,
    name: { fr: 'Agrément commerçant', en: 'Merchant accreditation' },
    description: {
      fr: 'Instruction d\'une demande d\'affiliation d\'un commerçant à l\'acquisition monétique',
      en: 'Reviewing a merchant\'s application for card acquiring',
    },
    steps: {
      fr: ['Dépôt du dossier', 'Instruction du dossier', 'Contrôle conformité'],
      en: ['Application filed', 'Application review', 'Compliance check'],
    },
  },
  {
    id: 'installation-tpe-63',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Installation TPE', en: 'Card terminal installation' },
    description: {
      fr: 'Déploiement d\'un terminal de paiement chez un commerçant agréé',
      en: 'Deploying a payment terminal at an accredited merchant',
    },
    steps: {
      fr: ['Demande d\'installation', 'Préparation du matériel', 'Installation sur site'],
      en: ['Installation request', 'Equipment prepared', 'On-site installation'],
    },
  },
  {
    id: 'contestation-de-transaction-carte-64',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Contestation de transaction carte', en: 'Card transaction dispute' },
    description: {
      fr: 'Traitement de la réclamation d\'un porteur de carte contestant une opération',
      en: 'Handling a cardholder\'s dispute over a transaction',
    },
    steps: {
      fr: ['Réception de la contestation', 'Analyse de la contestation', 'Instruction auprès du réseau'],
      en: ['Dispute received', 'Dispute analysis', 'Filed with the scheme'],
    },
  },
  {
    id: 'traitement-chargeback-65',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Traitement chargeback', en: 'Chargeback handling' },
    description: {
      fr: 'Traitement acquéreur d\'un impayé notifié par le réseau',
      en: 'Acquirer handling of a chargeback notified by the scheme',
    },
    steps: {
      fr: ['Notification du réseau', 'Qualification du chargeback', 'Collecte des preuves commerçant'],
      en: ['Scheme notification', 'Chargeback assessment', 'Merchant evidence collected'],
    },
  },
  {
    id: 'installation-relocalisation-gab-66',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Installation / relocalisation GAB', en: 'ATM installation or relocation' },
    description: {
      fr: 'Projet d\'implantation, de relocalisation ou de remplacement d\'un guichet automatique',
      en: 'Installing, relocating or replacing a cash machine',
    },
    steps: {
      fr: ['Expression du besoin', 'Étude du site', 'Validation de l\'investissement'],
      en: ['Need expressed', 'Site survey', 'Investment approval'],
    },
  },
  {
    id: 'demande-de-badge-d-acces-67',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Demande de badge d\'accès', en: 'Access badge request' },
    description: {
      fr: 'Attribution, renouvellement ou désactivation d\'un badge d\'accès aux locaux',
      en: 'Issuing, renewing or deactivating a site access badge',
    },
    steps: {
      fr: ['Demande', 'Validation hiérarchique', 'Validation sécurité'],
      en: ['Request', 'Manager approval', 'Security approval'],
    },
  },
  {
    id: 'demande-de-materiel-68',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Demande de matériel', en: 'Equipment request' },
    description: {
      fr: 'Dotation en matériel informatique, mobilier ou fournitures',
      en: 'Issuing IT equipment, furniture or supplies',
    },
    steps: {
      fr: ['Expression du besoin', 'Validation budgétaire', 'Vérification du stock'],
      en: ['Need expressed', 'Budget approval', 'Stock check'],
    },
  },
  {
    id: 'reservation-de-salle-de-reunion-69',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Réservation de salle de réunion', en: 'Meeting room booking' },
    description: {
      fr: 'Réservation d\'une salle avec ses équipements et sa logistique',
      en: 'Booking a room with its equipment and logistics',
    },
    steps: {
      fr: ['Demande de réservation', 'Vérification de disponibilité', 'Préparation de la salle'],
      en: ['Booking request', 'Availability check', 'Room prepared'],
    },
  },
  {
    id: 'demande-de-vehicule-de-service-70',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Demande de véhicule de service', en: 'Company vehicle request' },
    description: {
      fr: 'Mise à disposition d\'un véhicule du parc',
      en: 'Making a fleet vehicle available',
    },
    steps: {
      fr: ['Demande de mission', 'Validation du déplacement', 'Affectation du véhicule'],
      en: ['Assignment request', 'Travel approval', 'Vehicle allocated'],
    },
  },
  {
    id: 'intervention-de-maintenance-bâtiment-71',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Intervention de maintenance bâtiment', en: 'Building maintenance request' },
    description: {
      fr: 'Signalement et traitement d\'un dysfonctionnement sur un site',
      en: 'Reporting and handling a fault on a site',
    },
    steps: {
      fr: ['Signalement', 'Diagnostic', 'Validation des travaux'],
      en: ['Reported', 'Diagnosis', 'Works approved'],
    },
  },
];

export function getFeaturedProcesses(): Process[] {
  return processes.filter((p) => p.featured);
}
