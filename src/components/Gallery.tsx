"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    image: "/images/freepik__glass-shower-box-corner-installation-frameless-gla__63816.png",
    category: "Shower Enclosure",
    title: "Frameless Glass Shower",
    location: "Beverly Hills, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-frameless-clear-tempered-glass-ch__63815.png",
    category: "Glass Handrails",
    title: "Custom Staircase Railing",
    location: "Santa Monica, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-frosted-glass-panels-brushed-nick__63814.png",
    category: "Glass Partitions",
    title: "Modern Office Partition",
    location: "West Hollywood, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-corner-installation-frameless-gla__63817.png",
    category: "Shower Enclosure",
    title: "Corner Shower Setup",
    location: "Malibu, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-installing-sliding-glass-door-ass__63821.png",
    category: "Shower Enclosure",
    title: "Sliding Glass Door",
    location: "Venice Beach, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-installing__63819.png",
    category: "Installation",
    title: "Custom Glass Fitting",
    location: "Bel Air, CA"
  },
  {
    image: "/images/freepik__glass-shower-box__63818.png",
    category: "Shower Enclosure",
    title: "Modern Glass Design",
    location: "Brentwood, CA"
  },
  {
    image: "/images/WhatsApp Image 2026-03-05 at 20.19.35.jpeg",
    category: "Custom Glass Work",
    title: "Luxury Bathroom",
    location: "Beverly Hills, CA"
  },
  {
    image: "/images/WhatsApp Image 2026-03-05 at 20.19.38 (1).jpeg",
    category: "Shower Enclosure",
    title: "Frameless Design",
    location: "Santa Monica, CA"
  },
  {
    image: "/images/WhatsApp Image 2026-03-05 at 20.19.38.jpeg",
    category: "Glass Partitions",
    title: "Modern Interior",
    location: "West Hollywood, CA"
  },
  {
    image: "/images/freepik__a-lone-contractor-of-south-asian-descent-wearing-a__63822.png",
    category: "Installation",
    title: "Expert Team",
    location: "Los Angeles, CA"
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-on-scroll">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Our Portfolio</span>
            </div>
            <h2 className="text-4xl font-medium tracking-tight">Recent Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-on-scroll"
              onClick={() => openLightbox(index)}
            >
              <div className="relative bg-zinc-100 aspect-[4/3] rounded-sm mb-6 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="transition duration-700 group-hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-900 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 hover:bg-black/40 rounded-full"
          >
            <ChevronLeft size={40} />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 hover:bg-black/40 rounded-full"
          >
            <ChevronRight size={40} />
          </button>

          <div 
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              priority
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-xl font-medium">{projects[currentIndex].title}</h3>
              <p className="text-sm text-white/70 mt-1">{projects[currentIndex].category} — {projects[currentIndex].location}</p>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 text-white/50 text-sm font-mono">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      )}
    </section>
  );
}
