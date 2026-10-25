import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Brand Warranty Claims & Technical Support",
  description:
    "Official authorized warranty service center for Zebronics, Fingers, and Artis in Kannur. Submit warranty service claims or out-of-warranty diagnostics for CCTV cameras, DVR/NVRs, and computer hardware.",
  alternates: {
    canonical: "/warranty",
  },
  openGraph: {
    title: "Authorized Brand Warranty Claims & Technical Support",
    description:
      "Submit warranty claims for Zebronics, Fingers, and Artis hardware. Fast turnaround and genuine manufacturer-certified repairs.",
    url: "/warranty",
    images: [
      {
        url: "/images/branches/kannur_service.jpg",
        width: 1200,
        height: 630,
        alt: "IDEAL SOLUTIONS Authorized Service Center Kannur",
      },
    ],
  },
};

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
