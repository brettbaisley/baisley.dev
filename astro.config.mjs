import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

export default defineConfig({
    site: 'https://baisley.dev',
    integrations: [
        sitemap(),
        icon(),
    ],
    vite: {
        plugins: [
            tailwindcss()
        ]
    }
});


/* 
  Got steps from: https://astro-tips.dev/tips/tailwind-v4/
*/