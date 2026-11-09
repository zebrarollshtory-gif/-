import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Временный адрес. Заменить на итоговый домен (.kz), когда он будет зарегистрирован.
export default defineConfig({
  site: 'https://zebra-qazaqstan.pages.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
