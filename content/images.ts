export type PropertyImage = { src: string; width: number; height: number; alt: string; caption: string };

export const suiteOverviewImage: PropertyImage = {
  src: "/images/restaurant/barrel-house-street-exterior.jpg",
  width: 2048,
  height: 1365,
  alt: "Full historic brick exterior of Barrel House in Lower Town",
  caption: "Barrel House in Lower Town",
};

export const suiteImages: PropertyImage[] = [
  { src: "/images/property/barrel-house-living-room-new.jpg", width: 1200, height: 800, alt: "Full downstairs living room of the Barrel House Suite with staircase and historic doors", caption: "The restored living room" },
  { src: "/images/property/barrel-house-bedroom-new.jpg", width: 1200, height: 799, alt: "King bed beneath the timber roof of the Barrel House Suite", caption: "The king bedroom" },
  { src: "/images/property/barrel-house-bedroom.jpg", width: 750, height: 499, alt: "King-size bed beneath the timber roof of the Barrel House Suite", caption: "The upstairs bedroom" },
  { src: "/images/property/barrel-house-living-room.jpg", width: 1200, height: 799, alt: "Living room with staircase, exposed brick and timber details", caption: "Downstairs living area" },
  { src: "/images/property/barrel-house-terrace.jpg", width: 750, height: 499, alt: "Oceanfront terrace beside the historic brick Barrel House", caption: "The sea-view terrace" },
  { src: "/images/property/barrel-house-kitchenette.jpg", width: 750, height: 499, alt: "Compact private kitchenette inside the Barrel House Suite", caption: "Private kitchenette" },
  { src: "/images/property/barrel-house-bathroom.jpg", width: 750, height: 499, alt: "Private bathroom with shower and warm wood finishes", caption: "Private bathroom" },
  { src: "/images/property/barrel-house-exterior.jpg", width: 750, height: 500, alt: "Historic brick exterior of Barrel House in Lower Town", caption: "Historic Lower Town" },
  { src: "/images/property/barrel-house-lounge-view.jpg", width: 1500, height: 2000, alt: "Bright living area in the Barrel House Suite", caption: "Room to settle in" },
  { src: "/images/property/barrel-house-front.jpg", width: 1500, height: 2000, alt: "Brick street facade and red roof of Barrel House", caption: "The historic facade" },
  { src: "/images/property/lower-town-beach.jpg", width: 1500, height: 2000, alt: "Black-sand shoreline beside Barrel House in Lower Town", caption: "The shoreline nearby" },
  { src: "/images/property/barrel-house-living-wide.jpg", width: 1500, height: 2000, alt: "Vaulted living room inside the Barrel House Suite", caption: "The downstairs living room" },
];

export const homeHeroImage: PropertyImage = suiteImages[0];

/** Evening and golden-hour photography for the dark, romantic sections of the site. */
export const moodImages = {
  cocktails: { src: "/images/restaurant/gallery/436A8947-Enhanced-NR.jpg", width: 2048, height: 1365, alt: "Cocktails and a lamp on a terrace table at dusk, with the bay behind", caption: "Golden hour" },
  soup: { src: "/images/restaurant/gallery/436A8956-Enhanced-NR.jpg", width: 2048, height: 1862, alt: "A bowl served at the pass beneath copper kitchen lamps", caption: "From the kitchen" },
  plate: { src: "/images/restaurant/gallery/436A8963-Enhanced-NR.jpg", width: 2048, height: 1789, alt: "A plated dish with fries on a wooden table", caption: "From scratch" },
  chef: { src: "/images/restaurant/gallery/436A8878.jpg", width: 2048, height: 2206, alt: "The chef at work in the Barrel House kitchen", caption: "Chef Iwan’s kitchen" },
  server: { src: "/images/restaurant/gallery/436A8888-scaled.jpg", width: 1980, height: 2560, alt: "A server carrying a cocktail through the historic doorway", caption: "Welcome in" },
  arch: { src: "/images/restaurant/gallery/436A8902-scaled.jpg", width: 1707, height: 2560, alt: "The bay framed by an old brick arch at Barrel House", caption: "Through the arch" },
  drinks: { src: "/images/restaurant/gallery/436A8950-scaled.jpg", width: 1707, height: 2560, alt: "Cocktails on the terrace at dusk", caption: "On the terrace" },
  shoreline: { src: "/images/restaurant/gallery/436A8933-scaled.jpg", width: 2007, height: 2560, alt: "Sunset over the rocky Lower Town shoreline", caption: "Lower Town at sunset" },
  terraceSun: { src: "/images/restaurant/gallery/436A8870.jpg", width: 2048, height: 1365, alt: "Sun setting behind the Barrel House terrace", caption: "Last light" },
  tableNight: { src: "/images/restaurant/night/table-at-night.webp", width: 1200, height: 1600, alt: "A candlelit table on the Barrel House terrace at night", caption: "After dark" },
  terraceNight: { src: "/images/restaurant/night/terrace-night.webp", width: 1200, height: 1600, alt: "The Barrel House terrace lit with string lights at night", caption: "The terrace at night" },
} satisfies Record<string, PropertyImage>;

export const restaurantImages = {
  exterior: { src: "/images/restaurant/barrel-house-dining-room.jpg", width: 2048, height: 1365, alt: "Historic brick Barrel House building in Lower Town" },
  terrace: { src: "/images/restaurant/barrel-house-terrace-dining.jpg", width: 2048, height: 1365, alt: "Barrel House oceanfront dining terrace" },
  sunset: { src: "/images/restaurant/barrel-house-sunset-terrace.jpg", width: 2048, height: 1365, alt: "Sunset over the Caribbean from the Barrel House oceanfront terrace" },
  street: { src: "/images/restaurant/barrel-house-street-exterior.jpg", width: 2048, height: 1365, alt: "Historic Barrel House brick facade at sunset" },
  waterfront: { src: "/images/restaurant/barrel-house-waterfront.jpg", width: 2048, height: 1365, alt: "Barrel House terrace seen from the rocky waterfront" },
  detail: { src: "/images/restaurant/barrel-house-dining-detail.jpg", width: 1707, height: 2560, alt: "Table setting and warm architectural details at Barrel House" },
} as const;

const galleryFiles = [
  ["436A8851-scaled.jpg", 1707, 2560], ["436A8854.jpg", 2048, 1365],
  ["436A8870.jpg", 2048, 1365], ["436A8878.jpg", 2048, 2206],
  ["436A8888-scaled.jpg", 1980, 2560], ["436A8897-scaled.jpg", 1707, 2560],
  ["436A8901.jpg", 2048, 1365], ["436A8902-scaled.jpg", 1707, 2560],
  ["436A8904-scaled.jpg", 2040, 2560], ["436A8911-scaled.jpg", 1707, 2560],
  ["436A8933-scaled.jpg", 2007, 2560], ["436A8935.jpg", 2048, 1365],
  ["436A8947-Enhanced-NR.jpg", 2048, 1365], ["436A8950-scaled.jpg", 1707, 2560],
  ["436A8956-Enhanced-NR.jpg", 2048, 1862], ["436A8963-Enhanced-NR.jpg", 2048, 1789],
] as const;

export const restaurantGalleryImages: PropertyImage[] = galleryFiles.map(([file, width, height], index) => ({
  src: `/images/restaurant/gallery/${file}`,
  width,
  height,
  alt: `Barrel House restaurant, waterfront setting and dining details, photograph ${index + 1}`,
  caption: index % 3 === 0 ? "Dining at Barrel House" : index % 3 === 1 ? "Historic character" : "The waterfront setting",
}));
