# Juveland

Sitio de una sola página del **1er Festival de las Juventudes de Jilotepec** (IMJUVE) — sábado 29 de agosto de 2026, Alameda de Jilotepec.

Astro + Tailwind v4, *mobile-first* (el grueso del tráfico llega por un link de WhatsApp en teléfonos de gama media). Desplegado en Vercel.

## Requisitos

- Node >= 22.12
- pnpm 11 (`corepack enable` o instalación global)

## Comandos

| Comando | Acción |
| :-- | :-- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción a `./dist/` |
| `pnpm preview` | Sirve el build de producción en local |
| `pnpm astro check` | Type-check de los archivos `.astro` |

No hay suite de tests.

## Estructura

- `src/pages/` — `index.astro` (la landing) y `style-guide.astro` (referencia interna, `noindex`).
- `src/components/` — una sección por componente; cada uno con su isla de animación aislada.
- `src/data/` — datos compartidos entre componentes (`lineup`, `emprendedores`, `social`, `nav`).
- `src/scripts/` — helpers de cliente compartidos (`loader`, `reveal`, `focusTrap`).
- `src/styles/global.css` — configuración de Tailwind v4 (tokens en `@theme`, utilidades en `@utility`).
- `src/assets/` — imágenes procesadas con `astro:assets`.

`AGENTS.md` (symlink: `CLAUDE.md`) tiene la guía de arquitectura completa. `DESIGN.md` y `PLAN.md` son documentos de planificación locales (no versionados).
