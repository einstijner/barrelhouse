import Link from "next/link";

export default function NotFound() {
  return <section className="prose" style={{minHeight:"80vh"}}><p className="eyebrow">404 · Out of view</p><h1>This page has gone out with the tide.</h1><p>The address may have changed, or the page may no longer exist.</p><Link className="button" href="/">Return home</Link></section>;
}
