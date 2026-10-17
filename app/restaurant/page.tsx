import type { Metadata } from "next";
import Image from "next/image";
import { TableLink } from "@/components/booking-link";
import { PageHero } from "@/components/page-hero";
import { booking } from "@/content/property";
import { restaurantImages } from "@/content/images";

export const metadata: Metadata = { title:"Restaurant", description:"Oceanfront dining at Barrel House Statia: from-scratch international cooking with a regional touch in historic Lower Town." };

export default function RestaurantPage() {
  return <><PageHero eyebrow="The restaurant" title={<>A table at <em>the water’s edge.</em></>} copy="From-scratch cooking, a regional point of view and one of Lower Town’s most characterful settings." image={restaurantImages.terrace} />
    <section className="section section-white"><div className="wrap"><div className="section-head"><div><p className="eyebrow">At Barrel House</p><h2>Come for the room. Stay for the evening.</h2></div><div className="section-head-copy"><p>Chef Iwan and the team describe their approach as authentic international cuisine with a regional touch. The menu changes; the sense of place does not—historic brick inside, Caribbean light on the terrace.</p><TableLink className="button" /></div></div></div></section>
    <section className="split-section"><div className="split-image"><Image src={restaurantImages.exterior.src} alt={restaurantImages.exterior.alt} fill sizes="(max-width:1000px)100vw,50vw" /></div><div className="split-copy"><p className="eyebrow">The setting</p><h2>Dining inside history.</h2><p>The restaurant occupies the restored ground-floor spaces and oceanfront terrace of Barrel House. Rough brick, old arches and open air keep the experience connected to Lower Town.</p><a className="text-link" href="https://barrelhouse-statia.com/" target="_blank" rel="noreferrer">Visit the current restaurant website ↗</a></div></section>
    <section className="section section-dark"><div className="narrow" style={{textAlign:"center"}}><p className="eyebrow eyebrow-light">Reserve your table</p><h2>Lunch or dinner, by the sea.</h2><p style={{color:"rgba(255,255,255,.65)"}}>Current times and availability are shown in the restaurant’s Resos booking system.</p><TableLink /><p className="book-note" style={{marginTop:20}}>Reservations are completed securely on {new URL(booking.restaurant).hostname}.</p></div></section></>;
}
