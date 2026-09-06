# СМ Кредит Консулт

Многостраничен сайт за независима кредитна консултация — ипотечен, потребителски и фирмен кредит (включително рефинансиране). По подразбиране е на български, с превключвател БГ/EN.

## Страници

| Път | Съдържание |
| --- | --- |
| `/` | Начало |
| `/uslugi` | Преглед на услугите |
| `/uslugi/ipotechnen-kredit` | Ипотечен кредит |
| `/uslugi/potrebitelski-kredit` | Потребителски кредит |
| `/uslugi/firmen-kredit` | Фирмен кредит |
| `/kak-rabotim` | Процес |
| `/za-nas` | За нас |
| `/polezno` | Съвети |
| `/vaprosi` | Често задавани въпроси |
| `/konsultaciya` | Безплатна консултация |
| `/politika-za-poveritelnost` | Политика за поверителност |
| `/politika-za-biskvitki` | Политика за бисквитки |
| `/obshti-usloviya` | Общи условия |

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Notes

Формата на `/konsultaciya` изпраща заявки към `smcreditconsult@gmail.com` през `/api/consult` (Gmail SMTP). Няма mailto.

### Имейл настройка

1. В Google акаунта на `smcreditconsult@gmail.com` включете 2-стъпкова проверка.
2. Създайте **App password** (Security → App passwords).
3. Копирайте `.env.example` към `.env.local` и попълнете:

```bash
GMAIL_USER=smcreditconsult@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

4. Рестартирайте `npm run dev`.

## Production / SEO

- Per-page `title` + meta description (BG/EN)
- Open Graph + Twitter cards + canonical URL
- Favicon / app icons (`src/app/icon.svg`, `apple-icon.svg`)
- `/sitemap.xml` and `/robots.txt`
- Custom `404` page
- Sticky mobile call button (`tel:`)
- Set `NEXT_PUBLIC_SITE_URL` to the live HTTPS domain before launch
- Company-domain email (e.g. `office@…`) can replace Gmail in `src/lib/contact.ts` once DNS/mailbox are ready

