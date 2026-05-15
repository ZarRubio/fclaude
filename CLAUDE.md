# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install              # install dependencies
npm run dev              # start Next.js dev server
npm run build            # static export (outputs to /out)
npm run start            # serve production build
npm run preview          # serve /out with `serve`
npm run optimize:images  # compress catalog images with Sharp (run before build)
```

No test runner or linter is configured.

## Environment

```env
# No .env.example — only one env var is used:
VITE_WHATSAPP_NUMBER=51999999999   # digits only, with country code, no +
```

The fallback number in `src/config/site.js` is used if the env var is absent.

## Architecture

Next.js 16 App Router static export for **SAHM** (motorcycle tire/parts distributor, Peru). `next.config.mjs` sets `output: 'export'` and `trailingSlash: true` for FTP deployment to Hostinger.

**App Router (`src/app/`):**
- `/` → `page.jsx` renders `HomeExperience`
- `/productos` → category listing
- `/productos/[slug]` → filtered product list by category slug
- `/producto/[id]` → product detail
- `/buscar` → fitment / search
- `/carrito` → cart
- `/nosotros` → about
- `/contacto` → contact
- `layout.jsx` wraps all routes with `Providers`, `PremiumNav`, `PremiumFooter`, and `FloatingActions`

**Client boundary:** `src/app/layout.jsx` is a Server Component; `Providers` is `'use client'` and wraps children. All interactive components under `src/components/premium/` are `'use client'`.

**Animation stack:**
- **Lenis** — smooth scroll (initialized in `Providers`, skipped if `prefers-reduced-motion`)
- **GSAP + ScrollTrigger** — scroll-driven reveal (`.gsap-reveal` class) and parallax (`.parallax-media` class), scoped to the `Providers` div and refreshed on pathname change
- **Framer Motion** — nav mega-menu and other micro-animations

**Config layer (`src/config/`):**
- `site.js` — `WHATSAPP_NUMBER`, `WHATSAPP_URL`, `buildWhatsAppMessageUrl(message)`, feature flags `catalogReady` / `socialReady`
- `navigation.js` — `PRODUCT_SUBCATEGORIES` keyed by `'es'` / `'en'`
- `catalogData.js` — raw product/category data (source of truth for adding/removing products)
- `catalog.js` — enriches raw data with image paths; exports `CATALOG_PRODUCTS`, `CATALOG_CATEGORIES`, `getSubcategories()`, `getProductById()`, `getProductLabel()`, `getProductWhatsAppMessage()`
- `categories.js` — category definitions

**Data layer (`src/lib/premiumData.js`):** Derives `featuredBrands`, `premiumCategories`, `heroProduct`, `bestSellers`, `oemHighlights`, and `testimonials` from `CATALOG_PRODUCTS` for use in `HomeExperience`.

**State:**
- `CartContext` (`src/context/CartContext.jsx`) — cart state persisted to `localStorage` under `sahm_cart`; exposes `addToCart`, `removeFromCart`, `updateQty`, `clearCart`, `totalItems` via `useCart()` hook
- No other global state; UI state is component-local

**Legacy landing (`src/components/sahm/`):** Original Vite-era section components (`Hero`, `Navbar`, `TrustBar`, `Beneficios`, `Confianza`, `Categorias`, `ProductosDestacados`, `Footer`, etc.) and hooks (`useFadeIn`, `useScrollY`) are retained but no longer part of the active routes. The new premium UI lives entirely in `src/components/premium/`.

## Styling

- **Tailwind CSS 3** — brand tokens `sahm-yellow` (`#F5C000`) and `sahm-purple` (`#3D2785`)
- Font: **Kanit** (loaded from Google Fonts in `src/index.css`)
- Global utilities in `src/index.css`: `.ambient-glow`, `.soft-grid`, `.float-slow`, `.card-shine`, `.btn-shimmer`, `.premium-float`, `.magnetic-btn`, `.brand-3d`
- CSS variables: `--sahm-yellow`, `--sahm-purple`, `--bg-1`, `--bg-2`, `--ink`
- Custom Tailwind animations in `tailwind.config.js`: `marquee`, `fade-up`, `fade-in`, `scale-in`, `glow-cta`, `pulse-ring`, `scroll-bounce`
- `prefers-reduced-motion` is respected — Lenis and GSAP animations are skipped entirely

## Deployment

Static export deployed to Hostinger via FTP. CI workflow at `.github/workflows/deploy-hostinger.yml`. Always run `npm run optimize:images` before a build that includes new catalog images.
