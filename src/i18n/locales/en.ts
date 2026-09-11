import type { Translation } from './fr';

export const en: Translation = {
  meta: {
    home: {
      title: 'bxFlow — Model your business processes, they run themselves',
      description:
        'Business process engine: draw the steps, the roles and the approvals, and bxFlow moves every case forward. More than 70 processes ready to run.',
    },
    product: {
      title: 'Product — bxFlow | Business process engine (BPMN)',
      description:
        'Process editor, roles and approvals, screens per step, deadlines and reminders. Your existing software is queried along the way, when a step needs it.',
    },
    useCases: {
      title: 'Use cases — bxFlow | SMEs, accounting firms, microfinance',
      description:
        'See how bxFlow saves time and makes processes more reliable for SMEs, accounting firms and microfinance institutions.',
    },
    catalog: {
      title: 'Process catalogue — bxFlow | 70+ ready-to-use processes',
      description:
        'More than 70 business processes ready to run: leave requests, expense reports, onboarding, client file opening. The library keeps growing.',
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
        'Three tiers matched to your size and needs. Start with a 12-month pilot licence. Request a custom quote.',
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
      title: 'Map your business processes, then let them run themselves.',
      subtitle:
        'Leave requests, expense reports, client onboarding, invoice approval: you draw the flow — the steps, the roles, the approvals, the rules — and bxFlow moves every case forward, to the right person at the right time.',
      ctaPrimary: 'Request a demo',
      ctaSecondary: 'See available processes',
      trust: 'More than 70 processes ready to run today.',
    },
    how: {
      eyebrow: 'How it works',
      title: 'From the map of your process to its execution, in 4 steps',
      steps: [
        {
          title: 'You draw the flow',
          text: 'The steps, who acts at each one, what triggers the move to the next. On screen, by dragging blocks — not a line of code.',
        },
        {
          title: 'A request opens a case',
          text: 'A form, an email or another system starts the process. The case lands on the first step, with its own reference.',
        },
        {
          title: 'Every step moves on its own',
          text: 'The case reaches the right person, waits for their approval, chases when it is late, and closes when everything is done.',
        },
        {
          title: 'Your existing software follows along',
          text: 'When a step needs a piece of information, or must write one elsewhere, bxFlow queries your existing systems — even legacy ones.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Concrete benefits',
      title: 'What you gain, right away',
      items: [
        {
          title: 'Time reclaimed',
          text: 'Repetitive tasks run on their own. Your teams focus on what really matters.',
        },
        {
          title: 'Fewer errors',
          text: 'No more manual re-keying: information stays accurate from end to end.',
        },
        {
          title: 'Full traceability',
          text: 'Every step is recorded. You know who did what, when, and where each file stands.',
        },
        {
          title: 'Your rules, yours to change',
          text: 'A step to add, an approver to change: your business teams do it themselves, with no development and no waiting.',
        },
      ],
    },
    // Aperçu des capacités. Le contenu vient de `product.capabilities`,
    // seuls les intitulés de section vivent ici — deux listes finiraient
    // par diverger, et c'est l'accueil qui resterait en retard.
    capabilities: {
      eyebrow: 'Everything bxFlow does',
      title: 'The full picture, before the details',
      subtitle:
        'From mapping a process to generating your letters, by way of bulk handling and business reference data.',
      cta: 'See every capability in detail',
    },
    catalog: {
      eyebrow: 'Process catalogue',
      title: 'More than 70 processes ready to run today',
      subtitle:
        'No need to build everything from scratch. bxFlow ships with a library of ready-made business processes — and it keeps growing.',
      cardCta: 'See all processes',
      missingTitle: 'Don’t see your process?',
      missingText:
        'The library grows every month, and we add your specific processes. Let’s talk.',
      missingCta: 'Let’s talk',
    },
    sectors: {
      eyebrow: 'Who it’s for',
      title: 'Built for organisations that want to move forward',
      cta: 'See all use cases',
    },
    finalCta: {
      title: 'Let’s see what bxFlow can automate for you',
      subtitle: 'A short demo, focused on your processes. No commitment.',
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
    note: {
      title: 'A word on automated reading',
      text: 'bxFlow reads a wide range of documents to pre-fill your files. The goal is never to replace your judgement, but to spare you repetitive entry and oversights. You always keep control of the final validation.',
    },
    cta: {
      title: 'Want to see it all in action?',
      subtitle: 'We’ll show you the product on a case close to yours.',
    },
  },

  useCases: {
    hero: {
      eyebrow: 'Use cases',
      title: 'Concrete benefits, sector by sector',
      subtitle:
        'bxFlow adapts to your business. Here’s how it changes daily life in our priority sectors.',
    },
    pattern: {
      problem: 'The problem',
      solution: 'With bxFlow',
      benefit: 'The benefit',
    },
    sectors: {
      pme: {
        name: 'SMEs',
        problem:
          'Several software tools that don’t communicate, repetitive admin tasks and information re-keyed several times.',
        solution:
          'We link your tools and automate your internal procedures (leave, expenses, onboarding) with ready-to-use processes.',
        benefit:
          'Your teams save hours every week and stop chasing information.',
      },
      accounting: {
        name: 'Accounting firms',
        problem:
          'Documents arriving by email in bulk, time-consuming manual entry and a risk of error on client files.',
        solution:
          'Incoming documents are read automatically, the information extracted and the client file opened with no re-keying.',
        benefit:
          'Less data entry, files handled faster and errors avoided down the line.',
      },
      microfinance: {
        name: 'Microfinance',
        problem:
          'Many requests, approval steps to follow and legacy systems that are hard to evolve.',
        solution:
          'Each request triggers a clear process, with the right approvals, while relying on your existing systems.',
        benefit:
          'Faster, more reliable handling of requests, with full traceability for compliance.',
      },
      aspirational: {
        name: 'Banking & insurance',
        problem:
          'Regulated processes, many systems in place and a strong requirement for traceability.',
        solution:
          'bxFlow orchestrates flows between your systems and hardens every step, with a full history.',
        benefit:
          'A solid base to digitalise demanding processes — let’s talk to assess your context.',
      },
    },
    cta: {
      title: 'Your sector isn’t listed?',
      subtitle:
        'bxFlow adapts to most organisations juggling several software tools. Let’s look at your case.',
    },
  },

  catalog: {
    hero: {
      eyebrow: 'Process catalogue',
      title: 'More than 70 processes ready to run',
      subtitle:
        'Each process is ready to use and customisable. The library keeps growing — and we add yours.',
    },
    filters: {
      all: 'All',
      label: 'Filter by category',
      results_one: '{{count}} process',
      results_other: '{{count}} processes',
    },
    // Intitulé posé au-dessus des étapes, sur chaque carte du catalogue.
    stepsLabel: 'The flow',
    categories: {
      rh: 'HR',
      finance: 'Finance',
      client: 'Client and payments',
      achats: 'Procurement',
      juridique: 'Legal',
      it: 'IT and security',
      conformite: 'Compliance and risk',
      operations: 'Operations',
    },
    missing: {
      title: 'Your process isn’t on the list?',
      text: 'The library grows every month. Tell us your need and we’ll add it.',
      cta: 'Suggest a process',
    },
  },

  security: {
    hero: {
      eyebrow: 'Security & trust',
      title: 'Your data, protected at every step',
      subtitle:
        'Security is not an option at bxFlow. Here are the key guarantees you can rely on.',
    },
    pillars: [
      {
        title: 'Data encryption',
        text: 'Your data is encrypted, in transit and at rest, to stay protected at all times.',
      },
      {
        title: 'Isolation between clients',
        text: 'Each client has a strictly separated space. Your data is never mixed with anyone else’s.',
      },
      {
        title: 'Controlled hosting',
        text: 'A managed hosting setup, with regular backups and continuously monitored availability.',
      },
      {
        title: 'Access control',
        text: 'Each person only accesses what concerns them, based on their role. Access is logged.',
      },
      {
        title: 'Full traceability',
        text: 'Every action is logged. You get a clear history, useful for your audits and compliance.',
      },
      {
        title: 'Compliance',
        text: 'Our practices are designed to meet confidentiality and data protection requirements.',
      },
    ],
    dossier: {
      title: 'Need to go further?',
      text: 'We provide a full security dossier for your IT and security teams.',
      cta: 'Request the full security dossier',
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
      title: 'An offer matched to your size and needs',
      subtitle:
        'No standard price: every project is different. We build an offer tailored to you, based on three tiers.',
    },
    pilot: {
      badge: 'Recommended to start',
      title: 'Start with a 12-month pilot licence',
      text: 'A quick start on a focused scope, to measure concrete benefits before scaling up. Support included.',
      cta: 'Request a custom quote',
    },
    tiersLabel: 'The right level for every stage of your project',
    popularBadge: 'Most chosen',
    onQuote: 'On request',
    onQuoteSub: 'priced to your scope',
    ctaNote: 'Reply within 24–48h · No commitment',
    allTiersNote: 'All tiers include access to the catalogue of 70+ ready-to-use processes.',
    tiers: [
      {
        name: 'Starter',
        tagline: 'To start with a first process',
        features: [
          'Scope focused on one priority need',
          'Ready-to-use processes from the catalogue',
          'Connection to your essential tools',
          'Guided setup',
        ],
        cta: 'Request a quote',
      },
      {
        name: 'Business',
        tagline: 'To automate several processes',
        highlighted: true,
        features: [
          'Several processes and departments',
          'Automated document reading',
          'Extended connections to your systems',
          'Advanced tracking and traceability',
        ],
        cta: 'Request a quote',
      },
      {
        name: 'Enterprise',
        tagline: 'For a large-scale rollout',
        features: [
          'Tailored, multi-entity scope',
          'Specific processes built with you',
          'Advanced integrations with your IT',
          'Dedicated support and guidance',
        ],
        cta: 'Let’s talk about your project',
      },
    ],
    note: 'Pricing is set according to your scope and the value delivered. Contact us for a custom quote.',
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
        'Pick the slot that suits you. The demo is online, short and focused on your processes — no commitment.',
      ctaScroll: 'Pick my slot',
      ctaInline: 'See the calendar',
    },
    benefits: [
      'A demo tailored to your sector and needs',
      'Concrete answers to your questions, live',
      'A clear estimate of what bxFlow can automate for you',
    ],
    duration: '30 minutes',
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
    tagline: 'Connect your software. Automate your processes.',
    product: 'Product',
    company: 'Resources',
    legal: 'Legal',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
    followUs: 'Follow us',
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
