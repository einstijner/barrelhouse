# Barrel House Statia launch checklist

## Completed

- [x] Accommodation-first responsive website with all requested routes
- [x] Single-suite, data-driven accommodation architecture
- [x] Booking.com CTA consistently used and accurately labelled as an external OTA
- [x] Restaurant reservations consistently linked to the verified Resos URL
- [x] Mobile navigation, keyboard-accessible gallery and reduced-motion support
- [x] Unique metadata, structured data, sitemap, robots and editable content configuration
- [x] No local payment, fake availability, fabricated rooms, prices or review claims
- [x] Vercel-compatible production scripts and environment example
- [x] Privacy page describes the actual implementation

## Owner confirmation required

- [ ] Confirm the suite's formal street address: Booking.com says Van Tonningeweg 38; the restaurant publishes Orange Bay Road 38. The website currently uses the restaurant's published Lower Town address.
- [ ] Confirm that The Old Gin House remains the correct accommodation contact and operator.
- [ ] Confirm whether published check-out time is 11:00 am (Booking.com) or 12:00 pm (The Old Gin House room page).
- [ ] Confirm children, pets, non-smoking and party policies remain current.
- [ ] Confirm which kitchenette appliances and in-room amenities belong specifically to Barrel House Suite.
- [ ] Confirm whether breakfast, pool access, parking or Old Gin House facilities are included. These are intentionally not promised publicly.
- [ ] Confirm final accommodation contact email and telephone number.

## Booking integration

- [ ] Verify that VIPS booking engine property ID `B08C5596-DCDB-4F22-B8C7-C16AC19E660F` exposes the actual Barrel House Suite and correctly handles dates, guests and room selection.
- [ ] If verified, replace `booking.room` in `content/property.ts` and change the OTA label to direct booking.
- [x] Until then, the verified Booking.com suite listing is the temporary working destination.
- [ ] Complete a real test reservation up to—but not including—payment on the chosen platform.

## Photography and identity

- [ ] Obtain written approval for every image in `IMAGE_MANIFEST.md`.
- [ ] Request original high-resolution suite photography from the owner.
- [ ] Confirm whether the restaurant's existing circular logo should become the accommodation identity. The site currently uses an original typographic wordmark instead.
- [ ] Produce final approved social-preview artwork once image rights and the identity are confirmed.

## Legal, privacy and operations

- [ ] Property owner/legal reviewer to approve public copy, privacy page and historic narrative.
- [ ] Confirm wording on colonial commerce and any Dutch West India Company connection with a qualified local historical source.
- [ ] Confirm that no analytics are needed. If GA4 is enabled, implement consent before loading non-essential tracking.
- [ ] Confirm restaurant opening times before publishing them; they are intentionally omitted for now.

## Deployment and domain

- [ ] Create/import the project in Vercel and set the project root to this repository root.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin.
- [ ] Connect the production domain through its DNS provider after owner approval.
- [ ] Add the final domain to Google Search Console and submit `/sitemap.xml`.
- [ ] Run production Lighthouse and final device/browser QA after deployment.
