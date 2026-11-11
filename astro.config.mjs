// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Base del canonical, las URLs de Open Graph y el sitemap.
  site: 'https://juveland.vercel.app',
  integrations: [
    sitemap({
      // /style-guide es interna (noindex).
      filter: (page) => !page.includes('/style-guide'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Fuentes autohospedadas: sin requests a Google Fonts en runtime.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fredoka',
      cssVariable: '--font-fredoka',
      weights: ['600', '700'],
    },
    {
      provider: fontProviders.google(),
      name: 'Baloo 2',
      cssVariable: '--font-baloo-2',
      weights: ['600', '700', '800'],
    },
    {
      provider: fontProviders.google(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      weights: ['400', '600', '700', '800'],
    },
  ],
});
