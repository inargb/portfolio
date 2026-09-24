// Footer: "secrets found n/total" appears only after the first discovery.
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
