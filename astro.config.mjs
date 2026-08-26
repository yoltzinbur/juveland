// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
