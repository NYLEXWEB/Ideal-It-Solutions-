import React from "react";
import Image from "next/image";

// Exact IDEAL IT Brand Logo matching the reference image and uploaded original badge
export function IdealItLogo({ className = "h-11", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Badge Image */}
      <div className="relative w-11 h-11 flex-shrink-0 rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
        <Image
          src="/images/ideal_it_logo.png"
          alt="IDEAL IT Logo"
          width={44}
          height={44}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center text-left leading-tight">
          <div className="flex items-center tracking-tight">
            <span className="font-extrabold text-[#113264] text-xl font-sans tracking-wide">
              IDEAL
            </span>
            <span className="font-extrabold text-[#0066FF] text-xl font-sans ml-1 tracking-wide">
              IT
            </span>
          </div>
          <span className="text-[10px] font-medium text-[#738298] tracking-normal mt-[-1px]">
            Computer &amp; Security Solutions
          </span>
        </div>
      )}
    </div>
  );
}

// Brand Partner Logos
export function LenovoLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="font-bold text-[#E2231A] text-xl tracking-tight font-sans">
        Lenovo
      </span>
    </div>
  );
}

export function HpLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#0096D6] flex items-center justify-center text-white font-serif italic font-bold text-lg leading-none shadow-sm">
        hp
      </div>
    </div>
  );
}

export function DellLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-8 h-8 rounded-full border-2 border-[#007DB8] flex items-center justify-center text-[#007DB8] font-sans font-black text-xs tracking-tighter">
        D<span className="-rotate-25 inline-block font-black">E</span>LL
      </div>
    </div>
  );
}

export function AcerLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="font-bold text-[#83B81A] text-xl tracking-tight font-sans lowercase">
        acer
      </span>
    </div>
  );
}

export function HoneywellLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="font-black text-[#EA222F] text-lg tracking-normal font-sans uppercase">
        Honeywell
      </span>
    </div>
  );
}

export function DahuaLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 justify-center ${className}`}>
      <div className="flex items-center">
        <span className="font-black text-[#E60012] text-xl italic tracking-tighter font-sans">
          alhua
        </span>
        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest ml-1 self-end pb-0.5">
          TECHNOLOGY
        </span>
      </div>
    </div>
  );
}

export function HikvisionLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center">
        <span className="font-black text-[#E60012] text-lg tracking-wider font-sans uppercase">
          HIK
        </span>
        <span className="font-black text-[#231F20] text-lg tracking-wider font-sans uppercase">
          VISION
        </span>
      </div>
    </div>
  );
}

export function TpLinkLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 justify-center ${className}`}>
      <div className="w-6 h-6 rounded-full border-[3px] border-[#3BC4C8] flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#3BC4C8]" />
      </div>
      <span className="font-bold text-[#00A4A6] text-base tracking-tight font-sans lowercase">
        tp-link
      </span>
    </div>
  );
}

// Google Logo for Reviews
export function GoogleGLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
