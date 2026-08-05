import React, { useState } from 'react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { 
  Plus, 
  Check, 
  BookOpen
} from 'lucide-react';

interface PdfCatalogShowcaseProps {
  onAddToRfq: (product: Product) => void;
  rfqItems: { product: Product; quantity: number }[];
}

export const PdfCatalogShowcase: React.FC<PdfCatalogShowcaseProps> = ({
  onAddToRfq,
  rfqItems
}) => {
  const [activePage, setActivePage] = useState<number>(2);

  // Group products by page range matching the official PDF brochure
  const getPageProducts = (page: number) => {
    switch (page) {
      case 2:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 1 && p.itemNo <= 15);
      case 3:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 16 && p.itemNo <= 30);
      case 4:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 31 && p.itemNo <= 45);
      case 5:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 46 && p.itemNo <= 60);
      case 6:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 61 && p.itemNo <= 75);
      case 7:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 76 && p.itemNo <= 90);
      case 8:
      case 9:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 91 && p.itemNo <= 118);
      case 10:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 119 && p.itemNo <= 122);
      default:
        return PRODUCTS.filter((p) => p.itemNo && p.itemNo >= 1 && p.itemNo <= 15);
    }
  };

  const currentProducts = getPageProducts(activePage);

  const isInRfq = (productId: string) => {
    return rfqItems.some((item) => item.product.id === productId);
  };

  return (
    <section id="pdf-catalog" className="py-20 bg-slate-950 relative overflow-hidden border-t border-b border-slate-900">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Print Brochure Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Browse By <span className="text-gradient-cyan">Catalog Page (#1 to #122)</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Select catalog pages matching our official <strong className="text-amber-400">{COMPANY_DETAILS.iso}</strong> printed brochure to view exact item numbers and specifications.
          </p>
        </div>

        {/* Page Selector Tabs */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto sm:flex-wrap pb-3 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
          {[
            { page: 2, label: 'Page 2: Umbrella & Egg Toys (#1-#15)' },
            { page: 3, label: 'Page 3: Pipes & Furfuri (#16-#30)' },
            { page: 4, label: 'Page 4: Sticks & Injections (#31-#45)' },
            { page: 5, label: 'Page 5: Target Sets & Whistles (#46-#60)' },
            { page: 6, label: 'Page 6: Spinners & Bikes (#61-#75)' },
            { page: 7, label: 'Page 7: Ludo & Badges (#76-#90)' },
            { page: 8, label: 'Page 8-9: PLA Bio Cutlery (#91-#118)' },
            { page: 10, label: 'Page 10: Food Containers (#119-#122)' }
          ].map((tab) => {
            const isActive = activePage === tab.page;
            return (
              <button
                key={tab.page}
                onClick={() => setActivePage(tab.page)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards for active page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => {
            const added = isInRfq(product.id);
            return (
              <div
                key={product.id}
                className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-black px-2.5 py-0.5 rounded-md">
                      CATALOG ITEM #{product.itemNo}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <div className="h-40 w-full bg-slate-950 rounded-xl overflow-hidden mb-3 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.specs.material && (
                      <span className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded">
                        Material: {product.specs.material}
                      </span>
                    )}
                    {product.specs.capacities && (
                      <span className="bg-slate-950 border border-slate-800 text-cyan-400 text-[10px] px-2 py-0.5 rounded font-bold">
                        Cap: {product.specs.capacities}
                      </span>
                    )}
                    {product.specs.moq && (
                      <span className="bg-slate-950 border border-slate-800 text-amber-400 text-[10px] px-2 py-0.5 rounded">
                        MOQ: {product.specs.moq}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => onAddToRfq(product)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      added
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added to RFQ List
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Add Item #{product.itemNo} to Quote
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
