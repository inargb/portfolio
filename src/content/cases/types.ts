// Case studies: one typed object per project, made of numbered sections,
// each a list of blocks. Components in src/components/case render every
// block type, so a new case is content only. (In Framer: one CMS item per
// case, one component per block type.)
import type { L10n } from '../../i18n/config';

export interface CaseStudy {
  slug: string;                       // matches projects.ts
  tools: L10n;                        // skills / tools line in the hero
  facts?: { label: L10n; value: L10n }[]; // extra hero facts (e.g. type of project)
  live?: { href: string; label: L10n };
  sections: CaseSection[];
}

export interface CaseSection {
  id: string;                         // anchor: #overview, #problem…
  label: L10n;                        // "overview", "o problema"
  title: L10n;                        // \n for a deliberate line break
  blocks: CaseBlock[];
}

export interface CaseImage {
  src: ImageMetadata;
  alt: L10n;                          // what the image shows, never "screenshot"
}

export type CaseBlock =
  | { type: 'text'; body: L10n[] }
  /** Big numbers with a short label. */
  | { type: 'stats'; items: { value: L10n; label: L10n }[] }
  /** The "how might we" of the case, set apart. */
  | { type: 'question'; text: L10n }
  /** One image, full column width; opens larger on click. */
  | { type: 'figure'; image: CaseImage; caption?: L10n }
  /** Several images in a row (a contact strip); each opens larger. */
  | { type: 'gallery'; images: CaseImage[]; caption?: L10n }
  /** A plain numbered list (e.g. the steps of an old manual workflow). */
  | { type: 'list'; intro?: L10n; items: L10n[] }
  /** Before / after, side by side: the same rows, then vs now. */
  | { type: 'compare'; before: CompareSide; after: CompareSide }
  /** Numbered process steps, as a row of cards: number → title → text. */
  | { type: 'steps'; items: { title: L10n; body: L10n }[] }
  /** Design decisions, as cards: icon → title → text → the principle behind it.
      `note` is a quieter aside after the text (e.g. "approved, not shipped"). */
  | { type: 'decisions'; intro?: L10n; items: { icon: CaseIcon; title: L10n; body: L10n; note?: L10n; tag?: L10n }[] };

export interface CompareSide { label: L10n; rows: { key: L10n; value: L10n }[] }

/** Line icons for decision cards (drawn in components/case/CaseBlocks.astro). */
export type CaseIcon = 'layout' | 'search' | 'star' | 'frame' | 'contrast' | 'ruler' | 'doc';
