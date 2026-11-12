"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer: IntersectionObserver | null = null;

    // Run only after the browser is completely idle & React hydration pass is 100% finished
    const initObserver = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not(.revealed)'
      );

      if (elements.length === 0) return;

      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => {
          el.classList.add("revealed");
          el.setAttribute("data-state", "revealed");
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add("revealed");
              target.setAttribute("data-state", "revealed");
              observer?.unobserve(target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      elements.forEach((el) => observer?.observe(el));
    };

    // Delay past hydration cycle to eliminate any hydration mismatches
    const timer = setTimeout(initObserver, 300);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
