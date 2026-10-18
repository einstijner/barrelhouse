export type PropertyImage = { src: string; width: number; height: number; alt: string; caption: string };

export const suiteOverviewImage: PropertyImage = {
  src: "/images/restaurant/barrel-house-street-exterior.jpg",
  width: 2048,
  height: 1365,
  alt: "Full historic brick exterior of Barrel House in Lower Town",
  caption: "Barrel House in Lower Town",
};

export const suiteImages: PropertyImage[] = [
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

export const homeHeroImage = { src: "/images/restaurant/barrel-house-sunset-terrace.jpg", width: 2048, height: 1365, alt: "Sunset over the Caribbean from the Barrel House oceanfront terrace" } as const;

export const restaurantImages = {
  exterior: { src: "/images/restaurant/barrel-house-dining-room.jpg", width: 2048, height: 1365, alt: "Historic brick Barrel House building in Lower Town" },
  terrace: { src: "/images/restaurant/barrel-house-terrace-dining.jpg", width: 2048, height: 1365, alt: "Barrel House oceanfront dining terrace" },
  sunset: homeHeroImage,
  street: { src: "/images/restaurant/barrel-house-street-exterior.jpg", width: 2048, height: 1365, alt: "Historic Barrel House brick facade at sunset" },
  waterfront: { src: "/images/restaurant/barrel-house-waterfront.jpg", width: 2048, height: 1365, alt: "Barrel House terrace seen from the rocky waterfront" },
  detail: { src: "/images/restaurant/barrel-house-dining-detail.jpg", width: 1707, height: 2560, alt: "Table setting and warm architectural details at Barrel House" },
} as const;
