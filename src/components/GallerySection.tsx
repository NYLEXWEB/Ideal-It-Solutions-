"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

// Row 1 - High Quality Real Project Images (Looping Left)
const row1Images: GalleryItem[] = [
  {
    id: 1,
    title: "Outdoor CCTV Surveillance Setup",
    image: "/images/gallery_outdoor_cctv.jpg",
  },
  {
    id: 2,
    title: "Multi-Screen Central Security Command Center",
    image: "/images/gallery_monitor_room.jpg",
  },
  {
    id: 3,
    title: "Hardware Diagnostics & Motherboard Servicing",
    image: "/images/service_computer.jpg",
  },
  {
    id: 4,
    title: "Luxury Smart Home & Touch Living Automation",
    image: "/images/gallery_smart_living.jpg",
  },
  {
    id: 5,
    title: "Optical Fiber Cabling & Network Deployment",
    image: "/images/service_networking.jpg",
  },
];

// Row 2 - High Quality Real Project Images (Looping Right)
const row2Images: GalleryItem[] = [
  {
    id: 6,
    title: "Data Center Server Rack Cabling",
    image: "/images/gallery_rack_cabling.jpg",
  },
  {
    id: 7,
    title: "Commercial False Ceiling Dome CCTV Installation",
    image: "/images/gallery_indoor_dome.jpg",
  },
  {
    id: 8,
    title: "Pure Sine Wave Inverter & Online UPS System",
    image: "/images/service_ups.jpg",
  },
  {
    id: 9,
    title: "Biometric Access & Smart Gate Automation",
    image: "/images/service_automation.jpg",
  },
  {
    id: 10,
    title: "IDEAL IT Technology Showroom & Demo Lab",
    image: "/images/about_showroom.jpg",
  },
];

export default function GallerySection({ onOpenQuote }: { onOpenQuote?: () => void }) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeItem]);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#f8fbfe] border-t border-slate-100 overflow-hidden relative"
    >
      {/* Background ambient accents */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-100/35 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6 text-left">
          <div>
            {/* Pill Capsule Badge */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#0066FF]/20 mb-3.5">
              <span className="text-[11px] sm:text-[11.5px] font-medium text-[#0066FF] tracking-[0.16em] uppercase">
                OUR WORK &bull; GALLERY
              </span>
            </div>

            {/* Apple SF Pro Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#0F172A] tracking-[-0.025em] leading-tight mb-3">
              Recent Projects &amp; <span className="text-[#0066FF]">Installations</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] font-normal text-[#64748B] max-w-2xl leading-relaxed">
              Explore our real-world on-site installations across Wayanad — including CCTV surveillance, server networking racks, smart home automation, and computer setups.
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[13.5px] font-medium shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Get Project Quote</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dual Layer Continuous Horizontal Loop Marquee (No Text Overlays, Pure Visual Cards with Top-Right Magnifying Glass) */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6 select-none">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 md:w-32 bg-gradient-to-r from-[#f8fbfe] via-[#f8fbfe]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 md:w-32 bg-gradient-to-l from-[#f8fbfe] via-[#f8fbfe]/80 to-transparent z-20 pointer-events-none" />

        {/* ------------------------------------------------------------------ */}
        {/* Layer 1 (Top Row): Continuous Loop Moving LEFT */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex items-center overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-1">
            {/* Set 1 */}
            {row1Images.map((item) => (
              <div
                key={`r1-a-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group relative flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] md:w-[450px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 450px"
                />

                {/* Top-Right Magnifying Glass Zoom Icon matching user's exact reference */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110">
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/95"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            ))}

            {/* Set 1 Duplicate for Seamless Infinite Loop */}
            {row1Images.map((item) => (
              <div
                key={`r1-b-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group relative flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] md:w-[450px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 450px"
                />

                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110">
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/95"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Layer 2 (Bottom Row): Continuous Loop Moving RIGHT */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex items-center overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 py-1">
            {/* Set 2 */}
            {row2Images.map((item) => (
              <div
                key={`r2-a-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group relative flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] md:w-[450px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 450px"
                />

                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110">
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/95"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            ))}

            {/* Set 2 Duplicate for Seamless Infinite Loop */}
            {row2Images.map((item) => (
              <div
                key={`r2-b-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group relative flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] md:w-[450px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 450px"
                />

                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110">
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/95"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Lightbox / High-Resolution Photo Zoom Modal */}
      {/* ------------------------------------------------------------------ */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-black/40 rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20"
              aria-label="Close image preview"
            >
              ✕
            </button>

            {/* High Res Full Picture View */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full bg-slate-950">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1000px"
                priority
              />
            </div>

            {/* Bottom Bar: Title & Quick Contact CTA */}
            <div className="p-4 sm:p-5 bg-slate-900/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-white">
              <div className="text-center sm:text-left">
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider block mb-0.5">
                  IDEAL IT PROJECT SHOWCASE
                </span>
                <h3 className="text-base sm:text-lg font-normal text-white">
                  {activeItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/919805932907?text=${encodeURIComponent(
                    `Hi IDEAL IT, I am interested in discussing your installation services for ${activeItem.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-medium transition active:scale-95 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenQuote?.();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-medium transition active:scale-95 shadow-sm"
                >
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
