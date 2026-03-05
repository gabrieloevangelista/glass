import Image from 'next/image';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative w-full h-[650px] bg-zinc-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Modern Bathroom Glass Shower Screen"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 z-0"></div>

      <div className="z-10 flex flex-col h-full max-w-screen-xl mx-auto px-6 relative justify-center">
        <div className="max-w-4xl pt-20">
          <div className="flex items-center gap-3 text-blue-400 mb-6 animate-on-scroll">
            <span className="w-8 h-[1px] bg-blue-400"></span>
            <span className="text-xs font-medium tracking-widest uppercase">Serving Los Angeles & Surrounding Areas</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-8 animate-on-scroll">
            Premium Glass Handrails <br />
            <span className="text-white/60">& Shower Enclosures.</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-xl font-light leading-relaxed animate-on-scroll">
            Elevate your home with precision-crafted glass installations. From frameless shower screens to custom glass handrails, we bring clarity, safety, and elegance to every space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-on-scroll">
            <a href="sms:+16576786742" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <Phone size={16} strokeWidth={1.5} />
              +1 (657) 678-6742
            </a>
            <Link href="#contact" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-zinc-900 transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>


      </div>
    </header>
  );
}
