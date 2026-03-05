import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glass & Rails | Custom Glass Handrails & Shower Enclosures Los Angeles",
  description: "Premier Glass Installation Services in Los Angeles, CA. Custom frameless shower screens, handrails, and glass enclosures. Serving Beverly Hills, Santa Monica, and Greater LA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
