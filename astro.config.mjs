import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://blog.huii.top',
  integrations: [
    mdx(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
