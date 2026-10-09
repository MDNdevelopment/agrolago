import { es, type Dict } from './es';
import { en } from './en';
import { zh } from './zh';

export const langs = ['es', 'en', 'zh'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'es';

const dicts: Record<Lang, Dict> = { es, en, zh };
export const getT = (lang: Lang): Dict => dicts[lang];

/** Claves de página. '' es el inicio. El slug es el mismo en todos los idiomas. */
export type PageKey = '' | 'nosotros' | 'productos' | 'procesos' | 'contacto';

/** /, /nosotros, /en, /en/nosotros, /zh/procesos... Sin barra final. */
export function localePath(lang: Lang, page: PageKey | string = ''): string {
  const parts = [lang === defaultLang ? '' : lang, page].filter(Boolean);
  return '/' + parts.join('/');
}

/** Rutas estáticas para src/pages/[...lang]/*.astro: español sin prefijo, el resto con /en y /zh. */
export const langStaticPaths = () =>
  langs.map((lang) => ({ params: { lang: lang === defaultLang ? undefined : lang }, props: { lang } }));
