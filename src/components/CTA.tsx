import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#345e6d] text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20 md:mx-6 rounded-sm mb-12">
      <div className="max-w-screen-xl mx-auto px-6 relative z-10 animate-on-scroll">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
          Need Premium Glass Installation?
        </h2>
        <p className="text-white/80 mb-10 max-w-md mx-auto font-light text-lg">
          Contact Glass & Rails today for a free, no-obligation quote.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="sms:+16576786742" className="flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-sm hover:bg-zinc-100 transition shadow-xl group">
             <Phone size={20} strokeWidth={2} />
             <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest leading-none text-primary/70 mb-1">Text Us</div>
                <div className="text-base font-bold leading-none text-zinc-900 group-hover:text-primary-dark transition-colors">+1 (657) 678-6742</div>
             </div>
          </a>
           <Link href="#contact" className="flex items-center justify-center gap-3 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-sm hover:bg-white/20 transition">
              <Mail size={20} strokeWidth={2} />
              <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest leading-none text-white/70 mb-1">Email Quote</div>
                  <div className="text-base font-bold leading-none">Request Online</div>
              </div>
           </Link>
        </div>
      </div>
    </section>
  );
}
