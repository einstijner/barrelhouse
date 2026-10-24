import Image from "next/image";
import { BookingLink, TableLink } from "@/components/booking-link";
import { Drift } from "@/components/motion";
import { moodImages } from "@/content/images";

export function BookBand({ title = "Your stay on Statia starts here." }: { title?: string }) {
  return <Drift as="section" className="book-band">
    <div className="book-band-image"><Image src={moodImages.shoreline.src} alt="" fill sizes="100vw" /></div>
    <div className="book-band-shade" />
    <div className="book-band-copy reveal"><p className="eyebrow">Barrel House · Lower Town</p><h2>{title}</h2><p>One historic house. One private suite. The Caribbean Sea just beyond the terrace.</p><div className="hero-actions"><BookingLink className="button button-gold" /><TableLink className="button button-light" /></div></div>
  </Drift>;
}
