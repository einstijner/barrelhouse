import Image from "next/image";
import { Drift } from "@/components/motion";
import type { PropertyImage } from "@/content/images";

/** Full-bleed photo with the title set low over it; the photo drifts and darkens as the page scrolls on. */
export function PageHero({ eyebrow, title, copy, image, imageAlt, compact = false }: { eyebrow: string; title: React.ReactNode; copy?: string; image: PropertyImage | { src: string; width: number; height: number; alt: string }; imageAlt?: string; compact?: boolean }) {
  return <Drift as="section" className={`page-hero${compact ? " page-hero-compact" : ""}`}>
    <div className="page-hero-image"><Image src={image.src} alt={imageAlt ?? image.alt} fill priority sizes="100vw" /></div>
    <div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</div>
  </Drift>;
}
