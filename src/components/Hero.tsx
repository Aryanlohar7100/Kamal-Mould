import React from 'react';
import heroImage from '../assets/hero.png';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Factory, 
  Award, 
  Clock, 
  CheckCircle2,
  Send
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenRfq: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenRfq }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-cyan-950/50 animate-pulse-glow">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Leading Manufacturer in Ahmedabad, Gujarat</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-400 font-bold">GST Verified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
              High-Precision <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Plastic Moulds</span> & <br className="hidden sm:inline" />
              <span className="text-gradient-gold">Confectionery Toys</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              We specialize in custom injection mold toolings, multi-cavity plastic die moulds, food-grade whistle candy filling toys, and 100% biodegradable PLA disposable cutlery. Engineering performance for India's leading confectionery brands.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>P20 Steel Injection Moulds</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Food Grade Toys</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PLA Bio-Cutlery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold px-7 py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Products Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenRfq}
                className="w-full sm:w-auto glass-card hover:bg-slate-800/80 text-white font-semibold px-6 py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Request Custom Quote</span>
              </button>
            </div>

            {/* Quick Contact & Response Rate Pill */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_DETAILS.responseRate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Sahitya Industrial Hub, Ahmedabad</span>
              </div>
            </div>

          </div>

          {/* Right Floating Visual Showcase Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Main Hero Photo Card featuring hero.png */}
              <div className="glass-card rounded-3xl p-3 shadow-2xl relative overflow-hidden group border border-cyan-500/30">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950">
                  <img 
                    src={heroImage} 
                    alt="Kamal Moulds Industrial Manufacturing & Confectionery Products" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Badges on Hero Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/40 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Factory className="w-3.5 h-3.5 text-cyan-400" /> ISO Certified Mould Tooling
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">Kamal Moulds® Manufacturing Hub</h4>
                        <p className="text-[11px] text-slate-400">High-Capacity Injection Tooling & Confectionery Toys</p>
                      </div>
                      <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-lg shrink-0">
                        122+ ITEMS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Sub Card - Precision Tooling */}
              <div className="glass-card rounded-2xl p-4 shadow-xl relative overflow-hidden group hover:border-cyan-400/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400">Multi-Cavity Precision Tooling</span>
                      <span className="bg-cyan-950 text-cyan-300 text-[10px] px-2 py-0.5 rounded-full font-bold">P20 Steel</span>
                    </div>
                    <p className="text-slate-400 text-[11px] mt-0.5">High speed cooling & 1M+ shots lifespan</p>
                  </div>
                </div>
              </div>

              {/* Featured Sub Card - Eco PLA Cutlery */}
              <div className="glass-card rounded-2xl p-4 shadow-xl relative overflow-hidden group hover:border-emerald-400/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">Compostable & Eco Cutlery</span>
                      <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold">100% Bio PLA</span>
                    </div>
                    <p className="text-slate-400 text-[11px] mt-0.5">Zero plastic residue, heat resistant up to 85°C</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stat Counter Grid */}
        <div className="mt-16 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-panel p-5 rounded-2xl text-center">
            <p className="text-3xl sm:text-4xl font-black text-gradient-cyan font-heading">50M+</p>
            <p className="text-slate-400 text-xs font-medium mt-1">Annual Toy Units Produced</p>
          </div>
          <div className="glass-panel p-5 rounded-2xl text-center">
            <p className="text-3xl sm:text-4xl font-black text-gradient-gold font-heading">100+</p>
            <p className="text-slate-400 text-xs font-medium mt-1">Custom Mould Designs</p>
          </div>
          <div className="glass-panel p-5 rounded-2xl text-center">
            <p className="text-3xl sm:text-4xl font-black text-gradient-emerald font-heading">100%</p>
            <p className="text-slate-400 text-xs font-medium mt-1">Food Grade Compliance</p>
          </div>
          <div className="glass-panel p-5 rounded-2xl text-center">
            <p className="text-3xl sm:text-4xl font-black text-cyan-400 font-heading">87%</p>
            <p className="text-slate-400 text-xs font-medium mt-1">Rapid Response Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
};
