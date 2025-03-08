import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://baisley.dev',
    integrations: [
        sitemap(),
    ],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    experimental: {
        svg: true,
    }
});


/* 
  Got steps from: https://astro-tips.dev/tips/tailwind-v4/
*/