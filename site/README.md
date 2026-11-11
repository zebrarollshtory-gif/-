# Сайт ZEBRA QAZAQSTAN

Статичный многостраничный сайт на [Astro](https://astro.build) 5. Собран по утверждённому прототипу (`../docs/`).

## Запуск у себя

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # готовый сайт в папке dist/
```

## Где что менять

| Что | Файл |
|---|---|
| Телефон, WhatsApp, адрес, часы, 2GIS, ответы на частые вопросы | `src/data/site.ts` |
| Объекты, изделия для дома, страницы для бизнеса, фото работ | `src/data/content.ts` |
| Гиды «Полезное» | `src/data/guides.ts` |
| Цвета, шрифты, общие стили | `src/styles/global.css` |
| Шапка, подвал, разметка для поисковиков | `src/layouts/Base.astro` |
| Анимация входа и выбор «Для дома / Для бизнеса» | `src/components/Intro.astro` |
| Фото | `public/img/` (формат WebP) |

Новый объект: добавить запись в `OBJECTS` в `src/data/content.ts` и фото в `public/img/` — страница `/projects/<slug>/` создастся сама.

## Публикация (Cloudflare Pages)

- Репозиторий: этот. Корневая папка проекта: `site`.
- Команда сборки: `npm run build`. Папка с результатом: `dist`.
- Домен: `https://zebra-qazaqstan.kz` (регистратор hoster.kz, DNS в Cloudflare). Подключён 11 ноября 2026; `www` перенаправляется на основной адрес (Redirect Rule 301). Адрес прописан в `astro.config.mjs` (`site`) и `public/robots.txt` (`Sitemap`).
- Проект Cloudflare Pages: `zebra-qazaqstan`, временный адрес https://zebra-qazaqstan.pages.dev (развёрнут 9 ноября 2026). Каждый push в `main` публикуется автоматически.

## Что уже заложено для поиска и ИИ-помощников

- Уникальные title и description, H1, хлебные крошки на каждой странице.
- Разметка schema.org: организация (HomeAndConstructionBusiness), FAQPage, Product, Article, BreadcrumbList.
- `sitemap-index.xml` (создаётся при сборке), `robots.txt` открыт для поисковиков и ИИ-роботов, `llms.txt` — краткая справка о компании.
- Google-тег `GTM-KT92Z3R6` (Google Analytics) на всех страницах. События: `whatsapp_click` (с местом кнопки), `choice` (выбор «Для дома / Для бизнеса»), `faq_open`. Нажатие WhatsApp — это обращение, не заявка. Яндекс Метрика: счётчик `114150201` с Вебвизором; те же события отправляются как цели (`reachGoal`).
