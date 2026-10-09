import type { Dict } from './es';

// Traducción al chino simplificado preparada por MDN. Pendiente de revisión por un hablante nativo del cliente.
export const zh: Dict = {
  code: 'zh',
  htmlLang: 'zh-CN',
  ogLocale: 'zh_CN',
  hreflang: 'zh-CN',
  label: '中文',
  native: '中文',
  tagline: '来自苏利亚州的冷冻虾，可直接出口',
  description:
    'Agrolago de Occidente 在委内瑞拉苏利亚州养殖、加工并出口冷冻虾：整虾、虾尾和增值产品，可按批次追溯。',

  ui: {
    skip: '跳到正文',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    mainNav: '主导航',
    homeAria: 'Agrolago 首页',
    langNav: '语言',
    cta: '获取报价',
    credit: '网站由 MDN Publicidad 开发',
    rights: '版权所有',
    openDoc: '打开文件',
    notFoundTitle: '该页面不存在。',
    notFoundText: '链接可能已更改。',
    notFoundBack: '返回首页',
  },

  nav: { inicio: '首页', nosotros: '关于我们', productos: '产品', procesos: '工艺流程', contacto: '联系我们' },

  footer: {
    contact: '联系方式',
    group: '集团',
    pages: '页面',
    office: '办公室',
    group_items: ['Agrolago de Occidente, C.A.', 'Lago Pack, C.A.', '对虾养殖场'],
  },

  cta: {
    title: '您的市场需要冷冻虾吗？',
    text: '告诉我们规格、大小、数量和目的地，我们会回复报价。',
    primary: '获取报价',
  },

  home: {
    title: 'Agrolago · 苏利亚州冷冻虾，出口直供',
    carouselLabel: '我们的业务',
    panels: [
      {
        label: '养殖',
        title: '我们在苏利亚州养虾。',
        text: '自有养殖场和合作养殖场为我们的加工厂供货。',
        cta: '查看流程',
        href: 'procesos',
      },
      {
        label: '工厂',
        title: '在自己的工厂加工。',
        text: '在 Lago Pack，我们逐道工序严格质控，完成挑选、分级、包装和冷冻。',
        cta: '了解集团',
        href: 'nosotros',
      },
      {
        label: '出口',
        title: '出口到四大洲。',
        text: '欧洲、北美、亚洲和部分南美地区，都能收到以 −18 °C 冷冻保存的我们的虾。',
        cta: '咨询报价',
        href: 'contacto',
      },
    ],
    band: {
      statement: '养殖、加工和出口都在同一个集团内。我们发出的每一批货都有编码，凭编码就能还原它的全程。',
      facts: '2011 年起扎根苏利亚州。从育苗到出口，十二个受控环节。四个目的地区域：欧洲、北美、亚洲和南美。',
    },
    chain: {
      title: '从虾苗到集装箱',
      all: '查看全部 12 个环节 →',
      steps: [
        { title: '虾苗', text: '一家虾苗孵化场按正式供货协议，为我们和第三方的养殖场供苗。' },
        { title: '养殖场', text: '苏利亚州的自有和合作养殖场，培育送到我们工厂的虾。' },
        { title: 'Lago Pack 工厂', text: '在质量控制下完成验收、挑选、分级、增值加工、包装和冷冻。' },
        { title: '−18 °C 冷库', text: '冷冻产品存放在冷库中，直到发货。' },
        { title: '出口', text: '办理报关手续，并由国外物流公司负责仓储和配送。' },
      ],
    },
    products: {
      title: '三种供货形式',
      all: '查看产品 →',
      items: [
        { title: '整虾', text: '最自然的出口形态。' },
        { title: '虾尾', text: '精选虾尾，专为出口包装。' },
        { title: '增值产品', text: '去壳虾，规格有 P&D、PUD 和 PPV 等。' },
      ],
    },
    certs: {
      title: '工艺经第三方审核',
      intro: '国内外知名机构审核过我们的工艺。',
      link: '查看文件 →',
      items: [
        { name: 'HACCP', text: '危害分析与关键控制点。' },
        { name: 'ASC', text: '水产养殖产销监管链认证，Lago Pack 工厂。' },
        { name: 'FDA', text: '依据生物恐怖主义法案（BTA）的工厂注册。' },
        { name: '卫生监察局', text: '苏利亚州卫生运营许可。' },
      ],
    },
  },

  nosotros: {
    title: '关于我们',
    description: 'Agrolago de Occidente 于 2011 年在苏利亚州开展业务，如今整合了养殖场、加工厂和虾类出口。',
    hero: {
      title: '集养殖、加工和出口于一体的集团。',
      intro: 'Agrolago de Occidente 于 2011 年在苏利亚州开展业务，如今把养殖场、工厂和出口整合在同一个集团之下，由经验丰富的专业团队建立对各方都有利的商业关系。',
    },
    story: [
      {
        title: '从苏利亚州起步',
        text: '2011 年，Agrolago de Occidente, C.A. 开始在这片非常适合养虾的地区销售和出口渔业与水产养殖产品。',
      },
      {
        title: '整合产业链',
        text: '我们发展成纵向一体化的集团：虾苗培育、养殖场养殖、工厂加工、销售和出口。',
      },
      {
        title: '扩大产能',
        text: '自有和第三方养殖场为工厂供货，冷冻设备缩短了冻结时间，并保证有足够的货量满足订单。',
      },
    ],
    mission: {
      title: '使命',
      text: '我们是一家致力于销售和出口养殖虾的可持续发展企业。我们采用最好的质量与控制技术，保证安全和可追溯，并与环境和社区和谐共处。',
    },
    vision: {
      title: '愿景',
      text: '通过优化资源、技术创新和持续改进，保持在委内瑞拉虾业中的领先地位，以优异的品质和有竞争力的价格服务客户。',
    },
    plant: {
      title: 'Lago Pack 加工厂',
      text: 'Lago Pack, C.A. 在配备现代技术的工业设施中加工虾产品，确保安全供人食用。',
      points: [
        '冷冻设备缩短加工时间。',
        '合理利用资源，不使用抗生素。',
        '检查重量、大小、口味、外观和天然口感。',
        '从原料来源到交付客户，全程可追溯。',
      ],
    },
    valuesTitle: '我们的价值观',
    values: [
      { title: '品质', text: '在加工前和加工过程中，我们检查重量、大小、口味、外观和天然口感。' },
      { title: '诚信', text: '诚实、正直，信守承诺。' },
      { title: '尊重', text: '利用资源不超过其再生能力，不污染水源，不使用抗生素。' },
      { title: '责任', text: '对客户、股东、员工以及我们所在的社区负责。' },
    ],
    groupTitle: '集团成员',
    group: [
      { name: 'Agrolago de Occidente, C.A.', role: '销售与出口' },
      { name: 'Lago Pack, C.A.', role: '加工厂' },
      { name: '对虾养殖场', role: '苏利亚州自有养殖' },
    ],
    alliesTitle: '合作伙伴',
    allies: [
      { title: '苏利亚州养殖场', text: '在原料、设备采购、技术支持和融资方面合作，合作养殖场产量高。' },
      { title: '虾苗孵化场', text: '与一家虾苗孵化场签订正式供货协议。' },
      { title: '仓储与物流', text: '国外的公司负责我们产品的仓储和配送。' },
    ],
    cta: '如果您需要一个能说清每一批货来源的供应商，欢迎联系我们。',
  },

  productos: {
    title: '产品',
    description: '出口冷冻虾：整虾、虾尾和增值产品（P&D、PUD、PPV）。可使用 Agrolago 品牌、客户品牌或通用包装。',
    hero: {
      title: '出口冷冻虾。',
      intro: '整虾、虾尾或增值产品，规格可按各个市场调整。',
    },
    items: [
      {
        title: '整虾',
        text: '最自然的出口形态。',
        specs: [
          { name: '冷冻', text: '强制风冷或 IQF 单体速冻' },
          { name: '包装', text: '盒装，可用 Agrolago 品牌、客户品牌或通用包装' },
          { name: '外箱', text: '按市场不同，每箱 4 或 5 磅（或公斤）' },
        ],
      },
      {
        title: '虾尾',
        text: '虾尾经过仔细挑选，专为出口包装。',
        specs: [
          { name: '挑选', text: '每条虾尾包装前都经过挑选' },
          { name: '冷冻', text: '强制风冷或 IQF 单体速冻' },
          { name: '包装', text: '盒装，可用 Agrolago 品牌、客户品牌或通用包装' },
        ],
      },
      {
        title: '增值产品',
        text: '经过精心处理的增值虾产品，有多种规格可选。',
        specs: [
          { name: 'P&D', text: '去壳去肠' },
          { name: 'PUD', text: '去壳不去肠' },
          { name: 'PPV', text: '去壳，用针挑去肠线' },
          { name: '其他', text: '可按市场需求提供其他规格' },
        ],
      },
    ],
    quote: '为该产品询价',
    packTitle: '冷冻与包装方式',
    pack: [
      { title: '冷冻', text: '强制风冷隧道冷冻，平均约 12 小时；或 IQF 单体速冻。' },
      { title: '盒装', text: '包装、称重并镀冰衣。可用 Agrolago 品牌、客户品牌或通用包装。' },
      { title: '外箱', text: '按市场不同，每箱 4 或 5 磅（或公斤），用打包带或胶带固定。' },
      { title: '冷库', text: '平均 −18 °C 保存，直到发货。' },
    ],
    faqTitle: '常见问题',
    faqs: [
      { q: '你们出口哪些规格的虾？', a: '整虾、虾尾和增值产品（PUD、P&D 和 PPV 等）。' },
      { q: '可以使用客户的品牌包装吗？', a: '可以。我们通常使用 Agrolago 品牌，也可以使用客户品牌或通用包装。' },
      { q: '产品怎样冷冻？', a: '采用冷冻隧道强制风冷，或 IQF 单体速冻，之后平均在 −18 °C 下保存。' },
      { q: '你们出口到哪些市场？', a: '欧洲、北美、亚洲和部分南美地区。' },
      { q: '如何获取报价？', a: '请发邮件到 ventas@agrolago.com，或用联系表单告知规格、大小、数量和目的国。' },
    ],
    cta: { title: '告诉我们您需要的规格', text: '我们会按您的目的地回复报价。' },
  },

  procesos: {
    title: '工艺流程',
    description: 'Agrolago 从育苗到出口的 12 个环节，按批次追溯，并有质量控制。',
    hero: {
      title: '十二个环节，从虾苗到集装箱。',
      intro: '每一批货从进厂到发货，都有唯一编码。',
    },
    steps: [
      { title: '育苗', text: '发育的第一阶段，分为四个时期：无节幼体、溞状幼体、糠虾幼体和仔虾。我们创造合适的条件来培育和维持虾苗，提高成活率。' },
      { title: '虾类养殖', text: '仔虾转入育苗池，密度最高每平方米 150 只。体重达到 1 至 3 克时，转入 3 至 16 公顷的养成池，直到长到商品规格。' },
      { title: '收获', text: '收获前先取样，了解规格分布、品质和数量。活虾运到预处理点，装入冰桶送往工厂。' },
      { title: '验收与检测', text: '用装冰的筐卸货，温度在 0 至 10 °C 之间。检查新鲜度，以及是否有污染、异味或异常口味。' },
      { title: '挑选', text: '在传送带上剔除不符合一级品或出口要求的破损、有斑点或变质的虾，由合格的员工监督。' },
      { title: '分级', text: '分级机配有料斗和传送带，按大小把虾分开，然后称重、包装。' },
      { title: '增值加工', text: '除去虾头之外的特殊切割：P&D（去壳去肠）、PUD（去壳不去肠）和 PPV（去壳，用针挑去肠线）等规格。' },
      { title: '盒装包装', text: '在包装台上装盒、称重并镀冰衣。可用 Agrolago 品牌、客户品牌或通用包装。' },
      { title: '冷冻', text: '强制风冷隧道平均约 12 小时；或 IQF，向每只虾喷水，使表面迅速形成一层薄冰。' },
      { title: '外箱包装', text: '冻好后，按市场不同把盒子装成每箱 4 或 5 磅（或公斤）的外箱，用打包带或胶带固定。' },
      { title: '仓储', text: '冷库平均 −18 °C，保存到出口。' },
      { title: '出口', text: '我们遵守各目的地的法规和规程。报关代理办理装运，并按约定时间履行。' },
    ],
    trace: {
      title: '按批次追溯',
      intro: '我们所有的作业都遵循追溯计划，记录每一项活动，随时可以还原产品的历史。',
      kinds: [
        { title: '向上追溯', text: '我们准确掌握原料的来源。原料入厂时，供应商、入厂日期、数量等信息都会登记到数据库，可以追溯到更早的环节。' },
        { title: '内部追溯', text: '在公司内部跟踪产品。每个入厂批次从验收到发货都带有唯一编码，与成品、加工过程和生产日期相对应。' },
      ],
      stops: [
        { title: '供应商', text: '记录来源养殖场' },
        { title: '验收', text: '登记入厂日期和数量' },
        { title: '唯一编码', text: '每个入厂批次都有自己的编码' },
        { title: '工厂', text: '挑选、加工和冷冻' },
        { title: '发货', text: '带着批次标识交付客户' },
      ],
    },
    docsTitle: '证书与注册文件',
    docsIntro: 'Lago Pack 和 Agrolago de Occidente 的文件。',
    docs: [
      { title: 'HACCP', text: '危害分析与关键控制点。' },
      { title: 'ASC', text: '产销监管链证书。' },
      { title: 'FDA (BTA)', text: '工厂注册。' },
      { title: '卫生许可', text: '苏利亚州卫生监察局。' },
    ],
    quality: {
      quote: '质量是我们赢得客户忠诚的最好保证，是我们抵御竞争的最强防线，也是发展的唯一道路。',
      author: 'Jack Welch',
      text: '我们在所有流程中实施严格的控制，依据国内外标准，确保合法、质量和可追溯。我们的质量方针指导内部改进，从一开始就保证产品安全。',
    },
    policyTitle: '质量方针',
    policy: [
      '满足客户和相关方的要求，并定期衡量他们的满意度。',
      '了解他们的需求，提前满足他们的期望。',
      '持续提升员工能力、硬件资源和质量管理体系。',
      '建立 Agrolago 与主要相关方共同的质量文化。',
    ],
  },

  contacto: {
    title: '联系我们',
    description: '向位于苏利亚州马拉开波的 Agrolago 咨询冷冻虾报价，我们通过邮件回复。',
    hero: {
      title: '向 Agrolago 获取报价。',
      intro: '请告知规格、大小、数量和目的国，我们会通过邮件回复。',
    },
    form: {
      name: '姓名',
      company: '公司',
      email: '电子邮箱',
      country: '目的国',
      phone: '电话',
      message: '您需要报价的内容',
      send: '提交询价',
      sending: '正在提交…',
      ok: '已收到您的询价，我们会尽快联系您。',
      fail: '提交失败，请发邮件到 ventas@agrolago.com。',
      noscript: '未启用 JavaScript 时，请发邮件到',
    },
    officeTitle: '马拉开波办公室',
    rif: '税号 (RIF)',
    mapTitle: 'Agrolago 办公室地图',
  },
};
