export type PropertyImage = { src: string; width: number; height: number; alt: string; caption: string };

export const suiteImages: PropertyImage[] = [
  { src: "/images/property/barrel-house-bedroom.jpg", width: 750, height: 499, alt: "King-size bed beneath the timber roof of the Barrel House Suite", caption: "The upstairs bedroom" },
  { src: "/images/property/barrel-house-living-room.jpg", width: 1200, height: 799, alt: "Living room with staircase, exposed brick and timber details", caption: "Downstairs living area" },
  { src: "/images/property/barrel-house-terrace.jpg", width: 750, height: 499, alt: "Oceanfront terrace beside the historic brick Barrel House", caption: "The sea-view terrace" },
  { src: "/images/property/barrel-house-kitchenette.jpg", width: 750, height: 499, alt: "Compact private kitchenette inside the Barrel House Suite", caption: "Private kitchenette" },
  { src: "/images/property/barrel-house-bathroom.jpg", width: 750, height: 499, alt: "Private bathroom with shower and warm wood finishes", caption: "Private bathroom" },
  { src: "/images/property/barrel-house-exterior.jpg", width: 750, height: 500, alt: "Historic brick exterior of Barrel House in Lower Town", caption: "Historic Lower Town" },
];

export const restaurantImages = {
  exterior: { src: "/images/restaurant/barrel-house-dining-room.jpg", width: 2048, height: 1365, alt: "Historic brick Barrel House building in Lower Town" },
  terrace: { src: "/images/restaurant/barrel-house-terrace-dining.jpg", width: 2048, height: 1365, alt: "Barrel House oceanfront dining terrace" },
} as const;
