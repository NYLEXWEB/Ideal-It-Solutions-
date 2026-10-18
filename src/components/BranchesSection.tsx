"use client";

import React from "react";
import Image from "next/image";

interface WarrantyBrand {
  name: string;
  logo: string;
  alt: string;
}

interface BranchInfo {
  id: string;
  name: string;
  badge: string;
  badgeStyle: "blue" | "emerald";
  building: string;
  landmark: string;
  area: string;
  pincode: string;
  landline: string;
  landlineFormatted: string;
  mobile: string;
  mobileFormatted: string;
  whatsappNumber: string;
  whatsappMessage: string;
  warrantySupport?: {
    title: string;
    brands: WarrantyBrand[];
  };
  outOfWarranty?: {
    title: string;
    services: string[];
  };
  coreServices?: string[];
}

const branches: BranchInfo[] = [
  {
    id: "mananthavady",
    name: "IDEAL IT - Mananthavady",
    badge: "MAIN BRANCH",
    badgeStyle: "blue",
    building: "Suseelam Building",
    landmark: "Mysore Road",
    area: "Mananthavady, Wayanad",
    pincode: "670645",
    landline: "04935294907",
    landlineFormatted: "04935 294907",
    mobile: "9605932907",
    mobileFormatted: "96059 32907",
    whatsappNumber: "919605932907",
    whatsappMessage: "Hi IDEAL IT, I am inquiring about the Mananthavady branch services.",
    coreServices: [
      "Enterprise CCTV & IP Security Systems",
      "Computer & Laptop Sales & Servicing",
      "Optical Fiber & LAN Network Setup",
      "Home Automation & AMC Contracts",
    ],
  },
  {
    id: "padinjarathara",
    name: "IDEAL IT - Padinjarathara",
    badge: "BRANCH OFFICE",
    badgeStyle: "blue",
    building: "Mundunadakkal Building",
    landmark: "Opposite Panchayath Office",
    area: "Padinjarathara, Wayanad",
    pincode: "673575",
    landline: "04936202907",
    landlineFormatted: "04936 202907",
    mobile: "9995585195",
    mobileFormatted: "99955 85195",
    whatsappNumber: "919995585195",
    whatsappMessage: "Hi IDEAL IT, I am inquiring about the Padinjarathara branch services.",
    coreServices: [
      "CCTV Installation & Upgrades",
      "Computer Hardware Repair & Parts",
      "High-speed WiFi & Routing Solutions",
      "On-site Technical Support & Maintenance",
    ],
  },
  {
    id: "kannur",
    name: "IDEAL SOLUTIONS - Kannur",
    badge: "AUTHORIZED SERVICE CENTER",
    badgeStyle: "blue",
    building: "3rd Floor, Topland Grand Bazar Complex",
    landmark: "Bellard Road",
    area: "Kannur, Kerala",
    pincode: "670001",
    landline: "04972705223",
    landlineFormatted: "0497 2705223",
    mobile: "8129059275",
    mobileFormatted: "81290 59275",
    whatsappNumber: "918129059275",
    whatsappMessage: "Hi Ideal Solutions Kannur, I am inquiring about warranty support and CCTV / IT services.",
    warrantySupport: {
      title: "Warranty Support",
      brands: [
        {
          name: "Zebronics",
          logo: "/images/partners/zebronics.png",
          alt: "Zebronics Authorized Warranty Support",
        },
        {
          name: "Fingers",
          logo: "/images/partners/fingers.png",
          alt: "Fingers Authorized Warranty Support",
        },
        {
          name: "Artis",
          logo: "/images/partners/artis.png",
          alt: "Artis Authorized Warranty Support",
        },
      ],
    },
    outOfWarranty: {
      title: "Out of Warranty Support",
      services: [
        "DVR, NVR, CCTV camera services",
        "Hardware and software issues support",
      ],
    },
  },
];

export default function BranchesSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#f8fbfe] border-t border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-100 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#0066FF]/20 mb-3">
            <span className="text-[11px] sm:text-[11.5px] font-medium text-[#0066FF] tracking-[0.16em] uppercase">
              OUR BRANCHES &bull; WAYANAD &amp; KANNUR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-[-0.025em] leading-tight mb-3">
            Visit Our <span className="text-[#0066FF]">Store &amp; Service Locations</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] font-normal text-[#64748B] leading-relaxed">
            Conveniently located sales showrooms, authorized brand warranty service centers, and technical consultation hubs across Wayanad and Kannur.
          </p>
        </div>

        {/* 3 Premium Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-7xl mx-auto items-stretch">
          {branches.map((branch) => {
            const isWarrantyHub = Boolean(branch.warrantySupport);

            return (
              <div
                key={branch.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/80 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top Badge & Branch Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase border border-blue-100">
                      {branch.badge}
                    </span>

                    <div className="w-10 h-10 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-500 group-hover:text-[#0066FF] flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Branch Name */}
                  <h3 className="text-xl font-medium text-slate-900 mb-2.5 group-hover:text-[#0066FF] transition-colors">
                    {branch.name}
                  </h3>

                  {/* Address Information */}
                  <div className="space-y-1 text-[13.5px] text-slate-600 font-normal leading-relaxed pb-4 border-b border-slate-100">
                    <p className="text-slate-900 font-medium">{branch.building}</p>
                    <p>{branch.landmark}</p>
                    <p>
                      {branch.area} -{" "}
                      <span className="font-semibold text-slate-800">{branch.pincode}</span>
                    </p>
                  </div>

                  {/* Contact Phone Numbers */}
                  <div className="pt-3.5 space-y-2.5 pb-4 border-b border-slate-100">
                    {/* Office Landline */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                        Office Landline
                      </span>
                      <a
                        href={`tel:${branch.landline}`}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 hover:text-[#0066FF] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>{branch.landlineFormatted}</span>
                      </a>
                    </div>

                    {/* Mobile / Helpline */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                        Mobile &amp; Support
                      </span>
                      <a
                        href={`tel:${branch.mobile}`}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 hover:text-[#0066FF] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
                        </svg>
                        <span>{branch.mobileFormatted}</span>
                      </a>
                    </div>
                  </div>

                  {/* SPECIAL SECTION: Warranty & Services */}
                  {branch.warrantySupport ? (
                    <div className="pt-4 space-y-3">
                      {/* Warranty Support Box with Original Logos */}
                      <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-200/70">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                            <span className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider">
                              Warranty Support
                            </span>
                          </div>
                          <span className="text-[10px] font-medium text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/80">
                            Authorized Center
                          </span>
                        </div>

                        {/* 3 Brand Logos Grid with Transparent Background */}
                        <div className="grid grid-cols-3 gap-2">
                          {branch.warrantySupport.brands.map((brand) => (
                            <div
                              key={brand.name}
                              className="bg-white rounded-xl p-2 border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-[#0066FF]/40 transition-all flex flex-col items-center justify-center text-center group/brand"
                            >
                              <div className="relative w-full h-7 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={brand.logo}
                                  alt={brand.alt}
                                  fill
                                  className="object-contain mix-blend-multiply group-hover/brand:scale-105 transition-transform duration-200"
                                  sizes="100px"
                                />
                              </div>
                              <span className="text-[10px] font-medium text-slate-600 mt-1 tracking-tight">
                                {brand.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Out of Warranty Services */}
                      {branch.outOfWarranty && (
                        <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-200/70">
                          <div className="flex items-center gap-1.5 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                            <span className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                              {branch.outOfWarranty.title}
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            {branch.outOfWarranty.services.map((svc, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-[12px] text-slate-600 font-normal leading-snug"
                              >
                                <svg
                                  className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{svc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Regular Branch Core Specialties */
                    <div className="pt-4">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                          Key Solutions &amp; Services
                        </span>
                      </div>
                      <div className="space-y-2">
                        {branch.coreServices?.map((service, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-[12px] text-slate-600 font-normal leading-snug"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-5 mt-5 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${branch.landline}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/80 transition-all active:scale-98"
                  >
                    <svg className="w-3.5 h-3.5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>Landline</span>
                  </a>

                  <a
                    href={`https://wa.me/${branch.whatsappNumber}?text=${encodeURIComponent(
                      branch.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium transition-all shadow-sm hover:shadow active:scale-98"
                  >
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.769.878 2.796.879 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.584-5.766-5.768-5.766zm9.965 5.765c0 5.503-4.475 9.979-9.965 9.979-1.748 0-3.388-.454-4.821-1.246l-5.21 1.365 1.391-5.074c-.887-1.488-1.396-3.23-1.396-5.024 0-5.504 4.476-9.979 9.966-9.979 5.504 0 9.98 4.475 9.98 9.979z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

