import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Compass, 
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Confectionery Products',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Factory Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Get In Touch For <span className="text-gradient-cyan">Best Bulk Deals</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Reach out directly to our plant in Sahitya Industrial Hub, Ahmedabad. We offer custom tooling design, rapid prototyping, and nationwide delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-5 text-left">
              <h3 className="text-lg font-bold text-white font-heading">
                Plant Location & Contact Info
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[10px] block">Factory Address</span>
                    <p className="text-slate-200 font-medium mt-0.5 leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-950 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[10px] block">Proprietor & GST</span>
                    <p className="text-slate-200 font-medium mt-0.5">
                      {COMPANY_DETAILS.proprietor} | <span className="text-amber-400 font-bold">GST: {COMPANY_DETAILS.gst}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[10px] block">Quick WhatsApp & Calls</span>
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=Hello%20Kamal%20Moulds,%20I%20want%20to%20inquire%20about%20your%20products.`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 font-bold hover:underline mt-0.5 inline-block"
                    >
                      Click to chat on WhatsApp ({COMPANY_DETAILS.phones[0]})
                    </a>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Office Lines: {COMPANY_DETAILS.phones.join(' | ')}
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_DETAILS.gmaps}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Embedded Google Maps Preview Frame */}
            <div className="w-full h-56 rounded-3xl overflow-hidden border border-slate-800 glass-panel relative">
              <iframe
                title="Kamal Moulds Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.484920042456!2d72.7213513!3d22.98838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8654c60a9c63%3A0x6b63d9178f2441!2sSahitya%20Industrial%20Hub!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 text-left relative">
              
              <h3 className="text-xl font-bold text-white font-heading mb-2">
                Send Direct Online Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to receive customized pricing and CAD design estimates within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Submitted!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you <span className="text-cyan-400 font-bold">{formData.name}</span>. Our representative will contact you on <span className="text-amber-400 font-bold">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Product Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      >
                        <option>Confectionery Candy Toys</option>
                        <option>Eco PLA Cutlery & Spoons</option>
                        <option>Plastic Injection Spoon Moulds</option>
                        <option>Custom Plastic Moulding Dies</option>
                        <option>Promotional Toys</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Detailed Message / Specs *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your required quantities, mold cavities, target price, or delivery destination..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Factory Inquiry Now</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
