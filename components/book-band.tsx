import Image from "next/image";
import { BookingLink } from "@/components/booking-link";
import { suiteImages } from "@/content/images";

export function BookBand({ title = "Your stay on Statia starts here." }: { title?: string }) {
  return <section className="book-band"><Image src={suiteImages[2].src} alt="" fill sizes="100vw" /><div className="book-band-shade" /><div><p className="eyebrow eyebrow-light">Barrel House Suite</p><h2>{title}</h2><p>One historic house. One private suite. The Caribbean Sea just beyond the terrace.</p><BookingLink className="button button-light" /></div></section>;
}
