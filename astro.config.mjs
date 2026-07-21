import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brpestcontrol.co.uk',
  adapter: vercel(),
  output: 'static',
  integrations: [
    sitemap({
      // Keep Astro's auto-generated sitemap-0/index in sync with pages;
      // public/sitemap.xml is the canonical URL advertised in robots.txt.
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
