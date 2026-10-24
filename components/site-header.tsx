"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { booking, property } from "@/content/property";
import { moodImages } from "@/content/images";

export function Wordmark({ className = "" }: { className?: string }) {
  return <Link href="/" className={`wordmark ${className}`} aria-label="Barrel House Statia, home"><Image src="/logos/barrel-house-reference.png" alt="Barrel House" width={300} height={316} priority /></Link>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Keep keyboard focus and screen readers inside the open menu.
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    background.forEach((element) => {
      element.inert = open;
      if (open) element.setAttribute("aria-hidden", "true");
      else element.removeAttribute("aria-hidden");
    });
    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => {
        element.inert = false;
        element.removeAttribute("aria-hidden");
      });
    };
  }, [open]);
  const close = () => setOpenPath(null);

  return (
    <header className={`site-header${scrolled ? " solid" : ""}${open ? " open" : ""}`}>
      <Wordmark />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        <a className="nav-book" href={booking.room} target="_blank" rel="noreferrer">Book your stay</a>
      </nav>
      <button className="menu-toggle" type="button" onClick={() => setOpenPath(open ? null : pathname)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
        <span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
      </button>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <Image className="mobile-menu-photo" src={moodImages.terraceNight.src} alt="" fill sizes="100vw" />
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => <Link href={item.href} key={item.href} onClick={close}><small aria-hidden="true">0{index + 1}</small>{item.label}</Link>)}
          <Link href="/contact" onClick={close}><small aria-hidden="true">0{navigation.length + 1}</small>Contact</Link>
        </nav>
        <div className="mobile-menu-actions">
          <a className="button button-gold" href={booking.room} target="_blank" rel="noreferrer">Book your stay</a>
          <a className="button button-light" href={booking.restaurant} target="_blank" rel="noreferrer">Book a table</a>
          <p>{property.address.street}<br />{property.address.locality} · {property.address.island}</p>
        </div>
      </div>
    </header>
  );
}
