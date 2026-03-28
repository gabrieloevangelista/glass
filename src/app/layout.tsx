import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://glassandrails.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Glass & Rails | Custom Glass Handrails & Shower Enclosures Los Angeles",
    template: "%s | Glass & Rails LA",
  },
  description:
    "Premier custom glass installation in Los Angeles, CA. Frameless shower screens, glass handrails, pool fencing & partitions. Serving Beverly Hills, Santa Monica, Malibu & Greater LA. Free quotes.",
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
  authors: [{ name: "Glass & Rails", url: siteUrl }],
  creator: "Glass & Rails",
  publisher: "Glass & Rails",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Glass & Rails",
    title: "Glass & Rails | Custom Glass Handrails & Shower Enclosures Los Angeles",
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
    title: "Glass & Rails | Custom Glass Handrails & Shower Enclosures Los Angeles",
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
  name: "Glass & Rails",
  description:
    "Custom frameless shower screens, glass handrails, pool fencing and glass partitions in Los Angeles, CA.",
  url: siteUrl,
  telephone: "+16576786742",
  email: "info@glassandrails.com",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased bg-zinc-50 text-zinc-700 selection:bg-primary/15 selection:text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
