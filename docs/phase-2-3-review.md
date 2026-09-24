# Phases 2–3: what to review

Design system, playground, and the core experience (home, about, navigation,
cursor, motion, language, easter eggs). Case studies are still placeholder
pages; they're Phase 4.

## Pages

| Route | What's there |
|---|---|
| `/` · `/pt-br` | Hero with the interactive word "frames", then the project grid |
| `/about` · `/pt-br/sobre` | The shelf (drag, or keyboard), hello, what I do, experience, education, kind words (drawer), film strip |
| `/playground` · `/pt-br/playground` | Live tokens, type specimens, spacing, motion demos, cursor zones, components, all 7 covers, secrets catalog |
| `/works/<slug>` | Placeholder case page: cover, facts, link to the current case, prev/next frame |
| 404 | "This frame didn't develop." |

## Things to try

- Press `?` for the keyboard sheet. `S` turns on spec mode.
- Click "frames" in the headline until you've seen all three.
- Leave the page alone for 45 seconds and watch the doodle.
- Organize the shelf. Then look at the La La Land DVD a few times.
- Type `yashica`.
- Visit every page. The footer counts the frames you've seen.
- Hover the two "coming soon" projects: the cursor says "coming soon!" instead of "view project".

## Copy that needs your eyes

Marked in the code as DRAFT, or written new:
- About bio: rewritten from your current text, keeping "3+ years".
- Shelf notes: only facts (titles, and "dad's old Yashica"). Replace them with your own one-liners in `src/content/about.ts`.
- Education: "Graphic Design (CST), IESB" comes from Marco Aurélio's recommendation. Confirm it.
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

## Update 2 (24 Sep 2026, "Portfolio updates, ready to build" brief)

- Accent is now blue (#2447D6; #8EA6FF in the darkroom), set as tokens `accent`, `accent-hover`, `accent-tint`. No red remains.
- Home: "currently" line removed. Projects are a 2-column card grid (1 column on phones) with 4:3 covers; every card shows cover · title · period · context · role · status (● live · ◐ prototype · lock protected · ○ developing). Unknown values show "—". The sheet/index toggle is gone.
- About: kind words live in a drawer (open, read, arrows/swipe, Esc, close). Education has Degrees + Courses. "say hi" removed (LinkedIn and resume stay in the header and footer). The film strip drifts in a seamless loop with a pause toggle.
- Motion is always on (no site toggle, no `M` shortcut); a system-level reduced-motion setting is still respected.
- The doodles are decorative now: the "poke five times" secret is gone.

### Update 3

- Home: the "FR 00 · oi" line is gone; the hero now has both doodles (happy and wonder).
- Cards show a description (15+ words, EN/PT) under the title. It uses only facts already on the site.
- Film strip: no caption and no pause/play. The first time it comes into view, the visible photos develop one by one, and then the loop starts. It still stops on hover, focus and drag. With reduced motion it stays still and fully developed.
- Page dividers (header, footer, case nav, lists) use the light-gray hairline (`--rule-hair`). Component outlines keep the ink line.
- Light only: the dark theme, the lights pull-cord and the `L` shortcut are removed. The site stays light even when the OS is in dark mode.
- Home: both doodles can be picked up and moved around the page (mouse, touch or pen). They stay inside the page and go back to their place on reload.
- Home: the headline sits higher, and the first screen leaves a peek of the work (the label and the top of the first two covers) at any desktop size.
- Phones: the bottom bar is gone. The header shows the name and a menu button that opens a full-screen overlay (home · about · resume, EN / PT-BR). It is a modal dialog: focus stays inside, Esc or ✕ closes it.
- The "finished roll" secret (visit every page) and the footer's "frames seen" counter are removed. Five secrets remain.
