# Phase 4: project system

## Case-study architecture (done)

- Content model: `src/content/cases/types.ts`. A case is sections → blocks
  (text, stats, question, figure, gallery, steps, decisions). Adding a case is
  writing one content file; no new components.
- Page: hero (frame no., title, line, role, duration, period, skills & tools,
  tags, "see it live") → sticky index that
  follows the reading (desktop) → numbered sections → previous / next frame.
- Figures are prints: the print lift on hover, the "look" cursor, numbered
  captions (FIG. 01) that run through the whole case, and a lightbox
  (Esc / click / ✕ closes, focus returns to the image).
- Framer: one CMS collection for cases, one component per block type.

- Every block sits on the same surface, the paper card (`.paper-card` in
  `components.css`): paper with a thin double frame, each a hair off straight.
  Stats: number → label. The question: label → text. Steps: number → title →
  text. Decisions: icon → title → text (optional quieter note) → principle.
  Figures and galleries are prints on a paper card with a mat; they lift on
  hover and open in the lightbox (← → through every image in the case).
  Plain paragraphs stay as running text.

## Cases

| # | Case | Status | Source |
|---|---|---|---|
| 1 | Systems Portal | built | inasilva.com case (EN + PT), images from it |
| 2 | Responsive Specs & Accessibility Generator | next | inasilva.com case |
| 3 | Bandoneón Initiative | next | inasilva.com case |
| 4 | Bar Tabs System | needs the password gate | protected: never committed in plain text |
| 5 | Menu Management | needs the password gate | the uploaded brief (kept out of the repo) |

## Systems Portal: notes

- Text is Inaiá's own, from the current case in both languages. Small fixes in
  the Portuguese ("sem qualquer busca", "Você pode até saber", "em conjunto").
- "Time saved" became "< 1 min" and "35% reduction" became "−35%" as stat
  values; the labels keep her wording.
- The three extra interface screens from the live case sit in the solution
  section as a gallery (FIG. 03–05). They had no caption on the live site, so
  they have none here; alt text describes each.
