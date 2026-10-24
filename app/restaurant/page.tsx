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
      <div className="menu-card reveal">
        <Image className="menu-card-logo" src="/logos/barrel-house-reference.png" alt="" width={300} height={316} />
        <p className="eyebrow">The menu</p>
        <h2 id="menu-title">International cooking, <em>a regional touch.</em></h2>
        {menu.sections.length > 0 ? (
          <div className="menu-columns">
            {menu.sections.map((section) => <div className="menu-group" key={section.title}>
              <h3>{section.title}</h3>
              <ul>{section.items.map((item) => <li key={item.name}><span className="menu-item-name">{item.name}</span>{item.price && <span className="menu-item-price">{item.price}</span>}{item.description && <span className="menu-item-description">{item.description}</span>}</li>)}</ul>
            </div>)}
          </div>
        ) : <p className="menu-card-note">Everything is cooked from scratch, and the menu changes with the kitchen. See what’s on now, then reserve your table.</p>}
        <div className="hero-actions"><a className="button button-gold" href={menu.currentMenuUrl} target="_blank" rel="noreferrer">See the current menu <ArrowUpRight size={15} aria-hidden="true" /></a><TableLink className="button button-light" /></div>
      </div>
    </section>

    <section className="split-section"><div className="split-image"><Image src={restaurantImages.exterior.src} alt={restaurantImages.exterior.alt} fill sizes="(max-width:1000px)100vw,50vw" /></div><div className="split-copy reveal"><p className="eyebrow">The setting</p><h2>Dining <em>inside history.</em></h2><p>Restored ground-floor rooms and an oceanfront terrace. Rough brick, old arches and open air keep every evening connected to Lower Town.</p><a className="text-link" href="https://barrelhouse-statia.com/" target="_blank" rel="noreferrer">Visit the current restaurant website ↗</a></div></section>
    <RestaurantGallery />
    <section className="reserve-band"><div className="reserve-band-photo"><Image src={moodImages.terraceNight.src} alt="" fill sizes="100vw" /></div><div className="narrow reserve-band-copy reveal"><p className="eyebrow">Reserve your table</p><h2>Lunch or dinner, <em>by the sea.</em></h2><p>Current times and availability are shown in the restaurant’s Resos booking system.</p><TableLink className="button button-gold" /><p className="book-note">Reservations are completed securely on {new URL(booking.restaurant).hostname}.</p></div></section></>;
}
