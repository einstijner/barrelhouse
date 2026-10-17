import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BookBand } from "@/components/book-band";
import { PageHero } from "@/components/page-hero";
import { suiteImages } from "@/content/images";

export const metadata: Metadata = { title:"Discover Statia", description:"A considered guide to Sint Eustatius: The Quill, protected diving waters, historic Oranjestad and the Lower Town coastline." };

const experiences = [
  { n:"01", title:"The Quill", copy:"The island’s defining silhouette is an extinct volcano whose upper slopes and crater hold tropical forest. Start early, take water and proper shoes, and check current trail guidance locally." },
  { n:"02", title:"Below the surface", copy:"Statia’s marine park is known for protected reefs, wrecks and small-group diving. Several established dive centers operate along the waterfront; reserving ahead is sensible." },
  { n:"03", title:"Historic Oranjestad", copy:"Walk from Lower Town toward Fort Oranje and the upper town, reading the island’s layered history through ruins, restored buildings and everyday streets." },
  { n:"04", title:"The slower island", copy:"Statia rewards space in the schedule. A waterfront morning, a quiet museum, a long lunch and an unscripted afternoon can be as memorable as the headline sights." },
];

export default function DiscoverPage() {
  return <><PageHero eyebrow="Discover Sint Eustatius" title={<>Small island.<br /><em>Deep story.</em></>} copy="Volcanic forest, protected water and centuries of visible history—best discovered without rushing." image={suiteImages[2]} />
    <section className="section section-white"><div className="wrap"><div className="section-head"><div><p className="eyebrow">A considered guide</p><h2>Four ways into Statia.</h2></div><div className="section-head-copy"><p>Barrel House puts you on the historic waterfront, close to dive departures and within walking distance of Oranjestad. These are starting points, not a checklist.</p></div></div><div className="guide-grid">{experiences.map((item) => <article className="guide-item" key={item.n}><span className="eyebrow">{item.n}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div><div style={{marginTop:80}}><a className="button" href="https://www.sinteustatius.com/" target="_blank" rel="noreferrer">Official island guide <ArrowUpRight size={15} /></a></div></div></section>
    <section className="split-section"><div className="split-image"><Image src={suiteImages[5].src} alt={suiteImages[5].alt} fill sizes="(max-width:1000px)100vw,50vw" /></div><div className="split-copy"><p className="eyebrow">Your starting point</p><h2>Wake in Lower Town.</h2><p>The sea, the old harbour warehouses and the path up toward Oranjestad begin outside the door. Barrel House is less a retreat from the island than a way into it.</p></div></section><BookBand /></>;
}
