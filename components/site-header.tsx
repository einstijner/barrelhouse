"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { booking } from "@/content/property";

export function Wordmark({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`wordmark${light ? " wordmark-light" : ""}`} aria-label="Barrel House Statia, home"><Image src="/logos/barrel-house-reference.png" alt="Barrel House" width={300} height={316} priority /></Link>;
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
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={`site-header${scrolled || open ? " solid" : ""}`}>
      <Wordmark light={!scrolled && !open} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        <a className="nav-book" href={booking.room} target="_blank" rel="noreferrer">Book your stay</a>
      </nav>
      <button className="menu-toggle" type="button" onClick={() => setOpenPath(open ? null : pathname)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => <Link href={item.href} key={item.href} onClick={() => setOpenPath(null)}><small>0{index + 1}</small>{item.label}</Link>)}
          <Link href="/contact" onClick={() => setOpenPath(null)}><small>05</small>Contact</Link>
        </nav>
        <a className="button" href={booking.room} target="_blank" rel="noreferrer">View rates &amp; availability</a>
        <p>Lower Town · Oranjestad<br />Sint Eustatius</p>
      </div>
    </header>
  );
}
