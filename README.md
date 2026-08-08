# GT Spaces — Website

A Next.js 14 (App Router) website for **GT Spaces**, a real estate consultancy based in
Neharpar, Faridabad, currently featuring **Skynest Towers** by BPTP Realty (Sector 80,
Faridabad) as the represented project.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's Included

- Home, About, Projects (listing), Project detail (`/projects/skynest-towers`), Contact
- Fully responsive, mobile-first layout
- Enquiry form wired for EmailJS (optional) — see `src/lib/emailjs.ts`
- Free Google Maps embed (no API key needed) — see `src/components/home/GoogleMap.tsx`
- SEO metadata, JSON-LD structured data, sitemap.xml, robots.txt

## Before You Launch

1. **Logo** — replace the placeholder "GT" monogram in `src/components/layout/Navbar.tsx`
   and `Footer.tsx` with your real logo image once you have a clean version (no background
   clutter). Drop the file in `public/images/logo/` and swap the `<span>` monogram for a
   Next.js `<Image>` component.
2. **Images** — all photography currently used is licensed, attribution-free stock
   photography from Pexels (direct hotlinked URLs, no download needed). These are
   *representative* images of towers, interiors, and amenities, not actual photos of
   Skynest Towers, since the brochures only contained renders with text overlays. Swap in
   real project photography from BPTP whenever you have clean (text-free) files.
3. **EmailJS** — to receive enquiry form submissions by email, follow the setup notes in
   `src/lib/emailjs.ts` and fill in `.env.local` (copy `.env.local.example`).
4. **Domain** — update `siteConfig.url` in `src/data/site.ts` once you have a live domain.
5. **Project data** — all Skynest Towers content (highlights, amenities, unit types,
   nearby landmarks, HRERA number) lives in `src/data/projects.ts`. To add a second
   project later, just add another entry to the `projects` array.

## Deploy

Works out of the box on Vercel, Netlify, or any Node hosting:

```bash
npm run build
npm start
```

## Notes on Content Accuracy

- Skynest Towers is developed by **BPTP Realty**; GT Spaces is the consultancy
  representing it. This is stated on the project page and in the JSON-LD schema.
- Configuration areas and pricing are marked "on request" throughout, since the source
  brochures did not disclose exact carpet areas or per-sq-ft rates.
- The HRERA registration number shown (HRERA-PKL-FBD-881-2026) is from the official
  brochure; always verify current validity on haryanarera.gov.in before publishing.
