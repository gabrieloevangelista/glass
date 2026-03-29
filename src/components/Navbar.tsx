"use client";
import { useState } from 'react';
import { Square, Phone, Menu, X, ArrowRight, ShowerHead } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 bg-white/95 backdrop-blur-md text-zinc-950">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          {/* Icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="none" stroke="#47869C" strokeWidth="1.5"/>
            <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="none" stroke="#47869C" strokeWidth="1" opacity="0.5"/>
            <line x1="14" y1="2" x2="14" y2="7" stroke="#47869C" strokeWidth="1.5"/>
            <line x1="26" y1="9" x2="21" y2="11" stroke="#47869C" strokeWidth="1.5"/>
            <line x1="26" y1="19" x2="21" y2="17" stroke="#47869C" strokeWidth="1.5"/>
            <line x1="14" y1="26" x2="14" y2="21" stroke="#47869C" strokeWidth="1.5"/>
            <line x1="2" y1="19" x2="7" y2="17" stroke="#47869C" strokeWidth="1.5"/>
            <line x1="2" y1="9" x2="7" y2="11" stroke="#47869C" strokeWidth="1.5"/>
          </svg>
          {/* Wordmark */}
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            Semar <span className="text-primary">Glass</span> Co.
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide text-zinc-500">
          <Link href="#services" className="hover:text-zinc-950 transition-colors">Services</Link>
          <Link href="#about" className="hover:text-zinc-950 transition-colors">Why Us</Link>
          <Link href="#gallery" className="hover:text-zinc-950 transition-colors">Recent Work</Link>
          <Link href="#contact" className="hover:text-zinc-950 transition-colors">Contact</Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="sms:+16576786742" className="hidden md:flex items-center gap-2 bg-zinc-950 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-colors">
            <Phone size={14} strokeWidth={1.5} />
            +1 (657) 678-6742
          </a>
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden text-zinc-500 hover:text-zinc-950 transition-colors z-50">
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 mobile-menu md:hidden h-screen transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-2xl font-light tracking-tight text-zinc-900">
          <Link href="#services" onClick={closeMenu} className="border-b border-zinc-100 pb-4 flex justify-between items-center group">
            <span>Services</span>
            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
          </Link>
          <Link href="#about" onClick={closeMenu} className="border-b border-zinc-100 pb-4 flex justify-between items-center group">
            <span>Why Choose Us</span>
            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
          </Link>
          <Link href="#gallery" onClick={closeMenu} className="border-b border-zinc-100 pb-4 flex justify-between items-center group">
            <span>Gallery</span>
            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
          </Link>
          <Link href="#contact" onClick={closeMenu} className="border-b border-zinc-100 pb-4 flex justify-between items-center group">
            <span>Contact</span>
            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
          </Link>
        </div>
        <div className="mt-auto mb-12 flex flex-col gap-4">
          <a href="sms:+16576786742" className="w-full py-4 bg-zinc-950 text-white text-center uppercase text-xs font-semibold tracking-widest rounded-full">
            Text +1 (657) 678-6742
          </a>
        </div>
      </div>
    </nav>
  );
}
