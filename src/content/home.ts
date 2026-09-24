// Home page copy. Written in Inaiá's voice from her own lines on the
// current site; review before publishing.
import type { L10n } from '../i18n/config';

export const home = {
  meta: { en: 'FR 00 · hello', pt: 'FR 00 · oi' } as L10n,
  currently: {
    en: 'currently: UX/UI designer at Volanté Systems',
    pt: 'agora: UX/UI designer na Volanté Systems',
  } as L10n,
  // The headline is split around the interactive word.
  headlineBefore: {
    en: 'I design products for every screen size, with an absurd number of ',
    pt: 'Eu desenho produtos para todos os tamanhos de tela, com um número absurdo de ',
  } as L10n,
  word: { en: 'frames', pt: 'frames' } as L10n,
  headlineAfter: { en: '.', pt: '.' } as L10n,

  workLabel: { en: 'works', pt: 'trabalhos' } as L10n,
};
