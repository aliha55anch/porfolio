# Muhammad Ali Hassan — Developer Portfolio

React (Vite) portfolio of Muhammad Ali Hassan — Web Developer & Frontend Developer.

## Tech Stack

- React 19 + Vite
- React Router (SPA routing)
- Tailwind CSS v4
- shadcn/ui components
- Framer Motion
- Sonner (toasts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project Structure

```
src/
  pages/          # Route pages
  components/     # Shared components (ui/, sections)
  lib/            # Data, utils
  App.jsx         # Route definitions
  main.jsx        # App entry (providers + router)
```

## Deploy

Build with `npm run build` and serve the `dist/` folder (e.g. on Vercel, Netlify, or any static host).
