# СМ Кредит Консулт

Многостраничен сайт за независима кредитна консултация — ипотечен кредит, потребителски кредит и рефинансиране. По подразбиране е на български, с превключвател БГ/EN.

## Страници

| Път | Съдържание |
| --- | --- |
| `/` | Начало |
| `/uslugi` | Преглед на услугите |
| `/uslugi/ipotechnen-kredit` | Ипотечен кредит |
| `/uslugi/potrebitelski-kredit` | Потребителски кредит |
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

Формата на `/konsultaciya` изпраща заявки към `smcreditconsult@gmail.com` през формата в сайта (FormSubmit). Няма mailto — при грешка се показва съобщение, без отваряне на имейл клиент.

**Важно при първо изпращане:** FormSubmit праща активационен имейл на `smcreditconsult@gmail.com`. Отворете го и потвърдете (проверете и Spam). След това заявките започват да пристигат.
