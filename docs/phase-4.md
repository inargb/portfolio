# Phase 4: project system

## Case-study architecture (done)

- Content model: `src/content/cases/types.ts`. A case is sections → blocks
  (text, stats, question, figure, gallery, steps, decisions). Adding a case is
  writing one content file; no new components.
- Page: hero → sticky index that
  follows the reading (desktop) → numbered sections → previous / next frame.
- Figures are prints: the print lift on hover, the "look" cursor, numbered
  captions (FIG. 01) that run through the whole case, and a lightbox
  (Esc / click / ✕ closes, focus returns to the image).
- Framer: one CMS collection for cases, one component per block type.

- Topic blocks sit on the paper card (`.paper-card` in `components.css`):
  paper with a thin double frame, each a hair off straight. Stats: number →
  label. Steps: number → title → text. Decisions: icon → title → text
  (optional quieter note) → principle.
  On hover they lift like the images, quieter: a 2px move and a thin shadow.
- Images keep their own look (hairline frame, print lift on hover) and open in
  the lightbox (← → through every image in the case). The "how might we" is a
  shaded panel with crop marks. Paragraphs stay as running text.

- Header, after the reference portfolios (Rachel Chen, Emmi Wu, Eem Monroy):
  the section index is a left sidebar from the top of the page, with
  "← all work" above it; the header sits in the content column. Eyebrow
  (frame · context · type/method) → title → one sentence → facts in four
  equal columns (Role, Timeline, Focus, Skills & tools), one value per line,
  labels in small blue caps → "see it live". Two columns on phones.

## Cases

| # | Case | Status | Source |
|---|---|---|---|
| 1 | Systems Portal | built | inasilva.com case (EN + PT), images from it |
| 2 | Responsive Specs & Accessibility Generator | built | inasilva.com case (EN + PT), images from it |
| 3 | Bandoneón Initiative | built | inasilva.com case (EN + PT), images from it |
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

## Specs Generator: notes

- Text is Inaiá's own, from the current case in both languages, lightly edited
  (a few Portuguese sentences smoothed; "proccess" fixed).
- New blocks for it: `list` (the old manual workflow), `compare` (before /
  after), extra hero facts (Type), and icons for its four decision cards. No
  Nielsen tags here: the live case has none.
- The three "tool in action" images share one caption and one height.

## Bandoneón: notes

- Written in a new voice, after the reference Inaiá shared (rachelchen.tech):
  first person, every headline states what happened or what was learned,
  outcomes up front (overview), "key finding" / "what I learned" callouts,
  and a closing reflection. Facts, numbers, personas and quotes are hers.
- "AI" in the live case's process (personas → AI → wireframes) is read as
  IA, "arquitetura da informação": written out as information architecture.
- New blocks: `groups` (the four SMART requirement dimensions, typography and
  components), `swatches` (the palette), a custom label for callouts, and a
  person icon for persona cards.
- If this voice works, Systems Portal and Specs Generator can be rewritten
  the same way.
