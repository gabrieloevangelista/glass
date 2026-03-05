"use client";
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., Server Actions or API route)
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -skew-x-12 translate-x-32 hidden lg:block z-0"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <span className="text-blue-600 font-medium tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-8">Let's Discuss Your Project</h2>
            <p className="text-zinc-600 text-lg font-light mb-12 max-w-md leading-relaxed">
              Ready to transform your bathroom? Contact us for a free, no-obligation quote. We're here to help with all your custom glass needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Call Us</h4>
                  <p className="text-zinc-500 font-light mb-1">Mon-Fri from 7am to 5pm</p>
                  <a href="tel:3105550123" className="text-blue-600 font-medium hover:underline">(310) 555-0123</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Email Us</h4>
                  <p className="text-zinc-500 font-light mb-1">Send us your details anytime</p>
                  <a href="mailto:info@glassboxdesign.com" className="text-blue-600 font-medium hover:underline">info@glassboxdesign.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Service Area</h4>
                  <p className="text-zinc-500 font-light">Los Angeles, Beverly Hills, Santa Monica & Surrounds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-zinc-100 animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700">Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-zinc-50/50" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-zinc-50/50" placeholder="(310) xxx-xxxx" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-zinc-50/50" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-zinc-700">Service Needed</label>
                <select id="service" className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-zinc-50/50">
                  <option value="shower-screens">Shower Screens</option>
                  <option value="mirrors">Mirrors</option>
                  <option value="splashbacks">Splashbacks</option>
                  <option value="installation">Full Installation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-zinc-50/50 resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
