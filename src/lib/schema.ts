import { site } from '../config/site';
import { getT, localePath, type Lang } from '../i18n';

const base = site.url.replace(/\/$/, '');
export const abs = (path: string) => new URL(path, base + '/').toString();

export function baseGraph(lang: Lang) {
  const t = getT(lang);
  return [
    {
      '@type': 'Organization',
      '@id': `${base}/#org`,
      name: site.name,
      legalName: site.legalName,
      url: base,
      logo: abs('/logo.png'),
      image: abs('/og-default.jpg'),
      description: t.description,
      email: site.email,
      telephone: site.phone,
      taxID: site.rif,
      foundingDate: String(site.foundingYear),
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: ['Europe', 'North America', 'Asia', 'South America'],
      ...(Object.values(site.social).some(Boolean) && { sameAs: Object.values(site.social).filter(Boolean) }),
      knowsAbout: ['Shrimp', 'Frozen shrimp', 'Aquaculture', 'Seafood export'],
      subOrganization: { '@type': 'Organization', name: 'Lago Pack, C.A.', description: 'Shrimp processing plant' },
    },
    {
      '@type': 'WebSite',
      '@id': `${base}/#site`,
      url: abs(localePath(lang)),
      name: site.name,
      inLanguage: t.htmlLang,
      publisher: { '@id': `${base}/#org` },
    },
  ];
}

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
