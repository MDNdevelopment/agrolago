// Español: idioma base. Los otros idiomas siguen exactamente esta forma (tipo Dict).
export const es = {
  code: 'es',
  htmlLang: 'es-VE',
  ogLocale: 'es_VE',
  hreflang: 'es',
  label: 'ES',
  native: 'Español',
  tagline: 'Camarón congelado de Zulia, listo para exportar',
  description:
    'Agrolago de Occidente cultiva, procesa y exporta camarón congelado desde Zulia, Venezuela. Entero, cola y valor agregado, con trazabilidad por lote.',

  ui: {
    skip: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    mainNav: 'Principal',
    homeAria: 'Agrolago, inicio',
    langNav: 'Idioma',
    cta: 'Solicitar cotización',
    credit: 'Sitio web desarrollado por MDN Publicidad',
    rights: 'Todos los derechos reservados',
    openDoc: 'Abrir documento',
    notFoundTitle: 'Esta página no existe.',
    notFoundText: 'Puede que el enlace haya cambiado.',
    notFoundBack: 'Volver al inicio',
  },

  nav: { inicio: 'Inicio', nosotros: 'Nosotros', productos: 'Productos', procesos: 'Procesos', contacto: 'Contacto' },

  footer: {
    contact: 'Contacto',
    group: 'Grupo',
    pages: 'Páginas',
    office: 'Oficina',
    group_items: ['Agrolago de Occidente, C.A.', 'Lago Pack, C.A.', 'Granjas camaroneras'],
  },

  cta: {
    title: '¿Necesitas camarón congelado para tu mercado?',
    text: 'Cuéntanos presentación, talla, volumen y destino. Te respondemos con una cotización.',
    primary: 'Solicitar cotización',
  },

  home: {
    title: 'Agrolago · Camarón congelado de Zulia para exportación',
    carouselLabel: 'Lo que hacemos',
    panels: [
      {
        label: 'Cultivo',
        title: 'Cultivamos camarón en el Zulia.',
        text: 'Granjas propias y aliadas abastecen nuestra planta de procesamiento.',
        cta: 'Ver el proceso',
        href: 'procesos',
      },
      {
        label: 'Planta',
        title: 'Lo procesamos en planta propia.',
        text: 'En Lago Pack seleccionamos, clasificamos, empacamos y congelamos con controles de calidad en cada etapa.',
        cta: 'Conocer el grupo',
        href: 'nosotros',
      },
      {
        label: 'Exportación',
        title: 'Exportamos a cuatro continentes.',
        text: 'Europa, Norteamérica, Asia y parte de Sudamérica reciben nuestro camarón congelado a −18 °C.',
        cta: 'Pedir cotización',
        href: 'contacto',
      },
    ],
    band: {
      statement:
        'Cultivo, planta y exportación dentro del mismo grupo. Cada lote que despachamos lleva un código, y con él podemos reconstruir su recorrido.',
      facts: 'Desde 2011 en Zulia. Doce etapas controladas, de la larvicultura a la exportación. Cuatro regiones de destino: Europa, Norteamérica, Asia y Sudamérica.',
    },
    chain: {
      title: 'De la larva al contenedor',
      all: 'Ver las 12 etapas →',
      steps: [
        { title: 'Larvas', text: 'Un laboratorio de cría de larvas abastece a nuestras granjas y a las de terceros, con acuerdos formales de suministro.' },
        { title: 'Granjas', text: 'Granjas propias y aliadas en Zulia producen el camarón que llega a nuestra planta.' },
        { title: 'Planta Lago Pack', text: 'Recepción, selección, clasificación, valor agregado, empaque y congelación bajo control de calidad.' },
        { title: 'Cavas a −18 °C', text: 'El producto congelado se conserva en cavas hasta el momento del despacho.' },
        { title: 'Exportación', text: 'Trámites aduanales y empresas de logística en el exterior para almacenar y distribuir.' },
      ],
    },
    products: {
      title: 'Tres formas de recibir el camarón',
      all: 'Ver productos →',
      items: [
        { title: 'Camarón entero', text: 'La forma más natural de exportarlo.' },
        { title: 'Cola de camarón', text: 'Colas seleccionadas y empacadas para exportación.' },
        { title: 'Valor agregado', text: 'Camarón pelado en presentaciones P&D, PUD y PPV, entre otras.' },
      ],
    },
    certs: {
      title: 'Procesos auditados por terceros',
      intro: 'Firmas reconocidas, nacionales e internacionales, han auditado nuestros procesos.',
      link: 'Ver los documentos →',
      items: [
        { name: 'HACCP', text: 'Análisis de peligros y puntos críticos de control.' },
        { name: 'ASC', text: 'Cadena de custodia de acuicultura, planta Lago Pack.' },
        { name: 'FDA', text: 'Registro de planta bajo la ley contra el bioterrorismo (BTA).' },
        { name: 'Contraloría Sanitaria', text: 'Permiso sanitario de funcionamiento, estado Zulia.' },
      ],
    },
  },

  nosotros: {
    title: 'Nosotros',
    description:
      'Agrolago de Occidente inició actividades en 2011 en Zulia. Hoy integra granjas, planta de procesamiento y exportación de camarón.',
    hero: {
      title: 'Un grupo que cultiva, procesa y exporta.',
      intro: 'Agrolago de Occidente inició actividades en 2011, en el estado Zulia. Hoy integra granjas, planta y exportación bajo un mismo grupo, con un equipo de profesionales con experiencia que construye relaciones comerciales beneficiosas para todas las partes.',
    },
    story: [
      {
        title: 'Empezamos en Zulia',
        text: 'En 2011 Agrolago de Occidente, C.A. comienza a comercializar y exportar productos de la pesca y la acuicultura desde una zona con condiciones excepcionales para cultivar camarón.',
      },
      {
        title: 'Integramos la cadena',
        text: 'Nos convertimos en un grupo verticalmente integrado: cría de larvas, cultivo en granjas, procesamiento en planta, comercialización y exportación.',
      },
      {
        title: 'Ampliamos la capacidad',
        text: 'Granjas propias y de terceros abastecen la planta, con equipos de congelación que acortan los tiempos y mantienen volumen disponible para los pedidos.',
      },
    ],
    mission: {
      title: 'Misión',
      text: 'Somos una organización de desarrollo sustentable dedicada a comercializar y exportar camarón de acuicultura. Aplicamos las mejores técnicas de calidad y control para garantizar seguridad y trazabilidad, en armonía con el ambiente y la comunidad.',
    },
    vision: {
      title: 'Visión',
      text: 'Mantener una posición de liderazgo en la industria camaronera venezolana mediante la optimización de recursos, la innovación tecnológica y la mejora continua, con calidad excelente y precios competitivos.',
    },
    plant: {
      title: 'Planta Lago Pack',
      text: 'Lago Pack, C.A. procesa camarón para que llegue seguro al consumo humano, en instalaciones industriales con tecnología moderna.',
      points: [
        'Equipos de congelación que acortan los tiempos de proceso.',
        'Uso responsable de los recursos y sin aplicar antibióticos.',
        'Control de peso, talla, sabor, apariencia y textura natural.',
        'Trazabilidad del origen de la materia prima hasta la entrega al cliente.',
      ],
    },
    valuesTitle: 'Lo que nos define',
    values: [
      { title: 'Calidad', text: 'Controlamos peso, talla, sabor, apariencia y textura natural antes y durante el proceso.' },
      { title: 'Ética', text: 'Honradez, rectitud y cumplimiento de los compromisos adquiridos.' },
      { title: 'Respeto', text: 'Usamos los recursos sin exceder su capacidad de renovación, sin contaminar el agua y sin aplicar antibióticos.' },
      { title: 'Compromiso', text: 'Con clientes, accionistas, trabajadores y con la comunidad donde operamos.' },
    ],
    groupTitle: 'El grupo',
    group: [
      { name: 'Agrolago de Occidente, C.A.', role: 'Comercialización y exportación' },
      { name: 'Lago Pack, C.A.', role: 'Planta de procesamiento' },
      { name: 'Granjas camaroneras', role: 'Producción propia en Zulia' },
    ],
    alliesTitle: 'Alianzas',
    allies: [
      { title: 'Granjas en Zulia', text: 'Alianzas en materia prima, compra de equipos, asistencia técnica y financiamiento, con granjas de altos rendimientos.' },
      { title: 'Laboratorio de larvas', text: 'Acuerdos formales de suministro con un laboratorio de cría de larvas de camarón.' },
      { title: 'Almacenamiento y logística', text: 'Empresas en el exterior que almacenan y distribuyen nuestros productos.' },
    ],
    cta: 'Si buscas un proveedor que pueda decirte de dónde viene cada lote, hablemos.',
  },

  productos: {
    title: 'Productos',
    description:
      'Camarón congelado para exportación: entero, cola y valor agregado (P&D, PUD, PPV). Empaque con marca Agrolago, del cliente o genérico.',
    hero: {
      title: 'Camarón congelado para exportación.',
      intro: 'Entero, en cola o con valor agregado, en presentaciones que adaptamos a cada mercado.',
    },
    items: [
      {
        title: 'Camarón entero',
        text: 'La forma más natural de exportar nuestro producto.',
        specs: [
          { name: 'Congelación', text: 'Por aire forzado o por IQF' },
          { name: 'Empaque', text: 'Estuche con marca Agrolago, del cliente o genérico' },
          { name: 'Master', text: 'Bultos de 4 o 5 libras o kg, según el mercado' },
        ],
      },
      {
        title: 'Cola de camarón',
        text: 'Las colas se seleccionan con cuidado y se empacan para exportación.',
        specs: [
          { name: 'Selección', text: 'Cada cola se selecciona antes de empacarse' },
          { name: 'Congelación', text: 'Por aire forzado o por IQF' },
          { name: 'Empaque', text: 'Estuche con marca Agrolago, del cliente o genérico' },
        ],
      },
      {
        title: 'Valor agregado',
        text: 'Camarón manipulado y procesado con cuidado, con valor agregado. Se ofrece en varias presentaciones.',
        specs: [
          { name: 'P&D', text: 'Pelado y desvenado (peeled & deveined)' },
          { name: 'PUD', text: 'Pelado sin desvenar (peeled undeveined)' },
          { name: 'PPV', text: 'Pelado y desvenado con aguja' },
          { name: 'Y más', text: 'Otras presentaciones según el mercado' },
        ],
      },
    ],
    quote: 'Cotizar este producto',
    packTitle: 'Cómo lo congelamos y empacamos',
    pack: [
      { title: 'Congelación', text: 'Por aire forzado en túneles, unas 12 horas en promedio, o por IQF, congelación individual rápida.' },
      { title: 'Estuche', text: 'Se empaca, pesa y glasea. Con marca Agrolago, marca del cliente o empaque genérico.' },
      { title: 'Master', text: 'Bultos de 4 o 5 libras o kg, según el mercado, asegurados con fleje o cinta adhesiva.' },
      { title: 'Cava', text: 'Conservación a −18 °C en promedio hasta el despacho.' },
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Qué presentaciones de camarón exportan?', a: 'Camarón entero, cola de camarón y camarón pelado con valor agregado (P&D, PUD y PPV, entre otras).' },
      { q: '¿Pueden empacar con la marca del cliente?', a: 'Sí. Normalmente trabajamos con la marca Agrolago, pero también con la marca del cliente o con empaque genérico.' },
      { q: '¿Cómo congelan el producto?', a: 'Por aire forzado en túneles de frío o por IQF (congelación individual rápida). Después se almacena a −18 °C en promedio.' },
      { q: '¿A qué mercados exportan?', a: 'A Europa, Norteamérica, Asia y parte de Sudamérica.' },
      { q: '¿Cómo pido una cotización?', a: 'Escríbenos a ventas@agrolago.com o usa el formulario de contacto con la presentación, talla, volumen y país de destino.' },
    ],
    cta: { title: 'Dinos qué presentación necesitas', text: 'Respondemos con una cotización para tu destino.' },
  },

  procesos: {
    title: 'Procesos',
    description:
      'Las 12 etapas de Agrolago, de la larvicultura a la exportación de camarón, con trazabilidad por lote y controles de calidad.',
    hero: {
      title: 'Doce etapas, de la larva al contenedor.',
      intro: 'Cada lote recibe un código único desde que llega a planta hasta que sale despachado.',
    },
    steps: [
      { title: 'Larvicultura', text: 'Primera fase del desarrollo, en cuatro estadios: nauplio, zoea, misis y postlarva. Se crean las condiciones para criar y mantener las larvas y aumentar su supervivencia.' },
      { title: 'Cultivo de camarón', text: 'Las postlarvas pasan a precriaderos, con densidades de hasta 150 animales por m². Con 1 a 3 gramos se trasladan a estanques de engorde de 3 a 16 ha, hasta la talla comercial.' },
      { title: 'Cosecha', text: 'Se muestrea antes de cosechar para conocer la distribución de tallas, la calidad y la cantidad. El producto llega vivo al preproceso y se carga en bines con hielo hacia la planta.' },
      { title: 'Recepción y análisis', text: 'Se descarga en cestas con hielo, entre 0 y 10 °C. Se inspecciona la frescura y que no haya contaminación, olores ni sabores extraños.' },
      { title: 'Selección', text: 'En bandas transportadoras se retira el camarón quebrado, manchado o alterado que no califica como primera ni para exportación. Personal calificado supervisa.' },
      { title: 'Clasificación', text: 'Máquinas clasificadoras con tolvas y bandas separan el camarón por talla. Luego se pesa y se empaca.' },
      { title: 'Valor agregado', text: 'Cortes especiales, además de retirar la cabeza: P&D (pelado y desvenado), PUD (pelado sin desvenar) y PPV (pelado y desvenado con aguja), entre otras presentaciones.' },
      { title: 'Empaque en estuche', text: 'En las mesas de empaque se envasa, pesa y glasea. Con marca Agrolago, marca del cliente o empaque genérico.' },
      { title: 'Congelamiento', text: 'Por aire forzado en túneles, unas 12 horas en promedio, o por IQF, que forma una fina película de hielo sobre cada pieza al rociarla con agua.' },
      { title: 'Empaque master', text: 'Ya congelados, los estuches se agrupan en bultos de 4 o 5 libras o kg según el mercado, asegurados con fleje o cinta adhesiva.' },
      { title: 'Almacenamiento', text: 'Cavas de conservación a −18 °C en promedio, hasta el momento de exportar.' },
      { title: 'Exportación', text: 'Cumplimos la normativa y los protocolos de cada destino. Nuestro agente aduanal tramita el embarque y cumple los tiempos pactados con el cliente.' },
    ],
    trace: {
      title: 'Trazabilidad por lote',
      intro: 'Todas nuestras operaciones siguen un Plan de Trazabilidad que documenta cada actividad y permite reconstruir la historia de un producto en cualquier momento.',
      kinds: [
        { title: 'Trazabilidad hacia atrás', text: 'Conocemos con precisión el origen de la materia prima. Al recibirla se registran en base de datos el proveedor, la fecha de entrada, la cantidad y otros datos, para rastrearla hasta las etapas anteriores.' },
        { title: 'Trazabilidad interna', text: 'Sigue al producto dentro de la empresa. Cada lote recibido lleva un código único, de la recepción al despacho, que lo relaciona con el producto final, el proceso y la fecha de producción.' },
      ],
      stops: [
        { title: 'Proveedor', text: 'La granja de origen queda registrada' },
        { title: 'Recepción', text: 'Se anotan fecha de entrada y cantidad' },
        { title: 'Código único', text: 'Cada lote recibido lleva el suyo' },
        { title: 'Planta', text: 'Selección, proceso y congelación' },
        { title: 'Despacho', text: 'Entrega al cliente con el lote identificado' },
      ],
    },
    docsTitle: 'Certificados y registros',
    docsIntro: 'Documentos de Lago Pack y Agrolago de Occidente.',
    docs: [
      { title: 'HACCP', text: 'Análisis de peligros y puntos críticos de control.' },
      { title: 'ASC', text: 'Certificado de cadena de custodia.' },
      { title: 'FDA (BTA)', text: 'Registro de planta.' },
      { title: 'Permiso sanitario', text: 'Contraloría Sanitaria del Estado Zulia.' },
    ],
    quality: {
      quote: 'La calidad es nuestra mejor garantía de la fidelidad del cliente, nuestra mejor defensa ante la competencia y el único camino para crecer.',
      author: 'Jack Welch',
      text: 'Aplicamos controles rigurosos en todos los procesos para asegurar legalidad, calidad y trazabilidad, bajo normas nacionales e internacionales. Nuestra política de calidad guía la mejora interna y desde el inicio ha garantizado un producto inocuo.',
    },
    policyTitle: 'Política de calidad',
    policy: [
      'Cumplir con los requerimientos de los clientes y partes interesadas, y medir periódicamente su nivel de satisfacción.',
      'Investigar y comprender sus necesidades para anticiparnos a sus expectativas.',
      'Mejorar de forma continua las competencias del personal, los recursos físicos y el sistema de gestión de la calidad.',
      'Desarrollar una cultura de calidad compartida por Agrolago y sus principales partes interesadas.',
    ],
  },

  contacto: {
    title: 'Contacto',
    description: 'Solicita una cotización de camarón congelado a Agrolago, en Maracaibo, Zulia. Respondemos por correo.',
    hero: {
      title: 'Cotiza con Agrolago.',
      intro: 'Escríbenos presentación, talla, volumen y país de destino, y te respondemos por correo.',
    },
    form: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo electrónico',
      country: 'País de destino',
      phone: 'Teléfono',
      message: '¿Qué necesitas cotizar?',
      send: 'Enviar solicitud',
      sending: 'Enviando…',
      ok: 'Recibimos tu solicitud. Te escribiremos pronto.',
      fail: 'No pudimos enviarla. Escríbenos a ventas@agrolago.com.',
      noscript: 'Sin JavaScript, escríbenos a',
    },
    officeTitle: 'Oficina en Maracaibo',
    rif: 'RIF',
    mapTitle: 'Mapa de la oficina de Agrolago',
  },
};

export type Dict = typeof es;
