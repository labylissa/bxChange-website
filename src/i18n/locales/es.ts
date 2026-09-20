import type { Translation } from './fr';

export const es: Translation = {
  meta: {
    home: {
      title: 'bxFlow — Sus procesos de negocio, bajo control de principio a fin',
      description:
        'Motor de procesos de negocio para la banca, los seguros y la empresa: KYC, PBC-FT, siniestros, compras. Más de 70 procesos listos para usar, alojados o instalados en sus servidores.',
    },
    product: {
      title: 'Producto — bxFlow | Motor de procesos de negocio (BPMN)',
      description:
        'Editor de procesos, roles y aprobaciones, pantallas por etapa, plazos y recordatorios. Sus aplicaciones actuales se consultan sobre la marcha, cuando una etapa lo necesita.',
    },
    useCases: {
      title: 'Casos de uso — bxFlow | Banca, seguros, microfinanzas, empresas',
      description:
        'Cómo sirve bxFlow a la banca, los seguros, las microfinanzas y la empresa: procesos entregados, decisiones trazadas, instalación posible en sus servidores.',
    },
    catalog: {
      title: 'Catálogo de procesos — bxFlow | Más de 70 procesos listos para usar',
      description:
        'Más de 70 procesos de negocio entregados con sus etapas, sus roles y sus aprobaciones: vacaciones, gastos de viaje, incorporación, alta de cliente, revisión KYC.',
    },
    team: {
      title: 'El equipo — bxFlow | Quién construye el producto',
      description:
        'Arquitectura de software, modelado de procesos, desarrollo y dirección de proyectos: las personas que construyen bxFlow y su trayectoria.',
    },
    security: {
      title: 'Seguridad — bxFlow | Cifrado, aislamiento, cumplimiento',
      description:
        'Cifrado de los datos, aislamiento estricto entre clientes, alojamiento controlado y cumplimiento: las garantías de confianza de bxFlow.',
    },
    deployment: {
      title: 'Despliegue — bxFlow | En sus servidores o alojado, de principio a fin',
      description:
        'Cómo se instala bxFlow: alojado por nosotros o en sus servidores, detrás de su cortafuegos. Requisitos, etapas, validación, copias de seguridad y actualizaciones.',
    },
    pricing: {
      title: 'Precios — bxFlow | Seis meses sin factura, después tramos a medida',
      description:
        'Tres tramos adaptados a su tamaño y a sus necesidades. Empiece con seis meses sin factura. Solicite un presupuesto personalizado.',
    },
    contact: {
      title: 'Contacto y demostración — bxFlow',
      description:
        'Hablemos de su proyecto. Solicite una demostración de bxFlow y veamos juntos cómo automatizar sus procesos.',
    },
    demo: {
      title: 'Programar una demostración — bxFlow',
      description:
        'Reserve en unos clics una cita para una demostración de bxFlow adaptada a sus procesos. En línea y sin compromiso.',
    },
    documentation: {
      title: 'Documentación — bxFlow | Referencia de scripting de workflow',
      description:
        'Referencia técnica para automatizar sus procesos de bxFlow: biblioteca lib, comportamientos de formulario, condiciones, posfunciones y llamada a conectores.',
    },
    legalNotice: {
      title: 'Aviso legal — bxFlow',
      description: 'Información legal relativa al sitio bxFlow: titular, alojamiento, propiedad intelectual.',
    },
    privacy: {
      title: 'Política de privacidad — bxFlow',
      description: 'Cómo el sitio bxFlow recoge, utiliza y protege sus datos personales.',
    },
  },

  nav: {
    home: 'Inicio',
    product: 'Producto',
    useCases: 'Casos de uso',
    catalog: 'Catálogo',
    security: 'Seguridad',
    pricing: 'Precios',
    deployment: 'Despliegue',
    trust: 'Confianza',
    team: 'El equipo',
    teamDesc: 'Quién construye bxFlow y con qué trayectoria.',
    securityDesc: 'Cifrado, aislamiento entre clientes, trazabilidad de los accesos.',
    deploymentDesc: 'En sus servidores o alojado por nosotros: el procedimiento de principio a fin.',
    contact: 'Contacto',
    demo: 'Programar una demostración',
    documentation: 'Documentación',
    cta: 'Programar una demostración',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    language: 'Idioma',
  },

  common: {
    requestDemo: 'Solicitar una demostración',
    requestQuote: 'Solicitar un presupuesto',
    talkProject: 'Hablemos de su proyecto',
    seeAllProcesses: 'Ver todos los procesos',
    learnMore: 'Más información',
    getSecurityDossier: 'Solicitar el informe de seguridad completo',
    skipToContent: 'Ir al contenido',
  },

  home: {
    hero: {
      eyebrow: 'Motor de procesos de negocio',
      title: 'Sus procesos de negocio, bajo control de principio a fin.',
      subtitle:
        'Alta de cliente, comunicación de operación sospechosa, siniestro, compra: cada expediente sigue sus etapas, sus roles y sus aprobaciones, con un historial que da fe. Más de 70 procesos listos para usar, alojados por nosotros o instalados en sus servidores.',
      ctaPrimary: 'Solicitar una demostración',
      ctaSecondary: 'Ver los procesos disponibles',
      trust: 'Más de 70 procesos listos para arrancar hoy mismo.',
      proofs: [
        'Instalable en sus servidores, sin ningún acceso del proveedor',
        'Procesos PBC-FT calibrados para la UEMOA, la CEMAC y Marruecos',
        'Separación de funciones e historial oponible',
      ],
      shotAlt:
        'Pantalla de bxFlow: un expediente de alta de cliente en validación de cumplimiento, con la ficha del cliente, el plazo restante y las acciones posibles.',
      // Le suivi animé posé sur la capture du hero. Ce sont les étapes RÉELLES
      // du dossier affiché (CONF-0002, entrée en relation), avec leurs noms exacts :
      // une animation qui raconterait un autre processus que l'écran montré
      // se remarquerait aussitôt.
      live: {
        label: 'Expediente en curso',
        reference: 'CONF-0002',
        steps: ['Recogida del expediente', 'Verificación de los documentos', 'Cribado y scoring', 'Validación de cumplimiento', 'Relación abierta'],
        transitions: ['Enviar el expediente', 'Validar', 'Validar', 'Validar'],
        created: 'Expediente creado',
      },
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Del esquema de su proceso a su ejecución, en 4 tiempos',
      stepLabel: 'Etapa',
      steps: [
        {
          title: 'Usted dibuja el recorrido',
          text: 'Las etapas, quién interviene en cada una y qué desencadena el paso a la siguiente. En una pantalla, arrastrando bloques, sin una línea de código.',
        },
        {
          title: 'Una solicitud abre un expediente',
          text: 'Un formulario, un correo electrónico u otra aplicación desencadena el proceso. El expediente arranca en la etapa inicial, con su referencia.',
        },
        {
          title: 'Cada etapa llega a la persona adecuada',
          text: 'El expediente llega a quien debe decidir, espera su aprobación, envía recordatorios si se retrasa y se cierra cuando todo está hecho.',
        },
        {
          title: 'Sus aplicaciones siguen el movimiento',
          text: 'Cuando una etapa necesita un dato o debe escribirlo en otro sitio, bxFlow consulta sus aplicaciones actuales, incluso las más antiguas.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Beneficios concretos',
      title: 'Lo que gana con ello',
      items: [
        {
          title: 'Decisiones que se sostienen',
          text: 'Cada aprobación lleva su autor, su fecha y su motivo. Ante un auditor, el expediente habla por sí solo.',
        },
        {
          title: 'Tiempo recuperado',
          text: 'Los expedientes van solos a la persona adecuada y avisan cuando se estancan. Se acabaron los recordatorios a mano.',
        },
        {
          title: 'Menos errores',
          text: 'La información se introduce una vez, se comprueba en pantalla y se recupera en sus aplicaciones sin volver a teclearla.',
        },
        {
          title: 'Sus reglas, modificables',
          text: 'Una etapa que añadir, un aprobador que cambiar: sus equipos de negocio lo hacen ellos mismos, sin desarrollo ni espera.',
        },
      ],
    },
    // Aperçu des capacités. Le contenu vient de `product.capabilities`,
    // seuls les intitulés de section vivent ici — deux listes finiraient
    // par diverger, et c'est l'accueil qui resterait en retard.
    capabilities: {
      eyebrow: 'Todo lo que hace bxFlow',
      title: 'Una visión completa, antes de entrar en el detalle',
      subtitle:
        'Desde el modelado de un proceso hasta la generación de sus cartas, pasando por los tratamientos masivos y los datos de referencia de negocio.',
      cta: 'Ver el detalle de cada capacidad',
    },
    catalog: {
      eyebrow: 'Catálogo de procesos',
      title: 'No parte de una página en blanco',
      subtitle:
        'Más de 70 procesos entregados con sus etapas, sus roles, sus pantallas y sus aprobaciones: alta de cliente, comunicación de operación sospechosa, siniestros, compras, vacaciones. Los ajusta a su organización en lugar de construirlos.',
      cardCta: 'Ver todos los procesos',
      available: 'procesos disponibles',
      missingTitle: '¿Su proceso no está?',
      missingText: 'Lo añadimos al catálogo con usted, a partir de su circuito actual.',
      missingCta: 'Hablemos de ello',
    },
    shots: {
      eyebrow: 'El producto, tal y como es',
      title: 'No es una maqueta: son las pantallas que usarán sus equipos',
      subtitle:
        'Capturas de la aplicación, tomadas sobre expedientes de demostración. Las personas, los clientes y los importes son ficticios; el resto es el producto.',
      items: [
        {
          title: 'El proceso, dibujado',
          text: 'La comunicación de operación sospechosa tal y como se entrega: aviso, análisis de cumplimiento, decisión y remisión a la unidad de inteligencia financiera.',
          alt: 'Diseñador de procesos de bxFlow mostrando el circuito de comunicación de operación sospechosa, de principio a fin.',
        },
        {
          title: 'Un siniestro, completo',
          text: 'Un incendio en un almacén en el análisis de la cobertura: póliza, asegurado, factores de complejidad, informe pericial adjunto, y la contraperitación entre las acciones posibles.',
          alt: 'Expediente de siniestro por incendio en bxFlow, en la etapa de análisis de la cobertura.',
        },
        {
          title: 'Quién ha hecho qué, y cuándo',
          text: 'El historial del mismo expediente: cada paso de etapa está fechado, firmado y motivado, hasta el campo modificado entre dos decisiones. Nadie valida su propio trabajo.',
          alt: 'Historial del expediente de siniestro por incendio en bxFlow: transiciones sucesivas, sus autores y sus comentarios.',
        },
      ],
    },
    deploy: {
      eyebrow: 'Despliegue',
      title: 'Alojado por nosotros o instalado en sus servidores',
      text: 'El mismo software en ambos casos. En sus servidores, bxFlow funciona sin ninguna conexión hacia el proveedor, y en su instancia no existe ninguna cuenta del proveedor.',
      cta: 'Ver el despliegue de principio a fin',
    },
    sectors: {
      eyebrow: 'Para quién',
      title: 'Pensado para los expedientes que deben sostenerse ante un control',
      cta: 'Ver los casos de uso',
    },
    finalCta: {
      title: 'Veamos qué puede automatizar bxFlow en su organización',
      subtitle:
        'Una hora, centrada en sus procesos. Sin compromiso.',
      cta: 'Solicitar una demostración',
    },
  },

  product: {
    hero: {
      eyebrow: 'El producto',
      title: 'Un motor de procesos, y todo lo que hace falta a su alrededor',
      subtitle:
        'Modele el recorrido de sus trámites —etapas, roles, aprobaciones, reglas de paso— y deje que bxFlow los ejecute. Sus aplicaciones actuales se consultan sobre la marcha, cuando una etapa lo necesita.',
    },
    // Le schéma animé du hero. Quatre étapes ET une bifurcation : sans
    // elle, le dessin décrirait un tapis roulant plutôt qu'un processus.
    heroFlow: {
      steps: ['Nueva solicitud', 'Validación', 'Instrucción', 'Cerrado'],
      rejected: 'Rechazado',
      // Les transitions portent leur nom : sans elles, le schéma décrit
      // un tapis roulant et rien ne dit qui fait avancer le dossier.
      transitions: ['Enviar', 'Validar', 'Cerrar'],
      reject: 'Rechazar',
      alt:
        'Un expediente recorre un proceso: nueva solicitud, validación, instrucción, cierre, con una bifurcación hacia el rechazo.',
    },
    capabilities: {
      title: 'Lo que hace bxFlow',
      items: [
        {
          title: 'Modelado del proceso',
          plain: 'Usted dibuja el recorrido de su trámite en una pantalla, arrastrando bloques.',
          tech: 'Editor BPMN: etapas, transiciones, condiciones de paso, etapas de aprobación y etapas automáticas.',
        },
        {
          title: 'Roles y aprobaciones',
          plain: 'Cada etapa sabe quién debe intervenir y espera su decisión.',
          tech: 'Roles propios del proceso, permisos por acción, aprobaciones con uno o varios aprobadores.',
        },
        {
          title: 'Pantallas y campos a medida',
          plain: 'Usted elige qué se introduce en cada etapa, y quién lo hace.',
          tech: 'Pantallas por etapa (creación, edición, consulta), catálogo de campos tipados, reglas de visualización.',
        },
        {
          title: 'Plazos y recordatorios',
          plain: 'Un expediente que se estanca avisa por sí solo, antes de que alguien se queje.',
          tech: 'Fechas límite por etapa, recordatorios automáticos por correo o SMS, cuadro de incumplimientos.',
        },
        {
          title: 'Recepción automática de las solicitudes',
          plain: 'Un formulario, un correo electrónico u otra aplicación abre el expediente sin que nadie lo teclee.',
          tech: 'Ingesta por API y por buzón de correo dedicado, con activación del proceso de destino.',
        },
        {
          title: 'Sus aplicaciones actuales, consultadas sobre la marcha',
          plain: 'Cuando una etapa necesita un dato que vive en otro sitio, va a buscarlo.',
          tech: 'Conectores hacia sistemas existentes (SOAP/WSDL/XML) y aplicaciones modernas (API REST/JSON), invocados desde una etapa o una transición.',
        },
        {
          title: 'Lectura de los documentos',
          plain: 'Un documento adjunto se lee, y los campos que designa con claridad se rellenan previamente.',
          tech: 'Reconocimiento de texto en los archivos adjuntos (PDF e imágenes escaneadas); los campos identificados por una etiqueta legible se proponen como relleno previo, siempre sujetos a su validación.',
        },
        {
          title: 'Generación documental',
          plain: 'Sus cartas y certificados salen cumplimentados, con su membrete, en un clic.',
          tech: 'El cliente aporta SU plantilla de Word o Excel y coloca en ella etiquetas; todo lo que las etiquetas no tocan se conserva: membrete, logotipo, estilos. Generación unitaria o en combinación de correspondencia sobre una selección de expedientes.',
        },
        {
          title: 'Tratamiento masivo',
          plain: 'Mil expedientes se crean, avanzan o se exportan en una sola operación.',
          tech: 'Plantilla de importación generada a partir de los campos del proceso (Excel o CSV), informe fila por fila, paso de etapa y exportación sobre una selección, con topes y recuento esperado para evitar las operaciones a ciegas.',
        },
        {
          title: 'Automatizaciones',
          plain: 'Hay acciones que se activan solas: en una etapa, en una fecha o al cumplirse una condición.',
          tech: 'Posfunciones a la entrada de una etapa o al ejecutar una transición, reglas programadas, comportamientos de formulario (campos mostrados, ocultos o bloqueados según lo introducido), notificaciones por correo y SMS.',
        },
        {
          title: 'Datos de referencia de negocio',
          plain: 'Sus clientes, proveedores o sucursales viven en la herramienta, actualizados.',
          tech: 'Fichas replicadas desde un sistema de origen a intervalos regulares, seleccionables en un expediente, copiadas en sus campos, y capaces de abrir un expediente cuando un atributo cambia («cliente pasado a riesgo alto → revisión KYC»).',
        },
        {
          title: 'Seguimiento y trazabilidad',
          plain: 'Ve en tiempo real en qué punto está cada expediente, y quién ha hecho qué.',
          tech: 'Historial con fecha y hora por expediente, registro de auditoría, paneles de control y exportaciones.',
        },
      ],
    },
    diagram: {
      title: 'El principio, en una imagen',
      legacy: 'Llega una solicitud',
      legacyNote: 'Formulario, correo electrónico u otra aplicación',
      engine: 'El proceso se desarrolla',
      engineNote: 'Etapas, roles, aprobaciones, reglas',
      modern: 'El expediente se tramita',
      modernNote: 'Trazado de principio a fin, sin recordatorios manuales',
      caption:
        'En el centro, su proceso: el recorrido que usted ha dibujado. Sus aplicaciones actuales no desaparecen: se consultan sobre la marcha, en la etapa que lo necesita.',
    },
    brochure: {
      title: 'El folleto, para llevar',
      text: 'Ocho páginas: el posicionamiento, el funcionamiento, las pantallas reales, la seguridad y el despliegue, y el catálogo de procesos. PDF, 1,8 MB.',
      cta: 'Descargar el folleto',
    },
    note: {
      title: 'Unas palabras sobre la lectura de los documentos',
      text: 'bxFlow lee los documentos adjuntos a un expediente y propone rellenar previamente los campos que sabe reconocer. Es una ayuda a la introducción de datos, no una comprensión del documento: la calidad depende de la legibilidad del archivo, y la validación le corresponde siempre a usted. Preferimos anunciarlo así antes que dejar que lo descubra en la demostración.',
    },
    cta: {
      title: '¿Quiere ver todo esto en funcionamiento?',
      subtitle: 'Le mostramos el producto sobre un caso parecido al suyo.',
    },
  },

  screens: {
    eyebrow: 'En imágenes',
    title: 'El producto, pantalla a pantalla',
    subtitle:
      'Capturas de la aplicación sobre expedientes de demostración. Primero las pantallas del día a día, después las de la configuración. Las personas, los clientes y los importes son ficticios.',
    groupes: {
      metier: {
        title: 'Lo que ven sus equipos',
        text: 'Ningún conocimiento técnico: se abre un expediente, se rellena, se hace avanzar y se sigue. Es todo lo que un gestor necesita conocer para trabajar.',
      },
      configuration: {
        title: 'Lo que ve quien configura',
        text: 'El proceso, las conexiones con los sistemas existentes y los datos de referencia compartidos se ajustan en la aplicación, sin escribir una línea de código. Estas pantallas solo se abren a quienes tienen permiso: una organización sin equipo técnico no tiene que visitarlas nunca.',
      },
    },
    items: [
      {
        title: 'Una introducción de datos guiada',
        text: 'Listas cerradas en lugar de texto libre: el cliente se elige en los datos de referencia compartidos, cada expediente se clasifica y se compara, y los campos obligatorios se comprueban antes del envío.',
        alt: 'Formulario de creación de un expediente de alta de cliente en bxFlow, con la lista de selección múltiple abierta.',
      },
      {
        title: 'Un expediente que consulta sus sistemas',
        text: 'Al abrir el expediente, la ficha del país se lee en el servicio externo a partir del código ISO introducido: nada se copia a mano.',
        alt: 'Expediente de alta de cliente en bxFlow: ficha de país cargada desde un servicio SOAP al abrirlo.',
      },
      {
        title: 'El pilotaje en directo',
        text: 'Más de 20 000 reclamaciones de operaciones con tarjeta, repartidas por estado y por canal.',
        alt: 'Panel de control de bxFlow de las reclamaciones de operaciones con tarjeta.',
      },
      {
        title: 'El registro de auditoría',
        text: 'Cada acción, su autor y su fecha, filtrables y exportables para un control.',
        alt: 'Registro de auditoría de bxFlow filtrado sobre expedientes de cumplimiento.',
      },
      {
        title: 'El alta de cliente, dibujada',
        text: 'Desde la presentación del expediente hasta la apertura de la relación, con devolución para corrección y rechazo motivado: el circuito que siguen las pantallas anteriores.',
        alt: 'Diseñador de procesos de bxFlow mostrando el circuito de alta de cliente.',
      },
      {
        title: 'Un sistema existente, consultado',
        text: 'Un servicio SOAP real invocado desde bxFlow: la respuesta XML vuelve en JSON, lista para rellenar los campos de un expediente.',
        alt: 'Prueba de un conector SOAP en bxFlow: llamada FullCountryInfo sobre Senegal, respuesta mostrada en JSON.',
      },
      {
        title: 'Datos de referencia compartidos',
        text: 'Clientes, proveedores, sucursales: fichas comunes a todos los procesos, introducidas a mano, importadas desde un archivo CSV o mantenidas al día por un conector.',
        alt: 'Datos de referencia de Clientes en bxFlow: fichas con referencia KYC, segmento y zona de residencia.',
      },
    ],
  },

  team: {
    hero: {
      eyebrow: 'El equipo',
      title: 'Quién construye bxFlow',
      subtitle:
        'Arquitectura de software, modelado de procesos de negocio, desarrollo y dirección de proyectos. Hemos pasado suficiente tiempo en bancos y aseguradoras como para saber por dónde se pierde un expediente.',
    },
    membres: {
      boly: {
        role: 'Fundador, arquitecto de software',
        bio: 'Desarrollador full stack de formación y arquitecto en la actualidad: más de 8 años de desarrollo de software y 5 años de diseño de workflows. Lleva la visión de producto y las decisiones tecnológicas de bxFlow.',
      },
      farba: {
        role: 'Experto en workflow y transformación digital',
        bio: 'Acompaña el modelado y la optimización de los procesos de negocio en nuestros clientes.',
      },
      guy: {
        role: 'Analista de negocio TI / Experto BPM-BPMN',
        bio: 'Traduce un proceso de negocio en un modelo BPMN ejecutable y sigue su implantación hasta la validación. Desarrollador Java y experto en Jira, diseña los circuitos de aprobación y los estados con quienes van a utilizarlos.',
      },
      abdourahmane: {
        role: 'Desarrollador full stack',
        bio: 'Desarrolla y hace evolucionar las soluciones bxGroup, desde el motor hasta las pantallas.',
      },
      amadou: {
        role: 'Ingeniero DevOps',
        bio: 'Se encarga del despliegue, la supervisión y la fiabilidad de las instancias de bxFlow.',
      },
      malak: {
        role: 'Jefa de proyecto sénior',
        bio: 'Especialista en análisis funcional y en procesos bancarios. Acompaña a las organizaciones en la definición, el análisis y la mejora de sus procesos de negocio.',
      },
    },
    taille: {
      title: 'Un equipo pequeño, y lo que eso implica',
      text: 'Somos un equipo pequeño, y lo decimos. Por eso su instalación no depende de nosotros: en sus servidores, bxFlow funciona sin ninguna conexión hacia el proveedor, sus claves de cifrado se quedan en su casa y en su instancia no existe ninguna cuenta del proveedor. Sus procesos se exportan a un archivo y se reimportan en otro sitio, incluso sin nosotros.',
      cta: 'Ver el procedimiento de despliegue',
    },
  },

  useCases: {
    hero: {
      eyebrow: 'Casos de uso',
      title: 'De los procesos regulados a los trámites del día a día',
      subtitle:
        'bxFlow está pensado en primer lugar para las entidades financieras, donde cada expediente debe sostenerse ante un control. El mismo rigor sirve después a cualquier organización.',
    },
    pattern: {
      problem: 'El problema',
      solution: 'Con bxFlow',
      benefit: 'El beneficio',
      examples: 'Procesos entregados',
    },
    sectors: {
      banque: {
        name: 'Banca',
        problem:
          'Obligaciones PBC-FT que no toleran aproximaciones, aprobaciones a cuatro ojos y un core bancario que no se sustituye.',
        solution:
          'Los procesos de cumplimiento se entregan hechos, hasta la remisión a la unidad de inteligencia financiera, y bxFlow consulta su core bancario sobre la marcha, incluso en SOAP.',
        benefit:
          'Cada decisión queda trazada —quién, cuándo y sobre qué base— y la instalación puede permanecer íntegramente en sus servidores.',
        examples: ['Alta de cliente (KYC)', 'Comunicación de operación sospechosa', 'Revisión periódica KYC', 'Reclamación de operación con tarjeta'],
      },
      assurance: {
        name: 'Seguros',
        problem:
          'Siniestros complejos que pasan por varias manos —gestor, perito, suscriptor, contabilidad— con un plazo que cumplir.',
        solution:
          'El siniestro sigue sus etapas desde la declaración hasta el pago, contraperitación incluida; cobertura, franquicia y recobro quedan registrados en el expediente.',
        benefit:
          'Un expediente completo y fechado para cada siniestro, consultable tanto por la auditoría interna como por el control.',
        examples: ['Gestión de siniestros complejos', 'Homologación de corredores e intermediarios', 'Validación de cliente de riesgo alto (PEP)'],
      },
      microfinance: {
        name: 'Microfinanzas',
        problem:
          'Solicitudes numerosas, aprobaciones que respetar y sistemas antiguos difíciles de evolucionar.',
        solution:
          'Cada solicitud sigue un circuito claro, con sus aprobaciones y sus plazos, apoyándose en sus sistemas existentes en lugar de sustituirlos.',
        benefit:
          'Solicitudes tramitadas más rápido y un historial completo listo para el supervisor.',
        examples: ['Aprobación de crédito excepcional', 'Alta de cliente (KYC)', 'Reclamación de cliente'],
      },
      entreprise: {
        name: 'Empresas',
        problem:
          'Vacaciones, compras, gastos de viaje, incorporaciones: circuitos de aprobación que pasan por correos electrónicos y hojas de cálculo.',
        solution:
          'Cada trámite se convierte en un proceso con sus aprobadores, sus plazos y sus recordatorios, y sus aplicaciones actuales se consultan cuando una etapa lo necesita.',
        benefit:
          'Horas recuperadas cada semana, y ninguna solicitud perdida en una bandeja de entrada.',
        examples: ['Solicitud de compra', 'Gastos de viaje', 'Incorporación de empleado', 'Solicitud de vacaciones'],
      },
    },
    cta: {
      title: '¿Su actividad no aparece en la lista?',
      subtitle:
        'Si sus expedientes pasan por varias manos y deben dejar rastro, bxFlow se aplica a ellos. Veamos su caso.',
    },
  },

  catalog: {
    hero: {
      eyebrow: 'Catálogo de procesos',
      title: 'No parte de una página en blanco',
      subtitle:
        'Más de 70 procesos entregados con sus etapas, sus roles y sus aprobaciones. Los ajusta a su organización en lugar de construirlos, y nosotros añadimos los que le falten.',
    },
    filters: {
      all: 'Todos',
      label: 'Filtrar por categoría',
      results_one: '{{count}} proceso',
      results_other: '{{count}} procesos',
    },
    // Intitulé posé au-dessus des étapes, sur chaque carte du catalogue.
    stepsLabel: 'El recorrido',
    stepCount: '{{n}} etapas',
    roleCount: '{{n}} roles',
    moreSteps: '+ {{n}} etapas más',
    categories: {
      conformite: 'Cumplimiento y riesgos',
      client: 'Banca, seguros y clientes',
      finance: 'Finanzas',
      operations: 'Operaciones',
      achats: 'Compras',
      it: 'TI y seguridad',
      juridique: 'Jurídico',
      rh: 'RR. HH.',
    },
    missing: {
      title: '¿Su proceso no está en la lista?',
      text: 'Descríbanos su circuito actual: lo añadimos al catálogo con usted.',
      cta: 'Proponer un proceso',
    },
  },

  security: {
    hero: {
      eyebrow: 'Seguridad',
      title: 'Lo que hacemos, en concreto, para proteger sus expedientes',
      subtitle:
        'Sin promesas genéricas: las medidas implantadas, verificables en el informe de seguridad que entregamos a su responsable de seguridad.',
    },
    pillars: [
      {
        title: 'Cifrado',
        text: 'Las credenciales de conexión a sus sistemas se cifran con AES-256-GCM, igual que los archivos adjuntos que guarda la aplicación. Las comunicaciones se cifran en tránsito.',
      },
      {
        title: 'Separación entre clientes, probada en cada versión',
        text: 'Una prueba automática intenta, para cada familia de datos, alcanzar los recursos de otro cliente. Una familia sin cobertura bloquea la entrega.',
      },
      {
        title: 'Permisos por acción',
        text: 'Roles propios de cada proceso y permisos concedidos acción por acción: crear, validar, exportar, eliminar. Un permiso desmarcado es un permiso retirado.',
      },
      {
        title: 'Conexión',
        text: 'Inicio de sesión único SAML u OpenID Connect, creación de las cuentas desde su directorio (SCIM), segundo factor exigible a toda la organización.',
      },
      {
        title: 'Trazabilidad',
        text: 'Cada acción se registra con su autor y su fecha, incluso cuando un administrador actúa en lugar de un usuario.',
      },
      {
        title: 'Copias de seguridad',
        text: 'Archivos cifrados de la instancia, programados, con una copia depositada fuera del sitio que la aplicación no puede borrar. Una restauración se prueba, no se supone.',
      },
    ],
    dossier: {
      title: '¿Necesita ir más lejos?',
      text: 'Entregamos a sus equipos de TI y de seguridad un informe completo: matriz de permisos, arquitectura, procedimiento de restauración.',
      cta: 'Solicitar el informe de seguridad',
    },
  },

  deployment: {
    hero: {
      eyebrow: 'Despliegue',
      title: 'Dónde viven sus datos, y cómo llega el software a su organización',
      subtitle:
        'Dos formas de instalar bxFlow, el mismo software en ambos casos. Esta página describe la segunda de principio a fin: la que le pedirán justificar en comité.',
    },
    models: [
      {
        tag: 'En línea',
        title: 'Alojado por nosotros',
        lead: 'Abre un navegador, y ya está.',
        text:
          'Nosotros instalamos, supervisamos, actualizamos y hacemos las copias de seguridad. Sus equipos se conectan a una dirección que le pertenece, con su marca. Puesta en servicio en un día.',
        forWho: 'Para empezar rápido, cuando el alojamiento externo no plantea dificultades normativas.',
      },
      {
        tag: 'En su casa',
        title: 'Instalado en sus servidores',
        lead: 'El software se instala detrás de su cortafuegos.',
        text:
          'Sus datos no salen nunca de su red. No hace falta ninguna conexión a Internet, ni para instalar ni para funcionar después. Las claves de cifrado se generan en su casa.',
        forWho: 'Para las entidades cuyos datos no pueden salir de su infraestructura.',
      },
    ],
    diagrams: {
      onprem: {
        title: 'Lo que obtiene, una vez instalado',
        alt: 'Esquema: bxFlow instalado en la red del banco, un único punto de entrada, ningún flujo saliente.',
        boundary: 'Su red',
        users: 'Sus usuarios',
        proxy: 'Su proxy',
        proxySub: 'TLS, su certificado',
        app: 'bxFlow',
        appLines: ['Interfaz web', 'Motor de procesos', 'Tareas en segundo plano'],
        db: 'Base de datos',
        files: 'Archivos cifrados',
        storageNote: 'Accesibles únicamente desde la aplicación — ningún puerto abierto',
        core: 'Su sistema bancario',
        coreSub: 'red interna',
        internet: 'Internet — no se requiere ningún flujo saliente',
      },
      saas: {
        title: 'Lo que funciona en nuestra infraestructura',
        alt: 'Esquema: bxFlow alojado, un espacio separado por cliente, copias de seguridad cifradas y copia fuera del sitio.',
        users: 'Sus usuarios',
        address: 'su-banco.bxgroup.io',
        addressSub: 'su logotipo, sus colores',
        hosted: 'bxFlow, alojado',
        yourSpace: 'Su espacio',
        otherSpaces: ['Otro cliente', 'Otro cliente'],
        isolation: 'Separación probada automáticamente en cada versión',
        backups: 'Copias de seguridad',
        offsite: 'Copia fuera del sitio',
        caption: 'Cada cliente en su espacio. Las copias de seguridad salen cifradas hacia una segunda ubicación.',
      },
    },
    same: {
      title: 'El mismo software, no una versión reducida',
      text:
        'Solo existe una base de código. Lo que ve en la demostración es lo que se instala en su organización: las mismas pantallas, los mismos procesos, los mismos controles. Y cambiar de opinión más adelante no obliga a rehacerlo todo: sus procesos se exportan a un archivo y se reimportan en otro sitio.',
    },
    compare: {
      title: 'Cómo elegir',
      lead: 'Las ocho preguntas que se repiten en comité, y su respuesta en cada caso.',
      head: ['', 'Alojado por nosotros', 'En sus servidores'],
      rows: [
        ['Dónde viven los datos', 'En nuestra infraestructura, en un espacio separado por cliente', 'En sus servidores, dentro de su red'],
        ['Quién explota el día a día', 'Nosotros', 'Sus equipos, con nuestra documentación'],
        ['Actualizaciones', 'Las aplicamos nosotros, sin intervención por su parte', 'Usted decide el momento; nosotros entregamos la versión'],
        ['Copias de seguridad', 'Automáticas y cifradas, con una copia depositada en otro lugar', 'Automáticas y cifradas: usted guarda las claves y las copias'],
        ['Acceso a Internet necesario', 'Sí, es un servicio en línea', 'Ninguno, ni en la instalación ni después'],
        ['Plazo de puesta en servicio', 'Un día', 'De dos a tres días laborables, una vez reunidos los requisitos'],
        ['Quién guarda las claves de cifrado', 'Nosotros', 'Usted, y nunca se nos transmiten'],
        ['Qué puede consultar el proveedor', 'Nada sin su petición, y toda intervención queda trazada', 'Nada: no tenemos ningún acceso a la instancia'],
      ],
    },
    onprem: {
      eyebrow: 'De principio a fin',
      title: 'Un despliegue en sus servidores, paso a paso',
      lead:
        'Lo que ocurre realmente, en orden, con lo que esperamos de usted en cada momento. Nada implícito: es el documento que su dirección de informática puede leer antes de comprometerse.',
      detailLabel: 'En el plano técnico',
      steps: [
        {
          title: 'Encuadre',
          who: 'Una reunión, usted y nosotros',
          text:
            'Le entregamos la lista de lo que hace falta: una máquina, una dirección, un certificado. Usted nos dice qué está disponible. Nada empieza mientras esa lista no esté en verde: es lo que evita las instalaciones que se atascan.',
          detail:
            'Servidor Linux con Docker. Cuatro núcleos, 8 GB de memoria y 40 GB de disco bastan para empezar; ocho núcleos y 16 GB para un uso sostenido. Un solo puerto que abrir hacia sus usuarios, ningún flujo saliente necesario.',
        },
        {
          title: 'Preparación de la entrega',
          who: 'Nosotros, en nuestra infraestructura',
          text:
            'Construimos su paquete a partir de la versión exacta que ha superado todas las pruebas automatizadas. Contiene el software, su archivo de licencia, la documentación de explotación y las huellas que le permitirán comprobar que nada se ha alterado por el camino.',
          detail:
            'La documentación va CON el paquete, nunca después: un procedimiento de restauración se lee un día de incidente, a menudo sin acceso a nada más.',
        },
        {
          title: 'Entrega',
          who: 'Por el canal que usted elija',
          text:
            'Soporte cifrado, repositorio seguro, entrega en mano: lo decide su política. Nunca le pedimos que abra un acceso hacia nuestros servidores, ni que cree una cuenta con nosotros.',
          detail:
            'Es el punto que muchos escamotean: exigir un acceso saliente hacia un registro de imágenes anula el beneficio de una instalación aislada. Nosotros no lo pedimos, y la instalación no lo necesita.',
        },
        {
          title: 'Instalación',
          who: 'Su operador, con nosotros a su lado',
          text:
            'Dos comandos: cargar y arrancar. La base de datos se actualiza sola en el primer arranque. Se crea una cuenta de administrador —la suya— y usted cambia su contraseña antes de que salgamos de la sala.',
          detail:
            'La base de datos y la caché solo son accesibles desde el interior de la aplicación; un único componente escucha en la red. La documentación técnica pública de la interfaz de programación está cerrada.',
        },
        {
          title: 'Puesta en red y cifrado del transporte',
          who: 'Su equipo de redes',
          text:
            'bxFlow se coloca detrás de su proxy y de su certificado. Un archivo previsto para ello le enseña a confiar en ese proxy, para que las protecciones por dirección vean la dirección real del usuario y no la del proxy.',
          detail:
            'Sin ese ajuste, la limitación del número de intentos deja de funcionar: todo el mundo compartiría la misma dirección. El error es clásico e invisible, de ahí el archivo facilitado de antemano en lugar de una línea que haya que encontrar uno mismo.',
        },
        {
          title: 'Validación',
          who: 'Juntos, lista en mano',
          text:
            'Una lista de comprobaciones se va marcando punto por punto: servicios arrancados, conexión correcta, cuotas conformes al contrato, registro de tareas limpio, prueba de un conector de principio a fin. No nos vamos hasta que todo esté en verde.',
          detail:
            'La lista comprueba también que la instancia funciona en modo sin conexión: es lo que distingue una entrega en sus instalaciones de una imagen destinada al servicio en línea, y nada más en pantalla lo indica.',
        },
        {
          title: 'Copias de seguridad, y una restauración probada',
          who: 'Usted, con nuestra guía',
          text:
            'El producto se copia a sí mismo: un archivo cifrado de la instancia entera, a la hora y con la frecuencia que usted fije desde la pantalla, con una copia depositada en otro lugar. Y probamos juntos una restauración antes de marcharnos.',
          detail:
            'Una copia de seguridad que nunca se ha restaurado no es una copia de seguridad. La aplicación no puede borrar la copia depositada fuera del sitio: es deliberado, y es lo que la protege de un ransomware que alcanzara la máquina.',
        },
        {
          title: 'Actualizaciones',
          who: 'Cuando usted lo decida',
          text:
            'Entregamos una versión acompañada de una nota que dice qué cambia. Usted la carga, cambia a ella y comprueba. La vuelta atrás sigue siendo posible.',
          detail:
            'Una actualización no toca ni su configuración, ni sus datos, ni su licencia: esta vive en un archivo aparte y atraviesa las versiones sin verse afectada.',
        },
        {
          title: 'Seguimiento',
          who: 'Nosotros',
          text:
            'El vencimiento de su licencia se anuncia en la aplicación con treinta días de antelación. Volvemos a ponernos en contacto antes, no después.',
          detail: '',
        },
      ],
    },
    cannot: {
      eyebrow: 'Lo que no podemos hacer',
      title: 'Los límites que nos imponemos, y por qué le protegen',
      lead:
        'Una instalación en su organización solo tiene sentido si el proveedor no conserva el control. Esto es lo que significa en concreto, incluido lo que a usted le cuesta.',
      items: [
        {
          title: 'Ningún acceso remoto',
          text:
            'Sin túnel de mantenimiento, sin envío de información, sin ninguna llamada hacia nuestros servidores. Una instancia instalada en su organización funciona indefinidamente sin contactar nunca con nosotros. A cambio, una intervención por nuestra parte supone que usted nos abra un acceso, de forma puntual y bajo su control.',
        },
        {
          title: 'No podemos leer sus datos',
          text:
            'Las claves de cifrado se generan en su máquina durante la instalación y nunca se nos transmiten. Por tanto, no podemos abrir un archivo ni restaurar una copia de seguridad en su lugar. Es la contrapartida asumida del control: la custodia de las claves es suya, y se prepara.',
        },
        {
          title: 'Ninguna cuenta del proveedor en su instancia',
          text:
            'La instalación crea su administrador, y solo a él. Las pantallas de administración de la plataforma ni siquiera están presentes. Es el punto que cuenta ante un control: nadie de los nuestros puede asumir la identidad de uno de sus colaboradores, de modo que las aprobaciones registradas en sus expedientes conservan su valor probatorio.',
        },
      ],
    },
    saas: {
      eyebrow: 'La otra vía',
      title: 'El alojamiento con nosotros, en la práctica',
      lead:
        'Si el alojamiento externo es aceptable para usted, la puesta en servicio se cuenta en horas en lugar de en días. Lo demás no cambia.',
      points: [
        {
          title: 'Su dirección, su marca',
          text:
            'Sus colaboradores se conectan a una dirección que le pertenece, la cual muestra su logotipo y sus colores incluso antes de introducir la contraseña. Añadir un cliente no requiere ningún reinicio.',
        },
        {
          title: 'Separación entre clientes, probada de forma continua',
          text:
            'Cada cliente vive en un espacio distinto. Esa separación no solo se afirma: se comprueba automáticamente con cada modificación del software, familia de datos por familia de datos, y una familia sin cobertura hace fracasar la entrega.',
        },
        {
          title: 'Copias de seguridad y copia fuera del sitio',
          text:
            'Cifradas, programadas y depositadas en una segunda ubicación de la que el software no puede borrar nada. Su frescura se consulta desde la aplicación.',
        },
        {
          title: 'Conexión mediante su directorio',
          text:
            'Inicio de sesión único SAML u OpenID Connect, y creación automática de las cuentas desde su directorio. Las incorporaciones y las salidas se reflejan sin doble introducción de datos.',
        },
        {
          title: 'Reversibilidad',
          text:
            'Sus procesos y sus expedientes se exportan a archivos que usted conserva. Conviene pedirlo antes de la firma y no después de un incidente, y reproducirlo una vez para comprobar que ese archivo realmente le bastaría.',
        },
      ],
    },
    cta: {
      title: '¿Un informe técnico para su dirección de informática?',
      text:
        'Requisitos detallados, esquema de los flujos de red, procedimiento de restauración, matriz de permisos: entregamos el informe completo bajo petición, antes de cualquier conversación comercial.',
      cta: 'Solicitar el informe',
    },
  },
  pricing: {
    hero: {
      eyebrow: 'Precios',
      title: 'Una licencia anual, calculada sobre su alcance real',
      subtitle:
        'Dos medidas fundamentan la valoración: los usuarios activos y los procesos en servicio. La establecemos con usted, a partir de su situación.',
    },
    pilot: {
      badge: 'Para empezar',
      title: 'Seis meses sin factura',
      text: 'Un alcance acotado —uno o dos procesos, un equipo— para medir los resultados sobre sus propios expedientes antes de ampliar. Alojado por nosotros o instalado en sus servidores, con la puesta en marcha y la configuración acompañadas. Al cabo de los seis meses, la suscripción empieza a la tarifa acordada, salvo que usted la cancele.',
      cta: 'Solicitar un presupuesto piloto',
    },
    tiersLabel: 'Tres alcances tipo',
    quoteLine: 'Valoración mediante presupuesto, a partir de su alcance · respuesta en 24 a 48 h',
    ctaNote: 'Sin compromiso',
    allTiersNote: 'Todos los alcances dan acceso al catálogo de más de 70 procesos listos para usar.',
    tiers: [
      {
        name: 'Inicio',
        tagline: 'Un equipo, un primer proceso',
        features: [
          'Uno o dos procesos del catálogo, ajustados a su organización',
          'Alojado por nosotros',
          'Pantallas, roles y aprobaciones configurados con usted',
          'Formación de los administradores de procesos',
        ],
        cta: 'Solicitar un presupuesto',
      },
      {
        name: 'Organización',
        tagline: 'Varias direcciones, varios procesos',
        features: [
          'Procesos del catálogo y procesos a medida',
          'Conexión con sus sistemas existentes (REST, SOAP)',
          'Lectura de documentos y generación documental',
          'Paneles de control y exportaciones',
        ],
        cta: 'Solicitar un presupuesto',
      },
      {
        name: 'Grupo',
        tagline: 'Filiales, grandes volúmenes o instalación en sus servidores',
        features: [
          'Alojado por nosotros, o instalado en sus servidores sin acceso del proveedor',
          'Varias entidades y filiales',
          'Conexión con su directorio (SSO, SCIM)',
          'Acompañamiento dedicado',
        ],
        cta: 'Hablemos de su proyecto',
      },
    ],
    note: 'Cada propuesta precisa el número de usuarios activos y de procesos cubiertos, así como el modo de despliegue elegido.',
  },

  contact: {
    hero: {
      eyebrow: 'Contacto',
      title: 'Hablemos de su proyecto',
      subtitle:
        'Díganos en qué punto se encuentra. Nos pondremos en contacto con usted rápidamente para organizar una demostración adaptada a sus procesos.',
    },
    form: {
      name: 'Nombre completo',
      namePlaceholder: 'Su nombre',
      company: 'Empresa',
      companyPlaceholder: 'Nombre de su organización',
      email: 'Correo electrónico profesional',
      emailPlaceholder: 'usted@empresa.com',
      phone: 'Teléfono',
      phonePlaceholder: '+221 …',
      message: 'Su mensaje',
      messagePlaceholder: 'Describa su necesidad o sus procesos en unas palabras…',
      required: 'obligatorio',
      submit: 'Enviar mi solicitud',
      sending: 'Enviando…',
      successTitle: '¡Mensaje enviado, gracias!',
      successText:
        'Hemos recibido su solicitud y nos pondremos en contacto con usted muy pronto.',
      errorTitle: 'El envío ha fallado',
      errorText:
        'Se ha producido un problema. Vuelva a intentarlo o escríbanos directamente a ',
      notConfigured:
        'El formulario todavía no está conectado. Configure el endpoint en el archivo .env (VITE_FORMSPREE_ID) para activar el envío.',
    },
    aside: {
      title: 'Qué ocurre a continuación',
      steps: [
        'Estudiamos su solicitud.',
        'Organizamos una demostración centrada en sus procesos.',
        'Le proponemos una oferta a su medida, sin compromiso.',
      ],
      emailLabel: 'Escríbanos',
    },
  },

  demo: {
    hero: {
      eyebrow: 'Programar una demostración',
      title: 'Reserve su demostración en unos clics',
      subtitle:
        'Elija el horario que mejor le venga. La demostración dura una hora, se celebra en línea y trata sobre sus procesos, sin compromiso.',
      ctaScroll: 'Elegir mi horario',
      ctaInline: 'Ver el calendario',
    },
    benefits: [
      'Una demostración adaptada a su sector y a sus necesidades',
      'Respuestas concretas a sus preguntas, en directo',
      'Una estimación clara de lo que bxFlow puede automatizar en su organización',
    ],
    duration: '1 hora',
    durationLabel: 'Duración',
    online: 'En línea',
    onlineLabel: 'Formato',
    free: 'Sin compromiso',
    freeLabel: 'Condiciones',
    widgetTitle: 'Elija su horario',
    loading: 'Cargando el calendario…',
    error: {
      title: 'No ha sido posible mostrar el calendario',
      text: 'Puede abrir la reserva de cita en una pestaña nueva, o escribirnos directamente.',
      open: 'Abrir el calendario',
    },
    fallback: {
      title: 'La reserva de cita en línea llegará pronto',
      text: 'Mientras tanto, escríbanos a través del formulario de contacto: le propondremos un horario adecuado en 24-48 h.',
      cta: 'Ir al formulario de contacto',
    },
  },

  footer: {
    tagline: 'Sus procesos de negocio, bajo control de principio a fin.',
    product: 'Producto',
    company: 'Recursos',
    legal: 'Legal',
    legalNotice: 'Aviso legal',
    privacy: 'Privacidad',
    brochure: 'Folleto (PDF, en francés)',
    followUs: 'Síganos',
    linkedinAria: 'bxGroup Horizon en LinkedIn',
    // L'éditeur, nommé une fois et discrètement. bxFlow reste le sujet
    // de ce site ; le groupe apparaît là où l'on cherche qui est derrière.
    editeur: 'Un producto de bxGroup',
    rights: 'Todos los derechos reservados.',
    madeWith: 'Hecho para las organizaciones del África francófona y de más allá.',
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'La página que busca no existe o se ha trasladado.',
    cta: 'Volver al inicio',
  },
};
