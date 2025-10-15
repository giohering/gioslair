// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register";

// Imports for math rendering
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      // NOTE: remarkToc and remarkCollapse were removed because they were not imported.
      // To use them, you must first install them (e.g., `npm install remark-toc`)
      // and then import them at the top of this file.
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
  },
});
