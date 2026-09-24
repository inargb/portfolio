// The doodles are Inaiá's own drawings, and purely decorative. They notice you:
//   · they turn slightly toward the pointer (fine pointers, motion on)
//   · leave the page idle and they doze off
import { register } from './registry';

register({
  id: 'doodle',
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

    // Idle → sleepy.
    let idle = 0;
    const sleep = () => doodles.forEach((d) => d.classList.add('is-sleepy'));
    const wake = () => {
      doodles.forEach((d) => d.classList.remove('is-sleepy'));
      clearTimeout(idle);
      idle = window.setTimeout(sleep, 45000);
    };
    ['pointermove', 'keydown', 'scroll', 'touchstart'].forEach((ev) => window.addEventListener(ev, wake, { passive: true }));
    wake();
  },
});
