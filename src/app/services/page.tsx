"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";

interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  features: string[];
  brands: string[];
  whatsappMessage: string;
}

const detailedServices: ServiceDetail[] = [
  {
    id: "computer-sales-service",
    category: "COMPUTING & HARDWARE",
    title: "Computer Sales & Chip-Level Repair",
    headline: "Custom Gaming Rigs, Workstations, Laptops & Component Servicing",
    description:
      "We provide sales of genuine laptops, custom desktop PCs, servers, and official accessories from global leaders like HP, Dell, Lenovo, and Asus. Our certified hardware technicians perform precision BGA chip-level motherboard repairs, SSD upgrades, data recovery, thermal servicing, and OS installations.",
    image: "/images/services/computer_sales.png",
    features: [
      "Custom PC Builds for Gaming, Architecture & Video Editing",
      "Chip-Level Motherboard Diagnostics & BGA Soldering",
      "High-Speed NVMe SSD Upgrades & RAM Expansion",
      "Secure Data Recovery & OS/Software Configuration",
      "Genuine Laptop Screens, Keyboards, Adapters & Batteries",
    ],
    brands: ["HP", "Dell", "Lenovo", "Asus", "Acer", "Intel", "AMD"],
    whatsappMessage: "Hi IDEAL IT, I need assistance with Computer Sales / Repair service.",
  },
  {
    id: "cctv-security-systems",
    category: "SECURITY & SURVEILLANCE",
    title: "CCTV & HD/IP Video Surveillance",
    headline: "High-Definition 24/7 Color Night-Vision & Remote Mobile Monitoring",
    description:
      "Enterprise and residential security cameras engineered for extreme weather and low-light performance. From standalone smart Wi-Fi cameras to 64-channel NVR optical networks with AI human detection, vehicle number plate recognition, and real-time smartphone alerts.",
    image: "/images/services/cctv_security.png",
    features: [
      "Full Color Night Vision IP & HD Cameras (2MP to 4K Ultra-HD)",
      "NVR / DVR Multi-Channel Recording Setup with Cloud & Local Storage",
      "Remote Smartphone Live Viewing & Playback Anywhere in the World",
      "AI Smart Motion Detection & Boundary Intrusion Alerts",
      "Long-Distance Optical Fiber Video Transmission for Large Properties",
    ],
    brands: ["Hikvision", "Dahua", "CP Plus", "Uniview", "Honeywell"],
    whatsappMessage: "Hi IDEAL IT, I would like a quote for CCTV Security Camera installation.",
  },
  {
    id: "networking-solutions",
    category: "CONNECTIVITY & INFRASTRUCTURE",
    title: "Optical Fiber & Structured Networking",
    headline: "Enterprise Wi-Fi Mesh, Server Rack Cabling & Fiber Splicing",
    description:
      "High-speed, robust network architectures designed for zero latency and seamless connectivity across multi-floor buildings, resorts, schools, and offices. We specialize in optical fiber termination, server rack structuring, managed switches, and commercial Wi-Fi access points.",
    image: "/images/services/networking.png",
    features: [
      "Optical Fiber Splicing, OTDR Testing & Backbone Cabling",
      "Server Rack Cable Dressing & Patch Panel Structuring",
      "Seamless Roaming Mesh Wi-Fi Access Points for Hotels & Homes",
      "Managed Gigabit Switches, Firewalls & VPN Setup",
      "Point-to-Point (P2P) Wireless Bridge for Remote Locations",
    ],
    brands: ["TP-Link Omada", "Ubiquiti UniFi", "D-Link", "Cisco", "MikroTik"],
    whatsappMessage: "Hi IDEAL IT, I need an inquiry for Networking & Optical Fiber setup.",
  },
  {
    id: "ups-inverter-power",
    category: "POWER BACKUP & SOLAR",
    title: "UPS & Inverter Power Backup",
    headline: "Uninterrupted Pure Sine-Wave Inverters & High-Capacity Battery Banks",
    description:
      "Protect your delicate electronics and maintain continuous power during electrical grid outages. We calculate exact load requirements to deploy customized online UPS systems and tubular inverter battery setups for homes, clinics, retail billing counters, and server rooms.",
    image: "/images/services/ups_inverter.png",
    features: [
      "Pure Sine-Wave Inverters for Safe Appliance Operation",
      "Heavy-Duty Long-Life Tubular Batteries with Extended Warranties",
      "Zero-Transfer-Time Online UPS for Medical & IT Equipment",
      "Solar Hybrid Inverter Integration & Voltage Stabilizers",
      "Annual Battery Health Checkups & Acid Maintenance Support",
    ],
    brands: ["Luminous", "Microtek", "Exide", "Amaron", "APC by Schneider"],
    whatsappMessage: "Hi IDEAL IT, I am looking for UPS & Inverter Power Backup solutions.",
  },
  {
    id: "smart-home-automation",
    category: "SMART LIVING & AUTOMATION",
    title: "Smart Home Automation & Access Controls",
    headline: "Touch Switch Panels, Biometric Locks & Automated Gate Systems",
    description:
      "Transform your property into an intuitive smart environment. Control lighting, curtains, climate, and security locks from your phone or voice assistants. We also deploy biometric fingerprint/RFID employee attendance and automated motorized sliding gate mechanisms.",
    image: "/images/services/home_automation.png",
    features: [
      "Smart Touch Glass Switchboards with App & Alexa/Google Voice Control",
      "Biometric Fingerprint, PIN & RFID Smart Door Locks",
      "Motorized Sliding & Swing Gate Automation with Remote Controls",
      "Automated Curtain Motors & Scene Lighting Configurations",
      "Employee Biometric Time-Attendance & Cloud Access Management",
    ],
    brands: ["Yale", "Godrej", "Tuya Smart", "eSSL", "Hikvision"],
    whatsappMessage: "Hi IDEAL IT, I would like information regarding Smart Home Automation.",
  },
  {
    id: "video-door-phones",
    category: "INTERCOM & SMART ENTRY",
    title: "Video Door Phones & Intercom Systems",
    headline: "HD Two-Way Audio/Video Calling & Remote Door Unlock",
    description:
      "Screen visitors before opening your door with digital color touchscreen monitors. Features crystal-clear two-way audio, snapshot memory, smartphone call forwarding, and one-touch electric lock release for residences, gated communities, and multi-apartment complexes.",
    image: "/images/services/video_door_phone.png",
    features: [
      "7-Inch & 10-Inch High-Definition Indoor Touchscreens",
      "Smartphone Call Redirection & Remote Unlock via Mobile App",
      "Vandal-Proof Weather-Resistant Outdoor Camera Stations",
      "Multi-Apartment Intercom Systems with Room-to-Room Calling",
      "Night-Vision Infrared Illumination & Wide-Angle Lenses",
    ],
    brands: ["Hikvision", "Panasonic", "Dahua", "Legrand"],
    whatsappMessage: "Hi IDEAL IT, I want to install a Video Door Phone system.",
  },
];

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setSelectedService(undefined);
  };

  const filteredServices =
    activeFilter === "ALL"
      ? detailedServices
      : detailedServices.filter((s) => s.id === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Top Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow pt-24 md:pt-28">
        {/* 1. Breadcrumb & Services Hero */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#f4f8fd] via-white to-white overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Services</span>
            </nav>

            <div className="max-w-3xl">
              <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-4">
                COMPREHENSIVE IT &amp; SECURITY SERVICES
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-light text-[#1E293B] leading-[1.15] tracking-[-0.03em] mb-6">
                Engineered for Performance. <br />
                <span className="font-normal text-[#0066FF]">
                  Delivered with Punctuality.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                From computer hardware sales and chip-level servicing to enterprise optical networking and high-definition CCTV security, we deliver end-to-end technology solutions under one roof.
              </p>
            </div>

            {/* Service Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-8 no-scrollbar">
              <button
                onClick={() => setActiveFilter("ALL")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === "ALL"
                    ? "bg-[#0066FF] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                All Services (6)
              </button>
              {detailedServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveFilter(service.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === service.id
                      ? "bg-[#0066FF] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {service.title.split("&")[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Detailed Service Sections */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-slate-100 first:border-t-0 first:pt-0"
                >
                  {/* Service Visual Preview */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-[#f8fbfe] group p-6 sm:p-10 flex items-center justify-center min-h-[300px] sm:min-h-[380px]">
                      <div className="relative w-full h-[240px] sm:h-[300px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Text Details */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="text-[11px] font-semibold text-[#0066FF] tracking-widest uppercase">
                      {service.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-medium text-[#1E293B] leading-snug">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-normal">
                      {service.headline}
                    </p>

                    <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-2 text-[13.5px] text-slate-600 font-normal">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Brands Badge */}
                    <div className="pt-2 flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-medium text-slate-500">Authorized Brands:</span>
                      {service.brands.map((brand, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3.5">
                      <button
                        onClick={() => handleOpenQuote(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[13.5px] font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
                      >
                        <span>Get a Quote</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      <a
                        href={`https://wa.me/919605932907?text=${encodeURIComponent(
                          service.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-[13.5px] font-medium transition-all border border-[#25D366]/30 active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>WhatsApp Specialist</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Bottom Consultation Banner */}
        <section className="py-16 bg-[#f8fbfe] border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[11px] font-medium text-[#38BDF8] tracking-widest uppercase mb-2 inline-block bg-blue-500/20 px-3.5 py-1 rounded-full border border-blue-400/20">
                  FREE SITE SURVEY &bull; WAYANAD &amp; SURROUNDINGS
                </span>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight mt-2 mb-3">
                  Need a Customized Solution for Your Property?
                </h3>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  Our certified technicians offer free on-site inspections and tailored proposals for CCTV, networking, power backup, and computer systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => handleOpenQuote()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition-all shadow-lg shadow-blue-500/30 active:scale-95 cursor-pointer"
                >
                  <span>Request Site Inspection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating />

      {/* Interactive Get a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />
    </div>
  );
}
