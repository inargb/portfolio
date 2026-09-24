// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo at https://inargb.github.io/portfolio/.
// When a custom domain (e.g. inasilva.com) is pointed at it, build with
// SITE_URL=https://inasilva.com BASE_PATH=/ and nothing else changes.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://inargb.github.io',
  base: process.env.BASE_PATH ?? '/portfolio',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
