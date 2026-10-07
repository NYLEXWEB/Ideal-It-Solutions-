import React from "react";
import Image from "next/image";

export default function BrandLogos() {
  const partners = [
    { name: "Lenovo", src: "/images/partners/lenovo.png", className: "h-7 w-24" },
    { name: "HP", src: "/images/partners/hp.png", className: "h-9 w-9" },
    { name: "Dell", src: "/images/partners/dell.png", className: "h-9 w-9" },
    { name: "Acer", src: "/images/partners/acer.png", className: "h-6 w-24" },
    { name: "Honeywell", src: "/images/partners/honeywell.png", className: "h-6 w-28" },
    { name: "Dahua Technology", src: "/images/partners/dahua.png", className: "h-7 w-28" },
    { name: "Hikvision", src: "/images/partners/hikvision.png", className: "h-6 w-28" },
    { name: "TP-Link", src: "/images/partners/tplink.png", className: "h-7 w-24" },
  ];

  return (
    <section className="py-9 md:py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        {/* Section Heading */}
        <h2 className="text-[11.5px] font-medium text-[#8C9BAE] tracking-[0.2em] uppercase">
          AUTHORIZED DEALER &amp; SERVICE PARTNER
        </h2>
      </div>

      {/* Infinite Horizontal Loop Marquee (works smoothly on Mobile & Desktop) */}
      <div className="relative w-full overflow-hidden">
        {/* Side fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2">
          {/* First loop instance */}
          {partners.map((partner, idx) => (
            <div
              key={`p1-${idx}-${partner.name}`}
              className={`${partner.className} relative flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer`}
            >
              <Image
                src={partner.src}
                alt={`${partner.name} Authorized Partner`}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          ))}

          {/* Duplicate loop instance for seamless infinite scrolling */}
          {partners.map((partner, idx) => (
            <div
              key={`p2-${idx}-${partner.name}`}
              className={`${partner.className} relative flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer`}
            >
              <Image
                src={partner.src}
                alt={`${partner.name} Authorized Partner`}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
