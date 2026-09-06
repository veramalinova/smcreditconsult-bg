# Meridian Credit

A marketing site for an independent credit consulting practice — services, process, and a consultation request form. The default language is Bulgarian, with an EN/БГ switcher in the menu.

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

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start the development server |
| `npm run build`| Production build         |
| `npm run start`| Serve the production build |
| `npm run lint` | Run ESLint               |

## Notes

The consultation form is client-side only for this demo. Submissions are validated in the browser and show a success state; wire it to your email or CRM when you are ready.
