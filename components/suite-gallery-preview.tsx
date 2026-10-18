"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { suiteImages, suiteOverviewImage } from "@/content/images";

const images = [suiteOverviewImage, ...suiteImages];

export function SuiteGalleryPreview() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = () => setActive(null);
  const move = (step: number) => setActive((current) => current === null ? null : (current + step + images.length) % images.length);

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
    <button className="suite-gallery-preview" type="button" onClick={() => setActive(0)} aria-label="Open the Barrel House Suite photo gallery">
      <Image src={suiteOverviewImage.src} alt={suiteOverviewImage.alt} fill sizes="(max-width: 1000px) 100vw, 65vw" />
      <span>View gallery <Expand size={16} aria-hidden="true" /></span>
    </button>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Barrel House Suite photo gallery">
      <button ref={closeRef} onClick={close} className="lightbox-close" aria-label="Close gallery"><X /></button>
      <button onClick={() => move(-1)} className="lightbox-prev" aria-label="Previous image"><ChevronLeft /></button>
      <figure><Image src={images[active].src} alt={images[active].alt} fill sizes="95vw" priority /><figcaption><span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>{images[active].caption}</figcaption></figure>
      <button onClick={() => move(1)} className="lightbox-next" aria-label="Next image"><ChevronRight /></button>
    </div>}
  </>;
}
