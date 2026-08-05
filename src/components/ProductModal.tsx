import React from 'react';
import type { Product } from '../data/products';
import { COMPANY_DETAILS } from '../data/products';
import { 
  X, 
  CheckCircle2, 
  Plus, 
  Check, 
  MessageSquare, 
  Layers,
  Building2
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToRfq: (product: Product) => void;
  isInRfq: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToRfq,
  isInRfq
}) => {
  if (!product) return null;

  const whatsappMessage = `Hello Kamal Moulds, I am interested in your product "${product.name}" (ID: ${product.id}). Please send me the price list and technical catalog.`;
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl max-h-[94vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="p-3.5 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
              {product.categoryLabel}
            </span>
            {product.isEcoFriendly && (
              <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                100% Compostable
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Product Image Preview */}
            <div className="md:col-span-5 relative">
              <div className="w-full h-64 md:h-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-semibold text-slate-300 border border-slate-800">
                  Manufacturer: Kamal Moulds (Ahmedabad)
                </div>
              </div>
            </div>

            {/* Product Details & Specs */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {product.name}
                </h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800/80 space-y-2.5">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    val ? (
                      <div key={key} className="bg-slate-900/60 p-2 rounded-xl border border-slate-800/50">
                        <span className="text-slate-500 uppercase text-[10px] font-bold block">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-slate-200 font-semibold mt-0.5 block truncate">
                          {val}
                        </span>
                      </div>
                    ) : null
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Key Quality Features
                </h4>
                <div className="space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Direct Manufacturer Quote Guarantee</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Instant Inquiry</span>
            </a>

            <button
              onClick={() => onAddToRfq(product)}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                isInRfq
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
              }`}
            >
              {isInRfq ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span>{isInRfq ? 'In RFQ List' : 'Add to RFQ Quote'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
