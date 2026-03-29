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
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Crafted Offerings</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
              Custom glass for modern homes. From{' '}
              <span className="text-zinc-400">frameless shower screens</span>{' '}
              to glass railings, we deliver{' '}
              <span className="text-primary bg-primary/10 px-2 rounded-sm inline-block">quality you can see.</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-zinc-100 pt-20">
            {/* Shower Screens */}
            <div className="group animate-on-scroll">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Square size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Shower Enclosures</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Frameless & semi-frameless systems
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Sliding, pivot & hinged configurations
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Fully bespoke sizing & white-glove installation
                </li>
              </ul>
            </div>

            {/* Glass Handrails */}
            <div className="group animate-on-scroll">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Maximize size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Structural Glass Railings</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Staircase & interior feature railings
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Balcony & terrace glass barriers
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Infinity-edge pool fencing
                </li>
              </ul>
            </div>

            {/* Custom Glass Work */}
            <div className="group animate-on-scroll">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Droplet size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Bespoke Glass Interiors</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Office & residential glass partitions
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Climate-controlled wine cellars
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Structural toughened & laminated glass
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
