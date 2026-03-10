// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stigler-ai.com',
  integrations: [sitemap()],
  build: {
    format: 'directory', // /smart-parking-system/ statt .html
  },
  // Redirects für alte .html-URLs werden über public/_redirects (Netlify) abgedeckt
});
