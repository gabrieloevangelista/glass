"use client";
import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtagReportConversion(url?: string) {
  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18067294664/8-TkCMKS6Z8cEMiTlKdD',
      event_callback: callback,
    });
  } else {
    callback();
  }
  return false;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'shower-screens',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const isMobileDevice = () => {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent || '';
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage = `Hello, I'm ${formData.name}. I'm interested in ${formData.service}. \n\nDetails:\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);

    let targetUrl: string;

    if (isMobileDevice()) {
      targetUrl = `sms:+16576786742?&body=${encodedMessage}`;
    } else {
      const subject = encodeURIComponent(`New Quote Request - ${formData.name}`);
      targetUrl = `mailto:info@semarglass.com?subject=${subject}&body=${encodedMessage}`;
    }

    gtagReportConversion(targetUrl);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -skew-x-12 translate-x-32 hidden lg:block z-0"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-8">Let's Talk About Your Project</h2>
            <p className="text-zinc-600 text-lg font-light mb-12 max-w-md leading-relaxed">
              Tell us what you have in mind and we'll take it from there. We're quick to respond and happy to walk you through the options.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Direct Line</h4>
                  <p className="text-zinc-500 font-light mb-1">Mon to Fri, 7am to 5pm</p>
                  <a href="sms:+16576786742" className="text-primary font-medium hover:underline">+1 (657) 678-6742</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Email</h4>
                  <p className="text-zinc-500 font-light mb-1">We get back to you within one business day</p>
                  <a href="mailto:info@semarglass.com" className="text-primary font-medium hover:underline">info@semarglass.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Where We Work</h4>
                  <p className="text-zinc-500 font-light">Los Angeles, Beverly Hills, Santa Monica, Malibu and Bel Air</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-zinc-100 animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-zinc-50/50" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-zinc-50/50" 
                    placeholder="(657) xxx-xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-zinc-50/50" 
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-zinc-700">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-zinc-50/50"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="shower-screens">Shower Screens</option>
                  <option value="glass-handrails">Glass Handrails</option>
                  <option value="glass-partitions">Glass Partitions</option>
                  <option value="installation">Full Installation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-zinc-50/50 resize-none" 
                  placeholder="Describe your project, space, or vision..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                <Send size={18} />
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
