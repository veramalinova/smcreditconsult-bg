# СМ Кредит Консулт

Многостраничен сайт за независима кредитна консултация — ипотечен кредит, потребителски кредит и рефинансиране. По подразбиране е на български, с превключвател БГ/EN.

## Страници

| Път | Съдържание |
| --- | --- |
| `/` | Начало |
| `/uslugi` | Преглед на услугите |
| `/uslugi/ipotechnen-kredit` | Ипотечен кредит |
| `/uslugi/potrebitelski-kredit` | Потребителски кредит |
| `/uslugi/firmen-kredit` | Фирмен кредит |
| `/uslugi/refinansirane` | Рефинансиране |
| `/kak-rabotim` | Процес |
| `/za-nas` | За нас |
| `/polezno` | Съвети и FAQ |
| `/konsultaciya` | Безплатна консултация |

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
