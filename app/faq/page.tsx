import type { Metadata } from "next";
import { JsonLd } from "@/components/schema";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/content/faq";
import { suiteImages } from "@/content/images";

export const metadata: Metadata = { title:"Guest Information & FAQ", description:"Practical guest information for Barrel House Suite: booking, location, amenities, arrival, policies and dining." };

export default function FaqPage() {
  return <><JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage", mainEntity:faqs.map((item) => ({ "@type":"Question", name:item.q, acceptedAnswer:{ "@type":"Answer", text:item.a } })) }} /><PageHero compact eyebrow="Guest information" title={<>A few things <em>before you arrive.</em></>} copy="Clear answers about the suite, booking and your time on Statia." image={suiteImages[3]} /><section className="section section-white"><div className="narrow faq-list">{faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section></>;
}
