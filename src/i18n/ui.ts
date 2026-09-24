// Interface strings: everything that isn't page content.
// Keys are grouped by component so a Framer migration can map them to
// localized text layers one group at a time.
import type { L10n } from './config';

export const ui = {
  skip: { en: 'Skip to content', pt: 'Pular para o conteúdo' },

  nav: {
    label: { en: 'Main', pt: 'Principal' },
    work: { en: 'work', pt: 'projetos' },
    about: { en: 'about', pt: 'sobre' },
    resume: { en: 'resume', pt: 'currículo' },
    home: { en: 'Inaiá Silva, home', pt: 'Inaiá Silva, início' },
    newTab: { en: '(opens in a new tab)', pt: '(abre em outra aba)' },
  },

  lang: {
    label: { en: 'Language', pt: 'Idioma' },
    switchTo: { en: 'Ler em português', pt: 'Read in English' },
    current: { en: 'English', pt: 'Português' },
  },

  controls: {
    group: { en: 'Display settings', pt: 'Preferências de exibição' },
    lightsOff: { en: 'Turn off the lights', pt: 'Apagar as luzes' },
    lightsOn: { en: 'Turn the lights back on', pt: 'Acender as luzes' },
    lightsHint: { en: 'dark theme', pt: 'tema escuro' },
    motionPause: { en: 'Pause motion', pt: 'Pausar animações' },
    motionPlay: { en: 'Play motion', pt: 'Retomar animações' },
    spec: { en: 'Spec mode', pt: 'Modo spec' },
    specHint: { en: 'show the redlines', pt: 'mostrar as medidas' },
  },

  cursor: {
    view: { en: 'view project', pt: 'ver projeto' },
    soon: { en: 'coming soon!', pt: 'em breve!' },
    secret: { en: 'a little secret', pt: 'um segredinho' },
    drag: { en: 'drag', pt: 'arraste' },
    open: { en: 'open', pt: 'abrir' },
    look: { en: 'look', pt: 'olhar' },
  },

  footer: {
    signature: { en: 'designed by me <3', pt: 'design feito por mim <3' },
    greeting: { en: 'nice to meet you', pt: 'prazer em te conhecer' },
    seen: { en: 'frames seen', pt: 'frames vistos' },
    secrets: { en: 'secrets found', pt: 'segredos encontrados' },
    elsewhere: { en: 'elsewhere', pt: 'por aí' },
    kit: { en: 'the kit', pt: 'o kit' },
    kitHint: { en: 'design system playground', pt: 'playground do design system' },
    rollDone: {
      en: 'roll finished. thanks for looking around :)',
      pt: 'filme terminado. obrigada por explorar :)',
    },
  },

  project: {
    locked: { en: 'protected case', pt: 'case protegido' },
    soon: { en: 'coming soon', pt: 'em breve' },
    frame: { en: 'frame', pt: 'frame' },
    viewSheet: { en: 'sheet', pt: 'folha' },
    viewIndex: { en: 'index', pt: 'índice' },
    viewLabel: { en: 'Show work as', pt: 'Ver projetos como' },
    next: { en: 'next frame', pt: 'próximo frame' },
    prev: { en: 'previous frame', pt: 'frame anterior' },
    back: { en: 'all work', pt: 'todos os projetos' },
    role: { en: 'Role', pt: 'Papel' },
    timeline: { en: 'Timeline', pt: 'Duração' },
    context: { en: 'Context', pt: 'Contexto' },
    status: { en: 'Status', pt: 'Status' },
  },

  shortcuts: {
    title: { en: 'Keyboard, for the curious', pt: 'Teclado, para curiosos' },
    close: { en: 'Close', pt: 'Fechar' },
    unknown: { en: 'still hidden. keep looking', pt: 'ainda escondido. continue procurando' },
  },

  notFound: {
    title: { en: 'This frame didn’t develop.', pt: 'Esse frame não revelou.' },
    body: {
      en: 'Maybe the link is old, maybe the light got in. Either way, there’s nothing here.',
      pt: 'Talvez o link seja antigo, talvez tenha entrado luz. De qualquer jeito, não tem nada aqui.',
    },
    home: { en: 'back to the contact sheet', pt: 'voltar para a folha de contato' },
  },
} satisfies Record<string, Record<string, L10n> | L10n>;
