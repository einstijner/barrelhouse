import type { Metadata } from "next";
import Image from "next/image";
import { BookBand } from "@/components/book-band";
import { PageHero } from "@/components/page-hero";
import { restaurantImages, suiteImages } from "@/content/images";

export const metadata: Metadata = { title:"Our Story", description:"The story of Barrel House: an eighteenth-century Lower Town building carefully restored for hospitality on Sint Eustatius." };

export default function StoryPage() {
  return <><PageHero eyebrow="Our story" title={<>A house shaped by <em>the harbour.</em></>} copy="Barrel House stands among the surviving brick buildings of Lower Town—an architectural witness to Statia’s layered Atlantic history." image={restaurantImages.exterior} />
    <section className="section section-white"><div className="narrow"><p className="eyebrow">Lower Town · c. 1720</p><h2>A building worth reading closely.</h2><p>Public records and current property sources date the building to the first half of the eighteenth century, around 1720. Its Dutch brick construction belongs to a period when the shoreline below Oranjestad was crowded with warehouses, trading houses and ships arriving from across the Atlantic.</p><p>Local research has suggested that part of the building may once have been connected to the Dutch West India Company, with other areas used for storage and commerce. That connection remains a theory rather than a settled fact, and we present it accordingly.</p></div></section>
    <section className="split-section"><div className="split-image"><Image src={suiteImages[5].src} alt={suiteImages[5].alt} fill sizes="(max-width:1000px)100vw,50vw" /></div><div className="split-copy"><p className="eyebrow">History, without nostalgia</p><h2>Beauty and a difficult past.</h2><p>Statia’s commercial importance was built within colonial systems that moved goods, wealth and enslaved people through the Caribbean. The brick walls are beautiful; the history they survived is not simple. Both deserve to be acknowledged.</p></div></section>
    <section className="split-section reverse section-white"><div className="split-image"><Image src={suiteImages[1].src} alt={suiteImages[1].alt} fill sizes="(max-width:1000px)100vw,50vw" /></div><div className="split-copy"><p className="eyebrow">The restoration</p><h2>An old shell, made liveable again.</h2><p>Inside, the original character is allowed to remain visible: brick, timber, compact proportions and the steep upper room. Contemporary comfort is fitted around it, rather than used to erase it.</p></div></section><BookBand /></>;
}
