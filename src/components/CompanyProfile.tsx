import React from 'react';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  Factory, 
  Globe2, 
  Cpu
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Manufacturing Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            About <span className="text-gradient-cyan">Kamal Moulds</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Established under the vision of <strong className="text-slate-200">{COMPANY_DETAILS.proprietor}</strong>, we have grown into one of Gujarat's premier plastic tooling and confectionery toy manufacturing facilities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Cards Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Factory className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sahitya Industrial Hub Setup</h3>
                  <p className="text-xs text-slate-400">Bakrol Bujrang, Daskroi, Ahmedabad, Gujarat</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Spanning units 136 & 137, our plant houses state-of-the-art high speed CNC mills, EDM spark erosion units, and heavy-duty automatic injection moulding machines delivering non-stop batch production.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl text-left border border-slate-800">
                <Cpu className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Advanced CAD/CAM</h4>
                <p className="text-slate-400 text-[11px] mt-1">3D precision tool paths & cavity flow simulations.</p>
              </div>

              <div className="glass-panel p-5 rounded-2xl text-left border border-slate-800">
                <Globe2 className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Global Export Ready</h4>
                <p className="text-slate-400 text-[11px] mt-1">Export quality packing & international compliance.</p>
              </div>
            </div>
          </div>

          {/* Right Detailed Stats & Company Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Company Overview & Key Specs
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Proprietor</span>
                  <span className="text-slate-200 font-bold mt-0.5 block">{COMPANY_DETAILS.proprietor}</span>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">GST Identification</span>
                  <span className="text-cyan-400 font-bold mt-0.5 block">{COMPANY_DETAILS.gst}</span>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Nature of Business</span>
                  <span className="text-slate-200 font-bold mt-0.5 block">Manufacturer & Exporter</span>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Primary Products</span>
                  <span className="text-amber-400 font-bold mt-0.5 block">Moulds, Candy Toys & PLA Cutlery</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>100% Food Grade Material:</strong> All confectionery toys are produced using virgin non-toxic polymers adhering to strict hygiene standards.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Eco-Friendly Green Initiative:</strong> Pioneering 100% compostable bio-spoons and sugarcane bagasse disposable cutlery to replace single-use plastics.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Rapid Response:</strong> Maintains an 87% quick response rate for custom client inquiries and tooling estimates.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
