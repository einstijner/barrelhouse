import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingLink } from "@/components/booking-link";
import { BookBand } from "@/components/book-band";
import { PageHero } from "@/components/page-hero";
import { property } from "@/content/property";
import { suiteImages } from "@/content/images";

export const metadata: Metadata = { title:"Stay", description:"Stay in the Barrel House Suite: a private 70 m², one-bedroom oceanfront apartment for two in historic Lower Town, Sint Eustatius." };

export default function StayPage() {
  return <><PageHero eyebrow="Stay at Barrel House" title={<>One suite.<br /><em>Entirely yours.</em></>} copy="An intimate, two-level apartment for two, shaped by old brick, timber and the sea." image={suiteImages[2]} />
    <section className="section section-white"><div className="wrap"><div className="section-head"><div><p className="eyebrow">The accommodation</p><h2>Room to settle in.</h2></div><div className="section-head-copy"><p>A bedroom above, living space below, the sea outside.</p></div></div><dl className="fact-grid"><div><dt>Space</dt><dd>{property.facts.size}</dd></div><div><dt>Guests</dt><dd>{property.facts.guests}</dd></div><div><dt>Bedroom</dt><dd>{property.facts.bed}</dd></div><div><dt>Levels</dt><dd>Two</dd></div><div><dt>View</dt><dd>Caribbean Sea</dd></div></dl>
      <div className="photo-strip">{[suiteImages[1], suiteImages[11], suiteImages[4], suiteImages[8]].map((image) => <Link key={image.src} href="/stay/barrel-house-suite" className="photo-strip-item reveal" aria-label={`${image.caption}: explore the suite`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 50vw, 25vw" /><span>{image.caption}</span></Link>)}</div></div></section>
    <section className="split-section"><div className="split-image"><Image src={suiteImages[0].src} alt={suiteImages[0].alt} fill sizes="(max-width:1000px) 100vw,50vw" /></div><div className="split-copy"><p className="eyebrow">Barrel House Suite</p><h2>Private by nature.</h2><p>The only accommodation here: one historic space, prepared for two.</p><div className="hero-actions"><Link href="/stay/barrel-house-suite" className="button">Explore the suite <ArrowRight size={15} /></Link><BookingLink className="text-link" /></div></div></section><BookBand title="One suite. One unhurried stay." /></>;
}
