# StayHaus

Marketing website for StayHaus — a Florida short-term/furnished rental hospitality brand. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

`npm run build && npm run start` runs a production build/server.

## Structure

- `app/` — routes (App Router). Each top-level page lives in its own folder; `[slug]`/`[city]` are dynamic routes with `generateStaticParams`.
- `components/` — shared UI (Header, Footer, PropertyCard, Reveal scroll-animation wrapper, forms, etc).
- `data/` — the entire content model: `properties.ts`, `destinations.ts`, `guides.ts`, `testimonials.ts`, `types.ts`. This is the single source of truth the whole site renders from.
- `lib/` — site config (`site.ts`: nav, contact info, social links) and small utilities.
- `public/images/` — imagery, organized by section.

## Adding a new property

Add an entry to the `properties` array in `data/properties.ts`. Every field is required by the `Property` type in `data/types.ts`, so TypeScript will flag anything missing. Point `heroImage`/`gallery` at real photos once available (see "Replacing placeholder imagery" below), or run the generator script to get placeholder art for the new slug.

## Adding a new destination / market

1. Add an entry to `data/destinations.ts` (`state: "active"` once stays exist there, `"coming-soon"` until then).
2. Add a matching entry to `data/guides.ts` if you're publishing a city guide.
3. Add properties in that market to `data/properties.ts` with a matching `destinationSlug`.

Everything else — the Stays filter, the Explore index, the homepage destination grid, sitemap — reads from these files automatically. No page code needs to change to add a market.

## Placeholder imagery

External image CDNs weren't reachable from this build environment, so `public/images/` is populated with generated abstract, editorial-toned SVG placeholders (warm neutral palette, restrained architectural line motifs) rather than real photography. They're deterministic per filename — regenerate the full set any time with:

```bash
npm run generate:images
```

See `scripts/generate-placeholder-images.mjs`.

**Before launch, replace these with real photography.** Nothing else needs to change — every reference is just a path string in `data/*.ts`, so swapping `/public/images/properties/the-kenwood-loft/1.svg` for a real `.jpg`/`.webp` at the same import path (or updating the path in the data file) is a drop-in replacement.

`next.config.js` currently sets `images.unoptimized: true`. That's there because Vercel's hosted image-optimization pipeline serves these generated SVGs as empty responses in production (a Vercel-specific difference from `next start` locally), so optimization is skipped entirely for now. **Once real photography replaces the placeholders, remove `unoptimized: true`** (and `dangerouslyAllowSVG`, no longer needed) to get responsive resizing and WebP conversion back.

## Forms

`/api/contact` and `/api/partner-inquiry` are stub Next.js Route Handlers — they validate input and log to the server console. Wire them up to a real inbox/CRM before launch.

## Legal pages

`/terms` and `/privacy` contain standard boilerplate structure, not counsel-reviewed language — have them reviewed before launch.
