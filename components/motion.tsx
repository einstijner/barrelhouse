"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";

/**
 * Scroll-linked motion. Each tracked element gets its scroll progress (0 → 1) as the CSS variable --p, and
 * globals.css animates from it under html.motion, so without JS or with reduced motion the page stays static.
 * - pin: from the element's top reaching the viewport top until its bottom reaches the viewport bottom (pair with a sticky child).
 * - through: from the element's top entering at the bottom of the viewport until its bottom leaves at the top.
 */
type Mode = "pin" | "through";

const tracked = new Map<HTMLElement, Mode>();
let frame = 0;

function update() {
  frame = 0;
  const vh = window.innerHeight;
  const values: [HTMLElement, number][] = [];
  tracked.forEach((mode, element) => {
    const box = element.getBoundingClientRect();
    if (box.bottom < -vh || box.top > vh * 2) return;
    const raw = mode === "pin" ? -box.top / Math.max(1, box.height - vh) : (vh - box.top) / (box.height + vh);
    values.push([element, Math.min(1, Math.max(0, raw))]);
  });
  // Read every position first, then write, so the browser lays out the page once per frame.
  values.forEach(([element, p]) => element.style.setProperty("--p", p.toFixed(4)));
}

function schedule() {
  if (!frame) frame = window.requestAnimationFrame(update);
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useScrollProgress(ref: RefObject<HTMLElement | null>, mode: Mode) {
  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion()) return;
    if (!tracked.size) {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
    }
    tracked.set(element, mode);
    schedule();
    return () => {
      tracked.delete(element);
      if (tracked.size) return;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
      frame = 0;
    };
  }, [ref, mode]);
}

/** A tall section whose content stays pinned while scrolling through it plays the animation; `length` is in screen heights. */
export function Scene({ id, className, length, label, labelledBy, children }: { id?: string; className: string; length: number; label?: string; labelledBy?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, "pin");
  return (
    <section ref={ref} id={id} className={`scene ${className}`} style={{ "--len": length } as CSSProperties} aria-label={label} aria-labelledby={labelledBy}>
      <div className="scene-sticky">{children}</div>
    </section>
  );
}

/** A plain block that exposes --p while it scrolls through the viewport, for parallax and drifting rows. */
export function Drift({ className, children, as: Tag = "div" }: { className: string; children: ReactNode; as?: "div" | "section" }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, "through");
  return Tag === "section" ? <section ref={ref} className={className}>{children}</section> : <div ref={ref} className={className}>{children}</div>;
}

/** A pinned section whose rail of cards slides sideways as the page scrolls down; its height matches the rail's overflow. */
export function Rail({ id, className, labelledBy, head, children }: { id?: string; className: string; labelledBy?: string; head: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, "pin");

  useEffect(() => {
    const section = ref.current;
    const rail = track.current;
    if (!section || !rail) return;
    const measure = () => section.style.setProperty("--dx", String(Math.max(0, rail.scrollWidth - rail.clientWidth)));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`scene rail ${className}`} aria-labelledby={labelledBy}>
      <div className="scene-sticky">
        {head}
        <div ref={track} className="rail-track">{children}</div>
        <div className="rail-progress" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}

/** Lights a sentence up word by word as its pinned scene scrolls past. */
export function Words({ text, accent }: { text: string; accent?: string }) {
  const words = text.split(" ");
  const accentWords = accent ? accent.split(" ") : [];
  const total = words.length + accentWords.length;
  return (
    <span className="words" style={{ "--n": total } as CSSProperties}>
      {words.map((word, index) => <span key={`w${index}`} className="word" style={{ "--i": index } as CSSProperties}>{word} </span>)}
      {accentWords.map((word, index) => <em key={`a${index}`} className="word" style={{ "--i": words.length + index } as CSSProperties}>{word} </em>)}
    </span>
  );
}

/** Turns on scroll motion and fades `.reveal` elements up the first time they scroll into view. */
export function MotionRoot() {
  useEffect(() => {
    if (reducedMotion()) return;
    document.documentElement.classList.add("motion");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    const observe = () => document.querySelectorAll(".reveal:not(.is-in)").forEach((element) => observer.observe(element));
    observe();
    // Client-side navigation swaps the page content, so watch for new reveal targets.
    const mutations = new MutationObserver(observe);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
  return null;
}
