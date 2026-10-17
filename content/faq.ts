import { property } from "@/content/property";

export const faqs = [
  { q:"Where is Barrel House located?", a:`Barrel House is at ${property.address.street}, ${property.address.locality}, on Sint Eustatius. It sits on the historic Lower Town waterfront.` },
  { q:"How do I reserve the suite?", a:"Use any View rates & availability button to see current dates and conditions on the verified Booking.com listing. The reservation is completed on Booking.com, not on this website." },
  { q:"What is included in the accommodation?", a:"The private 70 m² apartment includes an upstairs king bedroom, downstairs living area and kitchenette, private bathroom, air conditioning, Wi‑Fi and a sea-view terrace." },
  { q:"Is there a restaurant nearby?", a:"Yes. Barrel House restaurant occupies the same historic waterfront setting and accepts table reservations through Resos. The Old Gin House also operates nearby." },
  { q:"How do I travel to Statia?", a:"Most visitors arrive through F. D. Roosevelt Airport on a regional flight. Routes and schedules change, so confirm current connections before booking onward travel." },
  { q:"Is the suite suitable for two guests?", a:"Yes. The suite accommodates a maximum of two adults in one king-size bed. Children, cribs and extra beds are not accommodated under the currently published policy." },
  { q:"What are check-in and check-out times?", a:`Check-in is ${property.checkIn.toLowerCase()} and check-out is ${property.checkOut.toLowerCase()}, according to the current suite listing. Share your expected arrival time in advance.` },
  { q:"Are children or pets permitted?", a:"The current listing states that children and pets are not permitted. The suite is also non-smoking and does not allow parties or events." },
  { q:"How do I arrange my arrival?", a:`After booking, contact the accommodation team using the details in your reservation. For a question before booking, The Old Gin House currently lists ${property.accommodationContact.email} and ${property.accommodationContact.phoneDisplay}.` },
] as const;
