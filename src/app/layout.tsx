import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://semarglass.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Semar Glass Co. | Custom Glass Handrails & Shower Enclosures Los Angeles",
    template: "%s | Semar Glass Co.",
  },
  description:
    "Premier custom glass installation in Los Angeles, CA. Frameless shower screens, glass handrails, pool fencing & partitions. Serving Beverly Hills, Santa Monica, Malibu & Greater LA. Free quotes — Semar Glass Co.",
  keywords: [
    "glass handrails Los Angeles",
    "frameless shower screens LA",
    "custom shower enclosures Beverly Hills",
    "glass pool fencing Los Angeles",
    "glass partitions Santa Monica",
    "shower screen installation Malibu",
    "glass & rails",
    "glass installation company LA",
  ],
  authors: [{ name: "Semar Glass Co.", url: siteUrl }],
  creator: "Semar Glass Co.",
  publisher: "Semar Glass Co.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Semar Glass Co.",
    title: "Semar Glass Co. | Custom Glass Handrails & Shower Enclosures Los Angeles",
    description:
      "Premium frameless shower screens, glass handrails & custom glass installation in Los Angeles. Serving Beverly Hills, Santa Monica, Malibu & Greater LA.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Glass & Rails – Custom Glass Installations in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semar Glass Co. | Custom Glass Handrails & Shower Enclosures Los Angeles",
    description:
      "Premium frameless shower screens, glass handrails & custom glass installation in Los Angeles.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#47869C",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Semar Glass Co.",
  description:
    "Custom frameless shower screens, glass handrails, pool fencing and glass partitions in Los Angeles, CA.",
  url: siteUrl,
  telephone: "+16576786742",
  email: "info@semarglass.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  areaServed: [
    "Los Angeles",
    "Beverly Hills",
    "Santa Monica",
    "Malibu",
    "West Hollywood",
    "Brentwood",
  ],
  serviceType: [
    "Frameless Shower Screens",
    "Glass Handrails",
    "Pool Fencing",
    "Glass Partitions",
    "Wine Cellars",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased bg-zinc-50 text-zinc-700 selection:bg-primary/15 selection:text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
