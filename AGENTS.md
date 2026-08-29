# AGENTS.md

Guidance for coding agents working in this repository. `CLAUDE.md` is a symlink to this file, so Claude Code and other tools read the same content.

## Project

Juveland is a single-page marketing site for the 1st Festival de las Juventudes de Jilotepec (IMJUVE), **sábado 29 de agosto de 2026**, at the Alameda de Jilotepec. Astro + Tailwind v4, mobile-first (most traffic arrives via a WhatsApp link on mid-range phones), deployed on Vercel.

All sections of Pass 1 (static layout) and Pass 2 (GSAP motion) are built: `Navbar → Hero → Loader → Chips → WhyAttend → Trueque → Agenda → Bandas → Social → Mapa → Emprendedores → Formulario → Footer`. Outstanding real-content items (official poster / OG image, a real Territorio Emprende form) are tracked in `DESIGN.md §9`; registration is by WhatsApp until IMJUVE confirms a form.

## Commands

- `pnpm dev` / `astro dev --background` — start the dev server (see Development below for background mode)
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview the production build locally
- `pnpm astro check` — type-check `.astro` files
- No test suite is configured in this repo.

Package manager is pnpm 11 (`packageManager` field pins it; `pnpm-workspace.yaml` present); Node >=22.12 is required. `esbuild` and `sharp` install scripts are pre-approved via `allowBuilds` in `pnpm-workspace.yaml` (pnpm 11's replacement for `onlyBuiltDependencies`).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

- **Tailwind v4, CSS-first config** — there is no `tailwind.config.js`. Tailwind is registered as a Vite plugin in `astro.config.mjs` and pulled into the build via `@import "tailwindcss";` in `src/styles/global.css`. Design tokens (colors, spacing, radii, the `--breakpoint-hero` custom breakpoint) live in the `@theme` block there, not a JS config file. Custom utilities (`sticker-shadow`, `ink-outline`, and their `-invert` / `cream-` variants for `bg-ink` bands) are `@utility` rules in the same file.
- **Design system source of truth: `DESIGN.md`** (gitignored local planning doc). Read it before touching any UI — it defines the color palette (sampled pixel-for-pixel from the official event poster), typography (Fredoka/Baloo 2/Nunito, self-hosted via `astro:assets` fonts), the "sticker, not glass" elevation system (flat color + thick ink outline, no blur/glassmorphism/soft gradients), and the section-by-section component spec. The `impeccable` skill reads this file automatically for design work.
- **Build plan: `PLAN.md`** (also gitignored) documents the original 12-section, two-pass build order. Both passes are done; use it for context on why a section looks the way it does.
- **Shared data** lives in `src/data/` (`lineup.ts`, `emprendedores.ts`, `social.ts`, `nav.ts`) — single source for anything rendered in more than one component, so the copies can't drift.
- **Shared client scripts** live in `src/scripts/`:
  - `loader.ts` — `whenLoaderGone()`, the "the loader overlay is gone" signal every deferred animation waits on.
  - `reveal.ts` — `onSectionReveal()` / `whenSectionVisible()` / `loadScrollGsap()`: the loader-wait → IntersectionObserver → dynamic `import()` of GSAP → `matchMedia(reduceMotion/motionOk)` pipeline that every below-the-fold section island uses.
  - `focusTrap.ts` — `createFocusTrap()` for the modal overlays (Navbar sheet, InfoSheet).
- **GSAP is 100% deferred.** No component imports `gsap` statically. Hero loads it via dynamic `import()` (gated behind fonts + loader); every other section loads it through `src/scripts/reveal.ts` when it nears the viewport. The Navbar scroll-shrink is pure CSS (`animation-timeline: scroll()`), no GSAP. All motion must respect `prefers-reduced-motion` and stay scoped to its own island, never a global bundle.
- Content IMJUVE hasn't provided yet should use a clearly marked placeholder, never invented data — see `DESIGN.md §9`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
