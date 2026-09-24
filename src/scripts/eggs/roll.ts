// The roll: every page is a frame. The footer counts the frames you've
// seen; see them all and the roll is finished. Per-browser only.
import { register } from './registry';

const KEY = 'ina:roll';
// Pages that make up a full roll (case pages join as they're rebuilt).
export const ROLL = ['home', 'about', 'playground', 'responsive-specs-and-accessibility-generator', 'systems-portal', 'bandoneon-iniciative', 'menu-management', 'bar-tabs-system'];

function read(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]'); } catch { return []; }
}

register({
  id: 'roll',
  init(ctx) {
    const page = document.documentElement.dataset.page ?? '';
    const seen = read();
    const firstTime = !seen.includes(page);
    if (page && firstTime) {
      seen.push(page);
      try { localStorage.setItem(KEY, JSON.stringify(seen)); } catch { /* ignore */ }
    }
    const count = seen.filter((p) => ROLL.includes(p)).length;
    document.querySelectorAll<HTMLElement>('[data-roll-count]').forEach((n) => {
      n.textContent = String(Math.max(count, 1)).padStart(2, '0');
    });
    document.querySelectorAll<HTMLElement>('[data-roll-total]').forEach((n) => (n.textContent = String(ROLL.length).padStart(2, '0')));
    // Revisits are marked quietly.
    if (!firstTime) document.documentElement.dataset.revisit = '';
    if (count >= ROLL.length) {
      document.documentElement.dataset.rollDone = '';
      if (firstTime) ctx.found('roll');
    }
  },
});
