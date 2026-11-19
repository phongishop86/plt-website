"use client";

import { useEffect } from "react";

/**
 * Marks each [data-reveal] list as seen once it scrolls into view.
 * The CSS in globals.css hides list children only after this runs,
 * so the page stays fully visible without JavaScript.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const root = document.documentElement;
    root.setAttribute("data-reveal-ready", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).setAttribute("data-reveal", "in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      io.disconnect();
      root.removeAttribute("data-reveal-ready");
      targets.forEach((t) => t.setAttribute("data-reveal", ""));
    };
  }, []);

  return null;
}
