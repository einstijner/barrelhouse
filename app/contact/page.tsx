import type { Metadata } from "next";
import { BookingLink, TableLink } from "@/components/booking-link";
import { PageHero } from "@/components/page-hero";
import { property } from "@/content/property";
import { suiteImages } from "@/content/images";

export const metadata: Metadata = { title:"Contact & Location", description:"Find Barrel House in Lower Town, Oranjestad, Sint Eustatius, and contact the accommodation team about the Barrel House Suite." };

export default function ContactPage() {
  return <><PageHero compact eyebrow="Contact & location" title={<>At the edge <em>of Lower Town.</em></>} copy="The old brick house faces the Caribbean from Statia’s historic waterfront." image={suiteImages[5]} />
    <section className="section section-white"><div className="wrap contact-grid"><div className="contact-block"><p className="eyebrow">Find us</p><h2>{property.address.street}</h2><p>{property.address.locality}<br />{property.address.island}<br />{property.address.country}</p><a href={property.address.map} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div><div className="contact-block"><p className="eyebrow">Accommodation enquiries</p><h2>{property.accommodationContact.name}</h2><p>The Old Gin House currently presents the Barrel House Suite and is the verified accommodation contact shown alongside it.</p><a href={`mailto:${property.accommodationContact.email}`}>{property.accommodationContact.email}</a><a href={`tel:${property.accommodationContact.phoneHref}`}>{property.accommodationContact.phoneDisplay}</a><BookingLink className="button" /></div><div className="contact-block"><p className="eyebrow">Restaurant</p><h2>A table at Barrel House</h2><p>Restaurant reservations are handled separately through Resos.</p><TableLink className="button" /><a href={`mailto:${property.restaurantContact.email}`}>{property.restaurantContact.email}</a><a href={`tel:${property.restaurantContact.phoneHref}`}>{property.restaurantContact.phoneDisplay}</a></div><div className="contact-block"><p className="eyebrow">Before you travel</p><h2>Share your arrival.</h2><p>Regional transport schedules can change. Once your stay is confirmed, share your arrival details through the contact information included with your reservation.</p></div></div></section></>;
}
