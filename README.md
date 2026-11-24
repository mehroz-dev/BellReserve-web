# BellReserve website

Marketing site for **BellReserve**, the AI calling agent by UnicodeTech. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Pages

| Route | What it is |
|---|---|
| `/` | Landing page: hero, industries (interactive tabs), missed-call calculator, how it works, features, dashboard preview, integrations, testimonials, pricing, trust, FAQ |
| `/industries` | All industries |
| `/industries/[slug]` | Restaurants, HVAC, Dental, Real Estate, Front Desks (static, generated from `src/lib/industries.ts`) |
| `/book-demo` | Demo request form (`?industry=hvac&plan=growth` pre-fills) |
| `/api/demo` | Validates the form and forwards it to `DEMO_WEBHOOK_URL` |
| `/privacy`, `/terms` | Draft legal pages (placeholders) |
| `sitemap.xml`, `robots.txt`, icons | Generated |

## Run locally

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit content

- `src/lib/site.ts`: phone numbers, email, pricing plans, FAQs, testimonials
- `src/lib/industries.ts`: everything on the industry tabs and industry pages
- `src/app/globals.css`: brand tokens for light and dark themes (colours, shadows, glows)
- `public/brand/`: logo files (horizontal, white/reversed, icon, vertical)

## Brand

Colours `#2563FF`, `#FFFFFF`, `#000000`. Fonts IBM Plex Serif (headings), IBM Plex Mono (labels, buttons), IBM Plex Sans (body), self-hosted via `@fontsource`. Theme follows the visitor's system setting, can be toggled in the header, and is remembered; it is applied before first paint, so there is no flash.

## Before launch

- [ ] Replace placeholders: `[CONFIRM CONTRACT TERMS]`, dental data-handling note, legal pages
- [ ] Confirm pricing and testimonials are current and verified
- [ ] Add real sample-call recordings to the "Play sample call" buttons
- [ ] Set `DEMO_WEBHOOK_URL` in your hosting environment
- [ ] Deploy (Vercel recommended) and point `bellreserve.com` to it
