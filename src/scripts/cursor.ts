// Cursor behaviour. States come from the nearest [data-cursor] ancestor:
//   data-cursor="link|project|soon|secret|look|open|drag"
//   data-cursor-label="custom text" (optional; otherwise the localized default)
// Nothing here is required to use the site: it is a layer on top.
import { motionOn } from './prefs';

// cursor state → data-l-* attribute holding its localized label
const LABELS: Record<string, string> = { project: 'lView', soon: 'lSoon', secret: 'lSecret', drag: 'lDrag', open: 'lOpen', look: 'lLook' };

const el = document.querySelector<HTMLElement>('[data-cursor-root]');
const fine = window.matchMedia('(hover: hover) and (pointer: fine)');

if (el) init(el);

function init(cursor: HTMLElement) {
  const label = cursor.querySelector<HTMLElement>('.cursor__label')!;
  let x = -100, y = -100, cx = -100, cy = -100;
  let raf = 0;
  let enabled = false;

  const lag = () => (motionOn() ? 0.22 : 1);

  function frame() {
    const k = lag();
    cx += (x - cx) * k;
    cy += (y - cy) * k;
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(frame) : 0;
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

  function setState(target: Element | null) {
    const host = target?.closest<HTMLElement>('[data-cursor]');
    let state = host?.dataset.cursor ?? 'default';
    // Anything clickable without an explicit state still reads as a link.
    if (!host && target?.closest('a, button, [role="button"], summary, label[for]')) state = 'link';
    cursor.dataset.state = state;
    const key = LABELS[state];
    const text = host?.dataset.cursorLabel ?? (key ? cursor.dataset[key] : '') ?? '';
    label.textContent = text;
  }

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    cursor.classList.remove('is-away');
    kick();
  };
  const onOver = (e: PointerEvent) => { if (e.pointerType === 'mouse') setState(e.target as Element); };
  const onDown = () => cursor.classList.add('is-down');
  const onUp = () => cursor.classList.remove('is-down');
  const onLeave = () => cursor.classList.add('is-away');

  function enable() {
    if (enabled) return;
    enabled = true;
    document.documentElement.classList.add('has-custom-cursor');
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.documentElement.addEventListener('pointerleave', onLeave);
  }
  function disable() {
    if (!enabled) return;
    enabled = false;
    document.documentElement.classList.remove('has-custom-cursor');
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerover', onOver);
    window.removeEventListener('pointerdown', onDown);
    window.removeEventListener('pointerup', onUp);
    document.documentElement.removeEventListener('pointerleave', onLeave);
  }

  const sync = () => (fine.matches ? enable() : disable());
  fine.addEventListener('change', sync);
  sync();

}
