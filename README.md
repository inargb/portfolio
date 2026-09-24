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
                           ContactSheet, ProjectCover + covers/, Shelf, CaseNav, FramesWord
  components/ui/           Button, Pill, SectionLabel
  views/                   one view per page, rendered by thin EN/PT page files
  pages/                   routes: /, /about, /playground, /works/[slug] (+ /pt-br/…)
  scripts/                 prefs (theme/motion), motion (reveals), cursor, shelf
  scripts/eggs/            easter-egg system: catalog.ts + one module per egg
docs/                      audit, phase notes, Framer migration notes
```

## Rules of the system

- Components use tokens only: no raw hex, no one-off sizes.
- Every text pairing is WCAG AA. The playground computes it live.
- Motion follows `prefers-reduced-motion` and the site's own pause button (`M`).
- The custom cursor and the easter eggs are a layer on top. Nothing depends on them.
- Content lives in `src/content`, one object per string with `en` and `pt`.
- Protected case-study sources never go into the repo in plain text (`private/` is ignored).
