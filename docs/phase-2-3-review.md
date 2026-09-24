# Phases 2–3: what to review

Design system, playground, and the core experience (home, about, navigation,
cursor, motion, language, easter eggs). Case studies are still placeholder
pages; they're Phase 4.

## Pages

| Route | What's there |
|---|---|
| `/` · `/pt-br` | Hero with the interactive word "frames", then the contact sheet (sheet / index views) |
| `/about` · `/pt-br/sobre` | The shelf (drag, or keyboard), hello, what I do, experience, education, kind words, film strip, contact |
| `/playground` · `/pt-br/playground` | Live tokens, type specimens, spacing, motion demos, cursor zones, components, all 7 covers, secrets catalog |
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
- About bio: rewritten from your current text, keeping "3+ years".
- Shelf notes: only facts (titles, and "dad's old Yashica"). Replace them with your own one-liners in `src/content/about.ts`.
- Education: "Graphic Design (CST), IESB" comes from Marco Aurélio's recommendation. Confirm it.
- Contact: there's no public email on the current site, so contact goes through LinkedIn.
- All Portuguese copy is new. Read it once for your voice.

## Decisions made on your behalf

- **Project order:** Specs Generator first (the brief calls it the strongest piece), then the two protected Volanté cases, Systems Portal, Bandoneón, then the two coming-soon projects.
- **Case URLs** keep today's `/works/<slug>` paths, including `bandoneon-iniciative`, so existing links keep working.
- **Astro 7** (latest). Astro 5 had open security advisories.

## Update 1 (24 Sep 2026, "Things to update" brief)

- Type: Inter for body text; IBM Plex Mono for the header, titles and display. The serif (Newsreader) is gone.
- Light background is #FBFBFD. Surfaces and rules were retuned to neutral greys for it. Dark mode is unchanged.
- Home: removed the "Seven frames" heading + line, the short bio, the contact-sheet button and the About preview.
- Footer: removed the polaroid. It changed randomly on every visit but was always visible, so it wasn't a real easter egg.
- About: the shelf is a transparent cut-out of the real photo (same colours, no white box) in every theme; Visual/Product design pills removed; graphic design items are pills; new 05 education_ section (06–08 renumbered).
- PT: "projetos" everywhere (nav, home label, view toggle, case nav), footer "design feito por mim <3". Resume links open the file for the current language (header, footer, About contact).
