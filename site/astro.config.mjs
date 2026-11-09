import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Основной домен сайта (зарегистрирован на ИП «Lux Service», регистратор hoster.kz).
export default defineConfig({
  site: 'https://zebra-qazaqstan.kz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
