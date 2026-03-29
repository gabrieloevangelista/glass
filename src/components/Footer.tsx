import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="max-w-md mb-12 md:mb-0">
            <div className="mb-6">
              <div className="flex items-center gap-2.5">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="none" stroke="white" strokeWidth="1.5"/>
                  <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
                  <line x1="14" y1="2" x2="14" y2="7" stroke="white" strokeWidth="1.5"/>
                  <line x1="26" y1="9" x2="21" y2="11" stroke="white" strokeWidth="1.5"/>
                  <line x1="26" y1="19" x2="21" y2="17" stroke="white" strokeWidth="1.5"/>
                  <line x1="14" y1="26" x2="14" y2="21" stroke="white" strokeWidth="1.5"/>
                  <line x1="2" y1="19" x2="7" y2="17" stroke="white" strokeWidth="1.5"/>
                  <line x1="2" y1="9" x2="7" y2="11" stroke="white" strokeWidth="1.5"/>
                </svg>
                <span className="text-sm font-semibold tracking-tight text-white">
                  Semar <span className="text-primary">Glass</span> Co.
                </span>
              </div>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">
              Bespoke architectural glass for the most discerning homes in Los Angeles.<br />
              Beverly Hills · Santa Monica · Malibu · Bel Air.
            </p>
          </div>
          <div>
            <a href="sms:+16576786742" className="ios-glass-btn inline-flex items-center gap-2 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest">
              Text +1 (657) 678-6742
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs text-zinc-500 mb-20 border-t border-white/10 pt-16 uppercase tracking-widest font-medium">
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Services</span>
            <Link href="#" className="hover:text-primary transition">Shower Screens</Link>
            <Link href="#" className="hover:text-primary transition">Glass Handrails</Link>
            <Link href="#" className="hover:text-primary transition">Glass Partitions</Link>
            <Link href="#" className="hover:text-primary transition">Repairs</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Areas</span>
            <Link href="#" className="hover:text-primary transition">Beverly Hills</Link>
            <Link href="#" className="hover:text-primary transition">Santa Monica</Link>
            <Link href="#" className="hover:text-primary transition">West Hollywood</Link>
            <Link href="#" className="hover:text-primary transition">Malibu</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Company</span>
            <Link href="#about" className="hover:text-primary transition">About Us</Link>
            <Link href="#gallery" className="hover:text-primary transition">Recent Work</Link>
            <Link href="#contact" className="hover:text-primary transition">Contact</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white mb-2">Contact</span>
            <span className="text-white">+1 (657) 678-6742</span>
            <span className="text-zinc-500">Los Angeles, CA</span>
            <span className="text-zinc-500">Residential & Commercial</span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Semar Glass Co. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

