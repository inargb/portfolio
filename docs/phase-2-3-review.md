# Phases 2–3: what to review

Design system, playground, and the core experience (home, about, navigation,
cursor, motion, language, easter eggs). Case studies are still placeholder
pages; they're Phase 4.

## Pages

| Route | What's there |
|---|---|
| `/` · `/pt-br` | Hero with the interactive word "frames", the contact sheet (sheet / index views), about teaser |
| `/about` · `/pt-br/sobre` | The shelf (drag, or keyboard), hello, what I do, experience, kind words, film strip, contact |
| `/playground` · `/pt-br/playground` | Live tokens, type specimens (with alternate display faces), spacing, motion demos, cursor zones, components, all 7 covers, secrets catalog |
| `/works/<slug>` | Placeholder case page: cover, facts, link to the current case, prev/next frame |
| 404 | "This frame didn't develop." |

## Things to try

- Press `?` for the keyboard sheet. `L` toggles lights (darkroom), `M` pauses motion, `S` turns on spec mode.
- Click "frames" in the headline until you've seen all three.
- Poke a doodle five times. Leave the page alone for 45 seconds.
- Organize the shelf. Then look at the La La Land DVD a few times.
- Type `yashica`.
- Visit every page. The footer counts the frames you've seen.
- Hover the two "coming soon" projects: the cursor says "coming soon!" instead of "view project".

## Copy that needs your eyes

Marked in the code as DRAFT, or written new:
- Home hero aside and the section titles ("Seven frames from a very long roll.").
- About bio: rewritten from your current text, keeping "3+ years".
- Shelf notes: only facts (titles, and "dad's old Yashica"). Replace them with your own one-liners in `src/content/about.ts`.
- Education: "Graphic Design (CST), IESB" comes from Marco Aurélio's recommendation. Confirm it.
- Contact: there's no public email on the current site, so contact goes through LinkedIn.
- All Portuguese copy is new. Read it once for your voice.

## Decisions made on your behalf

- **Project order:** Specs Generator first (the brief calls it the strongest piece), then the two protected Volanté cases, Systems Portal, Bandoneón, then the two coming-soon projects.
- **Case URLs** keep today's `/works/<slug>` paths, including `bandoneon-iniciative`, so existing links keep working.
- **Astro 7** (latest). Astro 5 had open security advisories.
