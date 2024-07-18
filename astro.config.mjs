import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://blog.baisley.dev',
    integrations: [sitemap()],
});