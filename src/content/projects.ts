// Project index: the data behind the contact sheet, covers and case routes.
// Facts here come only from the current portfolio (public pages) and the
// Menu Management brief. Nothing is invented; unknowns are left out.
import type { L10n } from '../i18n/config';

export type ProjectState = 'open' | 'locked' | 'soon';

// Status shape works without colour: ● live / in use · ◐ prototype tested
// · lock = protected · ○ developing.
export type StatusKind = 'live' | 'prototype' | 'locked' | 'developing';

// Every card answers the same questions in the same place:
// cover · title · period · context · role · status.
export interface Project {
  slug: string;
  frame: string;              // frame number
  state: ProjectState;        // open (linked) · locked (password) · soon (no link)
  title: L10n;
  line: L10n;                 // one-line description (case page)
  context: L10n;              // client / setting
  role: L10n;                 // '—' until known
  period: L10n;               // always a year range, '—' until known
  duration?: L10n;            // lives on the case page, never on the card
  status: L10n;
  statusKind: StatusKind;
  tags: L10n[];
  cover: CoverId;
  media?: CoverMedia;         // uploaded cover video/gif; falls back to the CSS cover
  liveUrl?: string;           // current case on inasilva.com (until rebuilt)
}

// Uploaded covers: 1600×1200 (4:3), MP4/WebM preferred, muted + looping,
// with a static poster for loading and reduced motion. Put files in
// public/covers/ and reference them without the base path, e.g. 'covers/specs.mp4'.
export interface CoverMedia {
  src: string;
  poster: string;             // same as src for a still image
  type?: 'video/mp4' | 'video/webm' | 'image/gif' | 'image/webp' | 'image/png' | 'image/jpeg';
  alt: L10n;                  // describes the product, not the animation
}

export type CoverId =
  | 'specs'
  | 'menu'
  | 'bartabs'
  | 'portal'
  | 'bandoneon'
  | 'binder'
  | 'sabi';

const tag = (en: string, pt: string): L10n => ({ en, pt });
const unknown: L10n = { en: '—', pt: '—' };

export const projects: Project[] = [
  {
    slug: 'responsive-specs-and-accessibility-generator',
    frame: '01',
    state: 'open',
    title: {
      en: 'Responsive Specs & Accessibility Generator',
      pt: 'Gerador de Specs Responsivas & Acessibilidade',
    },
    line: {
      en: 'A Figma Make tool that turned a week of handoff documentation into two days.',
      pt: 'Uma ferramenta no Figma Make que transformou uma semana de documentação de handoff em dois dias.',
    },
    context: { en: 'Internal tool · Volanté', pt: 'Ferramenta interna · Volanté' },
    role: { en: 'Design lead', pt: 'Líder de design' },
    period: unknown,
    duration: { en: '2 months', pt: '2 meses' },
    status: { en: 'in use every sprint', pt: 'em uso a cada sprint' },
    statusKind: 'live',
    tags: [tag('AI-driven', 'IA'), tag('Documentation', 'Documentação'), tag('Design systems', 'Design systems')],
    cover: 'specs',
    liveUrl: 'https://inasilva.com/works/responsive-specs-and-accessibility-generator',
  },
  {
    slug: 'menu-management',
    frame: '02',
    state: 'locked',
    title: { en: 'Menu Management', pt: 'Gestão de Cardápios' },
    line: {
      en: 'A year-long redesign of the back-office module behind every POS and kiosk menu.',
      pt: 'Um ano redesenhando o módulo de back-office por trás de cada cardápio de PDV e totem.',
    },
    context: { en: 'Enterprise · Volanté', pt: 'Enterprise · Volanté' },
    // From the case-study brief, where it is marked as still to be confirmed.
    role: { en: 'Product designer', pt: 'Product designer' },
    period: { en: '2025 — ongoing', pt: '2025 — em andamento' },
    status: { en: 'protected case', pt: 'case protegido' },
    statusKind: 'locked',
    tags: [
      tag('Enterprise software', 'Software enterprise'),
      tag('Information architecture', 'Arquitetura da informação'),
    ],
    cover: 'menu',
    media: {
      src: 'covers/menu-management.webp',
      poster: 'covers/menu-management.webp',
      type: 'image/webp',
      alt: { en: 'The Menu Management workspace: a menu tree on the left and a list of items with prices beside it. Brand and staff names are blurred.', pt: 'O espaço de trabalho de Gestão de Cardápios: a árvore do cardápio à esquerda e a lista de itens com preços ao lado. Marca e nomes de pessoas estão desfocados.' },
    },
  },
  {
    slug: 'bar-tabs-system',
    frame: '03',
    state: 'locked',
    title: { en: 'Bar Tabs System', pt: 'Sistema de Comandas' },
    line: {
      en: 'A bar-tab product for hospitality and food service businesses across North America.',
      pt: 'Um produto de comandas para bares e restaurantes na América do Norte.',
    },
    context: { en: 'POS · Volanté', pt: 'PDV · Volanté' },
    role: { en: 'UX/UI designer', pt: 'UX/UI designer' },
    period: { en: '2024 — 2026', pt: '2024 — 2026' },
    status: { en: 'protected case', pt: 'case protegido' },
    statusKind: 'locked',
    tags: [tag('POS', 'PDV'), tag('Design systems', 'Design systems')],
    cover: 'bartabs',
    media: {
      src: 'covers/bar-tabs.webp',
      poster: 'covers/bar-tabs.webp',
      type: 'image/webp',
      alt: { en: 'The Bar Tabs screen in dark mode: a selected tab’s details on the left and open tabs as colour-coded cards.', pt: 'A tela de comandas no modo escuro: os detalhes de uma comanda à esquerda e as comandas abertas como cards coloridos.' },
    },
  },
  {
    slug: 'systems-portal',
    frame: '04',
    state: 'open',
    title: { en: 'Systems Portal', pt: 'Portal de Sistemas' },
    line: {
      en: 'Making 100+ government systems findable, for a fisherman in Pará and a ministry clerk alike.',
      pt: 'Tornando 100+ sistemas do governo fáceis de achar, para um pescador no Pará e para um servidor do ministério.',
    },
    context: { en: 'Ministry of Agriculture and Livestock', pt: 'Ministério da Agricultura e Pecuária' },
    role: { en: 'UX/UI designer intern', pt: 'Estagiária de UX/UI' },
    period: { en: '2023', pt: '2023' },
    duration: { en: '4 months', pt: '4 meses' },
    status: { en: 'live', pt: 'no ar' },
    statusKind: 'live',
    tags: [tag('UX/UI', 'UX/UI'), tag('Research', 'Pesquisa'), tag('Redesign', 'Redesign')],
    cover: 'portal',
    media: {
      src: 'covers/systems-portal.webp',
      poster: 'covers/systems-portal.webp',
      type: 'image/webp',
      alt: { en: 'The redesigned Systems Portal: a search bar and a grid of the most accessed systems.', pt: 'O Portal de Sistemas redesenhado: uma busca e uma grade com os sistemas mais acessados.' },
    },
    liveUrl: 'https://inasilva.com/works/systems-portal',
  },
  {
    slug: 'bandoneon-iniciative',
    frame: '05',
    state: 'open',
    title: { en: 'Bandoneón Initiative', pt: 'Iniciativa Bandoneón' },
    line: {
      en: 'A cooking app for a social project that teaches culinary skills on the road.',
      pt: 'Um app de culinária para um projeto social de educação gastronômica itinerante.',
    },
    context: { en: 'Academic', pt: 'Acadêmico' },
    role: { en: 'Lead designer', pt: 'Designer líder' },
    period: unknown,
    duration: { en: '6 months', pt: '6 meses' },
    status: { en: 'prototype, tested', pt: 'protótipo testado' },
    statusKind: 'prototype',
    tags: [tag('UX/UI', 'UX/UI'), tag('Design systems', 'Design systems'), tag('Case study', 'Estudo de caso')],
    cover: 'bandoneon',
    media: {
      src: 'covers/bandoneon.webp',
      poster: 'covers/bandoneon.webp',
      type: 'image/webp',
      alt: { en: 'Two phones with the Bandoneón app: the green splash screen and the recipe of the day.', pt: 'Dois celulares com o app Bandoneón: a tela de abertura verde e a receita do dia.' },
    },
    liveUrl: 'https://inasilva.com/works/bandoneon-iniciative',
  },
  {
    slug: 'photocard-binder',
    frame: '06',
    state: 'soon',
    title: { en: 'Pocabin', pt: 'Pocabin' },
    line: {
      en: 'A digital binder for organizing and tracking K-pop photocard collections.',
      pt: 'Um binder digital para organizar e acompanhar coleções de photocards de K-pop.',
    },
    context: { en: 'Side project', pt: 'Projeto pessoal' },
    role: unknown,
    period: unknown,
    status: { en: 'developing', pt: 'revelando' },
    statusKind: 'developing',
    tags: [tag('Website', 'Website'), tag('Product', 'Produto'), tag('Vibe-coding', 'Vibe-coding')],
    cover: 'binder',
  },
  {
    slug: 'sabi',
    frame: '07',
    state: 'soon',
    title: { en: 'Sabi', pt: 'Sabi' },
    line: {
      en: 'Turning any dish or menu into the right allergen question.',
      pt: 'Transformando qualquer prato ou cardápio na pergunta certa sobre alérgenos.',
    },
    context: { en: 'Product · app', pt: 'Produto · app' },
    role: unknown,
    period: unknown,
    status: { en: 'developing', pt: 'revelando' },
    statusKind: 'developing',
    tags: [tag('UX/UI research', 'Pesquisa UX/UI'), tag('Product', 'Produto'), tag('App', 'App')],
    cover: 'sabi',
    media: {
      src: 'covers/sabi.webp',
      poster: 'covers/sabi.webp',
      type: 'image/webp',
      alt: { en: 'The Sabi mark: three rounded bars with a yellow dot in the middle.', pt: 'A marca do Sabi: três barras arredondadas com um ponto amarelo no meio.' },
    },
  },
];

export const caseProjects = projects.filter((p) => p.state !== 'soon');
