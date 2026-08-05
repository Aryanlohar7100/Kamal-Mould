import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  Wrench, 
  Microscope, 
  BarChart3
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const QualitySection: React.FC = () => {
  
  const handleDownloadBrochure = () => {
    const brochureText = `
=====================================================
            KAMAL MOULDS - CORPORATE BROCHURE 2026
=====================================================
Proprietor: Mafatlal Manchaji Paradiya
GSTIN: ${COMPANY_DETAILS.gst}
Location: 136 & 137, Sahitya Industrial Hub, Gatrad Road, 
Bakrol Bujrang, Taluka Daskroi, Ahmedabad - 382430, Gujarat

PRODUCTS & TOOLING CAPABILITIES:
-----------------------------------------------------
1. Plastic Injection Moulds: Multi-cavity spoon moulds, toy moulds, die moulds (P20 Steel core/cavity).
2. Confectionery Candy Toys: Whistle candy filling toys, Umbrella gems toys (7.35g), Bullet bike toys, Rocket toys.
3. Eco Disposable Cutlery: PLA 100% compostable spoons & forks, Sugarcane Bagasse spoons, Corn starch cutlery.
4. Promotional & Educational Toys: Surprise egg toys (111 pcs/kg), Fidget spinners, Mini cricket bats.

QUALITY COMMITMENT:
- 1,000,000+ Shot Tooling Guarantee
- 100% Food-Grade Non-Toxic Polymers
- CNC Precision CAD/CAM Engineering
=====================================================
    `;

    const blob = new Blob([brochureText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kamal_Moulds_Corporate_Brochure_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="quality" className="py-24 bg-slate-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Defect Quality Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Quality Assurance & <span className="text-gradient-gold">Tooling Engineering</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every mould crafted and toy manufactured undergoes rigorous physical, chemical, and dimensional inspections to guarantee top-tier industrial performance.
          </p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Hardened P20 & H13 Steel Tooling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We exclusively use tested P20 and H13 mold steel with core hardness up to 32 HRC, assuring 1,000,000+ mold shot lifespans without dimensional deviation.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Food-Grade Virgin Polymers</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strictly non-toxic food-grade Polypropylene (PP) and Polystyrene (PS) used for all candy filling toys, ensuring child safety and zero chemical leaching.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Dimensional & Weight Uniformity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict tolerance controls maintain precise unit weights (e.g. exactly 7.35g per Umbrella toy), maximizing packing box filling accuracy.
            </p>
          </div>

        </div>

        {/* Download Corporate Brochure Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" /> Official Corporate Specification
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Download Kamal Moulds Corporate Brochure 2026
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Get detailed product parameters, mold steel grades, packing specs, and company credentials directly in one single specification document.
            </p>
          </div>

          <button
            onClick={handleDownloadBrochure}
            className="shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Brochure</span>
          </button>
        </div>

      </div>
    </section>
  );
};
