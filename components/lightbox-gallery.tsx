"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { suiteImages } from "@/content/images";

export function LightboxGallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = (index: number) => setActive(index);
  const close = () => setActive(null);
  const move = (step: number) => setActive((current) => current === null ? null : (current + step + suiteImages.length) % suiteImages.length);
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
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);
  return <>
    <div className="gallery-grid">
      {suiteImages.map((image, index) => <button key={image.src} onClick={() => open(index)} type="button" className={`gallery-item gallery-item-${index + 1}`} aria-label={`Open image ${index + 1} of ${suiteImages.length}: ${image.caption}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /><span>{image.caption}<Expand size={16} /></span></button>)}
    </div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Suite image gallery">
      <button ref={closeRef} onClick={close} className="lightbox-close" aria-label="Close gallery"><X /></button>
      <button onClick={() => move(-1)} className="lightbox-prev" aria-label="Previous image"><ChevronLeft /></button>
      <figure><Image src={suiteImages[active].src} alt={suiteImages[active].alt} fill sizes="95vw" priority /><figcaption><span>{String(active + 1).padStart(2, "0")} / {String(suiteImages.length).padStart(2, "0")}</span>{suiteImages[active].caption}</figcaption></figure>
      <button onClick={() => move(1)} className="lightbox-next" aria-label="Next image"><ChevronRight /></button>
    </div>}
  </>;
}
