// Case studies: one typed object per project, made of numbered sections,
// each a list of blocks. Components in src/components/case render every
// block type, so a new case is content only. (In Framer: one CMS item per
// case, one component per block type.)
import type { L10n } from '../../i18n/config';

export interface CaseStudy {
  slug: string;                       // matches projects.ts
  tools: L10n;                        // skills / tools line in the hero
  live?: { href: string; label: L10n };
  sections: CaseSection[];
}

export interface CaseSection {
  id: string;                         // anchor: #overview, #problem…
  label: L10n;                        // "overview", "o problema"
  title: L10n;
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
  /** Numbered process steps. */
  | { type: 'steps'; items: { title: L10n; body: L10n }[] }
  /** Design decisions, each tagged with the principle behind it. */
  | { type: 'decisions'; intro?: L10n; items: { title: L10n; body: L10n; tag: L10n }[] };
