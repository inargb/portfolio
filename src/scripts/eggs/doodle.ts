// The doodles are Inaiá's own drawings. They notice you:
//   · they turn slightly toward the pointer (fine pointers, motion on)
//   · five pokes in a row and they get shy and hide for a moment
//   · leave the page idle and they doze off
import { register } from './registry';

register({
  id: 'shy',
  init(ctx) {
    const doodles = Array.from(document.querySelectorAll<HTMLElement>('[data-doodle]'));
    if (!doodles.length) return;

    // Look toward the pointer.
    let raf = 0;
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse' || !ctx.motion()) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        for (const d of doodles) {
          const r = d.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
          const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
          d.style.setProperty('--look-x', `${(dx * 14).toFixed(2)}px`);
          d.style.setProperty('--look-y', `${(dy * 10).toFixed(2)}px`);
          d.style.setProperty('--look-r', `${(dx * 8).toFixed(2)}deg`);
        }
      });
    }, { passive: true });

    // Pokes.
    for (const d of doodles) {
      let pokes = 0;
      let reset = 0;
      d.addEventListener('click', () => {
        wake();
        pokes += 1;
        clearTimeout(reset);
        reset = window.setTimeout(() => (pokes = 0), 1600);
        d.classList.remove('is-poked');
        void d.offsetWidth;
        d.classList.add('is-poked');
        if (pokes >= 5) {
          pokes = 0;
          d.classList.add('is-shy');
          ctx.say({ en: 'ok ok, that’s enough attention for today.', pt: 'tá bom, tá bom, já deu de atenção por hoje.' });
          ctx.found('shy');
          window.setTimeout(() => d.classList.remove('is-shy'), 2800);
        }
      });
    }

    // Idle → sleepy.
    let idle = 0;
    const sleep = () => doodles.forEach((d) => d.classList.add('is-sleepy'));
    function wake() {
      doodles.forEach((d) => d.classList.remove('is-sleepy'));
      clearTimeout(idle);
      idle = window.setTimeout(sleep, 45000);
    }
    ['pointermove', 'keydown', 'scroll', 'touchstart'].forEach((ev) => window.addEventListener(ev, wake, { passive: true }));
    wake();
  },
});
