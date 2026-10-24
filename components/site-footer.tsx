import Link from "next/link";
import { Instagram } from "lucide-react";
import { navigation } from "@/content/navigation";
import { booking, property } from "@/content/property";
import { Wordmark } from "@/components/site-header";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-lead"><Wordmark className="wordmark-large" /><p>A restored oceanfront suite and restaurant in historic Lower Town, Sint Eustatius.</p></div>
    <div className="footer-columns">
      <div><small>Explore</small>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/faq">Guest information</Link><Link href="/contact">Contact</Link></div>
      <div><small>Visit</small><p>{property.address.street}<br />{property.address.locality}<br />{property.address.island}</p><a href={property.address.map} target="_blank" rel="noreferrer">Open in Maps ↗</a></div>
      <div><small>Reserve</small><a href={booking.room} target="_blank" rel="noreferrer">Book the suite ↗</a><a href={booking.restaurant} target="_blank" rel="noreferrer">Book a table ↗</a><a href={property.instagram} target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Barrel House Statia</span><Link href="/privacy">Privacy</Link><a href="https://leewarddigital.com" target="_blank" rel="noreferrer">Website by Leeward Digital</a></div>
  </footer>;
}
