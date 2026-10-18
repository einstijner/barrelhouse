import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TableLink } from "@/components/booking-link";
import { BookBand } from "@/components/book-band";
import { JsonLd } from "@/components/schema";
import { SuiteGalleryPreview } from "@/components/suite-gallery-preview";
import { property, siteUrl } from "@/content/property";
import { homeHeroImage, restaurantImages, suiteImages } from "@/content/images";

export default function Home() {
  return <>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"LodgingBusiness", name:property.name, description:"A restored one-bedroom oceanfront suite for two in Lower Town, Sint Eustatius.", url:siteUrl, image:suiteImages.map((image) => `${siteUrl ?? ""}${image.src}`), address:{ "@type":"PostalAddress", streetAddress:property.address.street, addressLocality:property.address.locality, addressCountry:"BQ" }, amenityFeature:property.amenities.map((name) => ({ "@type":"LocationFeatureSpecification", name, value:true })) }} />
    <section className="home-hero">
      <div className="home-hero-media"><Image src={homeHeroImage.src} alt={homeHeroImage.alt} fill priority sizes="100vw" /></div>
      <div className="home-hero-copy"><p className="eyebrow eyebrow-light">Barrel House · St. Eustatius</p><h1>A different kind <em>of stay.</em></h1><p>A thoughtfully restored oceanfront suite in the historic heart of Statia.</p></div>
      <span className="hero-index">Lower Town · 17.479° N</span>
    </section>

    <section className="wrap intro"><p className="eyebrow">A place to slow down</p><blockquote>Three centuries of brick and timber, carefully restored for an intimate stay <em>at the edge of the Caribbean Sea.</em></blockquote></section>

    <section className="wrap suite-feature">
      <div className="suite-feature-grid"><div className="suite-main-image"><SuiteGalleryPreview /></div><div className="suite-feature-copy"><p className="eyebrow eyebrow-light">The stay</p><h2>The Barrel House Suite</h2><p>One private apartment, set across two levels inside a historic Dutch-brick building. Quiet upstairs, generous downstairs, and the sea just beyond the terrace.</p><div className="facts-row"><div><small>Space</small><strong>{property.facts.size}</strong></div><div><small>Sleeps</small><strong>{property.facts.guests}</strong></div><div><small>Bedroom</small><strong>King bed</strong></div><div><small>Setting</small><strong>Oceanfront</strong></div></div><Link className="button button-light" href="/stay/barrel-house-suite">Discover the suite</Link></div></div>
    </section>

    <section className="experience"><div className="wrap"><div className="experience-head"><h2>Made for <em>living slowly.</em></h2><p>Barrel House is not a conventional hotel room. It is a place with its own proportions, textures and rhythm—kept intentionally personal.</p></div><div className="experience-list">
      <article className="experience-item"><span>01</span><h3>The architecture</h3><p>Heavy historic brick, exposed timber and a steep roofline hold the memory of Lower Town’s waterfront.</p></article>
      <article className="experience-item"><span>02</span><h3>The comfort</h3><p>A king-size bedroom upstairs; a private living room, kitchenette and bathroom on the floor below.</p></article>
      <article className="experience-item"><span>03</span><h3>The location</h3><p>Step outside into Lower Town, with the Caribbean in front and Oranjestad rising behind you.</p></article>
    </div></div></section>

    <section className="wrap image-story" aria-label="A look inside Barrel House">
      <div className="story-column"><figure className="story-image tall"><div><Image src={suiteImages[0].src} alt={suiteImages[0].alt} fill sizes="(max-width:700px) 100vw,55vw" /></div><figcaption><span>Sleep</span><span>Upstairs beneath the timber roof</span></figcaption></figure><figure className="story-image"><div><Image src={suiteImages[3].src} alt={suiteImages[3].alt} fill sizes="(max-width:700px) 100vw,55vw" /></div><figcaption><span>Prepare</span><span>A compact private kitchenette</span></figcaption></figure></div>
      <div className="story-column"><figure className="story-image"><div><Image src={suiteImages[2].src} alt={suiteImages[2].alt} fill sizes="(max-width:700px) 100vw,35vw" /></div><figcaption><span>Outside</span><span>Morning light by the sea</span></figcaption></figure><figure className="story-image tall"><div><Image src={suiteImages[4].src} alt={suiteImages[4].alt} fill sizes="(max-width:700px) 100vw,35vw" /></div><figcaption><span>Refresh</span><span>The private bathroom</span></figcaption></figure></div>
    </section>

    <section className="story-section"><div className="story-section-image"><Image src={suiteImages[5].src} alt={suiteImages[5].alt} fill sizes="(max-width:1000px) 100vw,50vw" /></div><div className="story-section-copy"><p className="eyebrow">The building</p><h2>Built into the story of Lower Town.</h2><p>The building dates to around 1720, when Statia’s waterfront was a dense center of Atlantic commerce. Its surviving brickwork speaks to that prosperity—and to a colonial trading system whose history is more complex than the beauty of the building alone.</p><Link className="text-link" href="/our-story">Discover our story <ArrowRight size={15} /></Link></div></section>

    <section className="restaurant-teaser"><div className="restaurant-teaser-copy"><p className="eyebrow eyebrow-light">Dining at Barrel House</p><h2>Stay for the view. Come for the table.</h2><p>In the adjoining historic spaces, Barrel House serves from-scratch international cooking with a regional touch—best enjoyed on the oceanfront terrace.</p><div className="hero-actions"><TableLink /><Link className="text-link" href="/restaurant">Discover the restaurant</Link></div></div><div className="restaurant-teaser-image"><Image src={restaurantImages.terrace.src} alt={restaurantImages.terrace.alt} fill sizes="(max-width:1000px) 100vw,45vw" /></div></section>

    <section className="discover-strip"><div><p className="eyebrow">Beyond the house</p><h2>Statia, at its own pace.</h2></div><div className="discover-strip-copy"><p>Climb into The Quill’s green crater, dive protected waters, walk Oranjestad’s historic streets—or stay close to the waterfront and let the day unfold.</p><Link className="text-link" href="/discover-statia">Explore the island <ArrowRight size={15} /></Link></div></section>
    <BookBand />
  </>;
}
