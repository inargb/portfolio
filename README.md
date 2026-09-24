# inasilva.com: "Frames"

Inaiá Silva's portfolio, rebuilt as a small design system. Static site built with
[Astro](https://astro.build), plain CSS custom properties and a little TypeScript.
No UI framework, no animation library.

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build      # → dist/
npm run check      # type + template checks
```

Deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml`.
The base path is `/portfolio` (project page). For a custom domain, build with
`SITE_URL=https://inasilva.com BASE_PATH=/`.

## Where things live

```
src/
  styles/tokens.css        every design token (color, type, space, radius, motion, layout)
  styles/base.css          reset, type roles (.t-display…), layout, reveal classes
  styles/components.css    runtime-created bits (toast, spec overlay, keycap, crop marks)
  i18n/config.ts           locales, routes, base-path helpers
  i18n/ui.ts               interface strings (EN / PT)
  content/*.ts             page content, bilingual, typed (projects, home, about, photos)
  components/              Nav, Footer, Cursor, LanguageSwitch, LightsToggle, Doodle,
                           ProjectGrid, ProjectCover + covers/, Shelf, KindWordsDrawer,
                           FilmStrip, CaseNav, FramesWord
  components/ui/           Button, Pill, SectionLabel
  views/                   one view per page, rendered by thin EN/PT page files
  pages/                   routes: /, /about, /playground, /works/[slug] (+ /pt-br/…)
  scripts/                 prefs (theme/motion), motion (reveals), cursor, shelf
  scripts/eggs/            easter-egg system: catalog.ts + one module per egg
public/covers/             uploaded project covers (see "Covers" below)
docs/                      audit, phase notes, Framer migration notes
```

## Rules of the system

- Components use tokens only: no raw hex, no one-off sizes.
- Every text pairing is WCAG AA. The playground computes it live.
- Motion is always on, except when the visitor's system asks for reduced motion.
  Anything that moves by itself for more than 5s has its own pause (the film strip).
- The custom cursor and the easter eggs are a layer on top. Nothing depends on them.
- Content lives in `src/content`, one object per string with `en` and `pt`.
- Protected case-study sources never go into the repo in plain text (`private/` is ignored).

## Covers

Each project can use an uploaded cover instead of its built-in CSS cover.

1. Export at **1600 × 1200 (4:3)**. Keep key UI inside the centre ~80%.
   MP4/WebM is preferred over GIF (same look, 5–10× smaller; aim for under 2 MB).
2. Add the file and a still **poster** frame (JPG/PNG/WebP) to `public/covers/`.
3. In `src/content/projects.ts`, add to the project:

```ts
media: {
  src: 'covers/bar-tabs.mp4',
  poster: 'covers/bar-tabs.jpg',
  type: 'video/mp4',
  alt: { en: 'The bar tabs screen: open tabs as cards…', pt: 'A tela de comandas…' },
},
```

The cover plays muted and looping while it's on screen. With reduced motion, only the poster shows.
