// Footer: "secrets found n/total" appears only after the first discovery,
// and a random unremembered photo is chosen on each visit.
import { foundEggs } from './registry';
import { catalog } from './catalog';

function renderSecrets() {
  const found = foundEggs().length;
  document.querySelectorAll<HTMLElement>('[data-secrets]').forEach((el) => {
    el.hidden = found === 0;
    const n = el.querySelector('[data-secrets-count]');
    if (n) n.textContent = `${found}/${catalog.length}`;
  });
}
renderSecrets();
window.addEventListener('ina:egg-found', renderSecrets);

const photos = document.querySelectorAll<HTMLElement>('[data-unremembered] [data-photo]');
if (photos.length) {
  const pick = Math.floor(Math.random() * photos.length);
  photos.forEach((p, i) => (p.hidden = i !== pick));
}
