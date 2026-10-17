import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/content/property";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const description = "A thoughtfully restored 70 m² oceanfront suite for two in historic Lower Town, Sint Eustatius.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Barrel House Statia | Historic Oceanfront Suite", template: "%s | Barrel House Statia" },
  description,
  applicationName: "Barrel House Statia",
  keywords: ["Barrel House Statia", "Barrel House Suite", "accommodation St Eustatius", "oceanfront accommodation Statia", "boutique stay Sint Eustatius"],
  openGraph: { type: "website", locale: "en_US", siteName: "Barrel House Statia", title: "Barrel House Statia", description, images: [{ url: "/images/property/barrel-house-living-room.jpg", width: 1200, height: 799, alt: "Barrel House Suite living area" }] },
  twitter: { card: "summary_large_image", title: "Barrel House Statia", description, images: ["/images/property/barrel-house-living-room.jpg"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#24231f", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
