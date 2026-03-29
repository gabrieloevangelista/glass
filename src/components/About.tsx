import { Clock, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 animate-on-scroll">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-widest">Why Us</span>
            <h2 className="text-3xl font-medium text-zinc-900 mt-3 tracking-tight">We Take Pride <br/>in Our Work</h2>
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
                  <h4 className="text-base font-semibold text-zinc-900">On Time, Every Time</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">We show up when we say we will. Your schedule matters, and we don't waste your day.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Wallet size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">No Hidden Costs</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">You get a clear quote before we start. No surprises, no extra charges added after the job.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">Clean Finish, Every Job</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">We measure carefully, cut cleanly and leave the space exactly how we found it. The glass does the talking.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-100">
              <a href="#contact" className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-widest hover:text-primary transition-colors">
                Get a Quote <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
