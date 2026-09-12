import type { Translation } from './fr';

export const en: Translation = {
  meta: {
    home: {
      title: 'bxFlow — Your business processes, under control end to end',
      description:
        'Business process engine for banking, insurance and enterprises: KYC, AML, claims, purchasing. More than 70 ready-to-use processes, hosted or installed on your servers.',
    },
    product: {
      title: 'Product — bxFlow | Business process engine (BPMN)',
      description:
        'Process editor, roles and approvals, screens per step, deadlines and reminders. Your existing software is queried along the way, when a step needs it.',
    },
    useCases: {
      title: 'Use cases — bxFlow | Banking, insurance, microfinance, enterprises',
      description:
        'How bxFlow serves banking, insurance, microfinance and enterprises: delivered processes, traceable decisions, installation on your own servers.',
    },
    catalog: {
      title: 'Process catalogue — bxFlow | 70+ ready-to-use processes',
      description:
        'More than 70 business processes ready to run: leave requests, expense reports, onboarding, client file opening. The library keeps growing.',
    },
    team: {
      title: 'The team — bxFlow | Who builds the product',
      description:
        'Software architecture, business process modelling, development and project management: the five people who build bxFlow, and their backgrounds.',
    },
    security: {
      title: 'Security — bxFlow | Encryption, isolation, compliance',
      description:
        'Data encryption, strict isolation between clients, controlled hosting and compliance: the trust guarantees of bxFlow.',
    },
    deployment: {
      title: 'Deployment — bxFlow | On your servers or hosted, end to end',
      description:
        'How bxFlow is installed: hosted by us, or on your own servers behind your firewall. Prerequisites, steps, acceptance, backups, updates.',
    },
    pricing: {
      title: 'Pricing — bxFlow | Pilot licence and tailored tiers',
      description:
        'Three tiers matched to your size and needs. Start with six months free of charge. Request a custom quote.',
    },
    contact: {
      title: 'Contact & demo — bxFlow',
      description:
        'Let’s talk about your project. Request a demo of bxFlow and see how to automate your processes together.',
    },
    demo: {
      title: 'Book a demo — bxFlow',
      description:
        'Book a slot in a few clicks for a bxFlow demo tailored to your processes. Online, no commitment.',
    },
    documentation: {
      title: 'Documentation — bxFlow | Workflow scripting reference',
      description:
        'Technical reference to automate your bxFlow processes: the lib library, form behaviours, conditions, post-functions and calling connectors.',
    },
    legalNotice: {
      title: 'Legal notice — bxFlow',
      description: 'Legal information about the bxFlow website: publisher, hosting, intellectual property.',
    },
    privacy: {
      title: 'Privacy policy — bxFlow',
      description: 'How the bxFlow website collects, uses and protects your personal data.',
    },
  },

  nav: {
    home: 'Home',
    product: 'Product',
    useCases: 'Use cases',
    catalog: 'Catalogue',
    security: 'Security',
    pricing: 'Pricing',
    deployment: 'Deployment',
    trust: 'Trust',
    team: 'The team',
    teamDesc: 'Who builds bxFlow, and with what background.',
    securityDesc: 'Encryption, separation between clients, access audit trail.',
    deploymentDesc: 'On your servers or hosted by us — the end-to-end procedure.',
    contact: 'Contact',
    demo: 'Book a demo',
    documentation: 'Documentation',
    cta: 'Book a demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  common: {
    requestDemo: 'Request a demo',
    requestQuote: 'Request a quote',
    talkProject: 'Let’s talk about your project',
    seeAllProcesses: 'See all processes',
    learnMore: 'Learn more',
    getSecurityDossier: 'Request the full security dossier',
    skipToContent: 'Skip to content',
  },

  home: {
    hero: {
      eyebrow: 'Business process engine',
      title: 'Your business processes, under control end to end.',
      subtitle:
        'Client onboarding, suspicious activity reports, insurance claims, purchasing: every case follows its steps, roles and approvals, with a history that stands as evidence. More than 70 ready-to-use processes, hosted by us or installed on your own servers.',
      ctaPrimary: 'Request a demo',
      ctaSecondary: 'See available processes',
      trust: 'More than 70 processes ready to run today.',
      proofs: [
        'Installable on your servers, with no vendor access at all',
        'AML processes calibrated for WAEMU, CEMAC and Morocco',
        'Segregation of duties and an evidential history',
      ],
      shotAlt:
        'bxFlow screen: a client onboarding case at compliance review, with the client record, the time left and the available actions.',
      // Le suivi animé posé sur la capture du hero. Ce sont les étapes RÉELLES
      // du dossier affiché (CONF-0002, entrée en relation), avec leurs noms exacts :
      // une animation qui raconterait un autre processus que l'écran montré
      // se remarquerait aussitôt.
      live: {
        label: 'Case in progress',
        reference: 'CONF-0002',
        steps: ['Document collection', 'Document check', 'Screening & scoring', 'Compliance review', 'Relationship opened'],
        transitions: ['Submit the file', 'Approve', 'Approve', 'Approve'],
        created: 'Case created',
      },
    },
    how: {
      eyebrow: 'How it works',
      title: 'From the drawing of your process to its execution, in 4 steps',
      steps: [
        {
          title: 'You draw the flow',
          text: 'The steps, who acts at each one, what moves the case forward. On screen, by dragging blocks — not a line of code.',
        },
        {
          title: 'A request opens a case',
          text: 'A form, an email or another system starts the process. The case enters the first step, with its reference.',
        },
        {
          title: 'Each step reaches the right person',
          text: 'The case lands with whoever has to decide, waits for their approval, sends reminders when late, and closes once everything is done.',
        },
        {
          title: 'Your systems keep pace',
          text: 'When a step needs information or has to write it elsewhere, bxFlow queries your existing systems — even older ones.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Concrete benefits',
      title: 'What you gain',
      items: [
        {
          title: 'Decisions that hold',
          text: 'Every approval carries its author, its date and its reasoning. In front of an auditor, the case speaks for itself.',
        },
        {
          title: 'Time back',
          text: 'Cases reach the right person on their own and flag themselves when they stall. No more chasing by hand.',
        },
        {
          title: 'Fewer errors',
          text: 'Information is entered once, checked on screen, and passed to your systems without re-keying.',
        },
        {
          title: 'Your rules, adjustable',
          text: 'A step to add, an approver to change: your business teams do it themselves, without development or waiting.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'Everything bxFlow does',
      title: 'A complete overview, before the detail',
      subtitle:
        'From modelling a process to generating your letters, through bulk processing and business reference data.',
      cta: 'See each capability in detail',
    },
    catalog: {
      eyebrow: 'Process catalogue',
      title: 'You do not start from a blank page',
      subtitle:
        'More than 70 processes delivered with their steps, roles, screens and approvals: client onboarding, suspicious activity reports, insurance claims, purchasing, leave. You adjust them to your organisation instead of building them.',
      cardCta: 'See all processes',
      missingTitle: 'Your process is not listed?',
      missingText: 'We add it to the catalogue with you, starting from your current workflow.',
      missingCta: 'Let’s talk',
    },
    shots: {
      eyebrow: 'The product, as it is',
      title: 'Not a mock-up: the screens your teams will use',
      subtitle:
        'Captured from the application on demonstration cases. People, clients and amounts are fictitious; the rest is the product.',
      items: [
        {
          title: 'The process, drawn',
          text: 'The suspicious activity report as delivered: alert, compliance review, decision, filing with the financial intelligence unit.',
          alt: 'bxFlow process designer showing the suspicious activity report workflow end to end.',
        },
        {
          title: 'A claim, complete',
          text: 'A warehouse fire at cover analysis: policy, insured party, complexity factors, expert report attached — and a second expert opinion among the available actions.',
          alt: 'Fire claim case in bxFlow at the cover analysis step.',
        },
        {
          title: 'Who did what, and when',
          text: 'A case history: four people, four commented decisions. Nobody approves their own work.',
          alt: 'History of a bxFlow case showing successive transitions, their authors and their comments.',
        },
      ],
    },
    deploy: {
      eyebrow: 'Deployment',
      title: 'Hosted by us, or installed on your servers',
      text: 'The same software either way. On your servers, bxFlow runs with no connection back to the vendor, and no vendor account exists on your instance.',
      cta: 'See the end-to-end deployment',
    },
    sectors: {
      eyebrow: 'Who it is for',
      title: 'Built for cases that have to stand up to an audit',
      cta: 'See use cases',
    },
    finalCta: {
      title: 'Let’s see what bxFlow can run for you',
      subtitle: 'One hour, focused on your processes. No commitment.',
      cta: 'Request a demo',
    },
  },

  product: {
    hero: {
      eyebrow: 'The product',
      title: 'A process engine, and everything it needs around it',
      subtitle:
        'Map how your procedures unfold — steps, roles, approvals, transition rules — and let bxFlow execute them. Your existing software is queried along the way, whenever a step needs it.',
    },
    // Le schéma animé du hero. Quatre étapes ET une bifurcation : sans
    // elle, le dessin décrirait un tapis roulant plutôt qu'un processus.
    heroFlow: {
      steps: ['New request', 'Approval', 'Processing', 'Closed'],
      rejected: 'Rejected',
      // Les transitions portent leur nom : sans elles, le schéma décrit
      // un tapis roulant et rien ne dit qui fait avancer le dossier.
      transitions: ['Submit', 'Approve', 'Close'],
      reject: 'Reject',
      alt:
        'A case moving through a process: new request, approval, processing, closure — with a branch to rejection.',
    },
    capabilities: {
      title: 'What bxFlow does',
      items: [
        {
          title: 'Connecting your software',
          plain: 'Your old and new software finally exchange data.',
          tech: 'Gateway between existing systems (SOAP/WSDL/XML) and modern applications (REST/JSON APIs).',
        },
        {
          title: 'Flow orchestration',
          plain: 'Information follows the right path, from one tool to another, automatically.',
          tech: 'Configurable integration pipelines to transform, route and harden data exchanges.',
        },
        {
          title: 'Process engine (workflow)',
          plain: 'Your internal procedures run step by step, to the right people.',
          tech: 'BPM workflow engine: steps, roles, approvals and business rules orchestrated end to end.',
        },
        {
          title: 'Automatic request intake',
          plain: 'An email or a form comes in and triggers the right process on its own.',
          tech: 'Automatic ingestion via API and email, triggering the associated workflows.',
        },
        {
          title: 'Automated document reading',
          plain: 'The useful information in a document is extracted with no manual entry.',
          tech: 'Automatic processing of attachments to extract and pre-fill a file’s fields (invoices, forms, letters and other documents).',
        },
        {
          title: 'Document generation',
          plain: 'Your letters and certificates come out filled in, on your own letterhead, in one click.',
          tech: 'The customer uploads THEIR own Word or Excel template and places tags in it; everything the tags do not touch is preserved — letterhead, logo, styles. One document, or a mail merge over a selection of cases.',
        },
        {
          title: 'Bulk handling',
          plain: 'A thousand cases can be created, moved forward or exported in a single operation.',
          tech: 'Import template generated from the process fields (Excel or CSV), row-by-row report, bulk step transition and export over a selection — with caps and an expected count, so nothing runs blind.',
        },
        {
          title: 'Automations',
          plain: 'Actions fire on their own: at a step, on a date, or when a condition is met.',
          tech: 'Post-functions on entering a step or crossing a transition, scheduled rules, form behaviours (fields shown, hidden or locked depending on what is entered), email and SMS notifications.',
        },
        {
          title: 'Business reference data',
          plain: 'Your customers, suppliers or branches live inside the tool, kept up to date.',
          tech: 'Records replicated from a source system at a regular interval, selectable inside a case, copied into its fields — and able to open a case when an attribute changes (“customer moved to high risk → KYC review”).',
        },
        {
          title: 'Tracking and traceability',
          plain: 'You see in real time where each file stands.',
          tech: 'Full logging of steps, history and a tracking dashboard per file.',
        },
      ],
    },
    diagram: {
      title: 'The principle, in one picture',
      legacy: 'A request comes in',
      legacyNote: 'Form, email or another system',
      engine: 'The process unfolds',
      engineNote: 'Steps, roles, approvals, rules',
      modern: 'The case is handled',
      modernNote: 'Traced end to end, with no manual chasing',
      caption:
        'At the centre sits your process: the flow you drew. Your existing software does not go away — it is queried along the way, at the step that needs it.',
    },
    brochure: {
      title: 'The brochure, to take with you',
      text: 'Eight pages: positioning, how it works, real screens, security and deployment, and the process catalogue. PDF, 1.8 MB — in French.',
      cta: 'Download the brochure',
    },
    note: {
      title: 'A word on automated reading',
      text: 'bxFlow reads a wide range of documents to pre-fill your files. The goal is never to replace your judgement, but to spare you repetitive entry and oversights. You always keep control of the final validation.',
    },
    cta: {
      title: 'Want to see it all in action?',
      subtitle: 'We’ll show you the product on a case close to yours.',
    },
  },

  screens: {
    eyebrow: 'In pictures',
    title: 'The product, screen by screen',
    subtitle:
      'Captured from the application on demonstration cases. People, clients and amounts are fictitious.',
    items: [
      {
        title: 'Client onboarding, drawn',
        text: 'From file submission to opening the relationship, with send-back for correction and reasoned rejection.',
        alt: 'bxFlow process designer showing the client onboarding workflow.',
      },
      {
        title: 'Guided data entry',
        text: 'Closed lists instead of free text: every case can be sorted and compared, and required fields are checked before submission.',
        alt: 'Insurance claim form in bxFlow, with a multiple-choice list open.',
      },
      {
        title: 'A case that queries your systems',
        text: 'When the case opens, the country record is read from the external service using the ISO code entered: nothing is copied by hand.',
        alt: 'Client onboarding case in bxFlow: country record loaded from a SOAP service when the case opens.',
      },
      {
        title: 'An existing system, queried',
        text: 'A real SOAP service called from bxFlow: the XML response comes back as JSON, ready to fill a case’s fields.',
        alt: 'SOAP connector test in bxFlow: FullCountryInfo call for Senegal, response shown as JSON.',
      },
      {
        title: 'Shared reference data',
        text: 'Clients, suppliers, branches: records shared by every process, entered by hand, imported from a CSV file or kept current by a connector.',
        alt: 'Clients reference data in bxFlow: records with KYC reference, segment and residence zone.',
      },
      {
        title: 'Live oversight',
        text: 'More than 20,000 card transaction disputes, broken down by status and channel.',
        alt: 'bxFlow dashboard of card transaction disputes.',
      },
      {
        title: 'The audit log',
        text: 'Every action, its author and its date — filterable and exportable for an audit.',
        alt: 'bxFlow audit log filtered on compliance cases.',
      },
    ],
  },

  team: {
    hero: {
      eyebrow: 'The team',
      title: 'Who builds bxFlow',
      subtitle:
        'Five people: software architecture, business process modelling, development and project management. We have spent enough time inside banks and insurers to know where a case gets lost.',
    },
    membres: {
      boly: {
        role: 'Founder, software architect',
        bio: 'Business process engine specialist. He drives the product vision and the technology choices behind bxFlow.',
      },
      farba: {
        role: 'Workflow & digital transformation expert',
        bio: 'He supports the modelling and optimisation of business processes at our clients.',
      },
      guy: {
        role: 'Senior Java developer',
        bio: 'Specialist in BPM solutions and the Camunda platform.',
      },
      abdourahmane: {
        role: 'Full stack developer',
        bio: 'He builds and evolves the bxGroup solutions, from the engine to the screens.',
      },
      malak: {
        role: 'Senior project manager',
        bio: 'Business analysis and banking process specialist. She supports organisations in defining, analysing and improving their business processes.',
      },
    },
    taille: {
      title: 'A small team, and what that means for you',
      text: 'There are five of us, and we say so. That is exactly why your installation does not depend on us: on your servers, bxFlow runs with no connection back to the vendor, your encryption keys stay with you, and no vendor account exists on your instance. Your processes export to a file and import elsewhere — including without us.',
      cta: 'See the deployment procedure',
    },
  },

  useCases: {
    hero: {
      eyebrow: 'Use cases',
      title: 'From regulated processes to everyday requests',
      subtitle:
        'bxFlow is designed first for financial institutions, where every case has to stand up to an audit. The same rigour then serves any organisation.',
    },
    pattern: {
      problem: 'The problem',
      solution: 'With bxFlow',
      benefit: 'The benefit',
      examples: 'Delivered processes',
    },
    sectors: {
      banque: {
        name: 'Banking',
        problem:
          'AML obligations that leave no room for approximation, four-eyes approvals, and a core banking system nobody replaces.',
        solution:
          'Compliance processes are delivered, all the way to filing with the financial intelligence unit, and bxFlow queries your core banking system along the way, SOAP included.',
        benefit:
          'Every decision is traced — who, when, on what basis — and the installation can stay entirely on your servers.',
        examples: ['Client onboarding (KYC)', 'Suspicious transaction report', 'Periodic KYC review', 'Card transaction dispute'],
      },
      assurance: {
        name: 'Insurance',
        problem:
          'Complex claims passing through several hands — handler, expert, underwriter, accounting — against a deadline.',
        solution:
          'The claim moves from notification to settlement, second expert opinion included; cover, deductible and recourse are recorded in the case.',
        benefit:
          'A complete, dated file for every claim, available to internal audit and to the supervisor alike.',
        examples: ['Complex claims handling', 'Broker / intermediary onboarding', 'High-risk client approval (PEP)'],
      },
      microfinance: {
        name: 'Microfinance',
        problem:
          'Many requests, approvals to respect, and older systems that are hard to change.',
        solution:
          'Each request follows a clear path with its approvals and deadlines, building on your existing systems rather than replacing them.',
        benefit:
          'Requests handled faster, with a complete history ready for the supervisor.',
        examples: ['Exceptional credit approval', 'Client onboarding (KYC)', 'Customer complaint'],
      },
      entreprise: {
        name: 'Enterprises',
        problem:
          'Leave, purchasing, expenses, onboarding: approval chains running through emails and spreadsheets.',
        solution:
          'Each request becomes a process with its approvers, deadlines and reminders, and your existing systems are queried when a step needs them.',
        benefit:
          'Hours saved every week, and no request lost in an inbox again.',
        examples: ['Purchase request', 'Expense report', 'Employee onboarding', 'Leave request'],
      },
    },
    cta: {
      title: 'Your sector is not listed?',
      subtitle:
        'If your cases pass through several hands and must leave a trace, bxFlow applies. Let’s look at yours.',
    },
  },

  catalog: {
    hero: {
      eyebrow: 'Process catalogue',
      title: 'You do not start from a blank page',
      subtitle:
        'More than 70 processes delivered with their steps, roles and approvals. You adjust them to your organisation instead of building them, and we add the ones you are missing.',
    },
    filters: {
      all: 'All',
      label: 'Filter by category',
      results_one: '{{count}} process',
      results_other: '{{count}} processes',
    },
    stepsLabel: 'The flow',
    stepCount: '{{n}} steps',
    roleCount: '{{n}} roles',
    moreSteps: '+ {{n}} more steps',
    categories: {
      conformite: 'Compliance and risk',
      client: 'Banking, insurance and clients',
      finance: 'Finance',
      operations: 'Operations',
      achats: 'Procurement',
      it: 'IT and security',
      juridique: 'Legal',
      rh: 'HR',
    },
    missing: {
      title: 'Your process is not listed?',
      text: 'Describe your current workflow: we add it to the catalogue with you.',
      cta: 'Suggest a process',
    },
  },

  security: {
    hero: {
      eyebrow: 'Security',
      title: 'What we actually do to protect your cases',
      subtitle:
        'No broad promises: the measures in place, verifiable in the security dossier we hand to your CISO.',
    },
    pillars: [
      {
        title: 'Encryption',
        text: 'The credentials used to reach your systems are encrypted with AES-256-GCM, as are the attachments stored by the application. Traffic is encrypted in transit.',
      },
      {
        title: 'Separation between clients, tested on every release',
        text: 'An automated test tries, for each family of data, to reach another client’s resources. A family left uncovered blocks the release.',
      },
      {
        title: 'Permissions by action',
        text: 'Roles specific to each process and rights granted action by action: create, approve, export, delete. An unticked right is a removed right.',
      },
      {
        title: 'Sign-in',
        text: 'Single sign-on via SAML or OpenID Connect, account provisioning from your directory (SCIM), and a second factor that can be enforced organisation-wide.',
      },
      {
        title: 'Traceability',
        text: 'Every action is logged with its author and date, including when an administrator acts on behalf of a user.',
      },
      {
        title: 'Backups',
        text: 'Scheduled, encrypted instance archives, with an off-site copy the application cannot delete. A restore gets tested, not assumed.',
      },
    ],
    dossier: {
      title: 'Need to go further?',
      text: 'We hand your IT and security teams a complete dossier: authorisation matrix, architecture, restore procedure.',
      cta: 'Request the security dossier',
    },
  },

  deployment: {
    hero: {
      eyebrow: 'Deployment',
      title: 'Where your data lives, and how the software reaches you',
      subtitle:
        'Two ways to install bxFlow, the same software in both cases. This page describes the second one end to end — the one you will be asked to justify in committee.',
    },
    models: [
      {
        tag: 'Online',
        title: 'Hosted by us',
        lead: 'You open a browser, and that is all.',
        text:
          'We install, monitor, update and back up. Your teams sign in on an address that belongs to you, carrying your brand. Live within a day.',
        forWho: 'To start quickly, when external hosting raises no regulatory difficulty.',
      },
      {
        tag: 'On your servers',
        title: 'Installed on your premises',
        lead: 'The software runs behind your firewall.',
        text:
          'Your data never leaves your network. No internet connection is required, neither to install nor to run afterwards. Encryption keys are generated on your machine.',
        forWho: 'For institutions whose data cannot leave their own infrastructure.',
      },
    ],
    diagrams: {
      onprem: {
        title: 'What you end up with, once installed',
        alt: 'Diagram: bxFlow installed inside the bank network, one entry point, no outbound traffic.',
        boundary: 'Your network',
        users: 'Your users',
        proxy: 'Your proxy',
        proxySub: 'TLS, your certificate',
        app: 'bxFlow',
        appLines: ['Web interface', 'Process engine', 'Background jobs'],
        db: 'Database',
        files: 'Encrypted files',
        storageNote: 'Reachable only from the application — no open port',
        core: 'Your banking system',
        coreSub: 'internal network',
        internet: 'Internet — no outbound traffic required',
      },
      saas: {
        title: 'What runs on our side',
        alt: 'Diagram: bxFlow hosted, a separate space per client, encrypted backups and an off-site copy.',
        users: 'Your users',
        address: 'your-bank.bxgroup.io',
        addressSub: 'your logo, your colours',
        hosted: 'bxFlow, hosted',
        yourSpace: 'Your space',
        otherSpaces: ['Another client', 'Another client'],
        isolation: 'Separation tested automatically on every release',
        backups: 'Backups',
        offsite: 'Off-site copy',
        caption: 'Each client in its own space. Backups leave encrypted to a second location.',
      },
    },
    same: {
      title: 'The same software, not a stripped-down edition',
      text:
        'There is a single codebase. What you see in a demonstration is what gets installed: same screens, same processes, same controls. And changing your mind later does not mean starting over — your processes export to a file and import elsewhere.',
    },
    compare: {
      title: 'How to choose',
      lead: 'The eight questions that come up in committee, answered for each option.',
      head: ['', 'Hosted by us', 'On your servers'],
      rows: [
        ['Where the data lives', 'On our infrastructure, in a space separated per client', 'On your servers, inside your network'],
        ['Who runs it day to day', 'We do', 'Your teams, with our documentation'],
        ['Updates', 'Applied by us, with nothing to do on your side', 'You choose when; we ship the version'],
        ['Backups', 'Automatic and encrypted, with a copy held elsewhere', 'Automatic and encrypted — you hold the keys and the copies'],
        ['Internet access required', 'Yes, it is an online service', 'None, neither to install nor afterwards'],
        ['Time to go live', 'One day', 'Two to three working days, once the prerequisites are met'],
        ['Who holds the encryption keys', 'We do', 'You do, and they are never passed to us'],
        ['What the vendor can see', 'Nothing without your request, and every action is logged', 'Nothing: we have no access to the instance'],
      ],
    },
    onprem: {
      eyebrow: 'End to end',
      title: 'An on-premise deployment, step by step',
      lead:
        'What actually happens, in order, with what we expect from you at each stage. Nothing implicit: this is the document your IT department can read before committing.',
      detailLabel: 'Technical detail',
      steps: [
        {
          title: 'Scoping',
          who: 'One meeting, you and us',
          text:
            'We hand you the list of what is needed: a machine, an address, a certificate. You tell us what is available. Nothing starts until that list is green — which is what keeps installations from stalling.',
          detail:
            'A Linux server with Docker. Four cores, 8 GB of memory and 40 GB of disk are enough to start; eight cores and 16 GB for sustained use. A single port to open towards your users, no outbound traffic required.',
        },
        {
          title: 'Preparing the delivery',
          who: 'Us, on our side',
          text:
            'We build your package from the exact version that passed every automated test. It carries the software, your licence file, the operations documentation, and the fingerprints that let you verify nothing was altered on the way.',
          detail:
            'The documentation ships WITH the package, never after: a restore procedure is read on the day of an incident, often with access to nothing else.',
        },
        {
          title: 'Delivery',
          who: 'Through the channel you choose',
          text:
            'Encrypted media, secure drop, hand delivery: your policy decides. We never ask you to open access towards our servers, nor to create an account with us.',
          detail:
            'This is the point many vendors gloss over: requiring outbound access to an image registry cancels the benefit of an isolated installation. We do not ask for it, and the installation does not need it.',
        },
        {
          title: 'Installation',
          who: 'Your operator, with us alongside',
          text:
            'Two commands: load, start. The database upgrades itself on first start. An administrator account is created — yours — and you change its password before we leave the room.',
          detail:
            'The database and the cache are reachable only from inside the application; a single component listens on the network. The public technical documentation of the programming interface is closed.',
        },
        {
          title: 'Networking and transport encryption',
          who: 'Your network team',
          text:
            'bxFlow sits behind your proxy and your certificate. A file provided for the purpose teaches it to trust that proxy, so that address-based protections see the user’s real address rather than the proxy’s.',
          detail:
            'Without that setting, rate limiting stops working: everyone would share one address. The mistake is common and invisible — hence a file shipped in advance rather than a line to find on your own.',
        },
        {
          title: 'Acceptance',
          who: 'Together, list in hand',
          text:
            'A checklist is ticked point by point: services running, sign-in working, quotas matching the contract, a clean task log, one connector tested end to end. We do not leave before everything is green.',
          detail:
            'The list also verifies the instance is running in offline mode — that is what distinguishes an on-premise delivery from an image meant for the online service, and nothing else on screen shows it.',
        },
        {
          title: 'Backups, and a restore actually tested',
          who: 'You, with our guide',
          text:
            'The product backs itself up: an encrypted archive of the whole instance, at the time and frequency you set from the screen, with a copy dropped elsewhere. And we test a restore together before we leave.',
          detail:
            'A backup never restored is not a backup. The application cannot delete the off-site copy: that is deliberate, and it is what protects it from ransomware reaching the machine.',
        },
        {
          title: 'Updates',
          who: 'When you decide',
          text:
            'We ship a version with a note saying what it changes. You load, you switch over, you verify. Rolling back stays possible.',
          detail:
            'An update touches neither your configuration, nor your data, nor your licence: the licence lives in a separate file and crosses versions untouched.',
        },
        {
          title: 'Follow-up',
          who: 'Us',
          text:
            'Your licence expiry is announced inside the application thirty days ahead. We come back to you before it, not after.',
          detail: '',
        },
      ],
    },
    cannot: {
      eyebrow: 'What we cannot do',
      title: 'The limits we impose on ourselves, and why they protect you',
      lead:
        'An installation on your premises only means something if the vendor does not keep the keys. Here is what that means in practice — including what it costs you.',
      items: [
        {
          title: 'No remote access',
          text:
            'No maintenance tunnel, no telemetry, no call back to our servers. An instance installed on your premises runs indefinitely without ever reaching us. In return, any intervention on our part requires you to open access, temporarily and under your control.',
        },
        {
          title: 'We cannot read your data',
          text:
            'Encryption keys are produced on your machine at installation and never passed to us. We can therefore neither open an archive nor restore a backup on your behalf. That is the accepted cost of control: custody of the keys is yours, and it has to be prepared for.',
        },
        {
          title: 'No vendor account on your instance',
          text:
            'The installation creates your administrator, and only that. The platform administration screens are not even present. This is what matters under audit: nobody on our side can assume one of your staff members’ identity, so the approvals recorded in your cases keep their evidential value.',
        },
      ],
    },
    saas: {
      eyebrow: 'The other route',
      title: 'Hosting with us, in practice',
      lead:
        'If external hosting is acceptable to you, going live is measured in hours rather than days. Nothing else changes.',
      points: [
        {
          title: 'Your address, your brand',
          text:
            'Your staff sign in on an address that belongs to you, showing your logo and your colours before the password is even typed. Adding a client requires no restart.',
        },
        {
          title: 'Separation between clients, continuously tested',
          text:
            'Each client lives in a distinct space. That separation is not merely asserted: it is verified automatically on every change to the software, data family by data family, and an uncovered family fails the release.',
        },
        {
          title: 'Backups and an off-site copy',
          text:
            'Encrypted, scheduled, dropped to a second location that the software cannot erase anything from. Their freshness is visible from inside the application.',
        },
        {
          title: 'Sign-in through your directory',
          text:
            'Single sign-on via SAML or OpenID Connect, and automatic account provisioning from your directory. Joiners and leavers propagate without double entry.',
        },
        {
          title: 'Reversibility',
          text:
            'Your processes and your cases export to files you keep. Ask for it before signing rather than after an incident — and replay it once, to check the file would really be enough.',
        },
      ],
    },
    cta: {
      title: 'A technical dossier for your IT department?',
      text:
        'Detailed prerequisites, network flow diagram, restore procedure, authorisation matrix: we hand over the full dossier on request, before any commercial discussion.',
      cta: 'Request the dossier',
    },
  },
  pricing: {
    hero: {
      eyebrow: 'Pricing',
      title: 'An annual licence, sized to your actual scope',
      subtitle:
        'Two measures drive the quote: active users and processes in service. We work it out with you, from your situation.',
    },
    pilot: {
      badge: 'To get started',
      title: 'Six months, no invoice',
      text: 'A focused scope — one or two processes, one team — to measure results on your own cases before scaling. Hosted by us or installed on your servers, with onboarding and configuration supported. After six months the subscription starts at the agreed rate, unless you cancel.',
      cta: 'Request a pilot quote',
    },
    tiersLabel: 'Three typical scopes',
    quoteLine: 'Quote-based, from your scope · reply within 24 to 48 hours',
    ctaNote: 'No commitment',
    allTiersNote: 'Every scope includes the catalogue of more than 70 ready-to-use processes.',
    tiers: [
      {
        name: 'Starter',
        tagline: 'One team, a first process',
        features: [
          'One or two catalogue processes, adjusted to your organisation',
          'Hosted by us',
          'Screens, roles and approvals configured with you',
          'Training for process administrators',
        ],
        cta: 'Request a quote',
      },
      {
        name: 'Organisation',
        tagline: 'Several departments, several processes',
        features: [
          'Catalogue processes and tailored processes',
          'Connection to your existing systems (REST, SOAP)',
          'Document reading and document generation',
          'Dashboards and exports',
        ],
        cta: 'Request a quote',
      },
      {
        name: 'Group',
        tagline: 'Subsidiaries, large volumes or installation on your servers',
        features: [
          'Hosted by us, or installed on your servers with no vendor access',
          'Several entities and subsidiaries',
          'Connection to your directory (SSO, SCIM)',
          'Dedicated support',
        ],
        cta: 'Let’s discuss your project',
      },
    ],
    note: 'Each proposal states the number of active users and processes covered, and the deployment mode chosen.',
  },

  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your project',
      subtitle:
        'Tell us where you stand. We’ll get back to you quickly to arrange a demo tailored to your processes.',
    },
    form: {
      name: 'Full name',
      namePlaceholder: 'Your name',
      company: 'Company',
      companyPlaceholder: 'Your organisation’s name',
      email: 'Work email',
      emailPlaceholder: 'you@company.com',
      phone: 'Phone',
      phonePlaceholder: '+221 …',
      message: 'Your message',
      messagePlaceholder: 'Describe your need or your processes in a few words…',
      required: 'required',
      submit: 'Send my request',
      sending: 'Sending…',
      successTitle: 'Message sent, thank you!',
      successText: 'We’ve received your request and will get back to you very soon.',
      errorTitle: 'Sending failed',
      errorText: 'Something went wrong. Try again, or email us directly at ',
      notConfigured:
        'The form is not connected yet. Set the endpoint in the .env file (VITE_FORMSPREE_ID) to enable sending.',
    },
    aside: {
      title: 'What happens next',
      steps: [
        'We review your request.',
        'We arrange a demo focused on your processes.',
        'We propose an offer tailored to you, with no commitment.',
      ],
      emailLabel: 'Email us',
    },
  },

  demo: {
    hero: {
      eyebrow: 'Book a demo',
      title: 'Book your demo in a few clicks',
      subtitle:
        'Pick the slot that suits you. The demo runs for one hour, online, and covers your processes — no commitment.',
      ctaScroll: 'Pick my slot',
      ctaInline: 'See the calendar',
    },
    benefits: [
      'A demo tailored to your sector and needs',
      'Concrete answers to your questions, live',
      'A clear estimate of what bxFlow can automate for you',
    ],
    duration: '1 hour',
    durationLabel: 'Duration',
    online: 'Online',
    onlineLabel: 'Format',
    free: 'No commitment',
    freeLabel: 'Terms',
    widgetTitle: 'Choose your slot',
    loading: 'Loading calendar…',
    error: {
      title: 'The calendar could not be displayed',
      text: 'You can open the booking page in a new tab, or email us directly.',
      open: 'Open the calendar',
    },
    fallback: {
      title: 'Online booking is coming soon',
      text: 'In the meantime, reach out via the contact form: we’ll propose a suitable slot within 24–48h.',
      cta: 'Go to the contact form',
    },
  },

  footer: {
    tagline: 'Your business processes, under control end to end.',
    product: 'Product',
    company: 'Resources',
    legal: 'Legal',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
    brochure: 'Brochure (PDF, French)',
    followUs: 'Follow us',
    linkedinAria: 'bxGroup Horizon on LinkedIn',
    // L'éditeur, nommé une fois et discrètement. bxFlow reste le sujet
    // de ce site ; le groupe apparaît là où l'on cherche qui est derrière.
    editeur: 'A bxGroup product',
    rights: 'All rights reserved.',
    madeWith: 'Built for organisations across French-speaking Africa and beyond.',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you’re looking for doesn’t exist or has moved.',
    cta: 'Back to home',
  },
};
