"use client";

import React, { useEffect, useRef, useState } from "react";

export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Initial style depending on animation type
  const getInitialStyle = (): string => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-8";
      case "fade-down":
        return "opacity-0 -translate-y-8";
      case "fade-left":
        return "opacity-0 translate-x-8";
      case "fade-right":
        return "opacity-0 -translate-x-8";
      case "zoom-in":
        return "opacity-0 scale-95";
      case "fade-in":
      default:
        return "opacity-0";
    }
  };

  const getVisibleStyle = (): string => {
    switch (animation) {
      case "zoom-in":
        return "opacity-100 scale-100";
      default:
        return "opacity-100 translate-y-0 translate-x-0";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${
        isVisible ? getVisibleStyle() : getInitialStyle()
      } ${className}`}
    >
      {children}
    </div>
  );
}
