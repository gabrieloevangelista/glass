import Image from 'next/image';
import { Clock, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-on-scroll">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl font-medium text-zinc-900 mt-3 tracking-tight">Precision Glass <br/>& Expert Installation</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="overflow-hidden group animate-on-scroll order-2 lg:order-1 bg-rose-600 rounded-sm relative">
            <div className="relative w-full h-[500px]">
                <Image
                src="/images/freepik__a-lone-contractor-of-south-asian-descent-wearing-a__63822.png"
                alt="Modern Glass Bathroom"
                fill
                className="transition duration-1000 group-hover:scale-105 filter object-cover brightness-95"
                />
            </div>
            <div className="absolute bottom-6 left-6 text-white z-10">
              <div className="text-xs font-mono text-white/90 mb-1 bg-black/30 backdrop-blur-sm px-2 py-1 inline-block rounded-sm">SERVING LA COUNTY</div>
              <div className="text-xl font-medium tracking-tight drop-shadow-md">We treat your home like our own.</div>
            </div>
          </div>

          {/* Detail Card */}
          <div className="bg-white p-12 md:p-16 flex flex-col justify-center border border-zinc-200 rounded-sm animate-on-scroll order-1 lg:order-2">
            <div className="flex items-center justify-between mb-10">
              <span className="text-sm font-semibold text-zinc-900 tracking-wide">GLASS & RAILS</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] uppercase tracking-wider font-bold rounded-sm border border-green-100">Local Business</span>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Reliable & On Time</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">We respect your schedule and complete installations within the agreed timeframe.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Wallet size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Transparent Pricing</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">Affordable quotes with no hidden fees. We work within your budget.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Attention to Detail</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">Clean, respectful on-site conduct and a high-quality finish every time.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-100">
              <a href="#contact" className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-widest hover:text-blue-600 transition-colors">
                Request Quote <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
