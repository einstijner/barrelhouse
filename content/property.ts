export const booking = {
  // Temporary, accurately labelled OTA destination until the VIPS room mapping is confirmed.
  room: "https://www.booking.com/hotel/bq/barrel-house-st-eustatius.html",
  restaurant: "https://barrel-house-statia.resos.com/booking",
  oldGinHouse: "https://www.theoldginhouse.com/rooms",
} as const;

export const property = {
  name: "Barrel House Statia",
  shortName: "Barrel House",
  descriptor: "Historic oceanfront suite · Sint Eustatius",
  address: {
    street: "Orange Bay Road 38, Lower Town",
    locality: "Oranjestad",
    island: "Sint Eustatius",
    country: "Caribbean Netherlands",
    map: "https://maps.google.com/?q=Orange+Bay+Road+38+Oranjestad+Sint+Eustatius",
  },
  accommodationContact: {
    name: "The Old Gin House",
    email: "info@theoldginhouse.com",
    phoneDisplay: "+599 318 2319",
    phoneHref: "+5993182319",
  },
  restaurantContact: {
    email: "info@barrelhousestatia.net",
    phoneDisplay: "+599 318 3345",
    phoneHref: "+5993183345",
  },
  instagram: "https://www.instagram.com/barrelhousestatia/",
  facts: {
    size: "70 m²",
    guests: "2 guests",
    bedrooms: "1 bedroom",
    bed: "1 king bed",
    setting: "Oceanfront",
  },
  checkIn: "From 2:00 pm",
  checkOut: "By 11:00 am",
  policies: ["Adults only", "No pets", "Non-smoking", "No parties or events"],
  amenities: [
    "King-size bed",
    "Private bathroom with shower",
    "Kitchenette",
    "Air conditioning",
    "Free Wi‑Fi",
    "Sea-view terrace",
    "Refrigerator",
    "Microwave and stovetop",
    "Private entrance",
    "Living area",
  ],
} as const;

export const siteUrl = (() => {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return vercel ? `https://${vercel}` : undefined;
})();
