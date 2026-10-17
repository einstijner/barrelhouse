import { siteUrl } from "@/content/property";

const paths = ["", "/stay", "/stay/barrel-house-suite", "/our-story", "/restaurant", "/discover-statia", "/contact", "/faq", "/privacy"];

export function GET(request: Request) {
  const origin = siteUrl ?? new URL(request.url).origin;
  const entries = paths.map((path) => `<url><loc>${origin}${path}</loc><changefreq>${path === "" ? "weekly" : "monthly"}</changefreq><priority>${path === "" ? "1.0" : path.includes("barrel-house-suite") ? "0.9" : "0.7"}</priority></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, { headers:{ "Content-Type":"application/xml; charset=utf-8", "Cache-Control":"public, max-age=3600" } });
}
