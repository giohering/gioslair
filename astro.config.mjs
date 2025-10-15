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
  integrations: [
    mdx({
      // MDX plugins are configured here, inside the mdx() integration
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    react(),
    tinaDirective()
  ],
  shikiConfig: {
    // For more themes, visit https://shiki.style/themes
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    wrap: false,
  },
});

