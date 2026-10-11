/// <reference types="vitest/config" />
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { firstFrame } from './vite/first-frame.ts';
import { locale } from './vite/locale.ts';
import { offline } from './vite/offline.ts';
import { DEPLOY_BASE, PAGES, ROOT_DIR, SITE_NAME, SITE_URL } from './vite/site.ts';
import { siteHead } from './vite/site-head.ts';

// https://vite.dev/config/
export default defineConfig(({ command, isPreview = false }) => ({
  // The dev server runs at the root; builds, and their preview, at the deployed sub-path, so a
  // path that ignores the base breaks in `npm run preview` rather than in production. Runtime code
  // builds every URL from `import.meta.env.BASE_URL`.
  base: process.env['BASE_PATH'] ?? (command === 'build' || isPreview ? DEPLOY_BASE : '/'),
  define: {
    // The interface language of this build (src/i18n/locale.ts): `LOCALE=ar npm run build`.
    __LOCALE__: JSON.stringify(process.env['LOCALE'] === 'ar' ? 'ar' : 'en'),
    'import.meta.env.SITE_NAME': JSON.stringify(SITE_NAME),
    'import.meta.env.SITE_URL': JSON.stringify(SITE_URL),
  },
  plugins: [react(), locale(), siteHead(), firstFrame(), offline()],
  build: {
    // Three.js alone is ~550 kB minified (~140 kB gzipped); only the WebGL pages load it.
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      input: Object.fromEntries(
        Object.entries(PAGES).map(([name, { entry }]) => [name, resolve(ROOT_DIR, entry)]),
      ),
      output: {
        // Named vendor chunks: cacheable across pages and readable in the build report.
        codeSplitting: {
          groups: [
            { name: 'three', test: /node_modules[\\/]three[\\/]/ },
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
          ],
        },
      },
    },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}', 'scripts/**/*.test.ts', 'tests/**/*.test.ts'],
    environment: 'node',
  },
}));
