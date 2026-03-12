// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stigler-ai.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const excluded = [
          'https://stigler-ai.com/impressum',
          'https://stigler-ai.com/datenschutz',
          'https://stigler-ai.com/404',
        ];
        return !excluded.some((ex) => page.startsWith(ex));
      },
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  build: {
    format: 'directory', // /smart-parking-system/ statt .html
  },
  redirects: {
    '/impressum.html': '/impressum',
    '/datenschutz.html': '/datenschutz',
    '/innovationszentrum.html': '/innovationszentrum',
    '/digitale-produktionssteuerung.html': '/digitale-produktionssteuerung',
    '/smart-parking-system.html': '/smart-parking-system',
    '/augmented-reality-diagnose.html': '/augmented-reality-diagnose',
    '/intelligente-betriebsgastronomie-steuerung.html': '/intelligente-betriebsgastronomie-steuerung',
    '/iot-facility-management.html': '/iot-facility-management',
  },
});
