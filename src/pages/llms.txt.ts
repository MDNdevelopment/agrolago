import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { getT, localePath } from '../i18n';

export const GET: APIRoute = () => {
  const root = site.url.replace(/\/$/, '');
  const t = getT('es');
  const en = getT('en');
  const body = [
    `# ${site.legalName}`,
    '',
    `> ${t.description}`,
    '',
    '## Datos',
    `- Dirección: ${site.address.street}, ${site.address.city}, ${site.address.region}, Venezuela`,
    `- Teléfono: ${site.phone}`,
    `- Correo: ${site.email}`,
    `- RIF: ${site.rif}`,
    '',
    '## Páginas (español)',
    `- [Inicio](${root}/): ${t.tagline}`,
    ...(['nosotros', 'productos', 'procesos', 'contacto'] as const).map((k) => `- [${t.nav[k]}](${root}${localePath('es', k)})`),
    '',
    '## Pages (English)',
    `- [Home](${root}${localePath('en')}): ${en.tagline}`,
    ...(['nosotros', 'productos', 'procesos', 'contacto'] as const).map((k) => `- [${en.nav[k]}](${root}${localePath('en', k)})`),
    '',
    '## 中文',
    `- [首页](${root}${localePath('zh')})`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
