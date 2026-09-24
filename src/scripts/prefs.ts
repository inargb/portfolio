// Visitor preferences: theme (paper / darkroom). Motion is always on,
// except when the visitor's system asks to reduce it.
// Stored per browser; the page works identically if storage is unavailable.

const root = document.documentElement;
const mqDark = window.matchMedia('(prefers-color-scheme: dark)');
const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

function store(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* private mode */ }
}

export function isDark(): boolean {
  const t = root.dataset.theme;
  return t ? t === 'darkroom' : mqDark.matches;
}

export function motionOn(): boolean {
  return !mqReduce.matches;
}

function emit() {
  window.dispatchEvent(new CustomEvent('ina:prefs', { detail: { dark: isDark(), motion: motionOn() } }));
}

export function setTheme(dark: boolean) {
  const apply = () => {
    root.dataset.theme = dark ? 'darkroom' : 'paper';
    store('ina:theme', root.dataset.theme);
    syncControls();
    emit();
  };
  // A soft cross-fade when the browser supports it and motion is on.
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && motionOn()) doc.startViewTransition(apply);
  else apply();
}

function syncControls() {
  const dark = isDark();
  document.querySelectorAll<HTMLButtonElement>('[data-lights]').forEach((b) => {
    b.setAttribute('aria-pressed', String(dark));
    const label = b.querySelector('[data-lights-label]');
    if (label) label.textContent = (dark ? b.dataset.labelOn : b.dataset.labelOff) ?? '';
  });
}

document.addEventListener('click', (e) => {
  const target = e.target as Element | null;
  const lights = target?.closest<HTMLButtonElement>('[data-lights]');
  if (lights) {
    lights.classList.remove('is-tugged');
    void lights.offsetWidth;
    lights.classList.add('is-tugged');
    setTheme(!isDark());
  }
});

mqDark.addEventListener('change', () => { syncControls(); emit(); });
mqReduce.addEventListener('change', () => { syncControls(); emit(); });
syncControls();
