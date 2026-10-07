# IT Infrastructure Solutions — Website

Marketing website for IT Infrastructure Solutions (Lisbon, IA). Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. All pages are statically prerendered.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck
```

## Configuration

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL used for canonical links, sitemap, Open Graph, and structured data. Defaults to `https://www.itinfrastructuresolutions.net`. |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional. A URL that accepts a JSON `POST` of contact form submissions (Formspree, Basin, Getform, or your own API). |

### Contact form

The form validates input in the browser. Submission is handled by `src/lib/contact.ts`:

- **Endpoint configured:** posts JSON (`name`, `email`, `company`, `phone`, `service`, `message`, `_subject`) and shows a confirmation only after a successful 2xx response.
- **No endpoint:** opens the visitor's email application with a pre-filled message to the business address. The site never claims a message was sent unless it actually was.

Adjust `toRequestBody()` in `src/lib/contact.ts` if your provider expects different field names.

## Structure

```
src/
  app/                 Routes: /, /services, /about, /approach, /contact, /privacy, /terms
                       plus sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
  components/          Header, Footer, Hero, HeroGraphic, ServiceCard, CTA, SectionHeading,
                       PageHero, ProcessSteps, ContactForm, JsonLd, Logo, RevealObserver
  lib/
    site.ts            Business name, address, phone, email, navigation (single source of truth)
    services.ts        Service summaries and contact-form options
    contact.ts         Form submission adapter
```

Business details live only in `src/lib/site.ts`. Update them there and they propagate to every page, the footer, metadata, and the `ProfessionalService` JSON-LD.

## Notes

- Legal pages carry an effective date of October 7, 2026. Update them if practices change (for example, when analytics or a form provider is added). Consider having counsel review them.
- Animations are CSS-only and disabled under `prefers-reduced-motion`.
- The footer copyright year is set at build time; rebuild/redeploy at least once a year.

## Deploying to Hostinger (shared web hosting)

The site is built as a static export (`output: "export"` in `next.config.ts`), so no Node.js server is needed.

1. `npm run build` → produces the `out/` folder (includes `.htaccess`).
2. Zip the **contents** of `out/` (not the folder itself), using forward-slash paths.
3. In hPanel → **Websites → Manage → File Manager**, open `public_html`, delete the default `default.php`/`index.php`, upload the zip, and extract it there so `index.html` and `.htaccess` sit directly in `public_html`.
4. In hPanel → **Security → SSL**, make sure the free SSL certificate is installed and active.

`public/.htaccess` forces HTTPS, redirects the bare domain to `www`, serves `/404.html` for missing pages, and sets caching/compression. If you prefer the bare domain as primary, change `NEXT_PUBLIC_SITE_URL` and flip the redirect rule in `.htaccess`, then rebuild.

To update the site later: edit, rebuild, and re-upload the new `out/` contents (overwrite existing files).
