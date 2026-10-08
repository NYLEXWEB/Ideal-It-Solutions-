"use client";

import React, { useState } from "react";
import { GoogleGLogo } from "./Logos";

const reviews = [
  {
    id: 1,
    name: "Afzal P",
    initial: "A",
    avatarBg: "bg-slate-700",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent service and professional installation of CCTV cameras at our commercial building. Highly recommended in Wayanad!",
  },
  {
    id: 2,
    name: "Sneha K",
    initial: "S",
    avatarBg: "bg-blue-600",
    rating: 5,
    date: "1 month ago",
    text: "Purchased laptop and got networking done. Good customer support, quality products, and fast on-site support.",
  },
  {
    id: 3,
    name: "Ramees M",
    initial: "R",
    avatarBg: "bg-teal-700",
    rating: 5,
    date: "3 weeks ago",
    text: "Best CCTV & IT installation service in Mananthavady. Reliable team and prompt warranty replacement assistance.",
  },
  {
    id: 4,
    name: "Jithin V",
    initial: "J",
    avatarBg: "bg-purple-600",
    rating: 5,
    date: "2 months ago",
    text: "Great power backup inverter setup and computer maintenance. Timely support whenever needed. Top tier!",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row with Google Branding and Direct Google Review Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-medium tracking-wider uppercase mb-3">
              <span className="text-amber-500">★ ★ ★ ★ ★</span>
              <span>4.9 / 5.0 RATED ON GOOGLE</span>
            </div>

            <div className="flex items-center gap-3">
              <GoogleGLogo className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0F172A] tracking-tight">
                Verified <span className="font-normal text-slate-900">Google Reviews</span>
              </h2>
            </div>
            <p className="text-[14px] text-slate-500 font-normal mt-1.5">
              Read real feedback from our satisfied clients across homes, retail, and corporate sites in Wayanad.
            </p>
          </div>

          {/* Direct Write a Google Review & Carousel Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Direct Google Review Button */}
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJb2vV_KTepTsRUT2fCCgoSXo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#1E293B] hover:text-[#0066FF] text-[13.5px] font-medium border border-slate-200 shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <GoogleGLogo className="w-4 h-4 flex-shrink-0" />
              <span>Write a Review</span>
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Carousel Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0066FF] hover:border-slate-300 transition active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0066FF] hover:border-slate-300 transition active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[170px] group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initial Circle */}
                    <div
                      className={`w-9 h-9 rounded-full ${review.avatarBg} text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-sm`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-medium text-slate-800 leading-tight">
                        {review.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-normal">{review.date}</span>
                    </div>
                  </div>

                  <GoogleGLogo className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-2.5 text-[#F59E0B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[13px] text-slate-600 font-normal leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-600 font-medium">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified Customer
                </span>
                <span className="text-slate-400">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
