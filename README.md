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
  components/              Nav, Footer, Cursor, LanguageSwitch, Doodle,
                           ProjectGrid, ProjectCover + covers/, Shelf, KindWordsDrawer,
                           FilmStrip, CaseNav, FramesWord
  components/ui/           Button, Pill, SectionLabel
  views/                   one view per page, rendered by thin EN/PT page files
  pages/                   routes: /, /about, /playground, /works/[slug] (+ /pt-br/…)
  scripts/                 prefs (motion), motion (reveals), cursor, shelf
  scripts/eggs/            easter-egg system: catalog.ts + one module per egg
public/covers/             uploaded project covers (see "Covers" below)
docs/                      audit, phase notes, Framer migration notes
```

## Rules of the system

- Components use tokens only: no raw hex, no one-off sizes.
- Every text pairing is WCAG AA. The playground computes it live.
- Motion is always on, except when the visitor's system asks for reduced motion.
  The film strip stops on hover, focus and drag, and stays still with reduced motion.
- The custom cursor and the easter eggs are a layer on top. Nothing depends on them.
- Images that open something use the **print lift** hover (`class="lift crop"` in
  `styles/components.css`): the print lifts up-left, tilts a hair, casts a hard offset
  shadow and shows its crop marks, with the cursor's frame state on top. The project
  reel uses it, and case-study images should too.
- Content lives in `src/content`, one object per string with `en` and `pt`.
- Protected case-study sources never go into the repo in plain text (`private/` is ignored).

## Covers

Each project can use an uploaded cover instead of its built-in CSS cover.
Files live in `public/covers/`; original GIFs and source images are kept in
`design/covers-src/` (not deployed).

- **Frame shape changes with the screen:** 16:10 in the desktop grid, 4:3 on
  tablets and phones, 16:9 on case pages. Media fills the frame
  (`object-fit: cover`), centred on the project's `focus` and zoomed by `zoom`,
  so the subject survives every crop. Export sources at 16:9.
- **Stills:** two WebP widths, `-800.webp` and `-1600.webp`, served with `srcset`.
- **Animations:** convert GIFs to MP4 + WebM (same look, ~10× lighter) and
  export a still `-poster.webp`. Videos load only near the viewport, play only
  while visible, and show the poster when reduced motion is on.

```bash
ffmpeg -i in.gif -vf "fps=20,scale='min(1280,iw)':-2,format=yuv420p" -c:v libx264 -crf 26 -movflags +faststart -an public/covers/x.mp4
ffmpeg -i in.gif -vf "fps=20,scale='min(1280,iw)':-2" -c:v libvpx-vp9 -crf 38 -b:v 0 -an public/covers/x.webm
ffmpeg -ss 2 -i in.gif -frames:v 1 -c:v libwebp -quality 82 public/covers/x-poster.webp
```

Then in `src/content/projects.ts`:

```ts
media: {
  video: { mp4: 'covers/x.mp4', webm: 'covers/x.webm' },  // or image: { src, small }
  poster: 'covers/x-poster.webp',
  alt: { en: 'What the product shows…', pt: 'O que o produto mostra…' },
  focus: '40% 50%',   // where the subject is
  zoom: 1.2,          // optional
},
```
