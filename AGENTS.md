# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Juveland is a single-page marketing site for the 1st Festival de las Juventudes de Jilotepec (IMJUVE), Sábado 29 de agosto de 2026. It's a greenfield Astro + Tailwind v4 build, mobile-first (most traffic arrives via a WhatsApp link on mid-range phones), and is currently still the unmodified Astro starter template — none of the festival sections have been built yet.

## Commands

- `pnpm dev` / `astro dev --background` — start the dev server (see Development below for background mode)
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview the production build locally
- `pnpm astro check` — type-check `.astro` files
- No test suite is configured in this repo.

Package manager is pnpm (`pnpm-workspace.yaml` present); Node >=22.12 is required. `esbuild` and `sharp` postinstall scripts are pre-approved via `allowBuilds`/`allowScripts` in `package.json`/`pnpm-workspace.yaml`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

- **Tailwind v4, CSS-first config** — there is no `tailwind.config.js`. Tailwind is registered as a Vite plugin in `astro.config.mjs` and pulled into the build via `@import "tailwindcss";` in `src/styles/global.css`. Any design tokens (colors, spacing, radii) belong in CSS, not a JS config file.
- **Design system source of truth: `DESIGN.md`** (gitignored local planning doc, not in version control). Read it before touching any UI — it defines the color palette (sampled pixel-for-pixel from the official event poster, no brand manual exists yet), typography (Fredoka/Baloo 2/Nunito), the "sticker, not glass" elevation system (flat color + thick ink outline, no blur/glassmorphism/soft gradients), and the full section-by-section component spec. The `impeccable` skill is expected to read this file automatically for any design work.
- **Build plan: `PLAN.md`** (also gitignored) lays out an 11-section build order across two passes: Pass 1 is static layout/aesthetics for every section (navbar → hero → loader → intro chips → why-attend → countdown/agenda → bands → social → map → form → footer); Pass 2 revisits each section, in the same order, only to add GSAP motion. Default to working one section per session, in that order, unless told otherwise.
- GSAP animation is intentionally deferred to Pass 2 and should be scoped to individual Astro islands rather than a global bundle, and must respect `prefers-reduced-motion`.
- Content IMJUVE hasn't provided yet (official agenda, lineup, high-res logos/poster) should be built with a clearly marked placeholder rather than invented — see PLAN.md and DESIGN.md §9 for what's still outstanding, and DESIGN.md §9 for the drift-review step to run once real assets arrive.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
