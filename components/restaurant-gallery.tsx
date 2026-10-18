"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { restaurantGalleryImages } from "@/content/images";

export function RestaurantGallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = () => setActive(null);
  const move = (step: number) => setActive((current) => current === null ? null : (current + step + restaurantGalleryImages.length) % restaurantGalleryImages.length);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return <>
    <section className="restaurant-gallery" aria-label="Barrel House restaurant gallery">
      {restaurantGalleryImages.map((image, index) => <button key={image.src} type="button" onClick={() => setActive(index)} aria-label={`Open restaurant image ${index + 1} of ${restaurantGalleryImages.length}: ${image.caption}`}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width:800px) 100vw, 34vw" />
        <span><Expand size={16} aria-hidden="true" /> {String(index + 1).padStart(2, "0")}</span>
      </button>)}
    </section>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Barrel House restaurant photo gallery">
      <button ref={closeRef} onClick={close} className="lightbox-close" aria-label="Close gallery"><X /></button>
      <button onClick={() => move(-1)} className="lightbox-prev" aria-label="Previous image"><ChevronLeft /></button>
      <figure><Image src={restaurantGalleryImages[active].src} alt={restaurantGalleryImages[active].alt} fill sizes="95vw" priority /><figcaption><span>{String(active + 1).padStart(2, "0")} / {String(restaurantGalleryImages.length).padStart(2, "0")}</span>{restaurantGalleryImages[active].caption}</figcaption></figure>
      <button onClick={() => move(1)} className="lightbox-next" aria-label="Next image"><ChevronRight /></button>
    </div>}
  </>;
}
