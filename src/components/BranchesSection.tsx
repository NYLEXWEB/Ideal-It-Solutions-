"use client";

import React from "react";

interface BranchInfo {
  id: string;
  name: string;
  badge: string;
  building: string;
  landmark: string;
  area: string;
  pincode: string;
  landline: string;
  landlineFormatted: string;
  mobile: string;
  mobileFormatted: string;
}

const branches: BranchInfo[] = [
  {
    id: "mananthavady",
    name: "IDEAL IT - Mananthavady",
    badge: "MAIN BRANCH",
    building: "Suseelam Building",
    landmark: "Mysore Road",
    area: "Mananthavady, Wayanad",
    pincode: "670645",
    landline: "04935294907",
    landlineFormatted: "04935 294907",
    mobile: "9605932907",
    mobileFormatted: "96059 32907",
  },
  {
    id: "padinjarathara",
    name: "IDEAL IT - Padinjarathara",
    badge: "BRANCH OFFICE",
    building: "Mundunadakkal Building",
    landmark: "Opposite Panchayath Office",
    area: "Padinjarathara, Wayanad",
    pincode: "673575",
    landline: "04936202907",
    landlineFormatted: "04936 202907",
    mobile: "9605932907",
    mobileFormatted: "96059 32907",
  },
];

export default function BranchesSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#f8fbfe] border-t border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-100 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#0066FF]/20 mb-3">
            <span className="text-[11px] sm:text-[11.5px] font-medium text-[#0066FF] tracking-[0.16em] uppercase">
              OUR BRANCHES &bull; WAYANAD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-[-0.025em] leading-tight mb-3">
            Visit Our <span className="text-[#0066FF]">Store Locations</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] font-normal text-[#64748B] leading-relaxed">
            Conveniently located sales, service, and technical consultation centers across Wayanad.
          </p>
        </div>

        {/* 2 Minimalist Premium Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Branch Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-[11px] font-semibold tracking-wider uppercase border border-blue-100">
                    {branch.badge}
                  </span>

                  <div className="w-10 h-10 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-500 group-hover:text-[#0066FF] flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>

                {/* Branch Name */}
                <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                  {branch.name}
                </h3>

                {/* Address Information */}
                <div className="space-y-1.5 text-[14px] text-slate-600 font-normal leading-relaxed pb-5 border-b border-slate-100">
                  <p className="text-slate-900 font-medium">{branch.building}</p>
                  <p>{branch.landmark}</p>
                  <p>{branch.area} - <span className="font-medium text-slate-800">{branch.pincode}</span></p>
                </div>

                {/* Contact Phone Numbers Grid */}
                <div className="pt-4 space-y-3">
                  {/* Office Landline */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Office Landline
                    </span>
                    <a
                      href={`tel:${branch.landline}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#0066FF] transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{branch.landlineFormatted}</span>
                    </a>
                  </div>

                  {/* Mobile / Helpline */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Mobile &amp; Support
                    </span>
                    <a
                      href={`tel:${branch.mobile}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#0066FF] transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
                      </svg>
                      <span>{branch.mobileFormatted}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${branch.landline}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/80 transition-all active:scale-98"
                >
                  <svg className="w-3.5 h-3.5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Landline</span>
                </a>

                <a
                  href={`https://wa.me/919605932907?text=${encodeURIComponent(
                    `Hi IDEAL IT, I am inquiring about the ${branch.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-medium transition-all shadow-sm active:scale-98"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
