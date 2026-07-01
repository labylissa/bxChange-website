import type { Translation } from './fr';

export const en: Translation = {
  meta: {
    home: {
      title: 'bxChange — Connect your software, automate your processes',
      description:
        'bxChange links your legacy software to modern tools and automates your business processes. 20+ ready-to-run processes. SMEs, accounting firms, microfinance.',
    },
    product: {
      title: 'Product — bxChange | Connector and process automation',
      description:
        'Connect your existing systems to modern apps, orchestrate your flows and automate business processes with automated document reading.',
    },
    useCases: {
      title: 'Use cases — bxChange | SMEs, accounting firms, microfinance',
      description:
        'See how bxChange saves time and makes processes more reliable for SMEs, accounting firms and microfinance institutions.',
    },
    catalog: {
      title: 'Process catalogue — bxChange | 20+ ready-to-use processes',
      description:
        'More than 20 business processes ready to run: leave requests, expense reports, onboarding, client file opening. The library keeps growing.',
    },
    security: {
      title: 'Security — bxChange | Encryption, isolation, compliance',
      description:
        'Data encryption, strict isolation between clients, controlled hosting and compliance: the trust guarantees of bxChange.',
    },
    pricing: {
      title: 'Pricing — bxChange | Pilot licence and tailored tiers',
      description:
        'Three tiers matched to your size and needs. Start with a 12-month pilot licence. Request a custom quote.',
    },
    contact: {
      title: 'Contact & demo — bxChange',
      description:
        'Let’s talk about your project. Request a demo of bxChange and see how to automate your processes together.',
    },
    demo: {
      title: 'Book a demo — bxChange',
      description:
        'Book a slot in a few clicks for a bxChange demo tailored to your processes. Online, no commitment.',
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
      eyebrow: 'Process automation platform',
      title: 'Your software doesn’t talk to each other? bxChange connects it.',
      subtitle:
        'Your legacy software and your new tools finally work together. bxChange moves information automatically and takes care of your internal procedures — no re-keying, no errors, no waiting on IT.',
      ctaPrimary: 'Request a demo',
      ctaSecondary: 'See available processes',
      trust: 'More than 20 processes ready to run today.',
    },
    how: {
      eyebrow: 'How it works',
      title: 'From your existing tools to automated processes, in 4 steps',
      steps: [
        {
          title: 'We plug into your tools',
          text: 'bxChange connects to your current software, even legacy ones, without replacing them or restarting everything.',
        },
        {
          title: 'Information flows on its own',
          text: 'Data moves from one tool to another automatically. No more copy-pasting or double entry.',
        },
        {
          title: 'Documents are read for you',
          text: 'An email or attachment comes in? The useful information is extracted automatically to open a file.',
        },
        {
          title: 'Your procedures run themselves',
          text: 'Requests, approvals, reminders: each step moves at the right time, to the right person.',
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
          title: 'Autonomous, without IT',
          text: 'Your business teams launch and track processes themselves, without waiting on IT.',
        },
      ],
    },
    catalog: {
      eyebrow: 'Process catalogue',
      title: 'More than 20 processes ready to run today',
      subtitle:
        'No need to build everything from scratch. bxChange ships with a library of ready-made business processes — and it keeps growing.',
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
      title: 'Let’s see what bxChange can automate for you',
      subtitle: 'A short demo, focused on your processes. No commitment.',
      cta: 'Request a demo',
    },
  },

  product: {
    hero: {
      eyebrow: 'The product',
      title: 'A platform that links your tools and automates your processes',
      subtitle:
        'bxChange brings together everything you need to connect your software, move your data and drive your business procedures end to end.',
    },
    capabilities: {
      title: 'What bxChange does',
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
          title: 'Tracking and traceability',
          plain: 'You see in real time where each file stands.',
          tech: 'Full logging of steps, history and a tracking dashboard per file.',
        },
      ],
    },
    diagram: {
      title: 'The principle, in one picture',
      legacy: 'Your existing software',
      legacyNote: 'Legacy systems, often isolated',
      engine: 'bxChange',
      engineNote: 'Connects, translates, automates',
      modern: 'Your modern tools',
      modernNote: 'Today’s apps and services',
      caption:
        'bxChange sits in the middle: it translates what your legacy software “says” into a language your modern tools understand, and vice versa.',
    },
    note: {
      title: 'A word on automated reading',
      text: 'bxChange reads a wide range of documents to pre-fill your files. The goal is never to replace your judgement, but to spare you repetitive entry and oversights. You always keep control of the final validation.',
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
        'bxChange adapts to your business. Here’s how it changes daily life in our priority sectors.',
    },
    pattern: {
      problem: 'The problem',
      solution: 'With bxChange',
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
          'bxChange orchestrates flows between your systems and hardens every step, with a full history.',
        benefit:
          'A solid base to digitalise demanding processes — let’s talk to assess your context.',
      },
    },
    cta: {
      title: 'Your sector isn’t listed?',
      subtitle:
        'bxChange adapts to most organisations juggling several software tools. Let’s look at your case.',
    },
  },

  catalog: {
    hero: {
      eyebrow: 'Process catalogue',
      title: 'More than 20 processes ready to run',
      subtitle:
        'Each process is ready to use and customisable. The library keeps growing — and we add yours.',
    },
    filters: {
      all: 'All',
      label: 'Filter by category',
      results_one: '{{count}} process',
      results_other: '{{count}} processes',
    },
    categories: {
      rh: 'HR',
      finance: 'Finance',
      commercial: 'Sales',
      support: 'Support',
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
        'Security is not an option at bxChange. Here are the key guarantees you can rely on.',
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
    tiersLabel: 'Three tiers, based on your scope',
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
    },
    benefits: [
      'A demo tailored to your sector and needs',
      'Concrete answers to your questions, live',
      'A clear estimate of what bxChange can automate for you',
    ],
    duration: '30 minutes',
    durationLabel: 'Duration',
    online: 'Online',
    onlineLabel: 'Format',
    free: 'No commitment',
    freeLabel: 'Terms',
    widgetTitle: 'Choose your slot',
    loading: 'Loading calendar…',
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
    rights: 'All rights reserved.',
    madeWith: 'Built for organisations across French-speaking Africa and beyond.',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you’re looking for doesn’t exist or has moved.',
    cta: 'Back to home',
  },
};
