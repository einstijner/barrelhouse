import Image from "next/image";
import type { PropertyImage } from "@/content/images";

export function PageHero({ eyebrow, title, copy, image, imageAlt, compact = false }: { eyebrow: string; title: React.ReactNode; copy?: string; image: PropertyImage | { src: string; width: number; height: number; alt: string }; imageAlt?: string; compact?: boolean }) {
  return <section className={`page-hero${compact ? " page-hero-compact" : ""}`}>
    <div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</div>
    <div className="page-hero-image"><Image src={image.src} alt={imageAlt ?? image.alt} fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
  </section>;
}
