import { ArrowUpRight } from "lucide-react";
import { booking } from "@/content/property";

export function BookingLink({ className = "button", children = "View rates & availability" }: { className?: string; children?: React.ReactNode }) {
  return <a className={className} href={booking.room} target="_blank" rel="noreferrer" aria-label={`${children} on Booking.com (opens in a new tab)`}>{children}<ArrowUpRight size={15} aria-hidden="true" /></a>;
}

export function TableLink({ className = "button button-light", children = "Book a table" }: { className?: string; children?: React.ReactNode }) {
  return <a className={className} href={booking.restaurant} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15} aria-hidden="true" /></a>;
}
