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
 *
 * ## Comment se nomme une étape
 *
 * Une étape n'est pas une activité BPMN : c'est un STATUT. Le dossier y
 * séjourne, le délai y court, on en sort par une transition nommée. La
 * convention est donc celle des machines à états — le statut se nomme par un
 * nom ou une nominalisation disant dans quel état est le dossier
 * (« Réception de la facture », « En attente d'approbation »), la transition
 * par un verbe à l'infinitif (« Valider », « Rejeter »).
 *
 * D'où l'erreur à ne pas refaire dans `catalogue_en.py` : nommer une étape au
 * participe passé (« Invoice received », « Report raised ») la fait lire comme
 * l'ÉVÉNEMENT qui l'ouvre, pas comme l'état où se trouve le dossier — trente
 * libellés anglais étaient dans ce cas alors que leurs équivalents français ne
 * l'étaient pas, si bien que le même processus se lisait en états d'un côté et
 * en événements de l'autre. Le participe passé reste juste pour une étape
 * TERMINALE, qui décrit bien un état définitif — mais celles-là ne sont pas
 * affichées.
 *
 * Les étapes terminales sont écartées par leur TYPE, jamais par leur nom.
 */

export const PROCESS_CATEGORIES = [
  'conformite',
  'client',
  'finance',
  'operations',
  'achats',
  'it',
  'juridique',
  'rh',
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
  /** Nombre réel d'étapes du déroulé, hors étapes terminales. */
  stepCount: number;
  /** Nombre de rôles qui interviennent dans le processus. */
  roleCount: number;
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
    id: 'audits-internes-13',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Audits internes', en: 'Internal audits', es: 'Audits internes' },
    description: {
      fr: 'Planification des audits internes et suivi des actions correctives',
      en: 'Planning internal audits and tracking corrective actions',
      es: 'Planification des audits internes et suivi des actions correctives',
    },
    steps: {
      fr: ['Planification', 'Réalisation', 'Validation rapport'],
      en: ['Planning', 'Fieldwork', 'Report approval'],
      es: ['Planification', 'Réalisation', 'Validation rapport'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'declaration-d-operation-suspecte-17',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration d\'opération suspecte', en: 'Suspicious activity report', es: 'Déclaration d\'opération suspecte' },
    description: {
      fr: 'Signalement LCB-FT d\'une opération atypique par un collaborateur, analyse par la conformité et décision de déclaration à la cellule de renseignement financier nationale (CENTIF en zone UEMOA, ANIF en zone CEMAC, UTRF au Maroc)',
      en: 'AML reporting of an unusual transaction by an employee',
      es: 'Signalement LCB-FT d\'une opération atypique par un collaborateur, analyse par la conformité et décision de déclaration à la cellule de renseignement financier nationale (CENTIF en zone UEMOA, ANIF en zone CEMAC, UTRF au Maroc)',
    },
    steps: {
      fr: ['Signalement', 'Analyse conformité', 'Décision de déclaration'],
      en: ['Report drafting', 'Compliance analysis', 'Filing decision'],
      es: ['Signalement', 'Analyse conformité', 'Décision de déclaration'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'entree-en-relation-kyc-18',
    category: 'conformite',
    icon: 'shield',
    featured: true,
    name: { fr: 'Entrée en relation (KYC)', en: 'Client onboarding (KYC)', es: 'Entrée en relation (KYC)' },
    description: {
      fr: 'Ouverture d\'une relation d\'affaires',
      en: 'Opening a business relationship',
      es: 'Ouverture d\'une relation d\'affaires',
    },
    steps: {
      fr: ['Collecte du dossier', 'Vérification des pièces', 'Criblage & scoring'],
      en: ['File collection', 'Document verification', 'Screening and scoring'],
      es: ['Collecte du dossier', 'Vérification des pièces', 'Criblage & scoring'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'revue-periodique-kyc-19',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Revue périodique KYC', en: 'Periodic KYC review', es: 'Revue périodique KYC' },
    description: {
      fr: 'Campagne de mise à jour du dossier de connaissance client selon la périodicité liée au segment de risque',
      en: 'Updating the client knowledge file at the interval set by the segment',
      es: 'Campagne de mise à jour du dossier de connaissance client selon la périodicité liée au segment de risque',
    },
    steps: {
      fr: ['Planification de la revue', 'Collecte auprès du client', 'Analyse & réévaluation'],
      en: ['Review planning', 'Collection from the client', 'Analysis and re-rating'],
      es: ['Planification de la revue', 'Collecte auprès du client', 'Analyse & réévaluation'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'validation-client-a-risque-eleve-ppe-20',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Validation client à risque élevé (PPE)', en: 'High-risk client approval (PEP)', es: 'Validation client à risque élevé (PPE)' },
    description: {
      fr: 'Escalade d\'un client politiquement exposé, ressortissant d\'un pays à risque ou exerçant dans un secteur sensible',
      en: 'Escalation of a politically exposed or high-risk client',
      es: 'Escalade d\'un client politiquement exposé, ressortissant d\'un pays à risque ou exerçant dans un secteur sensible',
    },
    steps: {
      fr: ['Signalement', 'Analyse conformité', 'Validation direction'],
      en: ['Case referral', 'Compliance analysis', 'Executive approval'],
      es: ['Signalement', 'Analyse conformité', 'Validation direction'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'declaration-de-conflit-d-interet-21',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration de conflit d\'intérêt', en: 'Conflict of interest disclosure', es: 'Déclaration de conflit d\'intérêt' },
    description: {
      fr: 'Déclaration par un collaborateur d\'une situation de conflit d\'intérêt potentiel ou avéré',
      en: 'Disclosure of a potential or actual conflict of interest',
      es: 'Déclaration par un collaborateur d\'une situation de conflit d\'intérêt potentiel ou avéré',
    },
    steps: {
      fr: ['Déclaration', 'Avis du manager', 'Analyse du déontologue'],
      en: ['Disclosure', 'Manager opinion', 'Ethics officer review'],
      es: ['Déclaration', 'Avis du manager', 'Analyse du déontologue'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'declaration-cadeau-invitation-22',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration cadeau & invitation', en: 'Gift and hospitality disclosure', es: 'Déclaration cadeau & invitation' },
    description: {
      fr: 'Déclaration d\'un cadeau ou d\'une invitation reçu ou offert',
      en: 'Disclosure of a gift or invitation received or offered',
      es: 'Déclaration d\'un cadeau ou d\'une invitation reçu ou offert',
    },
    steps: {
      fr: ['Déclaration', 'Contrôle du seuil', 'Décision du déontologue'],
      en: ['Disclosure', 'Threshold check', 'Ethics officer decision'],
      es: ['Déclaration', 'Contrôle du seuil', 'Décision du déontologue'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'comite-nouveau-produit-npap-23',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Comité nouveau produit (NPAP)', en: 'New product committee', es: 'Comité nouveau produit (NPAP)' },
    description: {
      fr: 'Instruction d\'un nouveau produit, service ou canal de distribution',
      en: 'Review of a new product, service or distribution channel',
      es: 'Instruction d\'un nouveau produit, service ou canal de distribution',
    },
    steps: {
      fr: ['Cadrage', 'Avis risques', 'Avis conformité & juridique'],
      en: ['Scoping', 'Risk opinion', 'Compliance and legal opinion'],
      es: ['Cadrage', 'Avis risques', 'Avis conformité & juridique'],
    },
    stepCount: 4,
    roleCount: 2,
  },
  {
    id: 'revue-reglementaire-24',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Revue réglementaire', en: 'Regulatory review', es: 'Revue réglementaire' },
    description: {
      fr: 'Prise en compte d\'un nouveau texte du régulateur',
      en: 'Taking a new regulatory text into account',
      es: 'Prise en compte d\'un nouveau texte du régulateur',
    },
    steps: {
      fr: ['Veille', 'Analyse d\'impact', 'Plan de mise en conformité'],
      en: ['Watch', 'Impact analysis', 'Compliance plan'],
      es: ['Veille', 'Analyse d\'impact', 'Plan de mise en conformité'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'declaration-d-incident-operationnel-25',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Déclaration d\'incident opérationnel', en: 'Operational incident report', es: 'Déclaration d\'incident opérationnel' },
    description: {
      fr: 'Collecte d\'un incident opérationnel selon la nomenclature bâloise',
      en: 'Collecting an operational incident under the Basel taxonomy',
      es: 'Collecte d\'un incident opérationnel selon la nomenclature bâloise',
    },
    steps: {
      fr: ['Déclaration', 'Qualification & chiffrage', 'Analyse & plan d\'action'],
      en: ['Incident reporting', 'Assessment and costing', 'Analysis and action plan'],
      es: ['Déclaration', 'Qualification & chiffrage', 'Analyse & plan d\'action'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'auto-evaluation-des-risques-rcsa-26',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Auto-évaluation des risques (RCSA)', en: 'Risk self-assessment (RCSA)', es: 'Auto-évaluation des risques (RCSA)' },
    description: {
      fr: 'Campagne d\'auto-évaluation des risques et des dispositifs de maîtrise par entité',
      en: 'Self-assessment of risks and controls by entity',
      es: 'Campagne d\'auto-évaluation des risques et des dispositifs de maîtrise par entité',
    },
    steps: {
      fr: ['Lancement de la campagne', 'Auto-évaluation par l\'entité', 'Challenge risques'],
      en: ['Campaign launch', 'Self-assessment by the entity', 'Risk challenge'],
      es: ['Lancement de la campagne', 'Auto-évaluation par l\'entité', 'Challenge risques'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'campagne-de-controle-permanent-27',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Campagne de contrôle permanent', en: 'Permanent control campaign', es: 'Campagne de contrôle permanent' },
    description: {
      fr: 'Exécution d\'un point du plan de contrôle de second niveau',
      en: 'Running a second-line control from the plan',
      es: 'Exécution d\'un point du plan de contrôle de second niveau',
    },
    steps: {
      fr: ['Planification', 'Exécution du contrôle', 'Supervision risques'],
      en: ['Planning', 'Control execution', 'Risk supervision'],
      es: ['Planification', 'Exécution du contrôle', 'Supervision risques'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'suivi-des-recommandations-d-audit-inspec-28',
    category: 'conformite',
    icon: 'shield',
    name: { fr: 'Suivi des recommandations d\'audit & inspection', en: 'Audit recommendation follow-up', es: 'Suivi des recommandations d\'audit & inspection' },
    description: {
      fr: 'Suivi d\'une recommandation émise par l\'audit interne, l\'inspection générale, les commissaires aux comptes ou le régulateur',
      en: 'Following a recommendation from internal audit or inspection',
      es: 'Suivi d\'une recommandation émise par l\'audit interne, l\'inspection générale, les commissaires aux comptes ou le régulateur',
    },
    steps: {
      fr: ['Enregistrement', 'Plan d\'action', 'Mise en œuvre'],
      en: ['Recording', 'Action plan', 'Implementation'],
      es: ['Enregistrement', 'Plan d\'action', 'Mise en œuvre'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'ticket-support-03',
    category: 'client',
    icon: 'handshake',
    featured: true,
    name: { fr: 'Ticket support', en: 'Support ticket', es: 'Ticket support' },
    description: {
      fr: 'Gestion des demandes, incidents et bugs',
      en: 'Requests, incidents and bugs',
      es: 'Gestion des demandes, incidents et bugs',
    },
    steps: {
      fr: ['Nouveau ticket', 'Qualification', 'En cours de traitement'],
      en: ['New ticket', 'Triage', 'In progress'],
      es: ['Nouveau ticket', 'Qualification', 'En cours de traitement'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'reclamation-client-06',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Réclamation client', en: 'Customer complaint', es: 'Réclamation client' },
    description: {
      fr: 'Traitement des réclamations et litiges',
      en: 'Complaints and disputes',
      es: 'Traitement des réclamations et litiges',
    },
    steps: {
      fr: ['Nouvelle réclamation', 'Analyse', 'Traitement'],
      en: ['New complaint', 'Analysis', 'Handling'],
      es: ['Nouvelle réclamation', 'Analyse', 'Traitement'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'demande-de-depassement-de-limite-37',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Demande de dépassement de limite', en: 'Risk limit breach request', es: 'Demande de dépassement de limite' },
    description: {
      fr: 'Demande d\'autorisation de dépassement d\'une limite de risque — contrepartie, secteur, pays, concentration ou change',
      en: 'Authorisation to exceed a risk limit — counterparty, sector, country',
      es: 'Demande d\'autorisation de dépassement d\'une limite de risque — contrepartie, secteur, pays, concentration ou change',
    },
    steps: {
      fr: ['Demande', 'Analyse risques', 'Décision du comité'],
      en: ['Request', 'Risk analysis', 'Committee decision'],
      es: ['Demande', 'Analyse risques', 'Décision du comité'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'validation-de-credit-exceptionnel-38',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Validation de crédit exceptionnel', en: 'Exceptional credit approval', es: 'Validation de crédit exceptionnel' },
    description: {
      fr: 'Octroi de crédit dérogeant à la politique en vigueur — taux, durée, quotité, garanties ou profil du client',
      en: 'Credit granted outside policy — rate, term, ratio, collateral',
      es: 'Octroi de crédit dérogeant à la politique en vigueur — taux, durée, quotité, garanties ou profil du client',
    },
    steps: {
      fr: ['Montage du dossier', 'Analyse du risque de crédit', 'Comité de crédit'],
      en: ['File preparation', 'Credit risk analysis', 'Credit committee'],
      es: ['Montage du dossier', 'Analyse du risque de crédit', 'Comité de crédit'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'validation-de-remise-de-pouvoir-39',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Validation de remise de pouvoir', en: 'Delegation of authority', es: 'Validation de remise de pouvoir' },
    description: {
      fr: 'Attribution, modification ou retrait d\'une délégation de pouvoir ou de signature',
      en: 'Granting, changing or withdrawing a delegation of authority or signature',
      es: 'Attribution, modification ou retrait d\'une délégation de pouvoir ou de signature',
    },
    steps: {
      fr: ['Demande', 'Contrôle des incompatibilités', 'Validation direction'],
      en: ['Request', 'Incompatibility check', 'Executive approval'],
      es: ['Demande', 'Contrôle des incompatibilités', 'Validation direction'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'gestion-des-sinistres-complexes-40',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Gestion des sinistres complexes', en: 'Complex claims handling', es: 'Gestion des sinistres complexes' },
    description: {
      fr: 'Traitement d\'un sinistre à enjeu — montant élevé, pluralité de victimes, suspicion de fraude ou litige de garantie',
      en: 'Handling a high-stakes claim — large amount, several victims, suspected fraud',
      es: 'Traitement d\'un sinistre à enjeu — montant élevé, pluralité de victimes, suspicion de fraude ou litige de garantie',
    },
    steps: {
      fr: ['Déclaration du sinistre', 'Expertise', 'Analyse de la garantie'],
      en: ['Claim reporting', 'Assessment', 'Cover analysis'],
      es: ['Déclaration du sinistre', 'Expertise', 'Analyse de la garantie'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'validation-d-indemnisation-exceptionnell-41',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Validation d\'indemnisation exceptionnelle', en: 'Exceptional settlement approval', es: 'Validation d\'indemnisation exceptionnelle' },
    description: {
      fr: 'Indemnisation dérogeant au contrat ou au barème — geste commercial, dépassement de plafond, renonciation à la franchise ou au recours',
      en: 'Settlement outside the contract or scale — goodwill, cap exceeded',
      es: 'Indemnisation dérogeant au contrat ou au barème — geste commercial, dépassement de plafond, renonciation à la franchise ou au recours',
    },
    steps: {
      fr: ['Demande', 'Avis technique', 'Décision direction'],
      en: ['Request', 'Technical opinion', 'Executive decision'],
      es: ['Demande', 'Avis technique', 'Décision direction'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'referencement-courtier-intermediaire-42',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Référencement courtier / intermédiaire', en: 'Broker accreditation', es: 'Référencement courtier / intermédiaire' },
    description: {
      fr: 'Habilitation d\'un intermédiaire d\'assurance',
      en: 'Accrediting an insurance intermediary',
      es: 'Habilitation d\'un intermédiaire d\'assurance',
    },
    steps: {
      fr: ['Dossier de candidature', 'Vérification de l\'agrément', 'Contrôle conformité'],
      en: ['Application', 'Licence verification', 'Compliance check'],
      es: ['Dossier de candidature', 'Vérification de l\'agrément', 'Contrôle conformité'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'agrement-commercant-62',
    category: 'client',
    icon: 'handshake',
    featured: true,
    name: { fr: 'Agrément commerçant', en: 'Merchant accreditation', es: 'Agrément commerçant' },
    description: {
      fr: 'Instruction d\'une demande d\'affiliation d\'un commerçant à l\'acquisition monétique',
      en: 'Reviewing a merchant\'s application for card acquiring',
      es: 'Instruction d\'une demande d\'affiliation d\'un commerçant à l\'acquisition monétique',
    },
    steps: {
      fr: ['Dépôt du dossier', 'Instruction du dossier', 'Contrôle conformité'],
      en: ['Application filing', 'Application review', 'Compliance check'],
      es: ['Dépôt du dossier', 'Instruction du dossier', 'Contrôle conformité'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'installation-tpe-63',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Installation TPE', en: 'Card terminal installation', es: 'Installation TPE' },
    description: {
      fr: 'Déploiement d\'un terminal de paiement chez un commerçant agréé',
      en: 'Deploying a payment terminal at an accredited merchant',
      es: 'Déploiement d\'un terminal de paiement chez un commerçant agréé',
    },
    steps: {
      fr: ['Demande d\'installation', 'Préparation du matériel', 'Installation sur site'],
      en: ['Installation request', 'Equipment preparation', 'On-site installation'],
      es: ['Demande d\'installation', 'Préparation du matériel', 'Installation sur site'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'contestation-de-transaction-carte-64',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Contestation de transaction carte', en: 'Card transaction dispute', es: 'Contestation de transaction carte' },
    description: {
      fr: 'Traitement de la réclamation d\'un porteur de carte contestant une opération',
      en: 'Handling a cardholder\'s dispute over a transaction',
      es: 'Traitement de la réclamation d\'un porteur de carte contestant une opération',
    },
    steps: {
      fr: ['Réception de la contestation', 'Analyse de la contestation', 'Instruction auprès du réseau'],
      en: ['Dispute intake', 'Dispute analysis', 'Scheme investigation'],
      es: ['Réception de la contestation', 'Analyse de la contestation', 'Instruction auprès du réseau'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'traitement-chargeback-65',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Traitement chargeback', en: 'Chargeback handling', es: 'Traitement chargeback' },
    description: {
      fr: 'Traitement acquéreur d\'un impayé notifié par le réseau',
      en: 'Acquirer handling of a chargeback notified by the scheme',
      es: 'Traitement acquéreur d\'un impayé notifié par le réseau',
    },
    steps: {
      fr: ['Notification du réseau', 'Qualification du chargeback', 'Collecte des preuves commerçant'],
      en: ['Scheme notification', 'Chargeback assessment', 'Merchant evidence collection'],
      es: ['Notification du réseau', 'Qualification du chargeback', 'Collecte des preuves commerçant'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'installation-relocalisation-gab-66',
    category: 'client',
    icon: 'handshake',
    name: { fr: 'Installation / relocalisation GAB', en: 'ATM installation or relocation', es: 'Installation / relocalisation GAB' },
    description: {
      fr: 'Projet d\'implantation, de relocalisation ou de remplacement d\'un guichet automatique',
      en: 'Installing, relocating or replacing a cash machine',
      es: 'Projet d\'implantation, de relocalisation ou de remplacement d\'un guichet automatique',
    },
    steps: {
      fr: ['Expression du besoin', 'Étude du site', 'Validation de l\'investissement'],
      en: ['Need definition', 'Site survey', 'Investment approval'],
      es: ['Expression du besoin', 'Étude du site', 'Validation de l\'investissement'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'note-de-frais-02',
    category: 'finance',
    icon: 'wallet',
    featured: true,
    name: { fr: 'Note de frais', en: 'Expense report', es: 'Note de frais' },
    description: {
      fr: 'Soumission et remboursement de frais professionnels',
      en: 'Submission and reimbursement of business expenses',
      es: 'Soumission et remboursement de frais professionnels',
    },
    steps: {
      fr: ['Nouvelle note', 'Vérification comptable', 'Approbation direction'],
      en: ['New report', 'Accounting check', 'Management approval'],
      es: ['Nouvelle note', 'Vérification comptable', 'Approbation direction'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'validation-d-engagement-de-depense-32',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Validation d\'engagement de dépense', en: 'Spend commitment approval', es: 'Validation d\'engagement de dépense' },
    description: {
      fr: 'Autorisation préalable d\'un engagement budgétaire',
      en: 'Prior authorisation of a budget commitment',
      es: 'Autorisation préalable d\'un engagement budgétaire',
    },
    steps: {
      fr: ['Demande d\'engagement', 'Contrôle budgétaire', 'Validation par délégation'],
      en: ['Commitment request', 'Budget check', 'Approval by delegation'],
      es: ['Demande d\'engagement', 'Contrôle budgétaire', 'Validation par délégation'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'validation-de-facture-fournisseur-33',
    category: 'finance',
    icon: 'wallet',
    featured: true,
    name: { fr: 'Validation de facture fournisseur', en: 'Supplier invoice approval', es: 'Validation de facture fournisseur' },
    description: {
      fr: 'Contrôle d\'une facture entrante',
      en: 'Checking an incoming invoice',
      es: 'Contrôle d\'une facture entrante',
    },
    steps: {
      fr: ['Réception de la facture', 'Attestation du service fait', 'Contrôle comptable'],
      en: ['Invoice intake', 'Service confirmation', 'Accounting check'],
      es: ['Réception de la facture', 'Attestation du service fait', 'Contrôle comptable'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'creation-modification-fournisseur-compta-34',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Création / modification fournisseur comptable (RIB)', en: 'Supplier bank details change', es: 'Création / modification fournisseur comptable (RIB)' },
    description: {
      fr: 'Création d\'un tiers ou modification de ses coordonnées bancaires, avec contre-appel obligatoire sur un numéro issu du référentiel et double validation',
      en: 'Creating a third party or changing its bank details, with mandatory call-back',
      es: 'Création d\'un tiers ou modification de ses coordonnées bancaires, avec contre-appel obligatoire sur un numéro issu du référentiel et double validation',
    },
    steps: {
      fr: ['Demande', 'Contre-appel & vérification', 'Double validation'],
      en: ['Request', 'Call-back and verification', 'Dual approval'],
      es: ['Demande', 'Contre-appel & vérification', 'Double validation'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'validation-d-ordre-de-virement-35',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Validation d\'ordre de virement', en: 'Payment order approval', es: 'Validation d\'ordre de virement' },
    description: {
      fr: 'Circuit de validation à quatre yeux d\'un ordre de virement',
      en: 'Four-eyes approval circuit for a payment order',
      es: 'Circuit de validation à quatre yeux d\'un ordre de virement',
    },
    steps: {
      fr: ['Saisie de l\'ordre', 'Contrôle de trésorerie', 'Signature'],
      en: ['Order entry', 'Treasury check', 'Signature'],
      es: ['Saisie de l\'ordre', 'Contrôle de trésorerie', 'Signature'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'demande-de-paiement-exceptionnel-36',
    category: 'finance',
    icon: 'wallet',
    name: { fr: 'Demande de paiement exceptionnel', en: 'Exceptional payment request', es: 'Demande de paiement exceptionnel' },
    description: {
      fr: 'Paiement sortant du circuit normal — urgence, absence de bon de commande, hors échéancier ou hors budget',
      en: 'Payment outside the normal circuit — urgency, no purchase order, off schedule',
      es: 'Paiement sortant du circuit normal — urgence, absence de bon de commande, hors échéancier ou hors budget',
    },
    steps: {
      fr: ['Demande', 'Instruction financière', 'Arbitrage direction générale'],
      en: ['Request', 'Finance review', 'Executive arbitration'],
      es: ['Demande', 'Instruction financière', 'Arbitrage direction générale'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'validation-de-politique-ou-procedure-int-48',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Validation de politique ou procédure interne', en: 'Internal policy approval', es: 'Validation de politique ou procédure interne' },
    description: {
      fr: 'Cycle de vie du corpus documentaire',
      en: 'Life cycle of the internal documentation',
      es: 'Cycle de vie du corpus documentaire',
    },
    steps: {
      fr: ['Rédaction', 'Relecture conformité & juridique', 'Approbation direction'],
      en: ['Drafting', 'Compliance and legal review', 'Executive approval'],
      es: ['Rédaction', 'Relecture conformité & juridique', 'Approbation direction'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'incident-majeur-51',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Incident majeur', en: 'Major incident', es: 'Incident majeur' },
    description: {
      fr: 'Gestion de crise d\'un incident critique',
      en: 'Crisis management of a critical incident',
      es: 'Gestion de crise d\'un incident critique',
    },
    steps: {
      fr: ['Déclaration', 'Qualification & cellule de crise', 'Rétablissement'],
      en: ['Incident reporting', 'Assessment and crisis team', 'Service restoration'],
      es: ['Déclaration', 'Qualification & cellule de crise', 'Rétablissement'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'gestion-des-problemes-52',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Gestion des problèmes', en: 'Problem management', es: 'Gestion des problèmes' },
    description: {
      fr: 'Recherche de la cause racine d\'incidents récurrents ou d\'un incident majeur non élucidé',
      en: 'Finding the root cause of recurring incidents',
      es: 'Recherche de la cause racine d\'incidents récurrents ou d\'un incident majeur non élucidé',
    },
    steps: {
      fr: ['Ouverture du dossier', 'Analyse de la cause racine', 'Solution définitive'],
      en: ['Case opening', 'Root cause analysis', 'Permanent fix'],
      es: ['Ouverture du dossier', 'Analyse de la cause racine', 'Solution définitive'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'demande-de-badge-d-acces-67',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Demande de badge d\'accès', en: 'Access badge request', es: 'Demande de badge d\'accès' },
    description: {
      fr: 'Attribution, renouvellement ou désactivation d\'un badge d\'accès aux locaux',
      en: 'Issuing, renewing or deactivating a site access badge',
      es: 'Attribution, renouvellement ou désactivation d\'un badge d\'accès aux locaux',
    },
    steps: {
      fr: ['Demande', 'Validation hiérarchique', 'Validation sécurité'],
      en: ['Request', 'Manager approval', 'Security approval'],
      es: ['Demande', 'Validation hiérarchique', 'Validation sécurité'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'demande-de-materiel-68',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Demande de matériel', en: 'Equipment request', es: 'Demande de matériel' },
    description: {
      fr: 'Dotation en matériel informatique, mobilier ou fournitures',
      en: 'Issuing IT equipment, furniture or supplies',
      es: 'Dotation en matériel informatique, mobilier ou fournitures',
    },
    steps: {
      fr: ['Expression du besoin', 'Validation budgétaire', 'Vérification du stock'],
      en: ['Need definition', 'Budget approval', 'Stock check'],
      es: ['Expression du besoin', 'Validation budgétaire', 'Vérification du stock'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'reservation-de-salle-de-reunion-69',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Réservation de salle de réunion', en: 'Meeting room booking', es: 'Réservation de salle de réunion' },
    description: {
      fr: 'Réservation d\'une salle avec ses équipements et sa logistique',
      en: 'Booking a room with its equipment and logistics',
      es: 'Réservation d\'une salle avec ses équipements et sa logistique',
    },
    steps: {
      fr: ['Demande de réservation', 'Vérification de disponibilité', 'Préparation de la salle'],
      en: ['Booking request', 'Availability check', 'Room preparation'],
      es: ['Demande de réservation', 'Vérification de disponibilité', 'Préparation de la salle'],
    },
    stepCount: 3,
    roleCount: 0,
  },
  {
    id: 'demande-de-vehicule-de-service-70',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Demande de véhicule de service', en: 'Company vehicle request', es: 'Demande de véhicule de service' },
    description: {
      fr: 'Mise à disposition d\'un véhicule du parc',
      en: 'Making a fleet vehicle available',
      es: 'Mise à disposition d\'un véhicule du parc',
    },
    steps: {
      fr: ['Demande de mission', 'Validation du déplacement', 'Affectation du véhicule'],
      en: ['Assignment request', 'Travel approval', 'Vehicle allocation'],
      es: ['Demande de mission', 'Validation du déplacement', 'Affectation du véhicule'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'intervention-de-maintenance-bâtiment-71',
    category: 'operations',
    icon: 'building',
    name: { fr: 'Intervention de maintenance bâtiment', en: 'Building maintenance request', es: 'Intervention de maintenance bâtiment' },
    description: {
      fr: 'Signalement et traitement d\'un dysfonctionnement sur un site',
      en: 'Reporting and handling a fault on a site',
      es: 'Signalement et traitement d\'un dysfonctionnement sur un site',
    },
    steps: {
      fr: ['Signalement', 'Diagnostic', 'Validation des travaux'],
      en: ['Issue reporting', 'Diagnosis', 'Works approval'],
      es: ['Signalement', 'Diagnostic', 'Validation des travaux'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'demande-d-achat-04',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Demande d\'achat', en: 'Purchase request', es: 'Demande d\'achat' },
    description: {
      fr: 'Circuit d\'approbation des achats',
      en: 'Purchase approval circuit',
      es: 'Circuit d\'approbation des achats',
    },
    steps: {
      fr: ['Nouvelle demande', 'Validation N+1', 'Validation N+2 (montant élevé)'],
      en: ['New request', 'Line manager approval', 'Second-level approval (high amount)'],
      es: ['Nouvelle demande', 'Validation N+1', 'Validation N+2 (montant élevé)'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'contrats-fournisseurs-09',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Contrats fournisseurs', en: 'Supplier contracts', es: 'Contrats fournisseurs' },
    description: {
      fr: 'Validation et sécurisation des contrats fournisseurs avant signature',
      en: 'Reviewing and securing supplier contracts before signature',
      es: 'Validation et sécurisation des contrats fournisseurs avant signature',
    },
    steps: {
      fr: ['Dépôt contrat', 'Analyse juridique', 'Validation financière'],
      en: ['Contract filing', 'Legal review', 'Financial approval'],
      es: ['Dépôt contrat', 'Analyse juridique', 'Validation financière'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'referencement-fournisseur-45',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Référencement fournisseur', en: 'Supplier accreditation', es: 'Référencement fournisseur' },
    description: {
      fr: 'Homologation d\'un nouveau fournisseur',
      en: 'Approving a new supplier',
      es: 'Homologation d\'un nouveau fournisseur',
    },
    steps: {
      fr: ['Demande de référencement', 'Due diligence', 'Évaluation du risque tiers'],
      en: ['Accreditation request', 'Due diligence', 'Third-party risk assessment'],
      es: ['Demande de référencement', 'Due diligence', 'Évaluation du risque tiers'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'evaluation-periodique-fournisseur-46',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Évaluation périodique fournisseur', en: 'Periodic supplier review', es: 'Évaluation périodique fournisseur' },
    description: {
      fr: 'Revue de performance et de risque d\'un fournisseur référencé',
      en: 'Performance and risk review of an accredited supplier',
      es: 'Revue de performance et de risque d\'un fournisseur référencé',
    },
    steps: {
      fr: ['Lancement de l\'évaluation', 'Notation par le prescripteur', 'Revue risques'],
      en: ['Review launch', 'Rating by the requester', 'Risk review'],
      es: ['Lancement de l\'évaluation', 'Notation par le prescripteur', 'Revue risques'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'consultation-appel-d-offres-47',
    category: 'achats',
    icon: 'truck',
    name: { fr: 'Consultation & appel d\'offres', en: 'Tender and sourcing', es: 'Consultation & appel d\'offres' },
    description: {
      fr: 'Mise en concurrence d\'un besoin d\'achat',
      en: 'Putting a purchasing need out to tender',
      es: 'Mise en concurrence d\'un besoin d\'achat',
    },
    steps: {
      fr: ['Préparation', 'Consultation du marché', 'Analyse des offres'],
      en: ['Preparation', 'Market consultation', 'Bid analysis'],
      es: ['Préparation', 'Consultation du marché', 'Analyse des offres'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'habilitations-acces-07',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Habilitations & accès', en: 'Access rights', es: 'Habilitations & accès' },
    description: {
      fr: 'Gestion des demandes d\'accès aux applications, bases de données et outils internes',
      en: 'Access requests to applications, databases and internal tools',
      es: 'Gestion des demandes d\'accès aux applications, bases de données et outils internes',
    },
    steps: {
      fr: ['Nouvelle demande', 'Validation manager', 'Validation applicative'],
      en: ['New request', 'Manager approval', 'Application owner approval'],
      es: ['Nouvelle demande', 'Validation manager', 'Validation applicative'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'change-management-applicatif-08',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Change Management applicatif', en: 'Application change management', es: 'Change Management applicatif' },
    description: {
      fr: 'Gestion des évolutions et modifications sur les applications métiers',
      en: 'Changes and releases on business applications',
      es: 'Gestion des évolutions et modifications sur les applications métiers',
    },
    steps: {
      fr: ['Soumission', 'Analyse IT', 'Validation applicative'],
      en: ['Submission', 'IT analysis', 'Application owner approval'],
      es: ['Soumission', 'Analyse IT', 'Validation applicative'],
    },
    stepCount: 5,
    roleCount: 0,
  },
  {
    id: 'declaration-d-incident-de-securite-29',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Déclaration d\'incident de sécurité', en: 'Security incident report', es: 'Déclaration d\'incident de sécurité' },
    description: {
      fr: 'Traitement d\'un incident de sécurité des systèmes d\'information',
      en: 'Handling an information security incident',
      es: 'Traitement d\'un incident de sécurité des systèmes d\'information',
    },
    steps: {
      fr: ['Déclaration', 'Qualification', 'Traitement & notification'],
      en: ['Incident reporting', 'Assessment', 'Handling and notification'],
      es: ['Déclaration', 'Qualification', 'Traitement & notification'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'validation-d-exception-securite-30',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Validation d\'exception sécurité', en: 'Security exception approval', es: 'Validation d\'exception sécurité' },
    description: {
      fr: 'Demande de dérogation à une règle de la politique de sécurité',
      en: 'Request to deviate from a security policy rule',
      es: 'Demande de dérogation à une règle de la politique de sécurité',
    },
    steps: {
      fr: ['Demande', 'Analyse RSSI', 'Acceptation du risque'],
      en: ['Request', 'CISO analysis', 'Risk acceptance'],
      es: ['Demande', 'Analyse RSSI', 'Acceptation du risque'],
    },
    stepCount: 3,
    roleCount: 1,
  },
  {
    id: 'revue-periodique-des-habilitations-31',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Revue périodique des habilitations', en: 'Access rights recertification', es: 'Revue périodique des habilitations' },
    description: {
      fr: 'Campagne de recertification des droits d\'accès applicatifs',
      en: 'Recertification campaign of application access rights',
      es: 'Campagne de recertification des droits d\'accès applicatifs',
    },
    steps: {
      fr: ['Lancement de la campagne', 'Revue par le manager', 'Exécution des retraits'],
      en: ['Campaign launch', 'Manager review', 'Access removal'],
      es: ['Lancement de la campagne', 'Revue par le manager', 'Exécution des retraits'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'demande-de-nouveau-projet-49',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Demande de nouveau projet', en: 'New project request', es: 'Demande de nouveau projet' },
    description: {
      fr: 'Instruction d\'une demande de projet informatique',
      en: 'Reviewing an IT project request',
      es: 'Instruction d\'une demande de projet informatique',
    },
    steps: {
      fr: ['Expression du besoin', 'Cadrage & chiffrage', 'Priorisation'],
      en: ['Need definition', 'Scoping and costing', 'Prioritisation'],
      es: ['Expression du besoin', 'Cadrage & chiffrage', 'Priorisation'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'validation-d-architecture-50',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Validation d\'architecture', en: 'Architecture approval', es: 'Validation d\'architecture' },
    description: {
      fr: 'Passage d\'un dossier d\'architecture en comité',
      en: 'Taking an architecture file to committee',
      es: 'Passage d\'un dossier d\'architecture en comité',
    },
    steps: {
      fr: ['Soumission du dossier', 'Revue technique', 'Revue de sécurité'],
      en: ['File submission', 'Technical review', 'Security review'],
      es: ['Soumission du dossier', 'Revue technique', 'Revue de sécurité'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'gestion-des-comptes-a-privileges-53',
    category: 'it',
    icon: 'plug',
    name: { fr: 'Gestion des comptes à privilèges', en: 'Privileged account management', es: 'Gestion des comptes à privilèges' },
    description: {
      fr: 'Octroi d\'un accès privilégié ou d\'un compte d\'urgence',
      en: 'Granting privileged or emergency access',
      es: 'Octroi d\'un accès privilégié ou d\'un compte d\'urgence',
    },
    steps: {
      fr: ['Demande', 'Analyse RSSI', 'Activation & révocation'],
      en: ['Request', 'CISO analysis', 'Activation and revocation'],
      es: ['Demande', 'Analyse RSSI', 'Activation & révocation'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'demandes-juridiques-internes-14',
    category: 'juridique',
    icon: 'file-check',
    name: { fr: 'Demandes juridiques internes', en: 'Internal legal requests', es: 'Demandes juridiques internes' },
    description: {
      fr: 'Traitement des demandes adressées au service juridique',
      en: 'Requests addressed to the legal department',
      es: 'Traitement des demandes adressées au service juridique',
    },
    steps: {
      fr: ['Demande', 'Qualification', 'Analyse juridique'],
      en: ['Request', 'Triage', 'Legal analysis'],
      es: ['Demande', 'Qualification', 'Analyse juridique'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'gestion-des-litiges-contentieux-43',
    category: 'juridique',
    icon: 'file-check',
    name: { fr: 'Gestion des litiges & contentieux', en: 'Litigation management', es: 'Gestion des litiges & contentieux' },
    description: {
      fr: 'Ouverture et suivi d\'un dossier contentieux',
      en: 'Opening and following a litigation file',
      es: 'Ouverture et suivi d\'un dossier contentieux',
    },
    steps: {
      fr: ['Ouverture du dossier', 'Qualification juridique', 'Suivi de la procédure'],
      en: ['Case opening', 'Legal assessment', 'Proceedings monitoring'],
      es: ['Ouverture du dossier', 'Qualification juridique', 'Suivi de la procédure'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'fin-de-contrat-renouvellement-ou-resilia-44',
    category: 'juridique',
    icon: 'file-check',
    name: { fr: 'Fin de contrat : renouvellement ou résiliation', en: 'Contract renewal or termination', es: 'Fin de contrat : renouvellement ou résiliation' },
    description: {
      fr: 'Traitement d\'une échéance contractuelle avant expiration du préavis',
      en: 'Handling a contract deadline before notice expires',
      es: 'Traitement d\'une échéance contractuelle avant expiration du préavis',
    },
    steps: {
      fr: ['Alerte d\'échéance', 'Bilan de la relation', 'Arbitrage'],
      en: ['Deadline alert', 'Relationship review', 'Arbitration'],
      es: ['Alerte d\'échéance', 'Bilan de la relation', 'Arbitrage'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'demande-de-conges-01',
    category: 'rh',
    icon: 'user-plus',
    featured: true,
    name: { fr: 'Demande de congés', en: 'Leave request', es: 'Demande de congés' },
    description: {
      fr: 'Gestion des demandes de congés et absences',
      en: 'Leave and absence requests',
      es: 'Gestion des demandes de congés et absences',
    },
    steps: {
      fr: ['Nouvelle demande', 'En attente d\'approbation'],
      en: ['New request', 'Awaiting approval'],
      es: ['Nouvelle demande', 'En attente d\'approbation'],
    },
    stepCount: 2,
    roleCount: 0,
  },
  {
    id: 'onboarding-collaborateur-05',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Onboarding collaborateur', en: 'Employee onboarding', es: 'Onboarding collaborateur' },
    description: {
      fr: 'Intégration d\'un nouveau collaborateur',
      en: 'Bringing a new employee on board',
      es: 'Intégration d\'un nouveau collaborateur',
    },
    steps: {
      fr: ['Nouvelle arrivée', 'Préparation IT', 'Accueil RH'],
      en: ['New arrival', 'IT preparation', 'HR welcome'],
      es: ['Nouvelle arrivée', 'Préparation IT', 'Accueil RH'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'formations-collaborateurs-10',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Formations collaborateurs', en: 'Employee training', es: 'Formations collaborateurs' },
    description: {
      fr: 'Gestion des demandes de formation',
      en: 'Training requests',
      es: 'Gestion des demandes de formation',
    },
    steps: {
      fr: ['Demande de formation', 'Validation manager', 'Contrôle budget RH'],
      en: ['Training request', 'Manager approval', 'HR budget check'],
      es: ['Demande de formation', 'Validation manager', 'Contrôle budget RH'],
    },
    stepCount: 3,
    roleCount: 0,
  },
  {
    id: 'deplacements-professionnels-11',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Déplacements professionnels', en: 'Business travel', es: 'Déplacements professionnels' },
    description: {
      fr: 'Gestion des missions et voyages professionnels',
      en: 'Assignments and business trips',
      es: 'Gestion des missions et voyages professionnels',
    },
    steps: {
      fr: ['Demande de déplacement', 'Validation manager', 'Validation financière'],
      en: ['Travel request', 'Manager approval', 'Financial approval'],
      es: ['Demande de déplacement', 'Validation manager', 'Validation financière'],
    },
    stepCount: 3,
    roleCount: 0,
  },
  {
    id: 'campagne-de-recrutement-12',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Campagne de recrutement', en: 'Recruitment campaign', es: 'Campagne de recrutement' },
    description: {
      fr: 'Gestion de l\'ouverture d\'un poste jusqu\'à l\'intégration du candidat',
      en: 'From opening a position to the candidate joining',
      es: 'Gestion de l\'ouverture d\'un poste jusqu\'à l\'intégration du candidat',
    },
    steps: {
      fr: ['Besoin recrutement', 'Validation RH', 'Validation budget'],
      en: ['Hiring need', 'HR approval', 'Budget approval'],
      es: ['Besoin recrutement', 'Validation RH', 'Validation budget'],
    },
    stepCount: 5,
    roleCount: 0,
  },
  {
    id: 'evaluations-annuelles-15',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Évaluations annuelles', en: 'Annual reviews', es: 'Évaluations annuelles' },
    description: {
      fr: 'Gestion des campagnes d\'entretiens annuels',
      en: 'Annual appraisal campaigns',
      es: 'Gestion des campagnes d\'entretiens annuels',
    },
    steps: {
      fr: ['Lancement campagne', 'Entretien manager', 'Commentaire collaborateur'],
      en: ['Campaign launch', 'Manager interview', 'Employee comment'],
      es: ['Lancement campagne', 'Entretien manager', 'Commentaire collaborateur'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'offboarding-collaborateur-16',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Offboarding collaborateur', en: 'Employee offboarding', es: 'Offboarding collaborateur' },
    description: {
      fr: 'Sécurisation du départ d\'un collaborateur',
      en: 'Securing an employee\'s departure',
      es: 'Sécurisation du départ d\'un collaborateur',
    },
    steps: {
      fr: ['Lancement', 'Confirmation manager', 'Désactivation IT'],
      en: ['Launch', 'Manager confirmation', 'IT deactivation'],
      es: ['Lancement', 'Confirmation manager', 'Désactivation IT'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'demande-d-ouverture-de-poste-54',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Demande d\'ouverture de poste', en: 'Position opening request', es: 'Demande d\'ouverture de poste' },
    description: {
      fr: 'Inscription d\'un poste au tableau des effectifs',
      en: 'Adding a position to the headcount plan',
      es: 'Inscription d\'un poste au tableau des effectifs',
    },
    steps: {
      fr: ['Demande du manager', 'Avis RH', 'Contrôle budgétaire'],
      en: ['Manager request', 'HR opinion', 'Budget check'],
      es: ['Demande du manager', 'Avis RH', 'Contrôle budgétaire'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'mobilite-interne-promotion-55',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Mobilité interne & promotion', en: 'Internal mobility and promotion', es: 'Mobilité interne & promotion' },
    description: {
      fr: 'Candidature à une mobilité ou proposition de promotion',
      en: 'Application for a move or a promotion proposal',
      es: 'Candidature à une mobilité ou proposition de promotion',
    },
    steps: {
      fr: ['Candidature ou proposition', 'Avis du manager d\'origine', 'Avis du manager d\'accueil'],
      en: ['Application or proposal', 'Current manager opinion', 'Receiving manager opinion'],
      es: ['Candidature ou proposition', 'Avis du manager d\'origine', 'Avis du manager d\'accueil'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'validation-de-periode-d-essai-56',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Validation de période d\'essai', en: 'Probation period decision', es: 'Validation de période d\'essai' },
    description: {
      fr: 'Décision d\'issue de période d\'essai avant son terme',
      en: 'Decision on the outcome of a probation period',
      es: 'Décision d\'issue de période d\'essai avant son terme',
    },
    steps: {
      fr: ['Alerte de fin de période', 'Évaluation du manager', 'Avis RH'],
      en: ['End-of-period alert', 'Manager assessment', 'HR opinion'],
      es: ['Alerte de fin de période', 'Évaluation du manager', 'Avis RH'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'gestion-des-consultants-externes-57',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Gestion des consultants externes', en: 'External consultant management', es: 'Gestion des consultants externes' },
    description: {
      fr: 'Cycle de vie d\'un intervenant externe',
      en: 'Life cycle of an external contributor',
      es: 'Cycle de vie d\'un intervenant externe',
    },
    steps: {
      fr: ['Demande d\'accueil', 'Validation sécurité', 'Mission en cours'],
      en: ['Onboarding request', 'Security approval', 'Assignment running'],
      es: ['Demande d\'accueil', 'Validation sécurité', 'Mission en cours'],
    },
    stepCount: 4,
    roleCount: 1,
  },
  {
    id: 'demande-d-attestation-rh-58',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Demande d\'attestation RH', en: 'HR certificate request', es: 'Demande d\'attestation RH' },
    description: {
      fr: 'Demande d\'attestation de travail, de salaire ou de présence',
      en: 'Request for an employment, salary or attendance certificate',
      es: 'Demande d\'attestation de travail, de salaire ou de présence',
    },
    steps: {
      fr: ['Demande', 'Édition du document', 'Remise au collaborateur'],
      en: ['Request', 'Document issuance', 'Handed to the employee'],
      es: ['Demande', 'Édition du document', 'Remise au collaborateur'],
    },
    stepCount: 3,
    roleCount: 0,
  },
  {
    id: 'sanction-disciplinaire-59',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Sanction disciplinaire', en: 'Disciplinary action', es: 'Sanction disciplinaire' },
    description: {
      fr: 'Procédure disciplinaire encadrée',
      en: 'Formal disciplinary procedure',
      es: 'Procédure disciplinaire encadrée',
    },
    steps: {
      fr: ['Signalement', 'Qualification juridique', 'Entretien préalable'],
      en: ['Report intake', 'Legal assessment', 'Preliminary interview'],
      es: ['Signalement', 'Qualification juridique', 'Entretien préalable'],
    },
    stepCount: 5,
    roleCount: 1,
  },
  {
    id: 'declaration-d-accident-du-travail-60',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Déclaration d\'accident du travail', en: 'Workplace accident report', es: 'Déclaration d\'accident du travail' },
    description: {
      fr: 'Déclaration d\'un accident du travail ou de trajet',
      en: 'Reporting a workplace or commuting accident',
      es: 'Déclaration d\'un accident du travail ou de trajet',
    },
    steps: {
      fr: ['Déclaration', 'Constat & lésions', 'Déclaration à l\'organisme'],
      en: ['Accident reporting', 'Findings and injuries', 'Filing with the authority'],
      es: ['Déclaration', 'Constat & lésions', 'Déclaration à l\'organisme'],
    },
    stepCount: 4,
    roleCount: 0,
  },
  {
    id: 'certification-reglementaire-collaborateu-61',
    category: 'rh',
    icon: 'user-plus',
    name: { fr: 'Certification réglementaire collaborateur', en: 'Regulatory certification', es: 'Certification réglementaire collaborateur' },
    description: {
      fr: 'Suivi des habilitations obligatoires pour tenir un poste',
      en: 'Tracking the certifications required to hold a role',
      es: 'Suivi des habilitations obligatoires pour tenir un poste',
    },
    steps: {
      fr: ['Demande', 'Validation du besoin', 'Inscription & passage'],
      en: ['Request', 'Need approval', 'Enrolment and exam'],
      es: ['Demande', 'Validation du besoin', 'Inscription & passage'],
    },
    stepCount: 4,
    roleCount: 0,
  },
];

export function getFeaturedProcesses(): Process[] {
  return processes.filter((p) => p.featured);
}
