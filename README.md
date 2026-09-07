# СМ Кредит Консулт

Многостраничен сайт за кредитна консултация — ипотечен, потребителски и фирмен кредит (включително рефинансиране). По подразбиране е на български, с превключвател БГ/EN.

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
| `/zashto-e-bezplatno` | Защо е безплатно |
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
- Set `NEXT_PUBLIC_SITE_URL=https://smcreditconsult-bg.com` (already the project default)
- Company-domain email (e.g. `office@…`) can replace Gmail in `src/lib/contact.ts` once DNS/mailbox are ready

### Analytics + conversions (GA4)

1. Отвори [Google Analytics](https://analytics.google.com) → **Admin** → създай property (GA4) за `smcreditconsult-bg.com`.
2. **Data streams** → **Web** → копирай **Measurement ID** (`G-XXXXXXXXXX`).
3. Във **Vercel** → Project → Settings → Environment Variables добави:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` (Environment: Production, тип **Config** / plain, не Secret — трябва да е публичен)
4. **Redeploy** сайта.
5. В GA4 → **Admin** → **Events** потвърди:
   - `generate_lead` — успешна форма за консултация
   - `click_to_call` — клик на мобилния бутон за обаждане  
   Маркирай `generate_lead` като **Key event** (конверсия).
6. На сайта analytics се зарежда **само след „Приемам“** в банера за бисквитки.

Без `NEXT_PUBLIC_GA_MEASUREMENT_ID` analytics е изключен (банерът не се показва).

