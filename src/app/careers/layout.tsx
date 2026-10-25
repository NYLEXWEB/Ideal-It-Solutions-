import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - CCTV & Computer Hardware Technician Opportunities",
  description:
    "Join the IDEAL IT team. Open opportunities for CCTV installation technicians, computer chip-level hardware repair specialists, network engineers, and field technicians in Wayanad & Kannur.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers - CCTV & Computer Hardware Technician Opportunities",
    description:
      "Looking for skilled CCTV technicians and computer hardware specialists. Apply now with IDEAL IT.",
    url: "/careers",
    images: [
      {
        url: "/images/hero_cctv.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at IDEAL IT Solutions Wayanad",
      },
    ],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
