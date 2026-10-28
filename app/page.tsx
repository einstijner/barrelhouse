import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingLink, TableLink } from "@/components/booking-link";
import { BookBand } from "@/components/book-band";
import { Drift, Rail, Scene, Words } from "@/components/motion";
import { JsonLd } from "@/components/schema";
import { SuiteGalleryPreview } from "@/components/suite-gallery-preview";
import { property, siteUrl } from "@/content/property";
import { homeHeroImage, moodImages, restaurantImages, suiteImages } from "@/content/images";

const tableMoments = [moodImages.cocktails, moodImages.soup, moodImages.arch, moodImages.chef, moodImages.plate, moodImages.server, moodImages.drinks, moodImages.terraceNight];

export default function Home() {
  return <>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"LodgingBusiness", name:property.name, description:"A restored one-bedroom oceanfront suite for two in Lower Town, Sint Eustatius.", url:siteUrl, image:suiteImages.map((image) => `${siteUrl ?? ""}${image.src}`), address:{ "@type":"PostalAddress", streetAddress:property.address.street, addressLocality:property.address.locality, addressCountry:"BQ" }, amenityFeature:property.amenities.map((name) => ({ "@type":"LocationFeatureSpecification", name, value:true })) }} />

    {/* Scroll scenes: components/motion.tsx writes each scene's progress to --p; globals.css animates from it. */}
    <Scene className="home-hero" length={1.8} labelledBy="home-title">
      <div className="home-hero-media"><Image src={homeHeroImage.src} alt={homeHeroImage.alt} fill priority sizes="100vw" /></div>
      <div className="home-hero-shade" />
      <div className="home-hero-copy">
        <p className="eyebrow">Lower Town · Sint Eustatius</p>
        <h1 id="home-title">A different kind <em>of stay.</em></h1>
        <div className="hero-actions"><BookingLink className="button button-gold" /><TableLink className="button button-light" /></div>
      </div>
      <span className="scroll-cue" aria-hidden="true">Scroll</span>
    </Scene>

    <Scene className="statement" length={2.2} label="About Barrel House">
      <p className="statement-text"><Words text="Three centuries of brick and timber, carefully restored for an intimate stay" accent="at the edge of the Caribbean Sea." /></p>
    </Scene>

    <section className="diptych" aria-label="Stay and dine">
      <Link href="/stay" className="diptych-panel reveal">
        <Image src={suiteImages[1].src} alt={suiteImages[1].alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
        <span className="diptych-label"><small>01</small><strong>Stay</strong><em>One suite. Entirely yours.</em></span>
      </Link>
      <Link href="/restaurant" className="diptych-panel reveal">
        <Image src={moodImages.tableNight.src} alt={moodImages.tableNight.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
        <span className="diptych-label"><small>02</small><strong>Dine</strong><em>A table at the water’s edge.</em></span>
      </Link>
    </section>

    <Scene className="suite-feature" length={2.2} labelledBy="suite-title">
      <div className="suite-main-image"><SuiteGalleryPreview /></div>
      <div className="suite-feature-copy">
        <p className="eyebrow">The stay</p>
        <h2 id="suite-title">The Barrel House <em>Suite</em></h2>
        <dl className="facts-row"><div><dt>Space</dt><dd>{property.facts.size}</dd></div><div><dt>Sleeps</dt><dd>{property.facts.guests}</dd></div><div><dt>Bedroom</dt><dd>King bed</dd></div><div><dt>Setting</dt><dd>Oceanfront</dd></div></dl>
        <Link className="button button-light" href="/stay/barrel-house-suite">Discover the suite <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </Scene>

    <Rail className="table-rail" labelledBy="table-title" head={<div className="wrap rail-head"><p className="eyebrow">At the table</p><h2 id="table-title">Stay for the view. <em>Come for the table.</em></h2></div>}>
      {tableMoments.map((image) => <figure className="rail-card" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 78vw, 30vw" /><figcaption>{image.caption}</figcaption></figure>)}
      <div className="rail-card rail-card-cta"><p className="eyebrow">Barrel House restaurant</p><h3>Lunch or dinner, <em>by the sea.</em></h3><TableLink className="button button-gold" /><Link className="text-link" href="/restaurant#menu">See the menu</Link></div>
    </Rail>

    <section className="menu-teaser" aria-labelledby="menu-teaser-title">
      <Drift className="menu-teaser-image"><Image src={moodImages.soup.src} alt={moodImages.soup.alt} fill sizes="(max-width: 900px) 100vw, 55vw" /></Drift>
      <div className="menu-teaser-copy reveal">
        <p className="eyebrow">The menu</p>
        <h2 id="menu-teaser-title">International cooking, <em>a regional touch.</em></h2>
        <p>Chef Iwan’s menu changes. The setting does not.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/restaurant#menu">View the menu</Link><TableLink className="button button-light" /></div>
      </div>
    </section>

    <Drift as="section" className="story-band">
      <div className="story-band-image"><Image src={restaurantImages.street.src} alt={restaurantImages.street.alt} fill sizes="100vw" /></div>
      <span className="story-year" aria-hidden="true">1720</span>
      <div className="story-band-copy reveal"><p className="eyebrow">Our story</p><h2>Built into the story of <em>Lower Town.</em></h2><p>Brick and timber from around 1720, on Statia’s old waterfront.</p><Link className="text-link" href="/our-story">Discover our story <ArrowRight size={15} aria-hidden="true" /></Link></div>
    </Drift>

    <Drift as="section" className="discover">
      <div className="discover-copy reveal"><p className="eyebrow">Beyond the house</p><h2>Statia, <em>at its own pace.</em></h2><Link className="text-link" href="/discover-statia">Explore the island <ArrowRight size={15} aria-hidden="true" /></Link></div>
      <figure className="discover-photo discover-photo-a"><Image src={restaurantImages.waterfront.src} alt={restaurantImages.waterfront.alt} fill sizes="(max-width: 800px) 100vw, 45vw" /></figure>
      <figure className="discover-photo discover-photo-b"><Image src={suiteImages[10].src} alt={suiteImages[10].alt} fill sizes="(max-width: 800px) 70vw, 28vw" /></figure>
    </Drift>

    <BookBand />
  </>;
}
