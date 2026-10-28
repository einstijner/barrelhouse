# Barrel House Statia

Accommodation-first website for the Barrel House Suite in Lower Town, Sint Eustatius. Built with Next.js, TypeScript, Tailwind CSS and a small amount of client-side React for navigation and the gallery.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Content and booking configuration

- Property facts, contacts and booking destinations: `content/property.ts`
- Accommodation images and alt text: `content/images.ts`
- Guest FAQ: `content/faq.ts`
- Navigation: `content/navigation.ts`
- Restaurant menu: `content/menu.ts` records the source URLs and dimensions of the official menu images downloaded on 28 October 2026. Original files live in `public/menus/` and display directly on `/restaurant#menu` with full-size and download links. To refresh the menu, download the artwork currently linked from the official restaurant website and update the metadata.

## Scroll motion

`components/motion.tsx` writes each scene's scroll progress to the CSS variable `--p`, and `app/globals.css` animates from it under `html.motion`. Without JavaScript, or with reduced motion turned on, the site renders as a normal static page.

The current room CTA uses the verified Booking.com listing and is explicitly described as an external booking. Do not relabel it as direct booking until the VIPS room mapping is verified.

## Vercel deployment

Import the repository into Vercel with the framework preset set to Next.js. Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS origin. No database or server secrets are required by the current implementation.

Review [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) and [IMAGE_MANIFEST.md](./IMAGE_MANIFEST.md) before public launch.
