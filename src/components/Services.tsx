import { Layers, Maximize, Droplet, Square, Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Text */}
          <div className="lg:col-span-8 animate-on-scroll">
            <div className="flex items-center gap-2 mb-8">
              <Layers size={18} strokeWidth={1.5} className="text-primary" />
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
              We specialize in custom glass solutions for modern homes. From{' '}
              <span className="text-zinc-400">frameless shower screens</span>{' '}
              to elegant glass handrails, we deliver{' '}
              <span className="text-primary bg-primary/10 px-2 rounded-sm inline-block">crystal clear quality.</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-zinc-100 pt-20">
            {/* Shower Screens */}
            <div className="group animate-on-scroll">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Square size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Shower Screens</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Frameless & Semi-frameless
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Sliding & Pivot Doors
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Custom sizing & installation
                </li>
              </ul>
            </div>

            {/* Glass Handrails */}
            <div className="group animate-on-scroll">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Maximize size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Glass Handrails</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Staircase Railings
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Balcony Glass
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Pool Fencing
                </li>
              </ul>
            </div>

            {/* Custom Glass Work */}
            <div className="group animate-on-scroll">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Droplet size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Custom Glass Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Glass Partitions
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Wine Cellars
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Toughened safety glass
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
