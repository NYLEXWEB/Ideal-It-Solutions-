"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";

interface GalleryPhoto {
  id: number;
  title: string;
  category: "cctv" | "networking" | "automation" | "hardware";
  image: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    title: "Commercial Multi-Screen CCTV Command Center",
    category: "cctv",
    image: "/images/gallery_monitor_room.jpg",
  },
  {
    id: 2,
    title: "High-Density Server Rack & Structured Fiber Cabling",
    category: "networking",
    image: "/images/gallery_rack_cabling.jpg",
  },
  {
    id: 3,
    title: "Outdoor Perimeter Long-Range IP Surveillance",
    category: "cctv",
    image: "/images/gallery_outdoor_cctv.jpg",
  },
  {
    id: 4,
    title: "Luxury Smart Home Touch Switch & Living Automation",
    category: "automation",
    image: "/images/gallery_smart_living.jpg",
  },
  {
    id: 5,
    title: "Commercial False-Ceiling Dome CCTV Network",
    category: "cctv",
    image: "/images/gallery_indoor_dome.jpg",
  },
  {
    id: 6,
    title: "Optical Fiber Backbone Splicing & Server Infrastructure",
    category: "networking",
    image: "/images/service_networking.jpg",
  },
  {
    id: 7,
    title: "High-Capacity Online UPS & Power Backup Setup",
    category: "hardware",
    image: "/images/service_ups.jpg",
  },
  {
    id: 8,
    title: "Chip-Level Diagnostic & Hardware Repair Workstation",
    category: "hardware",
    image: "/images/service_computer.jpg",
  },
  {
    id: 9,
    title: "Biometric Touch Access & Smart Gate Automation",
    category: "automation",
    image: "/images/service_automation.jpg",
  },
  {
    id: 10,
    title: "IDEAL IT Technology Showroom & Experience Center",
    category: "hardware",
    image: "/images/about_showroom.jpg",
  },
  {
    id: 11,
    title: "On-Site Certified Field Installation Fleet",
    category: "cctv",
    image: "/images/trust_technician.jpg",
  },
  {
    id: 12,
    title: "High-Definition Night Vision Surveillance Camera",
    category: "cctv",
    image: "/images/hero_cctv.jpg",
  },
  {
    id: 13,
    title: "Advanced Engineering Diagnostics & Technical Lab",
    category: "hardware",
    image: "/images/careers_team.jpg",
  },
];

export default function GalleryPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const currentPhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fbfe] selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Top Header */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        {/* 1. Minimalist Header */}
        <section className="relative py-10 sm:py-14 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Gallery</span>
            </nav>

            {/* Pill Badge */}
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-3">
              INSTALLATIONS &bull; VISUAL GALLERY
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-light text-[#1E293B] tracking-[-0.03em] mb-3">
              Project <span className="font-normal text-[#0066FF]">Gallery</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto mb-8">
              Explore our on-site security camera installations, optical fiber server racks, smart home automation, and computer labs across Wayanad.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
              {[
                { key: "all", label: "All Photos" },
                { key: "cctv", label: "CCTV Surveillance" },
                { key: "networking", label: "Fiber & Server Racks" },
                { key: "automation", label: "Smart Living" },
                { key: "hardware", label: "Hardware & Lab" },
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/20"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80 shadow-sm"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Pure Visual Image Grid (Clean, aesthetic, no writings/text blocks) */}
        <section className="py-6 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 border border-slate-200/70 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Photo Image */}
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Subtle Dark Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top-Right Magnifying Glass Zoom Icon */}
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110">
                    <svg
                      className="w-4.5 h-4.5 text-white"
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

                  {/* Subtle Minimal Title on Hover at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm font-medium drop-shadow-md truncate">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Minimal Bottom CTA */}
        <section className="pt-10 pb-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-7 sm:p-10 text-white shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="relative z-10 max-w-lg">
                <span className="text-[11px] font-semibold text-[#38BDF8] tracking-widest uppercase mb-1 block">
                  BOOK A SITE VISIT
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white">
                  Need a Similar Installation?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Get in touch with our certified engineers for doorstep survey, camera angle planning, and estimation.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-medium transition shadow-lg shadow-blue-500/30 cursor-pointer active:scale-95"
                >
                  Get Instant Quote
                </button>
                <a
                  href="https://wa.me/919605932907?text=Hi%20IDEAL%20IT,%20I%20saw%20your%20project%20gallery%20and%20would%20like%20a%20site%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-medium transition shadow-sm flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Fullscreen Lightbox Modal (Clean, high-res image view with arrows) */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-md text-lg"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/35 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-md shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/35 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-md shadow-lg"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentPhoto.image}
              alt={currentPhoto.title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 90vw"
              priority
            />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-center justify-between">
              <p className="text-sm sm:text-base font-medium drop-shadow">
                {currentPhoto.title}
              </p>
              <span className="text-xs text-slate-300 font-normal">
                {lightboxIndex! + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating WhatsApp */}
      <WhatsAppFloating />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
