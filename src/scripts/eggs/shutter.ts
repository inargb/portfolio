// Type "yashica" anywhere: the old camera takes a picture of the page.
// Motion off → no flash, just the click (as text).
import { register } from './registry';
import { onWord } from './keys';

register({
  id: 'yashica',
  init(ctx) {
    onWord('yashica', () => {
      if (ctx.motion()) {
        const flash = document.createElement('div');
        flash.className = 'shutter';
        flash.setAttribute('aria-hidden', 'true');
        document.body.append(flash);
        flash.addEventListener('animationend', () => flash.remove());
      }
      ctx.say({ en: '*click* that one’s going on the roll.', pt: '*clique* essa vai pro filme.' });
      ctx.found('yashica');
    });
  },
});
