import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TableLink } from "@/components/booking-link";
import { PageHero } from "@/components/page-hero";
import { RestaurantGallery } from "@/components/restaurant-gallery";
import { booking } from "@/content/property";
import { menu } from "@/content/menu";
import { moodImages, restaurantImages } from "@/content/images";

export const metadata: Metadata = { title:"Restaurant", description:"Oceanfront dining at Barrel House Statia: from-scratch international cooking with a regional touch in historic Lower Town." };

export default function RestaurantPage() {
  return <><PageHero eyebrow="The restaurant" title={<>A table at <em>the water’s edge.</em></>} copy="From-scratch cooking, a regional point of view and one of Lower Town’s most characterful settings." image={moodImages.cocktails} />
    <section className="section"><div className="wrap"><div className="section-head reveal"><div><p className="eyebrow">At Barrel House</p><h2>Come for the room. <em>Stay for the evening.</em></h2></div><div className="section-head-copy"><p>Authentic international cuisine with a regional touch, from Chef Iwan and the team. Historic brick inside, Caribbean light on the terrace.</p><TableLink className="button button-gold" /></div></div></div></section>

    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-section-photo"><Image src={moodImages.tableNight.src} alt="" fill sizes="100vw" /></div>
      <div className="menu-card menu-card-published">
        <Image className="menu-card-logo" src="/logos/barrel-house-reference.png" alt="" width={300} height={316} />
        <p className="eyebrow">The menu</p>
        <h2 id="menu-title">International cooking, <em>a regional touch.</em></h2>
        <p className="menu-card-note">Browse our lunch, dinner and drinks menus below. Select a menu to view it at full size.</p>
        <div className="published-menus">
          {menu.pages.map((page) => <figure className="published-menu" key={page.src}>
            <h3>{page.title}</h3>
            <a href={page.src} target="_blank" rel="noreferrer" aria-label={`View ${page.title} menu at full size (opens in a new tab)`}>
              <Image src={page.src} alt={`Barrel House ${page.title} menu with dishes and prices. Open at full size to read all details.`} width={page.width} height={page.height} sizes="(max-width: 800px) 90vw, 520px" />
            </a>
            <figcaption><a className="text-link" href={page.src} target="_blank" rel="noreferrer">View full size <ArrowUpRight size={15} aria-hidden="true" /></a><a className="text-link" href={page.src} download>Download menu</a></figcaption>
          </figure>)}
        </div>
        <div className="hero-actions"><TableLink className="button button-gold" /></div>
      </div>
    </section>

    <section className="split-section"><div className="split-image"><Image src={restaurantImages.exterior.src} alt={restaurantImages.exterior.alt} fill sizes="(max-width:1000px)100vw,50vw" /></div><div className="split-copy reveal"><p className="eyebrow">The setting</p><h2>Dining <em>inside history.</em></h2><p>Restored ground-floor rooms and an oceanfront terrace. Rough brick, old arches and open air keep every evening connected to Lower Town.</p><a className="text-link" href="https://barrelhouse-statia.com/" target="_blank" rel="noreferrer">Visit the current restaurant website ↗</a></div></section>
    <RestaurantGallery />
    <section className="reserve-band"><div className="reserve-band-photo"><Image src={moodImages.terraceNight.src} alt="" fill sizes="100vw" /></div><div className="narrow reserve-band-copy reveal"><p className="eyebrow">Reserve your table</p><h2>Lunch or dinner, <em>by the sea.</em></h2><p>Current times and availability are shown in the restaurant’s Resos booking system.</p><TableLink className="button button-gold" /><p className="book-note">Reservations are completed securely on {new URL(booking.restaurant).hostname}.</p></div></section></>;
}
