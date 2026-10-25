import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - IT & Security Solutions Specialists Since 2010",
  description:
    "Learn about IDEAL IT and IDEAL SOLUTIONS Kannur. Over a decade of excellence in CCTV security systems, computer sales, chip-level diagnostics, and authorized warranty service in Wayanad and Kannur, Kerala.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - IT & Security Solutions Specialists Since 2010",
    description:
      "Pioneering IT excellence, CCTV security installations, and authorized service centers across Wayanad & Kannur.",
    url: "/about",
    images: [
      {
        url: "/images/hero_cctv.jpg",
        width: 1200,
        height: 630,
        alt: "About IDEAL IT Solutions Wayanad",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
