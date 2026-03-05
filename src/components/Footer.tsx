import { Square } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="max-w-md mb-12 md:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center text-white">
                <Square size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-medium">Glass Box Design</h3>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">
              Professional shower screens, bathroom mirrors and glass splashback installation services in Los Angeles. <br />
              Serving Beverly Hills, Santa Monica, and Greater LA.
            </p>
          </div>
          <div>
            <a href="tel:3105550123" className="inline-block bg-white text-zinc-950 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition transform hover:-translate-y-1">
              Call (310) 555-0123
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs text-zinc-500 mb-20 border-t border-white/10 pt-16 uppercase tracking-widest font-medium">
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Services</span>
            <Link href="#" className="hover:text-blue-400 transition">Shower Screens</Link>
            <Link href="#" className="hover:text-blue-400 transition">Mirrors</Link>
            <Link href="#" className="hover:text-blue-400 transition">Splashbacks</Link>
            <Link href="#" className="hover:text-blue-400 transition">Repairs</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Areas</span>
            <Link href="#" className="hover:text-blue-400 transition">Beverly Hills</Link>
            <Link href="#" className="hover:text-blue-400 transition">Santa Monica</Link>
            <Link href="#" className="hover:text-blue-400 transition">West Hollywood</Link>
            <Link href="#" className="hover:text-blue-400 transition">Malibu</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Company</span>
            <Link href="#about" className="hover:text-blue-400 transition">About Us</Link>
            <Link href="#gallery" className="hover:text-blue-400 transition">Recent Work</Link>
            <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Contact</span>
            <span className="text-white">(310) 555-0123</span>
            <span className="text-zinc-500">Los Angeles, CA</span>
            <span className="text-zinc-500">Residential & Commercial</span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
          <div>© 2024 Glass Box Design. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
