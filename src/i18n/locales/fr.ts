export const fr = {
  meta: {
    home: {
      title: 'bxFlow — Vos processus métier, sous contrôle de bout en bout',
      description:
        'Moteur de processus métier pour la banque, l’assurance et l’entreprise : KYC, LCB-FT, sinistres, achats. Plus de 70 processus prêts à l’emploi, hébergés ou installés sur vos serveurs.',
    },
    product: {
      title: 'Produit — bxFlow | Moteur de processus métier (BPMN)',
      description:
        'Éditeur de processus, rôles et validations, écrans par étape, délais et relances. Vos logiciels existants sont interrogés en chemin, quand une étape en a besoin.',
    },
    useCases: {
      title: 'Cas d’usage — bxFlow | Banque, assurance, microfinance, entreprises',
      description:
        'Comment bxFlow sert la banque, l’assurance, la microfinance et l’entreprise : processus livrés, décisions tracées, installation possible sur vos serveurs.',
    },
    catalog: {
      title: 'Catalogue de processus — bxFlow | 70+ processus prêts à l’emploi',
      description:
        'Plus de 70 processus métier livrés avec leurs étapes, leurs rôles et leurs validations : congés, notes de frais, onboarding, ouverture de dossier client, revue KYC.',
    },
    security: {
      title: 'Sécurité — bxFlow | Chiffrement, isolation, conformité',
      description:
        'Chiffrement des données, isolation stricte entre clients, hébergement maîtrisé et conformité : les garanties de confiance de bxFlow.',
    },
    deployment: {
      title: 'Déploiement — bxFlow | Sur vos serveurs ou hébergé, de bout en bout',
      description:
        'Comment bxFlow s’installe : hébergé chez nous, ou sur vos serveurs derrière votre pare-feu. Prérequis, étapes, recette, sauvegardes, mises à jour.',
    },
    pricing: {
      title: 'Tarifs — bxFlow | Licence pilote et paliers sur mesure',
      description:
        'Trois paliers adaptés à votre taille et à vos besoins. Démarrez avec une licence pilote sur 12 mois. Demandez un devis personnalisé.',
    },
    contact: {
      title: 'Contact & démo — bxFlow',
      description:
        'Discutons de votre projet. Demandez une démonstration de bxFlow et voyons ensemble comment automatiser vos processus.',
    },
    demo: {
      title: 'Planifier une démo — bxFlow',
      description:
        'Réservez en quelques clics un créneau pour une démonstration de bxFlow adaptée à vos processus. En ligne, sans engagement.',
    },
    documentation: {
      title: 'Documentation — bxFlow | Référence de scripting workflow',
      description:
        'Référence technique pour automatiser vos processus bxFlow : bibliothèque lib, comportements de formulaire, conditions, post-fonctions et appel de connecteurs.',
    },
    legalNotice: {
      title: 'Mentions légales — bxFlow',
      description: 'Informations légales relatives au site bxFlow : éditeur, hébergement, propriété intellectuelle.',
    },
    privacy: {
      title: 'Politique de confidentialité — bxFlow',
      description: 'Comment le site bxFlow collecte, utilise et protège vos données personnelles.',
    },
  },

  nav: {
    home: 'Accueil',
    product: 'Produit',
    useCases: 'Cas d’usage',
    catalog: 'Catalogue',
    security: 'Sécurité',
    pricing: 'Tarifs',
    deployment: 'Déploiement',
    trust: 'Confiance',
    securityDesc: 'Chiffrement, isolation entre clients, traçabilité des accès.',
    deploymentDesc: 'Sur vos serveurs ou hébergé chez nous — la procédure de bout en bout.',
    contact: 'Contact',
    demo: 'Planifier une démo',
    documentation: 'Documentation',
    cta: 'Planifier une démo',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },

  common: {
    requestDemo: 'Demander une démo',
    requestQuote: 'Demander un devis',
    talkProject: 'Discutons de votre projet',
    seeAllProcesses: 'Voir tous les processus',
    learnMore: 'En savoir plus',
    getSecurityDossier: 'Demander le dossier sécurité complet',
    skipToContent: 'Aller au contenu',
  },

  home: {
    hero: {
      eyebrow: 'Moteur de processus métier',
      title: 'Vos processus métier, sous contrôle de bout en bout.',
      subtitle:
        'Entrée en relation, déclaration de soupçon, sinistre, achat : chaque dossier suit ses étapes, ses rôles et ses validations, avec un historique qui fait foi. Plus de 70 processus prêts à l’emploi, hébergés chez nous ou installés sur vos serveurs.',
      ctaPrimary: 'Demander une démo',
      ctaSecondary: 'Voir les processus disponibles',
      trust: 'Plus de 70 processus prêts à démarrer dès aujourd’hui.',
      proofs: [
        'Installable sur vos serveurs, sans aucun accès de l’éditeur',
        'Processus LCB-FT calibrés pour l’UEMOA, la CEMAC et le Maroc',
        'Séparation des tâches et historique opposable',
      ],
      shotAlt:
        'Écran de bxFlow : un dossier d’entrée en relation en validation conformité, avec la fiche client, le délai restant et les actions possibles.',
      // Le suivi animé posé sur la capture du hero. Ce sont les étapes RÉELLES
      // du dossier affiché (CONF-0002, entrée en relation), avec leurs noms exacts :
      // une animation qui raconterait un autre processus que l'écran montré
      // se remarquerait aussitôt.
      live: {
        label: 'Dossier en cours',
        reference: 'CONF-0002',
        steps: ['Collecte du dossier', 'Vérification des pièces', 'Criblage & scoring', 'Validation conformité', 'Relation ouverte'],
        transitions: ['Soumettre le dossier', 'Valider', 'Valider', 'Valider'],
        created: 'Dossier créé',
      },
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Du schéma de votre processus à son exécution, en 4 temps',
      steps: [
        {
          title: 'Vous dessinez le déroulé',
          text: 'Les étapes, qui intervient à chacune, ce qui déclenche le passage à la suivante. Sur un écran, en glissant des blocs — pas une ligne de code.',
        },
        {
          title: 'Une demande ouvre un dossier',
          text: 'Un formulaire, un courriel ou un autre logiciel déclenche le processus. Le dossier part à l’étape de départ, avec sa référence.',
        },
        {
          title: 'Chaque étape va à la bonne personne',
          text: 'Le dossier arrive chez qui doit décider, attend sa validation, relance en cas de retard, et se referme quand tout est fait.',
        },
        {
          title: 'Vos logiciels suivent le mouvement',
          text: 'Quand une étape a besoin d’une information ou doit en écrire une ailleurs, bxFlow interroge vos logiciels existants — même anciens.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Bénéfices concrets',
      title: 'Ce que vous y gagnez',
      items: [
        {
          title: 'Des décisions qui tiennent',
          text: 'Chaque validation porte son auteur, sa date et son motif. Devant un auditeur, le dossier parle de lui-même.',
        },
        {
          title: 'Du temps récupéré',
          text: 'Les dossiers vont seuls à la bonne personne et se signalent quand ils traînent. Plus de relance à la main.',
        },
        {
          title: 'Moins d’erreurs',
          text: 'L’information est saisie une fois, contrôlée à l’écran, et reprise dans vos logiciels sans ressaisie.',
        },
        {
          title: 'Vos règles, modifiables',
          text: 'Une étape à ajouter, un validateur à changer : vos équipes métier le font elles-mêmes, sans développement ni attente.',
        },
      ],
    },
    // Aperçu des capacités. Le contenu vient de `product.capabilities`,
    // seuls les intitulés de section vivent ici — deux listes finiraient
    // par diverger, et c'est l'accueil qui resterait en retard.
    capabilities: {
      eyebrow: 'Tout ce que fait bxFlow',
      title: 'Un aperçu complet, avant d’entrer dans le détail',
      subtitle:
        'De la modélisation d’un processus à la génération de vos courriers, en passant par les traitements en masse et les référentiels métier.',
      cta: 'Voir le détail de chaque capacité',
    },
    catalog: {
      eyebrow: 'Catalogue de processus',
      title: 'Vous ne partez pas d’une page blanche',
      subtitle:
        'Plus de 70 processus livrés avec leurs étapes, leurs rôles, leurs écrans et leurs validations : entrée en relation, déclaration de soupçon, sinistres, achats, congés. Vous les ajustez à votre organisation au lieu de les construire.',
      cardCta: 'Voir tous les processus',
      missingTitle: 'Votre processus n’y est pas ?',
      missingText: 'Nous l’ajoutons au catalogue avec vous, à partir de votre circuit actuel.',
      missingCta: 'Parlons-en',
    },
    shots: {
      eyebrow: 'Le produit, tel qu’il est',
      title: 'Pas une maquette : les écrans que vos équipes utiliseront',
      subtitle:
        'Captures de l’application, prises sur des dossiers de démonstration. Personnes, clients et montants sont fictifs ; le reste est le produit.',
      items: [
        {
          title: 'Le processus, dessiné',
          text: 'La déclaration de soupçon telle qu’elle est livrée : signalement, analyse conformité, décision, transmission à la cellule de renseignement financier.',
          alt: 'Concepteur de processus de bxFlow affichant le circuit de déclaration de soupçon, de bout en bout.',
        },
        {
          title: 'Un sinistre, complet',
          text: 'Un incendie d’entrepôt à l’analyse de la garantie : police, assuré, facteurs de complexité, rapport d’expertise joint — et la contre-expertise parmi les actions possibles.',
          alt: 'Dossier de sinistre incendie dans bxFlow, à l’étape d’analyse de la garantie.',
        },
        {
          title: 'Qui a fait quoi, et quand',
          text: 'L’historique d’un dossier : quatre intervenants, quatre décisions commentées. Personne ne valide son propre travail.',
          alt: 'Historique d’un dossier bxFlow montrant les transitions successives, leurs auteurs et leurs commentaires.',
        },
      ],
    },
    deploy: {
      eyebrow: 'Déploiement',
      title: 'Hébergé chez nous, ou installé sur vos serveurs',
      text: 'Le même logiciel dans les deux cas. Sur vos serveurs, bxFlow fonctionne sans aucune connexion vers l’éditeur, et aucun compte éditeur n’existe sur votre instance.',
      cta: 'Voir le déploiement de bout en bout',
    },
    sectors: {
      eyebrow: 'Pour qui',
      title: 'Pensé pour les dossiers qui doivent tenir devant un contrôle',
      cta: 'Voir les cas d’usage',
    },
    finalCta: {
      title: 'Voyons ce que bxFlow peut automatiser chez vous',
      subtitle:
        'Une démonstration courte, centrée sur vos processus. Sans engagement.',
      cta: 'Demander une démo',
    },
  },

  product: {
    hero: {
      eyebrow: 'Le produit',
      title: 'Un moteur de processus, et tout ce qu’il faut autour',
      subtitle:
        'Modélisez le déroulé de vos démarches — étapes, rôles, validations, règles de passage — et laissez bxFlow les exécuter. Vos logiciels existants sont interrogés en chemin, quand une étape en a besoin.',
    },
    // Le schéma animé du hero. Quatre étapes ET une bifurcation : sans
    // elle, le dessin décrirait un tapis roulant plutôt qu'un processus.
    heroFlow: {
      steps: ['Nouvelle demande', 'Validation', 'Instruction', 'Clôturé'],
      rejected: 'Rejeté',
      // Les transitions portent leur nom : sans elles, le schéma décrit
      // un tapis roulant et rien ne dit qui fait avancer le dossier.
      transitions: ['Soumettre', 'Valider', 'Clôturer'],
      reject: 'Rejeter',
      alt:
        'Un dossier traverse un processus : nouvelle demande, validation, instruction, clôture — avec une bifurcation vers le rejet.',
    },
    capabilities: {
      title: 'Ce que fait bxFlow',
      items: [
        {
          title: 'Modélisation du processus',
          plain: 'Vous dessinez le déroulé de votre démarche sur un écran, en glissant des blocs.',
          tech: 'Éditeur BPMN : étapes, transitions, conditions de passage, étapes de validation et étapes automatiques.',
        },
        {
          title: 'Rôles et validations',
          plain: 'Chaque étape sait qui doit intervenir, et attend sa décision.',
          tech: 'Rôles propres au processus, habilitations par action, validations à un ou plusieurs approbateurs.',
        },
        {
          title: 'Écrans et champs sur mesure',
          plain: 'Vous choisissez ce qui est saisi à chaque étape, et par qui.',
          tech: 'Écrans par étape (création, édition, consultation), catalogue de champs typés, règles d’affichage.',
        },
        {
          title: 'Délais et relances',
          plain: 'Un dossier qui traîne se signale tout seul, avant que quelqu’un ne s’en plaigne.',
          tech: 'Échéances par étape, relances automatiques par courriel ou SMS, tableau des dépassements.',
        },
        {
          title: 'Réception automatique des demandes',
          plain: 'Un formulaire, un courriel ou un autre logiciel ouvre le dossier sans que personne ne le saisisse.',
          tech: 'Ingestion par API et par boîte courriel dédiée, avec déclenchement du processus cible.',
        },
        {
          title: 'Vos logiciels existants, sollicités en chemin',
          plain: 'Quand une étape a besoin d’une donnée qui vit ailleurs, elle va la chercher.',
          tech: 'Connecteurs vers systèmes existants (SOAP/WSDL/XML) et applications modernes (API REST/JSON), appelés depuis une étape ou une transition.',
        },
        {
          title: 'Lecture des documents',
          plain: 'Un document joint est lu, et les champs qu’il désigne clairement sont pré-remplis.',
          tech: 'Reconnaissance de texte sur les pièces jointes (PDF et images numérisées) ; les champs identifiés par une étiquette lisible sont proposés en pré-remplissage, toujours soumis à votre validation.',
        },
        {
          title: 'Éditique',
          plain: 'Vos courriers et attestations sortent remplis, à votre en-tête, en un clic.',
          tech: 'Le client dépose SON modèle Word ou Excel et y place des balises ; tout ce que les balises ne touchent pas est conservé — en-tête, logo, styles. Génération à l’unité ou en publipostage sur une sélection de dossiers.',
        },
        {
          title: 'Traitement en masse',
          plain: 'Mille dossiers se créent, avancent ou s’extraient en une opération.',
          tech: 'Modèle d’import généré depuis les champs du process (Excel ou CSV), rapport ligne par ligne, franchissement d’étape et extraction sur une sélection — avec plafonds et compte attendu pour éviter les opérations à l’aveugle.',
        },
        {
          title: 'Automatisations',
          plain: 'Des actions se déclenchent seules : à une étape, à une date, ou sur une condition.',
          tech: 'Post-fonctions à l’entrée d’une étape ou au franchissement, règles planifiées, comportements de formulaire (champs affichés, masqués ou verrouillés selon la saisie), notifications courriel et SMS.',
        },
        {
          title: 'Référentiels métier',
          plain: 'Vos clients, fournisseurs ou agences vivent dans l’outil, à jour.',
          tech: 'Fiches répliquées depuis un système source à intervalle régulier, sélectionnables dans un dossier, recopiées dans ses champs — et capables d’ouvrir un dossier quand un attribut change (« client passé en risque élevé → revue KYC »).',
        },
        {
          title: 'Suivi et traçabilité',
          plain: 'Vous voyez en temps réel où en est chaque dossier, et qui a fait quoi.',
          tech: 'Historique horodaté par dossier, journal d’audit, tableaux de bord et extractions.',
        },
      ],
    },
    diagram: {
      title: 'Le principe, en une image',
      legacy: 'Une demande arrive',
      legacyNote: 'Formulaire, courriel ou autre logiciel',
      engine: 'Le processus se déroule',
      engineNote: 'Étapes, rôles, validations, règles',
      modern: 'Le dossier est traité',
      modernNote: 'Tracé de bout en bout, sans relance manuelle',
      caption:
        'Au centre, votre processus : le déroulé que vous avez dessiné. Vos logiciels existants ne disparaissent pas — ils sont interrogés en chemin, à l’étape qui en a besoin.',
    },
    brochure: {
      title: 'La brochure, à emporter',
      text: 'Huit pages : le positionnement, le fonctionnement, les écrans réels, la sécurité et le déploiement, et le catalogue de processus. PDF, 1,8 Mo.',
      cta: 'Télécharger la brochure',
    },
    note: {
      title: 'Un mot sur la lecture des documents',
      text: 'bxFlow lit les documents joints à un dossier et propose de pré-remplir les champs qu’il sait reconnaître. C’est une aide à la saisie, pas une compréhension du document : la qualité dépend de la lisibilité de la pièce, et la validation vous revient toujours. Nous préférons l’annoncer ainsi plutôt que de vous laisser le découvrir en démonstration.',
    },
    cta: {
      title: 'Envie de voir tout ça en action ?',
      subtitle: 'On vous montre le produit sur un cas proche du vôtre.',
    },
  },

  screens: {
    eyebrow: 'En images',
    title: 'Le produit, écran par écran',
    subtitle:
      'Captures de l’application sur des dossiers de démonstration. Personnes, clients et montants sont fictifs.',
    items: [
      {
        title: 'L’entrée en relation, dessinée',
        text: 'Du dépôt du dossier à l’ouverture de la relation, avec renvoi pour correction et rejet motivé.',
        alt: 'Concepteur de processus de bxFlow affichant le circuit d’entrée en relation.',
      },
      {
        title: 'Une saisie guidée',
        text: 'Des listes fermées plutôt que de la saisie libre : chaque dossier se classe et se compare, et les champs obligatoires sont vérifiés avant l’envoi.',
        alt: 'Formulaire de déclaration de sinistre dans bxFlow, liste à choix multiples ouverte.',
      },
      {
        title: 'Un dossier qui interroge vos systèmes',
        text: 'À l’ouverture du dossier, la fiche pays est lue dans le service externe à partir du code ISO saisi : rien n’est recopié à la main.',
        alt: 'Dossier d’entrée en relation dans bxFlow : fiche pays chargée depuis un service SOAP à l’ouverture.',
      },
      {
        title: 'Un système existant, interrogé',
        text: 'Un vrai service SOAP appelé depuis bxFlow : la réponse XML revient en JSON, prête à remplir les champs d’un dossier.',
        alt: 'Test d’un connecteur SOAP dans bxFlow : appel FullCountryInfo sur le Sénégal, réponse affichée en JSON.',
      },
      {
        title: 'Des référentiels partagés',
        text: 'Clients, fournisseurs, agences : des fiches communes à tous les process, saisies à la main, importées depuis un fichier CSV ou tenues à jour par un connecteur.',
        alt: 'Référentiel Clients dans bxFlow : fiches avec référence KYC, segment et zone de résidence.',
      },
      {
        title: 'Le pilotage en direct',
        text: 'Plus de 20 000 contestations de transaction carte, réparties par statut et par canal.',
        alt: 'Tableau de bord bxFlow des contestations de transaction carte.',
      },
      {
        title: 'Le journal d’audit',
        text: 'Chaque action, son auteur et sa date, filtrable et exportable pour un contrôle.',
        alt: 'Journal d’audit de bxFlow filtré sur des dossiers de conformité.',
      },
    ],
  },

  useCases: {
    hero: {
      eyebrow: 'Cas d’usage',
      title: 'Des processus réglementés aux démarches du quotidien',
      subtitle:
        'bxFlow est d’abord pensé pour les établissements financiers, où chaque dossier doit tenir devant un contrôle. La même rigueur sert ensuite toutes les organisations.',
    },
    pattern: {
      problem: 'Le problème',
      solution: 'Avec bxFlow',
      benefit: 'Le bénéfice',
      examples: 'Processus livrés',
    },
    sectors: {
      banque: {
        name: 'Banque',
        problem:
          'Des obligations LCB-FT qui ne tolèrent pas l’approximation, des validations à quatre yeux, et un corebanking qu’on ne remplace pas.',
        solution:
          'Les processus de conformité sont livrés, jusqu’à la transmission à la cellule de renseignement financier, et bxFlow interroge votre corebanking en chemin, y compris en SOAP.',
        benefit:
          'Chaque décision est tracée — qui, quand, sur quelle base — et l’installation peut rester entièrement sur vos serveurs.',
        examples: ['Entrée en relation (KYC)', 'Déclaration d’opération suspecte', 'Revue périodique KYC', 'Contestation de transaction carte'],
      },
      assurance: {
        name: 'Assurance',
        problem:
          'Des sinistres complexes qui passent par plusieurs mains — gestionnaire, expert, souscripteur, comptabilité — avec un délai à tenir.',
        solution:
          'Le sinistre suit ses étapes de la déclaration au règlement, contre-expertise comprise ; garantie, franchise et recours sont consignés dans le dossier.',
        benefit:
          'Un dossier complet et daté pour chaque sinistre, consultable par l’audit interne comme par le contrôle.',
        examples: ['Gestion des sinistres complexes', 'Référencement courtier / intermédiaire', 'Validation client à risque élevé (PPE)'],
      },
      microfinance: {
        name: 'Microfinance',
        problem:
          'Des demandes nombreuses, des validations à respecter et des systèmes anciens difficiles à faire évoluer.',
        solution:
          'Chaque demande suit un circuit clair, avec ses validations et ses délais, en s’appuyant sur vos systèmes existants plutôt qu’en les remplaçant.',
        benefit:
          'Des demandes traitées plus vite, et un historique complet prêt pour le superviseur.',
        examples: ['Validation de crédit exceptionnel', 'Entrée en relation (KYC)', 'Réclamation client'],
      },
      entreprise: {
        name: 'Entreprises',
        problem:
          'Congés, achats, notes de frais, arrivées : des circuits de validation qui passent par des courriels et des tableurs.',
        solution:
          'Chaque démarche devient un processus avec ses validateurs, ses délais et ses relances, et vos logiciels existants sont interrogés quand une étape en a besoin.',
        benefit:
          'Des heures récupérées chaque semaine, et plus aucune demande perdue dans une boîte de réception.',
        examples: ['Demande d’achat', 'Note de frais', 'Onboarding collaborateur', 'Demande de congés'],
      },
    },
    cta: {
      title: 'Votre activité n’est pas listée ?',
      subtitle:
        'Si vos dossiers passent par plusieurs mains et doivent laisser une trace, bxFlow s’y applique. Voyons votre cas.',
    },
  },

  catalog: {
    hero: {
      eyebrow: 'Catalogue de processus',
      title: 'Vous ne partez pas d’une page blanche',
      subtitle:
        'Plus de 70 processus livrés avec leurs étapes, leurs rôles et leurs validations. Vous les ajustez à votre organisation au lieu de les construire, et nous ajoutons ceux qui vous manquent.',
    },
    filters: {
      all: 'Tous',
      label: 'Filtrer par catégorie',
      results_one: '{{count}} processus',
      results_other: '{{count}} processus',
    },
    // Intitulé posé au-dessus des étapes, sur chaque carte du catalogue.
    stepsLabel: 'Le déroulé',
    stepCount: '{{n}} étapes',
    roleCount: '{{n}} rôles',
    moreSteps: '+ {{n}} autres étapes',
    categories: {
      conformite: 'Conformité & risques',
      client: 'Banque, assurance & clients',
      finance: 'Finance',
      operations: 'Opérations',
      achats: 'Achats',
      it: 'IT & sécurité',
      juridique: 'Juridique',
      rh: 'RH',
    },
    missing: {
      title: 'Votre processus n’est pas dans la liste ?',
      text: 'Décrivez-nous votre circuit actuel : nous l’ajoutons au catalogue avec vous.',
      cta: 'Proposer un processus',
    },
  },

  security: {
    hero: {
      eyebrow: 'Sécurité',
      title: 'Ce que nous faisons, concrètement, pour protéger vos dossiers',
      subtitle:
        'Pas de promesses générales : les mesures en place, vérifiables dans le dossier sécurité que nous remettons à votre RSSI.',
    },
    pillars: [
      {
        title: 'Chiffrement',
        text: 'Les identifiants de connexion à vos systèmes sont chiffrés en AES-256-GCM, tout comme les pièces jointes stockées par l’application. Les échanges sont chiffrés en transit.',
      },
      {
        title: 'Séparation entre clients, éprouvée à chaque version',
        text: 'Un test automatique tente, pour chaque famille de données, d’atteindre les ressources d’un autre client. Une famille non couverte bloque la livraison.',
      },
      {
        title: 'Habilitations par action',
        text: 'Des rôles propres à chaque processus et des droits accordés action par action : créer, valider, extraire, supprimer. Un droit décoché est un droit retiré.',
      },
      {
        title: 'Connexion',
        text: 'Authentification unique SAML ou OpenID Connect, création des comptes depuis votre annuaire (SCIM), second facteur imposable à toute l’organisation.',
      },
      {
        title: 'Traçabilité',
        text: 'Chaque action est journalisée avec son auteur et sa date, y compris lorsqu’un administrateur agit à la place d’un utilisateur.',
      },
      {
        title: 'Sauvegardes',
        text: 'Des archives chiffrées de l’instance, planifiées, avec une copie déposée hors site que l’application ne peut pas effacer. Une restauration s’éprouve, elle ne se suppose pas.',
      },
    ],
    dossier: {
      title: 'Besoin d’aller plus loin ?',
      text: 'Nous remettons à vos équipes DSI et RSSI un dossier complet : matrice des habilitations, architecture, procédure de restauration.',
      cta: 'Demander le dossier sécurité',
    },
  },

  deployment: {
    hero: {
      eyebrow: 'Déploiement',
      title: 'Où vivent vos données, et comment le logiciel arrive chez vous',
      subtitle:
        'Deux façons d’installer bxFlow, le même logiciel dans les deux cas. Cette page décrit la seconde de bout en bout — celle qu’on vous demandera de justifier en comité.',
    },
    models: [
      {
        tag: 'En ligne',
        title: 'Hébergé chez nous',
        lead: 'Vous ouvrez un navigateur, et c’est tout.',
        text:
          'Nous installons, surveillons, mettons à jour et sauvegardons. Vos équipes se connectent sur une adresse qui vous appartient, à votre marque. Mise en service en une journée.',
        forWho: 'Pour démarrer vite, quand l’hébergement externe ne pose pas de difficulté réglementaire.',
      },
      {
        tag: 'Chez vous',
        title: 'Installé sur vos serveurs',
        lead: 'Le logiciel s’installe derrière votre pare-feu.',
        text:
          'Vos données ne sortent jamais de votre réseau. Aucune connexion Internet n’est nécessaire, ni pour installer, ni pour fonctionner ensuite. Les clés de chiffrement sont générées chez vous.',
        forWho: 'Pour les établissements dont les données ne peuvent pas quitter l’infrastructure.',
      },
    ],
    diagrams: {
      onprem: {
        title: 'Ce que vous obtenez, une fois installé',
        alt: 'Schéma : bxFlow installé dans le réseau de la banque, un seul point d’entrée, aucun flux sortant.',
        boundary: 'Votre réseau',
        users: 'Vos utilisateurs',
        proxy: 'Votre proxy',
        proxySub: 'TLS, votre certificat',
        app: 'bxFlow',
        appLines: ['Interface web', 'Moteur de processus', 'Tâches de fond'],
        db: 'Base de données',
        files: 'Fichiers chiffrés',
        storageNote: 'Joignables uniquement depuis l’application — aucun port ouvert',
        core: 'Votre système bancaire',
        coreSub: 'réseau interne',
        internet: 'Internet — aucun flux sortant requis',
      },
      saas: {
        title: 'Ce qui tourne chez nous',
        alt: 'Schéma : bxFlow hébergé, un espace séparé par client, sauvegardes chiffrées et copie hors site.',
        users: 'Vos utilisateurs',
        address: 'votre-banque.bxgroup.io',
        addressSub: 'votre logo, vos couleurs',
        hosted: 'bxFlow, hébergé',
        yourSpace: 'Votre espace',
        otherSpaces: ['Un autre client', 'Un autre client'],
        isolation: 'Séparation éprouvée automatiquement à chaque version',
        backups: 'Sauvegardes',
        offsite: 'Copie hors site',
        caption: 'Chaque client dans son espace. Les sauvegardes partent chiffrées vers un second emplacement.',
      },
    },
    same: {
      title: 'Le même logiciel, pas une version allégée',
      text:
        'Il n’existe qu’une seule base de code. Ce que vous voyez en démonstration est ce qui s’installe chez vous : mêmes écrans, mêmes processus, mêmes contrôles. Et changer d’avis plus tard ne demande pas de tout refaire — vos processus s’exportent dans un fichier et se réimportent ailleurs.',
    },
    compare: {
      title: 'Comment choisir',
      lead: 'Les huit questions qui reviennent en comité, et leur réponse dans chaque cas.',
      head: ['', 'Hébergé chez nous', 'Sur vos serveurs'],
      rows: [
        ['Où vivent les données', 'Sur notre infrastructure, dans un espace séparé par client', 'Sur vos serveurs, dans votre réseau'],
        ['Qui exploite au quotidien', 'Nous', 'Vos équipes, avec notre documentation'],
        ['Mises à jour', 'Appliquées par nous, sans intervention de votre part', 'Vous décidez du moment ; nous livrons la version'],
        ['Sauvegardes', 'Automatiques et chiffrées, avec une copie déposée ailleurs', 'Automatiques et chiffrées — vous en détenez les clés et les copies'],
        ['Accès Internet nécessaire', 'Oui, c’est un service en ligne', 'Aucun, ni à l’installation ni ensuite'],
        ['Délai de mise en service', 'Une journée', 'Deux à trois jours ouvrés, une fois les prérequis réunis'],
        ['Qui détient les clés de chiffrement', 'Nous', 'Vous, et elles ne nous sont jamais transmises'],
        ['Ce que l’éditeur peut consulter', 'Rien sans votre demande, et toute intervention est tracée', 'Rien : nous n’avons aucun accès à l’instance'],
      ],
    },
    onprem: {
      eyebrow: 'De bout en bout',
      title: 'Un déploiement sur vos serveurs, étape par étape',
      lead:
        'Ce qui se passe réellement, dans l’ordre, avec ce que nous attendons de vous à chaque fois. Rien d’implicite : c’est le document que votre direction informatique peut lire avant de s’engager.',
      detailLabel: 'Côté technique',
      steps: [
        {
          title: 'Cadrage',
          who: 'Une réunion, vous et nous',
          text:
            'Nous vous remettons la liste de ce qu’il faut : une machine, une adresse, un certificat. Vous nous dites ce qui est disponible. Rien ne commence tant que cette liste n’est pas verte — c’est ce qui évite les installations qui s’enlisent.',
          detail:
            'Serveur Linux avec Docker. Quatre cœurs, 8 Go de mémoire et 40 Go de disque suffisent pour démarrer ; huit cœurs et 16 Go pour un usage soutenu. Un seul port à ouvrir vers vos utilisateurs, aucun flux sortant requis.',
        },
        {
          title: 'Préparation de la livraison',
          who: 'Nous, chez nous',
          text:
            'Nous construisons votre paquet à partir de la version exacte qui a passé tous les tests automatisés. Il contient le logiciel, votre fichier de licence, la documentation d’exploitation et les empreintes qui vous permettront de vérifier que rien n’a été altéré en chemin.',
          detail:
            'La documentation part AVEC le paquet, jamais après : une procédure de restauration se lit un jour d’incident, souvent sans accès à autre chose.',
        },
        {
          title: 'Livraison',
          who: 'Par le canal que vous choisissez',
          text:
            'Support chiffré, dépôt sécurisé, remise en main propre : c’est votre politique qui décide. Nous ne vous demandons jamais d’ouvrir un accès vers nos serveurs, ni de créer un compte chez nous.',
          detail:
            'C’est le point que beaucoup escamotent : exiger un accès sortant vers un registre d’images annule le bénéfice d’une installation isolée. Nous ne le demandons pas, et l’installation n’en a pas besoin.',
        },
        {
          title: 'Installation',
          who: 'Votre exploitant, nous à ses côtés',
          text:
            'Deux commandes : charger, démarrer. La base de données se met à niveau toute seule au premier démarrage. Un compte administrateur est créé — le vôtre — et vous en changez le mot de passe avant que nous quittions la salle.',
          detail:
            'La base de données et le cache ne sont joignables que depuis l’intérieur de l’application ; un seul composant écoute sur le réseau. La documentation technique publique de l’interface de programmation est fermée.',
        },
        {
          title: 'Mise en réseau et chiffrement du transport',
          who: 'Votre équipe réseau',
          text:
            'bxFlow se place derrière votre proxy et votre certificat. Un fichier prévu à cet effet lui apprend à faire confiance à ce proxy, pour que les protections par adresse voient l’adresse réelle de l’utilisateur et non celle du proxy.',
          detail:
            'Sans ce réglage, la limitation du nombre de tentatives devient inopérante : tout le monde partagerait la même adresse. L’erreur est classique et invisible — d’où le fichier fourni d’avance plutôt qu’une ligne à trouver soi-même.',
        },
        {
          title: 'Recette',
          who: 'Ensemble, liste en main',
          text:
            'Une liste de contrôles se coche point par point : services démarrés, connexion réussie, quotas conformes au contrat, journal des tâches propre, essai d’un connecteur de bout en bout. Nous ne partons pas avant que tout soit vert.',
          detail:
            'La liste vérifie aussi que l’instance tourne bien en mode hors ligne — c’est ce qui distingue une livraison sur site d’une image destinée au service en ligne, et rien d’autre à l’écran ne le signale.',
        },
        {
          title: 'Sauvegardes, et une restauration éprouvée',
          who: 'Vous, avec notre guide',
          text:
            'Le produit se sauvegarde lui-même : une archive chiffrée de l’instance entière, à l’heure et à la fréquence que vous réglez depuis l’écran, avec une copie déposée ailleurs. Et nous éprouvons une restauration ensemble, avant de partir.',
          detail:
            'Une sauvegarde jamais restaurée n’est pas une sauvegarde. L’application ne peut pas effacer la copie déposée hors site : c’est délibéré, et c’est ce qui la protège d’un rançongiciel qui atteindrait la machine.',
        },
        {
          title: 'Mises à jour',
          who: 'Quand vous le décidez',
          text:
            'Nous livrons une version accompagnée d’une note qui dit ce qu’elle change. Vous chargez, vous basculez, vous vérifiez. Le retour en arrière reste possible.',
          detail:
            'Une mise à jour ne touche ni votre configuration, ni vos données, ni votre licence : celle-ci vit dans un fichier séparé et traverse les versions sans être affectée.',
        },
        {
          title: 'Suivi',
          who: 'Nous',
          text:
            'L’échéance de votre licence est annoncée dans l’application trente jours à l’avance. Nous revenons vers vous avant, pas après.',
          detail: '',
        },
      ],
    },
    cannot: {
      eyebrow: 'Ce que nous ne pouvons pas faire',
      title: 'Les limites que nous nous imposons, et pourquoi elles vous protègent',
      lead:
        'Une installation chez vous n’a de sens que si l’éditeur ne garde pas la main. Voici ce que cela veut dire concrètement — y compris ce que cela vous coûte.',
      items: [
        {
          title: 'Aucun accès à distance',
          text:
            'Pas de tunnel de maintenance, pas de remontée d’informations, aucun appel vers nos serveurs. Une instance installée chez vous fonctionne indéfiniment sans jamais nous joindre. En contrepartie, une intervention de notre part suppose que vous nous ouvriez un accès, ponctuellement et sous votre contrôle.',
        },
        {
          title: 'Nous ne pouvons pas lire vos données',
          text:
            'Les clés de chiffrement sont produites sur votre machine à l’installation et ne nous sont jamais transmises. Nous ne pouvons donc ni ouvrir une archive, ni restaurer une sauvegarde à votre place. C’est la contrepartie assumée de la maîtrise : la garde des clés est la vôtre, et elle se prépare.',
        },
        {
          title: 'Aucun compte éditeur sur votre instance',
          text:
            'L’installation crée votre administrateur, et lui seul. Les écrans d’administration de la plateforme ne sont même pas présents. C’est le point qui compte devant un contrôle : personne chez nous ne peut endosser l’identité d’un de vos collaborateurs, donc les validations enregistrées dans vos dossiers gardent leur valeur de preuve.',
        },
      ],
    },
    saas: {
      eyebrow: 'L’autre voie',
      title: 'L’hébergement chez nous, en pratique',
      lead:
        'Si l’hébergement externe est acceptable pour vous, la mise en service se compte en heures plutôt qu’en jours. Le reste ne change pas.',
      points: [
        {
          title: 'Votre adresse, votre marque',
          text:
            'Vos collaborateurs se connectent sur une adresse qui vous appartient, laquelle affiche votre logo et vos couleurs avant même la saisie du mot de passe. Ajouter un client ne demande aucun redémarrage.',
        },
        {
          title: 'Séparation entre clients, éprouvée en continu',
          text:
            'Chaque client vit dans un espace distinct. Cette séparation n’est pas seulement affirmée : elle est vérifiée automatiquement à chaque modification du logiciel, famille de données par famille de données, et une famille non couverte fait échouer la livraison.',
        },
        {
          title: 'Sauvegardes et copie hors site',
          text:
            'Chiffrées, planifiées, déposées sur un second emplacement dont le logiciel ne peut rien effacer. Leur fraîcheur se lit depuis l’application.',
        },
        {
          title: 'Connexion par votre annuaire',
          text:
            'Authentification unique SAML ou OpenID Connect, et création automatique des comptes depuis votre annuaire. Les arrivées et les départs se répercutent sans double saisie.',
        },
        {
          title: 'Réversibilité',
          text:
            'Vos processus et vos dossiers s’exportent dans des fichiers que vous conservez. À demander avant la signature plutôt qu’après un incident — et à rejouer une fois, pour vérifier que le fichier vous suffirait vraiment.',
        },
      ],
    },
    cta: {
      title: 'Un dossier technique pour votre direction informatique ?',
      text:
        'Prérequis détaillés, schéma des flux réseau, procédure de restauration, matrice des habilitations : nous remettons le dossier complet sur demande, avant toute discussion commerciale.',
      cta: 'Demander le dossier',
    },
  },
  pricing: {
    hero: {
      eyebrow: 'Tarifs',
      title: 'Une licence annuelle, calculée sur votre périmètre réel',
      subtitle:
        'Deux mesures fondent le chiffrage : les utilisateurs actifs et les processus en service. Nous l’établissons avec vous, à partir de votre situation.',
    },
    pilot: {
      badge: 'Pour commencer',
      title: 'Une licence pilote de 12 mois',
      text: 'Un périmètre ciblé — un ou deux processus, une équipe — pour mesurer les résultats sur vos propres dossiers avant d’étendre. Mise en route et paramétrage accompagnés.',
      cta: 'Demander un devis pilote',
    },
    tiersLabel: 'Trois périmètres types',
    quoteLine: 'Chiffrage sur devis, à partir de votre périmètre · réponse sous 24 à 48 h',
    ctaNote: 'Sans engagement',
    allTiersNote: 'Tous les périmètres donnent accès au catalogue de plus de 70 processus prêts à l’emploi.',
    tiers: [
      {
        name: 'Démarrage',
        tagline: 'Une équipe, un premier processus',
        features: [
          'Un ou deux processus du catalogue, ajustés à votre organisation',
          'Hébergé chez nous',
          'Écrans, rôles et validations paramétrés avec vous',
          'Formation des administrateurs de processus',
        ],
        cta: 'Demander un devis',
      },
      {
        name: 'Organisation',
        tagline: 'Plusieurs directions, plusieurs processus',
        features: [
          'Processus du catalogue et processus sur mesure',
          'Connexion à vos systèmes existants (REST, SOAP)',
          'Lecture des documents et éditique',
          'Tableaux de bord et extractions',
        ],
        cta: 'Demander un devis',
      },
      {
        name: 'Groupe',
        tagline: 'Filiales, grands volumes ou installation sur vos serveurs',
        features: [
          'Hébergé chez nous, ou installé sur vos serveurs sans accès de l’éditeur',
          'Plusieurs entités et filiales',
          'Connexion à votre annuaire (SSO, SCIM)',
          'Accompagnement dédié',
        ],
        cta: 'Discutons de votre projet',
      },
    ],
    note: 'Chaque proposition précise le nombre d’utilisateurs actifs et de processus couverts, ainsi que le mode de déploiement retenu.',
  },

  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Discutons de votre projet',
      subtitle:
        'Dites-nous où vous en êtes. Nous revenons vers vous rapidement pour organiser une démonstration adaptée à vos processus.',
    },
    form: {
      name: 'Nom complet',
      namePlaceholder: 'Votre nom',
      company: 'Entreprise',
      companyPlaceholder: 'Nom de votre organisation',
      email: 'Email professionnel',
      emailPlaceholder: 'vous@entreprise.com',
      phone: 'Téléphone',
      phonePlaceholder: '+221 …',
      message: 'Votre message',
      messagePlaceholder: 'Décrivez votre besoin ou vos processus en quelques mots…',
      required: 'obligatoire',
      submit: 'Envoyer ma demande',
      sending: 'Envoi en cours…',
      successTitle: 'Message envoyé, merci !',
      successText:
        'Nous avons bien reçu votre demande et revenons vers vous très vite.',
      errorTitle: 'L’envoi a échoué',
      errorText:
        'Un problème est survenu. Réessayez, ou écrivez-nous directement à ',
      notConfigured:
        'Le formulaire n’est pas encore relié. Configurez l’endpoint dans le fichier .env (VITE_FORMSPREE_ID) pour activer l’envoi.',
    },
    aside: {
      title: 'Ce qui se passe ensuite',
      steps: [
        'Nous étudions votre demande.',
        'Nous organisons une démonstration ciblée sur vos processus.',
        'Nous vous proposons une offre à votre mesure, sans engagement.',
      ],
      emailLabel: 'Écrivez-nous',
    },
  },

  demo: {
    hero: {
      eyebrow: 'Planifier une démo',
      title: 'Réservez votre démonstration en quelques clics',
      subtitle:
        'Choisissez le créneau qui vous arrange. La démonstration est en ligne, courte et centrée sur vos processus — sans engagement.',
      ctaScroll: 'Choisir mon créneau',
      ctaInline: 'Voir le calendrier',
    },
    benefits: [
      'Une démonstration adaptée à votre secteur et à vos besoins',
      'Des réponses concrètes à vos questions, en direct',
      'Une estimation claire de ce que bxFlow peut automatiser chez vous',
    ],
    duration: '30 minutes',
    durationLabel: 'Durée',
    online: 'En ligne',
    onlineLabel: 'Format',
    free: 'Sans engagement',
    freeLabel: 'Conditions',
    widgetTitle: 'Choisissez votre créneau',
    loading: 'Chargement du calendrier…',
    error: {
      title: 'Le calendrier n’a pas pu s’afficher',
      text: 'Vous pouvez ouvrir la prise de rendez-vous dans un nouvel onglet, ou nous écrire directement.',
      open: 'Ouvrir le calendrier',
    },
    fallback: {
      title: 'La prise de rendez-vous en ligne arrive bientôt',
      text: 'En attendant, écrivez-nous via le formulaire de contact : nous vous proposons un créneau adapté sous 24–48h.',
      cta: 'Aller au formulaire de contact',
    },
  },

  footer: {
    tagline: 'Vos processus métier, sous contrôle de bout en bout.',
    product: 'Produit',
    company: 'Ressources',
    legal: 'Légal',
    legalNotice: 'Mentions légales',
    privacy: 'Confidentialité',
    brochure: 'Brochure (PDF)',
    followUs: 'Suivez-nous',
    linkedinAria: 'bxGroup Horizon sur LinkedIn',
    // L'éditeur, nommé une fois et discrètement. bxFlow reste le sujet
    // de ce site ; le groupe apparaît là où l'on cherche qui est derrière.
    editeur: 'Un produit bxGroup',
    rights: 'Tous droits réservés.',
    madeWith: 'Fait pour les organisations d’Afrique francophone et d’ailleurs.',
  },

  notFound: {
    title: 'Page introuvable',
    text: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },
};

export type Translation = typeof fr;
