"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardData {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  href: string;
  whatsappMessage: string;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "computer-sales-service",
    num: "01",
    category: "COMPUTING & REPAIRS",
    title: "Computer Sales & Service",
    description:
      "Genuine brand laptops, custom gaming & workstation builds, accessories, and precision chip-level motherboard diagnostics.",
    highlights: [
      "Custom Gaming & Workstation Rigs",
      "Chip-Level Motherboard Servicing",
      "High-Speed NVMe SSD & RAM Upgrades",
    ],
    image: "/images/services/computer_sales.png",
    href: "/services#computer-sales-service",
    whatsappMessage: "Hi IDEAL IT, I am looking for Computer Sales & Service support.",
  },
  {
    id: "cctv-security-systems",
    num: "02",
    category: "SURVEILLANCE & SECURITY",
    title: "CCTV & Security Systems",
    description:
      "Enterprise & residential IP camera surveillance with 24/7 color night-vision, AI motion alerts, and worldwide remote live viewing.",
    highlights: [
      "24/7 Full-Color Night Vision Cameras",
      "AI Human & Vehicle Intrusion Detection",
      "Live Smartphone Viewing & Playback",
    ],
    image: "/images/services/cctv_security.png",
    href: "/services#cctv-security-systems",
    whatsappMessage: "Hi IDEAL IT, I need a quotation for CCTV & Security Systems.",
  },
  {
    id: "networking-solutions",
    num: "03",
    category: "CONNECTIVITY & NETWORKS",
    title: "Networking & Optical Fiber",
    description:
      "High-speed structured network cabling, optical fiber splicing, server rack dressing, and seamless enterprise mesh Wi-Fi.",
    highlights: [
      "Optical Fiber Splicing & OTDR Testing",
      "Managed Switches & Server Rack Setup",
      "Zero-Dead-Zone Mesh Wi-Fi Coverage",
    ],
    image: "/images/services/networking.png",
    href: "/services#networking-solutions",
    whatsappMessage: "Hi IDEAL IT, I would like to inquire about Networking Solutions.",
  },
  {
    id: "ups-inverter-power",
    num: "04",
    category: "POWER BACKUP & SOLAR",
    title: "UPS & Inverter Power Backup",
    description:
      "Pure sine-wave power inverters, heavy-duty tubular battery banks, and zero-transfer online UPS for homes, clinics, and IT infrastructure.",
    highlights: [
      "Pure Sine-Wave Power Inverters",
      "Long-Life Heavy Tubular Batteries",
      "Zero-Cut Online UPS for Sensitive Tech",
    ],
    image: "/images/services/ups_inverter.png",
    href: "/services#ups-inverter-power",
    whatsappMessage: "Hi IDEAL IT, I need UPS & Inverter Power Backup systems.",
  },
  {
    id: "smart-home-automation",
    num: "05",
    category: "SMART LIVING & CONTROLS",
    title: "Smart Home Automation",
    description:
      "Smart touch switch panels, app & voice-enabled lighting scenes, automated motorized gates, and biometric smart door locks.",
    highlights: [
      "Glass Touch Switches & Voice Control",
      "Motorized Sliding & Swing Gate Systems",
      "Biometric Fingerprint & RFID Locks",
    ],
    image: "/images/services/home_automation.png",
    href: "/services#smart-home-automation",
    whatsappMessage: "Hi IDEAL IT, I would like to know more about Home Automation.",
  },
  {
    id: "video-door-phones",
    num: "06",
    category: "INTERCOM & ENTRY ACCESS",
    title: "Video Door Phones",
    description:
      "Color touchscreen indoor monitors with HD 2-way audio calling, weather-proof outdoor stations, and one-touch remote door unlock.",
    highlights: [
      "HD 2-Way Audio & Video Intercom",
      "Remote Smartphone Call Forwarding",
      "Vandal-Proof Night-Vision Outdoor Unit",
    ],
    image: "/images/services/video_door_phone.png",
    href: "/services#video-door-phones",
    whatsappMessage: "Hi IDEAL IT, I want to install a Video Door Phone system.",
  },
];

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService?: (serviceTitle?: string) => void;
}) {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#fafcff] border-t border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 text-left">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="text-[11px] font-semibold text-slate-700 tracking-[0.16em] uppercase">
                OUR CORE SERVICES
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-slate-900 tracking-[-0.03em] leading-tight mb-3">
              Complete{" "}
              <span className="font-semibold text-[#0066FF]">
                IT &amp; Security
              </span>{" "}
              Solutions
            </h2>

            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed">
              From enterprise surveillance and precision chip-level computing to high-capacity power backup and smart home living — engineered with genuine hardware and certified technical support.
            </p>
          </div>

          {/* View All Services Outline Button */}
          <Link
            href="/services"
            className="self-start md:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-[#0066FF] bg-white hover:bg-[#0066FF]/5 text-slate-800 hover:text-[#0066FF] text-[13.5px] font-medium transition-all duration-200 shadow-2xs hover:shadow active:scale-98 group flex-shrink-0"
          >
            <span>Explore Full Specs &amp; Warranty</span>
            <svg
              className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0066FF] transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* 6 Minimalist Product & Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden scroll-mt-28"
            >
              {/* Dedicated Product Image Stage */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-50/80 border-b border-slate-100/90">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-right group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle scrim for badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[10.5px] font-bold text-slate-800 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-2xs border border-slate-100/80">
                    {service.num}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-white bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  {/* Description - clean & visible on all devices */}
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-normal leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 mb-5">
                    {service.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[12px] text-slate-700 font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  {/* View Details Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-slate-700 hover:text-[#0066FF] transition-colors group/link"
                  >
                    <span>View Details</span>
                    <svg
                      className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-[#0066FF] transition-transform group-hover/link:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {/* WhatsApp Action Button */}
                  <a
                    href={`https://wa.me/919605932907?text=${encodeURIComponent(
                      service.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-[#25D366] text-slate-700 hover:text-white border border-slate-200/80 hover:border-transparent text-[12px] font-medium transition-all shadow-2xs hover:shadow active:scale-95 group/wa"
                    title="Chat on WhatsApp"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#25D366] group-hover/wa:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
