"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer: IntersectionObserver | null = null;

    // Run strictly after React client hydration has completely settled
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not([data-state="revealed"])'
      );

      if (elements.length === 0) return;

      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.setAttribute("data-state", "revealed"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              // Mutate data-state attribute only (never mutate className or inline style)
              target.setAttribute("data-state", "revealed");
              observer?.unobserve(target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      elements.forEach((el) => observer?.observe(el));
    }, 120);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
