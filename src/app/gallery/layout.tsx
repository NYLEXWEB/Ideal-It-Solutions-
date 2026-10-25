import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery - CCTV, Fiber & Smart Automation Deployments",
  description:
    "Browse real installation photos from IDEAL IT: Commercial multi-screen CCTV control rooms, structured fiber optic server racks, outdoor perimeter surveillance, and smart home automation projects across Kerala.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Project Gallery - CCTV, Fiber & Smart Automation Deployments",
    description:
      "Explore real-world deployments by IDEAL IT: Security camera installations, network cabling, and automation across Wayanad.",
    url: "/gallery",
    images: [
      {
        url: "/images/gallery_monitor_room.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial CCTV Command Center by IDEAL IT",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
