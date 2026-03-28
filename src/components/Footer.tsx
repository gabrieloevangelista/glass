import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="max-w-md mb-12 md:mb-0">
            <div className="mb-6">
              <div className="relative w-48 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Glass & Rails Logo" 
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">
              Professional shower screens, custom glass handrails, and glass partition installation services in Los Angeles. <br />
              Serving Beverly Hills, Santa Monica, and Greater LA.
            </p>
          </div>
          <div>
            <a href="sms:+16576786742" className="inline-block bg-white text-zinc-950 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/10 hover:text-white transition transform hover:-translate-y-1 border border-white/20">
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
          <div>© {new Date().getFullYear()} Glass & Rails. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

