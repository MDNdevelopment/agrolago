import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/gracias'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-VE', en: 'en-US', zh: 'zh-CN' } },
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  // Cambiar de marca: nombres y variables aquí + bloque @theme en global.css.
  // El chino usa la pila del sistema (ver global.css), sin descargar fuentes CJK.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display-src',
      options: { weights: ['500 800'], styles: ['normal'], subsets: ['latin'] },
    },
    {
      provider: fontProviders.google(),
      name: 'Figtree',
      cssVariable: '--font-body-src',
      options: { weights: ['400 600'], styles: ['normal'], subsets: ['latin'] },
    },
  ],
});
