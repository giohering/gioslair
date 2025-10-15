// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
	integrations: [mdx(), sitemap(), react(), tinaDirective()],
		markdown: { 
			remarkPlugins: [
		      remarkMath,
		      remarkToc,
		      [remarkCollapse, { test: "Table of contents" }],
		    ],
			rehypePlugins: [rehypeKatex],
			  shikiConfig: {
		      // For more themes, visit https://shiki.style/themes
		      themes: { light: "min-light", dark: "night-owl" },
		      wrap: false,
		    },
  },
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
