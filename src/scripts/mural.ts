// The mural: polaroids pinned from the camera secret. For now they live in
// this browser only; the playground mural will read them from here.
export interface MuralPin { id: string; dog: string; caption: string; frame: string; at: number; }

const KEY = 'ina:mural';
const MAX = 60;

export function muralPins(): MuralPin[] {
  try {
    const list = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(list) ? list : [];
  } catch { return []; }
}

export function pinToMural(pin: Omit<MuralPin, 'id' | 'at'>): boolean {
  const list = muralPins();
  list.unshift({ ...pin, id: Math.random().toString(36).slice(2, 10), at: Date.now() });
  try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX))); } catch { return false; }
  window.dispatchEvent(new CustomEvent('ina:mural'));
  return true;
}
