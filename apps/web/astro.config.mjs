// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'http://localhost:8787',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    // `/` is our own bilingual landing page; every other page lives under /en/ or /ar/.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
