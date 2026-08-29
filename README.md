<div align="center">

# 🎡 JUVELAND

### El cartel del **1er Festival de las Juventudes de Jilotepec**, cobrando vida en la web.

Landing de una sola página para el festival que organiza **IMJUVE Jilotepec**.
Música en vivo, Territorio Emprende, y el Croquetón de *Trueque con Huella*.

**📅 Sábado 29 de agosto de 2026 · 🕑 2:00 PM · 📍 Alameda de Jilotepec**

<br />

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Deploy](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm&logoColor=white)

</div>

---

## ✨ Qué es

Juveland **no nace de cero visualmente**. Existe un cartel oficial de IMJUVE con una
identidad muy marcada — tipografía cómic tipo burbuja con contorno negro grueso,
colores planos saturados, mascotas redondas, nubes y garabatos sobre fondo crema.
El objetivo de este sitio es que se sienta como **"el cartel cobrando vida"**, no como
una landing genérica de SaaS.

Es una landing **de una sola página**, contenido casi 100% estático, **mobile-first**
porque el grueso del tráfico llega por un link de WhatsApp en un teléfono de gama
media. Ese dato manda sobre cualquier ambición visual: **nada de esto vale si tarda
en cargar.**

---

## 🎨 Sistema de diseño — *"sticker, no glass"*

La profundidad viene del **contorno negro grueso**, nunca de blur ni degradados
suaves. Sombra permitida: tipo troquelado, offset sólido sin blur ni transparencia.

> **Prohibido:** glassmorphism, blur de fondo, degradados pastel, sombras difusas
> tipo Material, serif o sans corporativa en titulares, ilustración de stock que no
> sean las mascotas reales del cartel.

### Paleta — plana, saturada, con contorno

Sampleada pixel a pixel del cartel oficial (aún no hay manual de marca).

| Token | Hex | Uso |
| :-- | :-- | :-- |
| `red` | `#E32117` | Wordmark JUVELAND, CTA primario, franja de tarjeta |
| `blue` | `#1BAAE2` | Fondo de sección (alterna con crema), franja de tarjeta |
| `purple` | `#8E1884` | Ribbons/banners, franja de tarjeta |
| `lime` | `#E4FC48` | Tags de energía ("SÁB 29"), subrayados, hover — dosis pequeña |
| `orange` | `#FAAA1E` | Nubes, CTA secundaria |
| `green` | `#82BE32` | Logo IMJUVE — uso mínimo: confirmaciones, Territorio Emprende |
| `cream` | `#FAF9F7` | Fondo neutro — **nunca blanco puro** |
| `ink` | `#14110F` | Texto y contornos — casi negro, no negro puro |

`red` · `blue` · `purple` son las tintas de sección de peso completo: alternan con
`cream`, nunca más de dos saturadas tocándose en un mismo viewport.

### Tipografía

| Rol | Familia | Uso |
| :-- | :-- | :-- |
| **Display** | Fredoka (600–700) | "JUVELAND" del hero, títulos de sección — con contorno `ink` |
| **Headline** | Baloo 2 (600–800) | Subtítulos, botones, tags, nombres de banda |
| **Body** | Nunito (400–800) | Párrafos, formulario, footer |

Autohospedadas vía `astro:assets` fonts — cero request a Google Fonts en runtime.

**Tokens, radios (`chip` 999px · `card` 20px · `button` 16px), spacing y utilidades
(`sticker-shadow`, `ink-outline` y sus variantes `-invert` / `cream-` para bandas
`bg-ink`) viven en [`src/styles/global.css`](src/styles/global.css)** — Tailwind v4
CSS-first, no hay `tailwind.config.js`.

---

## 🧩 Anatomía de la página

Una sección = un componente, cada una con su **isla de animación aislada**.

| # | Sección | Detalle |
| :-: | :-- | :-- |
| — | **Loader** | Overlay crema con crossfade + escala entre el logo IMJUVE y el de Pueblo Mágico. CSS puro; se acorta en visitas repetidas (`localStorage`) |
| 1 | **Navbar** | Píldora crema sticky que se encoge al hacer scroll con `animation-timeline: scroll()` — CSS puro, sin GSAP |
| 2 | **Hero** | Wordmark en HTML con `-webkit-text-stroke`, mascotas SVG, nubes con parallax, insignia + tarjeta de fecha en las esquinas. Las letras se "estampan" una por una |
| 3 | **Chips** | 5 círculos: Arte · Música · Emprendimiento · Expresión · Convivencia |
| 4 | **¿Por qué venir?** | Tarjeta con razones cortas y checkmarks estilo sticker, revelados en cascada |
| 5 | **Trueque con Huella — Croquetón** | Banda `bg-green` completa, tono cálido y comunitario. Resumen + `InfoSheet` con el copy oficial de IMJUVE verbatim. Botón de compartir con Web Share API + fallback WhatsApp |
| 6 | **Agenda** | Cuenta regresiva **en vivo** al 29-ago 14:00 (−06:00 fijo). Al llegar a 0 pasa a "En vivo" con la banda en turno, luego a "¡Gracias por venir!". Tiras tipo boleto con los 9 horarios |
| 7 | **Bandas** | 9 tarjetas verticales (foto + hora + nombre), tinta plana rotando |
| 8 | **Síguenos** | Cuentas oficiales de IMJUVE / Turismo Jilotepec / Pueblo Mágico |
| 9 | **Mapa** | Google Maps embebido (`output=embed`, sin API key) en tarjeta sticker |
| 10 | **Emprendedores** | Muro de logos de los 13 emprendimientos confirmados de Territorio Emprende |
| 11 | **Territorio Emprende** | Registro por WhatsApp hasta que IMJUVE confirme un Google Form |
| 12 | **Footer** | Banda `bg-ink` a columnas, fila de logos oficiales, redes, guiño de mascota |

---

## ⚡ Rendimiento — GSAP 100% diferido

Ningún componente importa `gsap` de forma estática.

- **Hero** lo carga con `import()` dinámico, detrás de *fonts cargadas + loader ido*.
- **Toda sección bajo el pliegue** lo carga a través de
  [`src/scripts/reveal.ts`](src/scripts/reveal.ts) cuando se acerca al viewport:
  `whenLoaderGone()` → `IntersectionObserver` (rootMargin 200px) → `import()` de
  GSAP + ScrollTrigger → `matchMedia(reduceMotion / motionOk)`.
- **Navbar y Loader** son CSS puro — no valía ~113 KB de JS para encoger una barra.
- Todo respeta `prefers-reduced-motion` (cae a fades simples) y **el contenido se
  lee aunque el JS falle o tarde**.

---

## 🗂️ Estructura

```
src/
├─ pages/
│  ├─ index.astro          · la landing
│  └─ style-guide.astro    · referencia interna (noindex, fuera del sitemap)
├─ layouts/
│  └─ Layout.astro         · <head>, SEO/OG/Twitter, fonts, Analytics, Loader
├─ components/             · una sección por archivo + piezas compartidas
│  ├─ Navbar · Hero · Chips · WhyAttend · Trueque · Agenda
│  ├─ Bandas · Social · Mapa · Emprendedores · Formulario · Footer
│  └─ Loader · InfoSheet · Cloud · ArcDivider · ChipIcon · SocialIcon
├─ data/                   · fuente única para lo que se renderiza 2+ veces
│  ├─ lineup.ts            · 9 bandas — compartido por Agenda + Bandas
│  ├─ emprendedores.ts     · 13 logos de Territorio Emprende
│  ├─ social.ts            · cuentas oficiales — Social + Footer
│  └─ nav.ts               · links de navegación — Navbar + Footer
├─ scripts/                · helpers de cliente compartidos
│  ├─ loader.ts            · whenLoaderGone() — la señal que todo espera
│  ├─ reveal.ts            · pipeline loader→IO→import(GSAP)→matchMedia
│  └─ focusTrap.ts         · createFocusTrap() para los overlays modales
├─ styles/
│  └─ global.css           · Tailwind v4 @theme (tokens) + @utility
└─ assets/                 · imágenes procesadas con astro:assets (webp)
```

**Documentación del repo:** [`AGENTS.md`](AGENTS.md) (symlink: `CLAUDE.md`) tiene la
guía de arquitectura completa para agentes. `DESIGN.md` (sistema visual) y `PLAN.md`
(plan de build en 2 pasadas) son documentos de planificación locales, no versionados.

---

## 🚀 Puesta en marcha

**Requisitos:** Node `>= 22.12` · pnpm `11` (`corepack enable`)

| Comando | Acción |
| :-- | :-- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción a `./dist/` |
| `pnpm preview` | Sirve el build de producción en local |
| `pnpm astro check` | Type-check de los archivos `.astro` |

> `astro dev --background` corre el server en segundo plano; contrólalo con
> `astro dev stop` / `status` / `logs`. No hay suite de tests configurada.

**Deploy:** Vercel — <https://juveland.vercel.app>. El dominio vive en
[`astro.config.mjs`](astro.config.mjs) (`site`); de ahí dependen el `<link
rel=canonical>`, las URLs absolutas de Open Graph/Twitter y el sitemap.

---

## 🎸 Line-up

| Hora | Artista | · | Hora | Artista |
| :-- | :-- | :-: | :-- | :-- |
| 14:00 | Valentino | | 18:00 | La Frecuenxia |
| 15:00 | The Rocktor Band | | 19:00 | Rapsodia |
| 16:00 | Marty BD | | 20:00 | Dopamina |
| 17:00 | Los Corvett Latin Ska | | 21:00 | Horus |
| | | | 22:00 | The Sinners |

---

## 📋 Pendiente de IMJUVE

Lo ya construido no se rompe sin esto — se integra en cuanto llegue.

**Bloqueantes:**
- 🔴 Link del Google Form de registro de Territorio Emprende (hoy el registro es por WhatsApp)
- 🔴 Aviso de privacidad oficial aprobado por su área legal (hay datos de posibles menores de edad)

**No bloqueantes:** fotos reales de las 9 bandas · logos oficiales en alta
resolución / vector (IMJUVE, Pueblo Mágico, Ayuntamiento) · mascota morada y "la
bocina" del cartel · dominio final · cartel oficial en alta resolución para la
imagen OG · requisitos/costo/cupo de Territorio Emprende si aplican.

---

<div align="center">

Hecho con cariño para la primera edición de **JUVELAND**.
*Queremos que el primer JUVELAND no solamente se disfrute — queremos que también deje huella.* 🐾

</div>
