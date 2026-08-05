import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { 
  Search, 
  Plus, 
  Check, 
  Eye, 
  Sparkles, 
  Grid, 
  List, 
  Leaf, 
  Package
} from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  rfqItems: { product: Product; quantity: number }[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  onAddToRfq,
  rfqItems
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filtering products
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.specs.material && item.specs.material.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.specs.productType && item.specs.productType.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const isInRfq = (productId: string) => {
    return rfqItems.some((item) => item.product.id === productId);
  };

  return (
    <section id="products" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Full Manufacturing Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Our Products & <span className="text-gradient-cyan">Tooling Range</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Explore our comprehensive range of high-precision plastic moulds, confectionery toy containers, and compostable PLA cutlery engineered in Ahmedabad.
            </p>
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products or materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <div className="hidden sm:flex bg-slate-950 p-1 rounded-xl border border-slate-800 gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.id === 'disposable-cutlery' && <Leaf className="w-3.5 h-3.5" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Display */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800">
            <Package className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-slate-400 text-xs mt-1">
              Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-cyan-500 text-slate-950 rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const added = isInRfq(product.id);
              return (
                <div
                  key={product.id}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col group relative border border-slate-800 hover:border-cyan-500/40"
                >
                  {/* Image & Badges */}
                  <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {product.itemNo && (
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md shadow-md">
                          #{product.itemNo}
                        </span>
                      )}
                      <span className="bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {product.categoryLabel}
                      </span>
                      {product.isPopular && (
                        <span className="bg-amber-500/90 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" /> Popular
                        </span>
                      )}
                      {product.isEcoFriendly && (
                        <span className="bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Leaf className="w-2.5 h-2.5" /> Eco PLA
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specs snippet pills */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.specs.material && (
                          <span className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded">
                            Mat: {product.specs.material}
                          </span>
                        )}
                        {product.specs.toyShape && (
                          <span className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded">
                            Shape: {product.specs.toyShape}
                          </span>
                        )}
                        {product.specs.moq && (
                          <span className="bg-slate-950 border border-slate-800 text-amber-400 text-[10px] px-2 py-0.5 rounded">
                            MOQ: {product.specs.moq}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Specs</span>
                      </button>

                      <button
                        onClick={() => onAddToRfq(product)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                          added
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added to RFQ
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> Add to Quote
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredProducts.map((product) => {
              const added = isInRfq(product.id);
              return (
                <div
                  key={product.id}
                  className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 hover:border-cyan-500/40"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-xl object-cover bg-slate-950 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase">
                          {product.categoryLabel}
                        </span>
                        {product.isEcoFriendly && (
                          <span className="text-[10px] font-bold text-emerald-400">
                            • Eco PLA
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-xs mt-1 line-clamp-1 max-w-xl">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl border border-slate-800 flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" /> Details
                    </button>
                    <button
                      onClick={() => onAddToRfq(product)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        added
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                      }`}
                    >
                      {added ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{added ? 'In Quote' : 'Add to RFQ'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
