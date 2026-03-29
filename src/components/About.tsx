import { Clock, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 animate-on-scroll">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-widest">Our Standard</span>
            <h2 className="text-3xl font-medium text-zinc-900 mt-3 tracking-tight">Craftsmanship <br/>Without Compromise</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detail Card – spans full row */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 flex flex-col justify-center border border-zinc-200 rounded-sm animate-on-scroll">
            <div className="flex items-center justify-between mb-10">
              <span className="text-sm font-semibold text-zinc-900 tracking-wide">SEMAR GLASS CO.</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] uppercase tracking-wider font-bold rounded-sm border border-green-100">Local Business</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Punctual & Professional</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">Your time is respected. We arrive prepared, work efficiently, and deliver on schedule — every time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Wallet size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Upfront & Transparent</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">Clear, detailed proposals with no ambiguity. Your investment is fully understood before work begins.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Meticulous Execution</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">From site preparation to final reveal — every millimetre is measured, every edge is finished to an uncompromising standard.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-100">
              <a href="#contact" className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-widest hover:text-primary transition-colors">
                Schedule a Consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
