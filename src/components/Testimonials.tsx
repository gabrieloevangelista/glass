"use client";

import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  { 
    name: "Sarah J.", 
    role: "Homeowner, Beverly Hills", 
    text: "The frameless shower screen completely transformed our bathroom. Professional installation and looks amazing.",
    stars: 5
  },
  { 
    name: "Michael T.", 
    role: "Client, Santa Monica", 
    text: "Great price and excellent workmanship on our new glass railing. They left the place spotless afterwards.",
    stars: 5
  },
  { 
    name: "Emily R.", 
    role: "Designer, West Hollywood", 
    text: "We use Glass & Rails for all our high-end residential projects. Their attention to detail is unmatched in LA.",
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between items-start mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">What Locals Say</h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 border border-zinc-300 bg-white rounded-full flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-600 transition duration-300"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 border border-zinc-300 bg-white rounded-full flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-600 transition duration-300"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div 
            className="flex w-full transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="min-w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-opacity duration-500"
                style={{ opacity: currentIndex === i ? 1 : 0.3 }}
              >
                <div className="md:col-span-12 bg-white p-12 md:p-16 border border-zinc-200 rounded-sm shadow-sm">
                  <div className="flex gap-1 text-blue-500 mb-6">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={20} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-2xl text-zinc-800 leading-tight font-light tracking-tight mb-8">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
                    <div className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">{t.name}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
