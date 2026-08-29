// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio de despliegue. Hoy es la URL por defecto de Vercel (proyecto
  // "juveland"); cuando IMJUVE confirme un dominio propio, cambiarlo aquí —
  // de esto dependen el <link rel=canonical>, las URLs absolutas de Open
  // Graph/Twitter (Layout.astro) y el sitemap.
  site: 'https://juveland.vercel.app',
  integrations: [
    sitemap({
      // /style-guide es una página interna (noindex) — fuera del sitemap.
      filter: (page) => !page.includes('/style-guide'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Fuentes autohospedadas (sin request externo a Google Fonts) — DESIGN.md §4
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
