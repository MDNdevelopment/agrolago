import type { Dict } from './es';

export const en: Dict = {
  code: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  hreflang: 'en',
  label: 'EN',
  native: 'English',
  tagline: 'Frozen shrimp from Zulia, ready for export',
  description:
    'Agrolago de Occidente farms, processes and exports frozen shrimp from Zulia, Venezuela. Whole, tails and value-added, with lot-level traceability.',

  ui: {
    skip: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main',
    homeAria: 'Agrolago, home',
    langNav: 'Language',
    cta: 'Request a quote',
    credit: 'Website by MDN Publicidad',
    rights: 'All rights reserved',
    openDoc: 'Open document',
    notFoundTitle: 'This page does not exist.',
    notFoundText: 'The link may have changed.',
    notFoundBack: 'Back to home',
  },

  nav: { inicio: 'Home', nosotros: 'About us', productos: 'Products', procesos: 'Processes', contacto: 'Contact' },

  footer: {
    contact: 'Contact',
    group: 'Group',
    pages: 'Pages',
    office: 'Office',
    group_items: ['Agrolago de Occidente, C.A.', 'Lago Pack, C.A.', 'Shrimp farms'],
  },

  cta: {
    title: 'Need frozen shrimp for your market?',
    text: 'Tell us the presentation, size, volume and destination. We will reply with a quote.',
    primary: 'Request a quote',
  },

  home: {
    title: 'Agrolago · Frozen shrimp from Zulia for export',
    carouselLabel: 'What we do',
    panels: [
      {
        label: 'Farming',
        title: 'We farm shrimp in Zulia.',
        text: 'Our own farms and partner farms supply our processing plant.',
        cta: 'See the process',
        href: 'procesos',
      },
      {
        label: 'Plant',
        title: 'We process it in our own plant.',
        text: 'At Lago Pack we sort, grade, pack and freeze with quality controls at every stage.',
        cta: 'Meet the group',
        href: 'nosotros',
      },
      {
        label: 'Export',
        title: 'We export to four continents.',
        text: 'Europe, North America, Asia and part of South America receive our shrimp frozen and stored at −18 °C.',
        cta: 'Ask for a quote',
        href: 'contacto',
      },
    ],
    band: {
      statement:
        'Farming, plant and export inside one group. Every lot we ship carries a code, and with it we can reconstruct its journey.',
      facts: 'In Zulia since 2011. Twelve controlled stages, from larviculture to export. Four destination regions: Europe, North America, Asia and South America.',
    },
    chain: {
      title: 'From larva to container',
      all: 'See all 12 stages →',
      steps: [
        { title: 'Larvae', text: 'A larvae hatchery supplies our farms and third-party farms under formal supply agreements.' },
        { title: 'Farms', text: 'Our own farms and partner farms in Zulia grow the shrimp that reaches our plant.' },
        { title: 'Lago Pack plant', text: 'Reception, sorting, grading, value-added cuts, packing and freezing under quality control.' },
        { title: 'Cold storage at −18 °C', text: 'Frozen product is kept in cold rooms until dispatch.' },
        { title: 'Export', text: 'Customs procedures and logistics companies abroad that store and distribute.' },
      ],
    },
    products: {
      title: 'Three ways to receive our shrimp',
      all: 'See products →',
      items: [
        { title: 'Whole shrimp', text: 'The most natural way to export it.' },
        { title: 'Shrimp tails', text: 'Tails selected and packed for export.' },
        { title: 'Value-added', text: 'Peeled shrimp in P&D, PUD and PPV presentations, among others.' },
      ],
    },
    certs: {
      title: 'Processes audited by third parties',
      intro: 'Recognized national and international firms have audited our processes.',
      link: 'See the documents →',
      items: [
        { name: 'HACCP', text: 'Hazard analysis and critical control points.' },
        { name: 'ASC', text: 'Aquaculture chain of custody, Lago Pack plant.' },
        { name: 'FDA', text: 'Plant registration under the Bioterrorism Act (BTA).' },
        { name: 'Health Comptroller', text: 'Sanitary operating permit, Zulia state.' },
      ],
    },
  },

  nosotros: {
    title: 'About us',
    description:
      'Agrolago de Occidente started operating in 2011 in Zulia. Today it combines farms, a processing plant and shrimp export.',
    hero: {
      title: 'A group that farms, processes and exports.',
      intro: 'Agrolago de Occidente started operating in 2011 in Zulia state. Today it brings farms, plant and export together in one group, with an experienced team of professionals building commercial relationships that benefit everyone involved.',
    },
    story: [
      {
        title: 'We started in Zulia',
        text: 'In 2011 Agrolago de Occidente, C.A. began marketing and exporting fishing and aquaculture products from an area with exceptional conditions for shrimp farming.',
      },
      {
        title: 'We integrated the chain',
        text: 'We became a vertically integrated group: larvae breeding, farming, plant processing, marketing and export.',
      },
      {
        title: 'We expanded capacity',
        text: 'Our own farms and third-party farms supply the plant, with freezing equipment that shortens freezing times and keeps volume available for orders.',
      },
    ],
    mission: {
      title: 'Mission',
      text: 'We are a sustainable development organization dedicated to marketing and exporting farmed shrimp. We apply the best quality and control techniques to guarantee safety and traceability, in harmony with the environment and the community.',
    },
    vision: {
      title: 'Vision',
      text: 'To remain a leader in the Venezuelan shrimp industry through resource optimization, technological innovation and continuous improvement, offering excellent quality at competitive prices.',
    },
    plant: {
      title: 'Lago Pack plant',
      text: 'Lago Pack, C.A. processes shrimp so it reaches consumers safely, in industrial facilities with modern technology.',
      points: [
        'Freezing equipment that shortens processing times.',
        'Responsible use of resources, with no antibiotics applied.',
        'Checks on weight, size, taste, appearance and natural texture.',
        'Traceability from the origin of the raw material to delivery to the customer.',
      ],
    },
    valuesTitle: 'What defines us',
    values: [
      { title: 'Quality', text: 'We check weight, size, taste, appearance and natural texture before and during processing.' },
      { title: 'Ethics', text: 'Honesty, integrity and keeping the commitments we make.' },
      { title: 'Respect', text: 'We use resources within their capacity to renew, without polluting water and without applying antibiotics.' },
      { title: 'Commitment', text: 'To customers, shareholders, workers and the community where we operate.' },
    ],
    groupTitle: 'The group',
    group: [
      { name: 'Agrolago de Occidente, C.A.', role: 'Marketing and export' },
      { name: 'Lago Pack, C.A.', role: 'Processing plant' },
      { name: 'Shrimp farms', role: 'Own production in Zulia' },
    ],
    alliesTitle: 'Partners',
    allies: [
      { title: 'Farms in Zulia', text: 'Partnerships on raw material, equipment purchases, technical assistance and financing, with high-yield farms.' },
      { title: 'Larvae hatchery', text: 'Formal supply agreements with a shrimp larvae hatchery.' },
      { title: 'Storage and logistics', text: 'Companies abroad that store and distribute our products.' },
    ],
    cta: 'If you need a supplier who can tell you where every lot comes from, let’s talk.',
  },

  productos: {
    title: 'Products',
    description:
      'Frozen shrimp for export: whole, tails and value-added (P&D, PUD, PPV). Packed under the Agrolago brand, the customer’s brand or generic.',
    hero: {
      title: 'Frozen shrimp for export.',
      intro: 'Whole, tails or value-added, in presentations we adapt to each market.',
    },
    items: [
      {
        title: 'Whole shrimp',
        text: 'The most natural way to export our product.',
        specs: [
          { name: 'Freezing', text: 'By forced air or IQF' },
          { name: 'Packing', text: 'Case under the Agrolago brand, the customer’s or generic' },
          { name: 'Master', text: 'Packs of 4 or 5 lb or kg, depending on the market' },
        ],
      },
      {
        title: 'Shrimp tails',
        text: 'Tails are carefully selected and packed for export.',
        specs: [
          { name: 'Selection', text: 'Each tail is selected before packing' },
          { name: 'Freezing', text: 'By forced air or IQF' },
          { name: 'Packing', text: 'Case under the Agrolago brand, the customer’s or generic' },
        ],
      },
      {
        title: 'Value-added',
        text: 'Shrimp carefully handled and processed, with added value. Offered in several presentations.',
        specs: [
          { name: 'P&D', text: 'Peeled and deveined' },
          { name: 'PUD', text: 'Peeled undeveined' },
          { name: 'PPV', text: 'Peeled and deveined with a needle' },
          { name: 'And more', text: 'Other presentations depending on the market' },
        ],
      },
    ],
    quote: 'Quote this product',
    packTitle: 'How we freeze and pack',
    pack: [
      { title: 'Freezing', text: 'By forced air in tunnels, about 12 hours on average, or by IQF, individual quick freezing.' },
      { title: 'Case', text: 'Packed, weighed and glazed. Under the Agrolago brand, the customer’s brand or generic packaging.' },
      { title: 'Master', text: 'Packs of 4 or 5 lb or kg, depending on the market, secured with strapping or adhesive tape.' },
      { title: 'Cold storage', text: 'Kept at −18 °C on average until dispatch.' },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'Which shrimp presentations do you export?', a: 'Whole shrimp, shrimp tails and peeled value-added shrimp (P&D, PUD and PPV, among others).' },
      { q: 'Can you pack under the customer’s brand?', a: 'Yes. We normally work with the Agrolago brand, but also with the customer’s brand or generic packaging.' },
      { q: 'How is the product frozen?', a: 'By forced air in cold tunnels or by IQF (individual quick freezing). It is then stored at −18 °C on average.' },
      { q: 'Which markets do you export to?', a: 'Europe, North America, Asia and part of South America.' },
      { q: 'How do I request a quote?', a: 'Write to ventas@agrolago.com or use the contact form with the presentation, size, volume and destination country.' },
    ],
    cta: { title: 'Tell us which presentation you need', text: 'We reply with a quote for your destination.' },
  },

  procesos: {
    title: 'Processes',
    description:
      'The 12 stages at Agrolago, from larviculture to shrimp export, with lot-level traceability and quality controls.',
    hero: {
      title: 'Twelve stages, from larva to container.',
      intro: 'Every lot gets a unique code from the moment it reaches the plant until it is dispatched.',
    },
    steps: [
      { title: 'Larviculture', text: 'The first stage of development, in four phases: nauplius, zoea, mysis and postlarva. Conditions are created to raise and maintain the larvae and increase survival.' },
      { title: 'Shrimp farming', text: 'Postlarvae move to nursery ponds at up to 150 animals per m². At 1 to 3 grams they are transferred to grow-out ponds of 3 to 16 ha until they reach commercial size.' },
      { title: 'Harvest', text: 'Pre-harvest sampling identifies size distribution, quality and quantity. The product goes live to pre-processing and is loaded into ice bins bound for the plant.' },
      { title: 'Reception and analysis', text: 'Unloaded in baskets with ice, between 0 and 10 °C. Freshness is inspected, along with any contamination, odors or off-flavors.' },
      { title: 'Sorting', text: 'On conveyor belts, broken, stained or altered shrimp that do not qualify as first grade or for export are removed. Trained staff supervise.' },
      { title: 'Grading', text: 'Grading machines with hoppers and belts separate the shrimp by size. Then it is weighed and packed.' },
      { title: 'Value-added', text: 'Special cuts, besides removing the head: P&D (peeled and deveined), PUD (peeled undeveined) and PPV (peeled and deveined with a needle), among other presentations.' },
      { title: 'Case packing', text: 'On the packing tables the product is packed, weighed and glazed. Under the Agrolago brand, the customer’s brand or generic packaging.' },
      { title: 'Freezing', text: 'By forced air in tunnels, about 12 hours on average, or by IQF, which forms a thin film of ice on each piece by spraying it with water.' },
      { title: 'Master packing', text: 'Once frozen, cases are grouped into packs of 4 or 5 lb or kg depending on the market, secured with strapping or adhesive tape.' },
      { title: 'Storage', text: 'Cold rooms at −18 °C on average, until export.' },
      { title: 'Export', text: 'We follow the regulations and protocols of each destination. Our customs agent handles the shipment and meets the agreed deadlines.' },
    ],
    trace: {
      title: 'Lot-level traceability',
      intro: 'All our operations follow a Traceability Plan that documents every activity and lets us rebuild a product’s history at any time.',
      kinds: [
        { title: 'Backward traceability', text: 'We know exactly where the raw material comes from. On reception the supplier, entry date, quantity and other data are recorded in a database, so it can be traced back to earlier stages.' },
        { title: 'Internal traceability', text: 'It follows the product inside the company. Each lot received carries a unique code from reception to dispatch, linking it to the final product, the process and the production date.' },
      ],
      stops: [
        { title: 'Supplier', text: 'The farm of origin is recorded' },
        { title: 'Reception', text: 'Entry date and quantity are noted' },
        { title: 'Unique code', text: 'Every lot received gets its own' },
        { title: 'Plant', text: 'Sorting, processing and freezing' },
        { title: 'Dispatch', text: 'Delivered to the customer with the lot identified' },
      ],
    },
    docsTitle: 'Certificates and registrations',
    docsIntro: 'Documents from Lago Pack and Agrolago de Occidente.',
    docs: [
      { title: 'HACCP', text: 'Hazard analysis and critical control points.' },
      { title: 'ASC', text: 'Chain of custody certificate.' },
      { title: 'FDA (BTA)', text: 'Plant registration.' },
      { title: 'Sanitary permit', text: 'Health Comptroller of Zulia State.' },
    ],
    quality: {
      quote: 'Quality is our best guarantee of customer loyalty, our strongest defense against competition and the only path to growth.',
      author: 'Jack Welch',
      text: 'We apply rigorous controls across all processes to ensure legality, quality and traceability, under national and international standards. Our quality policy guides internal improvement and has guaranteed a safe product from the start.',
    },
    policyTitle: 'Quality policy',
    policy: [
      'Meet the requirements of customers and stakeholders, and periodically measure their satisfaction.',
      'Research and understand their needs so we can anticipate their expectations.',
      'Continuously improve staff skills, physical resources and the quality management system.',
      'Build a quality culture shared by Agrolago and its main stakeholders.',
    ],
  },

  contacto: {
    title: 'Contact',
    description: 'Request a frozen shrimp quote from Agrolago, in Maracaibo, Zulia. We reply by email.',
    hero: {
      title: 'Get a quote from Agrolago.',
      intro: 'Send us the presentation, size, volume and destination country, and we will reply by email.',
    },
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      country: 'Destination country',
      phone: 'Phone',
      message: 'What do you need a quote for?',
      send: 'Send request',
      sending: 'Sending…',
      ok: 'We received your request. We will write to you soon.',
      fail: 'We could not send it. Please write to ventas@agrolago.com.',
      noscript: 'Without JavaScript, write to us at',
    },
    officeTitle: 'Office in Maracaibo',
    rif: 'Tax ID (RIF)',
    mapTitle: 'Map of the Agrolago office',
  },
};
