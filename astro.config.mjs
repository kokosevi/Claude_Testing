import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sinnorientiert.de',
  integrations: [sitemap()],
  build: {
    // Pagefind läuft post-build über package.json scripts
  },
});
