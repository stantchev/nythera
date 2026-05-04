# NYTHERA — Deployment Guide

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Vercel Deployment

### Step 1 — Swap to next/font layout (recommended)

The default `app/layout.js` uses `<link>` tags for Google Fonts (works everywhere).
On Vercel, swap to the optimised version that self-hosts fonts at build time:

```bash
cp app/layout.vercel.js app/layout.js
```

This enables:
- Zero CLS (no font flash)
- Zero external font requests from browser
- Automatic font subsetting by Next.js

### Step 2 — Deploy

**Option A — Vercel CLI:**
```bash
npx vercel --prod
```

**Option B — GitHub Integration:**
1. Push to GitHub
2. Connect repo at vercel.com/new
3. Framework = Next.js (auto-detected)
4. Deploy — zero config needed

---

## Routes

| Route                | Rendering | Description              |
|----------------------|-----------|--------------------------|
| `/`                  | Static    | Homepage                 |
| `/work`              | Static    | Portfolio + filter       |
| `/studio`            | Static    | Inquiry form             |
| `/approach`          | Static    | Methodology              |
| `/collab/killstar`   | Static    | Brand collab page        |
| `/collab/demonia`    | Static    | Brand collab page        |
| `/collab/newrock`    | Static    | Brand collab page        |
| `/collab/drmartens`  | Static    | Brand collab page        |
| `/collab/vans`       | Static    | Brand collab page        |

All routes are statically pre-rendered at build time.
No server-side runtime required. Deploys to Vercel Edge CDN.

---

## Tech Stack

| Package         | Version  | Role                    |
|-----------------|----------|-------------------------|
| next            | 15.3.1   | Framework (App Router)  |
| react           | 19.1.0   | UI                      |
| react-dom       | 19.1.0   | DOM renderer            |
| framer-motion   | 12.9.4   | Animations              |
| tailwindcss     | 4.x      | Styling                 |

## Performance

- All routes: `○ Static` (pre-rendered, zero server runtime)
- Fonts: self-hosted at build time (via next/font on Vercel)
- Images: CSS SVG placeholders (no external deps)
- Animations: transform-only (GPU composited, no layout reflow)
- JS: minimal — client components only where scroll/hover needed
