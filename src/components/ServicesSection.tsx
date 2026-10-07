"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "computer-sales",
    title: "Computer Sales & Service",
    description:
      "Laptops, Desktops, Accessories, Software Installation, Repair & Maintenance.",
    image: "/images/services/computer_sales.png",
    whatsappMessage: "Hi IDEAL IT, I am looking for Computer Sales & Service support.",
  },
  {
    id: "cctv-security",
    title: "CCTV & Security Systems",
    description:
      "CCTV Camera Installation, Remote Monitoring, Access Control & Video Door Phone Systems.",
    image: "/images/services/cctv_security.png",
    whatsappMessage: "Hi IDEAL IT, I need a quotation for CCTV & Security Systems.",
  },
  {
    id: "networking",
    title: "Networking Solutions",
    description:
      "LAN/WAN Setup, Network Cabling, Wi-Fi Solutions, Router & Switch Configuration.",
    image: "/images/services/networking.png",
    whatsappMessage: "Hi IDEAL IT, I would like to inquire about Networking Solutions.",
  },
  {
    id: "ups-inverter",
    title: "UPS & Inverter Systems",
    description:
      "UPS Systems, Inverter & Battery Solutions, Power Backup for Homes & Businesses.",
    image: "/images/services/ups_inverter.png",
    whatsappMessage: "Hi IDEAL IT, I need UPS & Inverter Power Backup systems.",
  },
  {
    id: "home-automation",
    title: "Home Automation",
    description:
      "Smart Lighting, Smart Switches, Automatic Gate Systems, Biometric Access & Home Automation Solutions.",
    image: "/images/services/home_automation.png",
    whatsappMessage: "Hi IDEAL IT, I would like to know more about Home Automation.",
  },
  {
    id: "video-door-phones",
    title: "Video Door Phones",
    description:
      "Video Door Phone Systems, Intercom Solutions, Smart Entry Systems for Homes & Offices.",
    image: "/images/services/video_door_phone.png",
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
      className="py-20 md:py-28 bg-[#f6fafe]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching exact reference mockup */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12 text-left">
          <div>
            {/* Pill Capsule Badge */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#0066FF]/20 mb-3.5">
              <span className="text-[11px] sm:text-[11.5px] font-medium text-[#0066FF] tracking-[0.14em] uppercase">
                OUR SERVICES
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#0F172A] tracking-[-0.025em] leading-tight mb-2.5">
              Complete{" "}
              <span className="font-normal text-[#0066FF]">
                IT &amp; Security
              </span>{" "}
              Solutions
            </h2>

          </div>

          {/* View All Services Outline Button */}
          <button
            onClick={() => onSelectService?.()}
            className="self-start sm:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0066FF]/35 hover:border-[#0066FF] bg-transparent hover:bg-[#0066FF]/5 text-[#0066FF] text-[13.5px] font-medium transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>View All Services</span>
            <svg
              className="w-3.5 h-3.5"
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
          </button>
        </div>

        {/* 6 Service Cards with seamless right-side product images & direct text overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-[22px] sm:rounded-[24px] overflow-hidden min-h-[160px] sm:min-h-[235px] p-5 sm:p-7 md:p-8 bg-white border border-slate-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Background Image on the right */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-right transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text directly integrated on the card */}
              <div className="relative z-10 max-w-[68%] sm:max-w-[58%] text-left">
                <h3 className="text-[17.5px] sm:text-[21px] font-medium text-[#0F172A] tracking-tight leading-snug mb-1 sm:mb-2 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                {/* Description - hidden on mobile, visible on tablet and desktop */}
                <p className="hidden sm:block text-[13px] sm:text-[13.5px] font-normal text-[#64748B] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* WhatsApp Enquiry Action Button */}
              <div className="relative z-10 pt-5">
                <a
                  href={`https://wa.me/919805932907?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#1E293B] hover:text-[#0066FF] text-[13px] font-medium border border-slate-200/90 shadow-sm hover:shadow transition-all duration-200 active:scale-95 group/btn backdrop-blur-sm"
                >
                  <svg
                    className="w-4 h-4 text-[#25D366] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp Enquiry</span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-[#0066FF] transition-transform group-hover/btn:translate-x-0.5"
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
