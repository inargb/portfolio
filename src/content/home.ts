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
  aside: {
    en: 'Product designer working on POS and back-office tools. Quietly obsessed with systems, specs and the small details nobody asked for, but everybody notices.',
    pt: 'Product designer criando ferramentas de PDV e back-office. Obcecada, em silêncio, por sistemas, specs e pelos detalhes que ninguém pediu, mas todo mundo percebe.',
  } as L10n,
  cue: { en: 'the contact sheet', pt: 'a folha de contato' } as L10n,

  workLabel: { en: 'works', pt: 'trabalhos' } as L10n,
  workTitle: { en: 'Seven frames from a very long roll.', pt: 'Sete frames de um filme bem longo.' } as L10n,
  workNote: {
    en: 'Two are protected, two are still developing. The rest are open.',
    pt: 'Dois são protegidos, dois ainda estão revelando. O resto está aberto.',
  } as L10n,

  aboutLabel: { en: 'about', pt: 'sobre' } as L10n,
  aboutTitle: { en: 'Curiosity about people and things led me here.', pt: 'A curiosidade por pessoas e coisas me trouxe até aqui.' } as L10n,
  aboutBody: {
    en: 'Design is my language, but art is where I charge: music, cinema and street photography, usually shot on my dad’s old Yashica.',
    pt: 'Design é minha linguagem, mas é na arte que eu recarrego: música, cinema e fotografia de rua, quase sempre na Yashica antiga do meu pai.',
  } as L10n,
  aboutLink: { en: 'the rest of me', pt: 'o resto de mim' } as L10n,
  aboutShelf: { en: 'also, there’s a shelf that needs organizing.', pt: 'ah, e tem uma estante precisando de arrumação.' } as L10n,
};
