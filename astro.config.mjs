import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';


export default defineConfig({
    site: 'https://baisley.dev',
    integrations: [
        sitemap(),
        mdx(),
    ],
    vite: {
        plugins: [
            tailwindcss()
        ]
    }
});
