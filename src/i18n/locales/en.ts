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
