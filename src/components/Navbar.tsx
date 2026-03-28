"use client";
import { useState } from 'react';
import { Square, Phone, Menu, X, ArrowRight, ShowerHead } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-10 md:w-56 md:h-12 hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Glass & Rails Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
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
          <a href="sms:+16576786742" className="hidden md:flex items-center gap-2 bg-zinc-950 text-white px-4 py-2 rounded-sm text-xs font-semibold hover:bg-zinc-800 transition-colors">
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
          <a href="sms:+16576786742" className="w-full py-4 bg-zinc-950 text-white text-center uppercase text-xs font-semibold tracking-widest rounded-sm">
            Text +1 (657) 678-6742
          </a>
        </div>
      </div>
    </nav>
  );
}
