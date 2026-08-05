import React, { useState, useEffect } from 'react';
import { 
  Boxes, 
  Search, 
  ShoppingCart, 
  PhoneCall, 
  Menu, 
  X, 
  Sparkles,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/products';

interface NavbarProps {
  rfqCount: number;
  onOpenRfq: () => void;
  onSelectCategory: (catId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  rfqCount,
  onOpenRfq,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-2xl py-3 border-b border-slate-800/80'
          : 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-900'
      }`}
    >
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-amber-950/50 border-b border-cyan-500/20 py-1.5 px-4 text-xs text-slate-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              GST No: {COMPANY_DETAILS.gst}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {COMPANY_DETAILS.responseRate}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY_DETAILS.gmaps}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              📍 Sahitya Industrial Hub, Ahmedabad, GJ
            </a>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=Hello%20Kamal%20Moulds,%20I%20want%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" /> WhatsApp Quick Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-amber-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Boxes className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                  KAMAL <span className="text-gradient-cyan">MOULDS</span>
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                Plastic Moulds & Candy Toys Manufacturer
              </p>
            </div>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <a 
                href="#products" 
                className="flex items-center gap-1 hover:text-cyan-400 py-2 transition-colors"
              >
                Products & Moulds
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </a>
              <div className="absolute top-full left-0 w-64 glass-panel rounded-xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-800 translate-y-2 group-hover:translate-y-0">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors flex items-center justify-between"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Company Profile
            </a>
            <a href="#quality" className="hover:text-cyan-400 transition-colors">
              Quality & Tooling
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact & Location
            </a>
          </nav>

          {/* Search & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Search Input Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search toys, molds, cutlery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-60 bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* RFQ Quote List Button */}
            <button
              onClick={onOpenRfq}
              className="relative bg-slate-900 border border-slate-700/80 hover:border-cyan-500/80 text-slate-200 hover:text-cyan-400 px-3.5 py-1.5 rounded-xl font-medium text-xs flex items-center gap-2 transition-all duration-300 shadow-md"
            >
              <ShoppingCart className="w-4 h-4 text-cyan-400" />
              <span>RFQ Quote</span>
              {rfqCount > 0 && (
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-1.5 py-0.5 rounded-full text-[10px] animate-bounce">
                  {rfqCount}
                </span>
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-slate-950 font-bold px-4 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRfq}
              className="relative p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              <ShoppingCart className="w-5 h-5 text-cyan-400" />
              {rfqCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {rfqCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-slate-800 py-4 px-4 space-y-3 mt-2 animate-fadeIn">
          {/* Mobile Search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >
            Home
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >
            Products Catalog
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >
            Company Profile
          </a>
          <a
            href="#quality"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >
            Tooling Quality
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >
            Contact & Maps
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full bg-slate-900 border border-cyan-500/40 text-cyan-400 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> View RFQ Cart ({rfqCount})
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-950 py-2 rounded-xl text-xs font-bold text-center"
            >
              Contact Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
