import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased bg-zinc-50 text-zinc-700 selection:bg-primary/15 selection:text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
