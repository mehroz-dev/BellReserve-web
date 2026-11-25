# BellReserve website

Marketing site for **BellReserve**, the AI calling agent by UnicodeTech. Built with **React 19 + Vite**, plain JavaScript (`.jsx` / `.js`), React Router and custom CSS (no CSS framework).

## Pages

| Route | What it is |
|---|---|
| `/` | Landing page: hero, industries carousel, missed-call calculator, how it works, features, dashboard demo, integrations, testimonials, pricing, FAQ |
| `/industries` | All industries |
| `/industries/:slug` | Restaurants, HVAC, Dental, Real Estate, Front Desks (content from `src/utils/Industries.config.js`) |
| `/book-demo` | Demo request form (`?industry=hvac&plan=growth` pre-fills) |
| `/api/demo` | Vercel function (`api/demo.js`): validates the form and forwards it to `DEMO_WEBHOOK_URL` |
| `/privacy`, `/terms` | Draft legal pages (placeholders) |

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000 (the /api/demo endpoint works locally too)
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run lint      # oxlint
```

## Project structure

```text
api/demo.js                  Vercel function for the demo form
public/                      favicon, og-image, robots.txt, sitemap.xml
src/
  assets/images/brand/       logos and icon (imported by components)
  assets/styles/             global.css + one CSS file per page / component
  components/                reusable UI (*.component.jsx, header/footer *.components.jsx)
  hooks/                     custom hooks (*.hook.js)
  layouts/Landing.layout.jsx header + page + footer shell
  pages/                     one file per route
  routes/App.routes.jsx      route table
  services/Demo.services.js  sends the demo form to /api/demo
  utils/                     site config, industries data, helpers
  App.jsx, main.jsx          app entry points
```

## Where to edit content

- `src/utils/Site.config.js`: phone numbers, email, pricing plans, FAQs, testimonials
- `src/utils/Industries.config.js`: everything on the industry carousel and industry pages
- `src/assets/styles/global.css`: brand tokens for light and dark themes (colours, shadows, glows)

## Brand

Colours `#2563FF`, `#FFFFFF`, navy `#0B1736`. Fonts IBM Plex Serif (headings), IBM Plex Sans (body, buttons), IBM Plex Mono (labels), self-hosted via `@fontsource`. Theme follows the visitor's system setting, can be toggled in the header, and is remembered; it is applied before first paint, so there is no flash.

## Before launch

- [ ] Replace placeholders: `[CONFIRM CONTRACT TERMS]`, dental data-handling note, legal pages
- [ ] Confirm pricing and testimonials are current and verified
- [ ] Add real sample-call recordings to the "Play sample call" buttons
- [ ] Set `DEMO_WEBHOOK_URL` in Vercel (server-side only, no `VITE_` prefix)
- [ ] Point `bellreserve.com` to the Vercel project
