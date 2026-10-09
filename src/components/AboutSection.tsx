"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Showroom Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about_showroom.jpg"
                  alt="IDEAL IT Technology Showroom and Service Center in Wayanad"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Tag */}
            <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#64748B] uppercase mb-3">
              ABOUT US &bull; SINCE 2010
            </span>

            {/* Apple-style Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1E293B] leading-[1.2] tracking-[-0.025em] mb-6">
              Reliable IT &amp; Security <br className="hidden sm:inline" />
              Solutions for Every Need
            </h2>

            {/* Description Text */}
            <p className="text-[15px] sm:text-[16px] font-normal text-[#64748B] leading-relaxed mb-4">
              We are proud to introduce ourselves as pioneers in sales and maintenance of computers and IT products since 2010. Built on professional, honest, and punctual service, IDEAL IT has risen to become a leading total IT solution provider under one roof.
            </p>

            <p className="text-[14.5px] sm:text-[15.5px] font-normal text-[#64748B] leading-relaxed mb-8">
              Combining the latest technology gadgets with seasoned hands, we offer user-friendly customized solutions backed by a wide network across India for private sector companies, institutions, and homes.
            </p>

            {/* 3 Key Trust Badges - Horizontal Row on Mobile and Desktop */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-2 mb-8">
              {/* Badge 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] font-medium text-[#1E293B] leading-tight">
                  Trusted <br /> Products
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] font-medium text-[#1E293B] leading-tight">
                  Expert <br /> Installation
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <div className="text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] font-medium text-[#1E293B] leading-tight">
                  Dedicated <br /> Support
                </div>
              </div>
            </div>

            {/* See More Link Directly to /about */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[13.5px] font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>See More</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
