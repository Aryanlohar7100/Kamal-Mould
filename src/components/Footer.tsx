import React from 'react';
import { 
  Boxes, 
  ArrowUp, 
  MessageSquare
} from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/products';

interface FooterProps {
  onSelectCategory: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-amber-500 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Boxes className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                KAMAL <span className="text-gradient-cyan">MOULDS</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premier manufacturer, wholesaler, exporter and importer of high-precision plastic moulds, confectionery candy filling toys, and 100% biodegradable PLA eco cutlery based in Ahmedabad, Gujarat.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <p><strong className="text-slate-300">GSTIN:</strong> {COMPANY_DETAILS.gst}</p>
              <p><strong className="text-slate-300">Proprietor:</strong> {COMPANY_DETAILS.proprietor}</p>
              <p><strong className="text-slate-300">Location:</strong> Bakrol Bujrang, Ahmedabad, GJ</p>
            </div>
          </div>

          {/* Categories Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Company Sitemap
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Products Range</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Company Profile</a></li>
              <li><a href="#quality" className="hover:text-amber-400 transition-colors">Quality & Tooling</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Factory Location</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Factory Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=Hello%20Kamal%20Moulds`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:underline font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Quick Chat</span>
              </a>
              <a href={COMPANY_DETAILS.gmaps} target="_blank" rel="noreferrer" className="block hover:text-white">
                📍 Sahitya Industrial Hub, Ahmedabad
              </a>
              <p className="text-[11px] text-slate-500">Response Rate: {COMPANY_DETAILS.responseRate}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kamal Moulds. All Rights Reserved. Manufactured in Ahmedabad, Gujarat, India.</p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
