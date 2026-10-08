"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";

interface GalleryProject {
  id: number;
  title: string;
  category: "cctv" | "networking" | "automation" | "hardware";
  categoryLabel: string;
  location: string;
  clientType: string;
  image: string;
  description: string;
}

const projects: GalleryProject[] = [
  {
    id: 1,
    title: "Commercial Multi-Screen CCTV Command Center",
    category: "cctv",
    categoryLabel: "CCTV Surveillance",
    location: "Mananthavady, Wayanad",
    clientType: "Commercial Enterprise",
    image: "/images/gallery_monitor_room.jpg",
    description: "Centralized multi-screen surveillance command room with 4K NVR continuous recording and remote monitoring failover.",
  },
  {
    id: 2,
    title: "High-Density Server Rack & Structured Fiber Cabling",
    category: "networking",
    categoryLabel: "Networking & Cabling",
    location: "Kalpetta, Wayanad",
    clientType: "Institutional Data Center",
    image: "/images/gallery_rack_cabling.jpg",
    description: "Color-coded Cat6A patch panel dressing, optical fiber distribution units (ODF), and cable management.",
  },
  {
    id: 3,
    title: "Outdoor Perimeter Long-Range IP Surveillance",
    category: "cctv",
    categoryLabel: "CCTV Surveillance",
    location: "Sulthan Bathery, Wayanad",
    clientType: "Luxury Resort & Plantation",
    image: "/images/gallery_outdoor_cctv.jpg",
    description: "Weatherproof IP bullet cameras with infrared night vision and optical fiber video transmission across 15 acres.",
  },
  {
    id: 4,
    title: "Luxury Smart Home Touch Switch & Scene Automation",
    category: "automation",
    categoryLabel: "Smart Automation",
    location: "Meppadi, Wayanad",
    clientType: "Residential Villa",
    image: "/images/gallery_smart_living.jpg",
    description: "Smart glass touch panels, automated ambient lighting scenes, motorized curtain controls, and app integration.",
  },
  {
    id: 5,
    title: "Commercial False-Ceiling Dome CCTV Network",
    category: "cctv",
    categoryLabel: "CCTV Surveillance",
    location: "Mananthavady, Wayanad",
    clientType: "Retail Showroom",
    image: "/images/gallery_indoor_dome.jpg",
    description: "Discreet indoor dome cameras with wide-angle coverage and built-in audio recording.",
  },
  {
    id: 6,
    title: "Optical Fiber Backbone Splicing & Campus Wi-Fi",
    category: "networking",
    categoryLabel: "Networking & Cabling",
    location: "Wayanad, Kerala",
    clientType: "Educational Institution",
    image: "/images/service_networking.jpg",
    description: "Core fiber fusion splicing and high-bandwidth gigabit Wi-Fi mesh access points across multi-block campus.",
  },
  {
    id: 7,
    title: "High-Capacity Online UPS & Solar Inverter Setup",
    category: "hardware",
    categoryLabel: "Power Backup",
    location: "Panamaram, Wayanad",
    clientType: "Diagnostic Healthcare Center",
    image: "/images/service_ups.jpg",
    description: "Pure sine wave online UPS system with heavy-duty tubular battery bank ensuring 100% uptime for medical gear.",
  },
  {
    id: 8,
    title: "Chip-Level Workstation & Laptop Diagnostic Lab",
    category: "hardware",
    categoryLabel: "Computer Hardware",
    location: "IDEAL IT Service Center",
    clientType: "B2B & Retail Clients",
    image: "/images/service_computer.jpg",
    description: "Precision thermal imaging, BGA micro-soldering, motherboard component diagnostics, and firmware programming.",
  },
  {
    id: 9,
    title: "Biometric Touch Access & Smart Gate Automation",
    category: "automation",
    categoryLabel: "Smart Automation",
    location: "Vythiri, Wayanad",
    clientType: "Corporate Office",
    image: "/images/service_automation.jpg",
    description: "Cloud-connected fingerprint & RFID door access system with motorized sliding gate remote integration.",
  },
  {
    id: 10,
    title: "IDEAL IT Experience Center & Technology Showroom",
    category: "hardware",
    categoryLabel: "Corporate Center",
    location: "Mananthavady, Wayanad",
    clientType: "Headquarters",
    image: "/images/about_showroom.jpg",
    description: "Live demonstration center showcasing real-time CCTV feeds, smart home controls, and hardware solutions.",
  },
  {
    id: 11,
    title: "On-Site Certified Installation & Maintenance Fleet",
    category: "cctv",
    categoryLabel: "Field Operations",
    location: "All Over Wayanad",
    clientType: "Field Service Fleet",
    image: "/images/trust_technician.jpg",
    description: "Our dedicated mobile service fleet offering prompt doorstep installations, site inspections, and emergency AMC calls.",
  },
];

export default function GalleryPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxProject, setLightboxProject] = useState<GalleryProject | null>(null);

  const handleOpenQuote = () => {
    setIsQuoteOpen(true);
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Top Header */}
      <Header onOpenQuote={handleOpenQuote} />

      <main className="flex-grow pt-24 md:pt-28">
        {/* 1. Breadcrumb & Hero */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#f4f8fd] via-white to-white overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Project Gallery</span>
            </nav>

            <div className="max-w-3xl">
              <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-4">
                FIELD INSTALLATIONS &bull; REAL DEPLOYMENTS
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-light text-[#1E293B] leading-[1.15] tracking-[-0.03em] mb-6">
                Proven Craftsmanship. <br />
                <span className="font-normal text-[#0066FF]">
                  Delivered with Precision.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Explore our portfolio of enterprise CCTV networks, optical fiber server rooms, smart home automation setups, and precision hardware deployments across Kerala and India.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-8 no-scrollbar">
              {[
                { key: "all", label: "All Projects" },
                { key: "cctv", label: "CCTV Surveillance" },
                { key: "networking", label: "Fiber & Server Cabling" },
                { key: "automation", label: "Smart Living & Access" },
                { key: "hardware", label: "Hardware & Power Backup" },
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-[#0066FF] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Interactive Projects Grid */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setLightboxProject(project)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-slate-800 tracking-wide uppercase shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Location tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs">
                      <span className="font-medium">{project.location}</span>
                      <span className="text-slate-300">{project.clientType}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#0066FF] font-medium">
                      <span>View Full Project Details</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA Site Survey Banner */}
        <section className="py-16 bg-[#f8fbfe] border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[11px] font-medium text-[#38BDF8] tracking-widest uppercase mb-2 inline-block bg-blue-500/20 px-3.5 py-1 rounded-full border border-blue-400/20">
                  BOOK A SITE SURVEY
                </span>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight mt-2 mb-3">
                  Have a Similar Project in Mind?
                </h3>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  Connect with our authorized engineering team in Wayanad for prompt site inspections, cabling blueprints, and competitive project estimates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleOpenQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition-all shadow-lg shadow-blue-500/30 active:scale-95 cursor-pointer"
                >
                  <span>Request Custom Estimation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Zoom Modal */}
      {lightboxProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* High-res Image Preview */}
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={lightboxProject.image}
                alt={lightboxProject.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 80vw"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-semibold uppercase tracking-wider border border-blue-100">
                  {lightboxProject.categoryLabel}
                </span>
                <div className="text-xs text-slate-500 font-medium">
                  {lightboxProject.location} &bull; {lightboxProject.clientType}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-slate-900">
                {lightboxProject.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {lightboxProject.description}
              </p>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setLightboxProject(null);
                    handleOpenQuote();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition cursor-pointer shadow-sm"
                >
                  Inquire About Similar Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating />

      {/* Interactive Get a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
