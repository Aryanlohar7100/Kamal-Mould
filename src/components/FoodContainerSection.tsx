import React from 'react';
import { 
  Box, 
  ArrowRight,
  Send
} from 'lucide-react';

interface FoodContainerSectionProps {
  onOpenRfq: () => void;
}

export const FoodContainerSection: React.FC<FoodContainerSectionProps> = ({ onOpenRfq }) => {
  return (
    <section className="py-24 bg-slate-900/40 relative overflow-hidden">
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Box className="w-3.5 h-3.5" />
            <span>Food Packaging Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Plastic Food Containers & <span className="text-gradient-cyan">Container Moulds</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            As specialists in Food Container Moulds (Catalog Page 10), we supply both finished food-grade container sets (110ml to 4800ml) and high-speed injection moulds for food packaging manufacturers.
          </p>
        </div>

        {/* Spec Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Round Containers Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <span className="bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-extrabold px-3 py-1 rounded-full">
                CATALOG ITEM #119
              </span>
              <span className="text-xs text-slate-400 font-medium">100% Leak-Proof Lid Fit</span>
            </div>

            <h3 className="text-xl font-bold text-white font-heading">
              Round Food Containers & Moulds (110ml – 3000ml)
            </h3>
            
            <p className="text-slate-300 text-xs leading-relaxed">
              Available sizes: <strong>110ml, 300ml, 400ml, 450ml, 650ml, 750ml, 1000ml, 1250ml, 1500ml, 1750ml, 2000ml, 2500ml, 3000ml</strong>. Manufactured with virgin food-grade Polypropylene (PP).
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Microwave Safe</span>
                <span className="text-slate-200 font-bold mt-0.5 block">Up to 120°C</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Injection Mould Steel</span>
                <span className="text-cyan-400 font-bold mt-0.5 block">Hardened P20 Steel</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-amber-400 font-semibold">Ready Mould Tryout Available</span>
              <button
                onClick={onOpenRfq}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>Get Container Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Rectangular Containers Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <span className="bg-amber-950 text-amber-400 border border-amber-500/30 text-xs font-extrabold px-3 py-1 rounded-full">
                CATALOG ITEM #120
              </span>
              <span className="text-xs text-slate-400 font-medium">Meal Delivery & Sweets</span>
            </div>

            <h3 className="text-xl font-bold text-white font-heading">
              Rectangular Food Containers (250ml – 4800ml)
            </h3>

            <p className="text-slate-300 text-xs leading-relaxed">
              Available capacities: <strong>250ml, 300ml, 450ml, 500ml, 600ml, 625ml, 750ml, 800ml, 1000ml, 1250ml, 1500ml, 1750ml, 2000ml, 2500ml, 3000ml, 3500ml, 4000ml, 4800ml</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Sealing Fit</span>
                <span className="text-slate-200 font-bold mt-0.5 block">Hermetic Snap Lock</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Stackability</span>
                <span className="text-amber-400 font-bold mt-0.5 block">High Column Load</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-semibold">Bulk Export Orders Accepted</span>
              <button
                onClick={onOpenRfq}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>Request Mould CAD</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
