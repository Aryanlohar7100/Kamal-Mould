import { useState } from 'react';
import type { Product } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { PdfCatalogShowcase } from './components/PdfCatalogShowcase';
import { FoodContainerSection } from './components/FoodContainerSection';
import { ProductModal } from './components/ProductModal';
import { RfqDrawer } from './components/RfqDrawer';
import { CompanyProfile } from './components/CompanyProfile';
import { QualitySection } from './components/QualitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickWhatsApp } from './components/QuickWhatsApp';
import { CheckCircle2 } from 'lucide-react';

interface RfqItem {
  product: Product;
  quantity: number;
}

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqItems, setRfqItems] = useState<RfqItem[]>([]);
  const [isRfqOpen, setIsRfqOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToRfq = (product: Product) => {
    setRfqItems((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        return prev.filter((item) => item.product.id !== product.id);
      }
      return [...prev, { product, quantity: 5000 }];
    });

    const isAlreadyIn = rfqItems.some((item) => item.product.id === product.id);
    if (!isAlreadyIn) {
      showToast(`Added "${product.name}" to RFQ Quote list!`);
    } else {
      showToast(`Removed "${product.name}" from RFQ list.`);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setRfqItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveRfqItem = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearRfq = () => {
    setRfqItems([]);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 border border-cyan-500/50 text-cyan-300 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        rfqCount={rfqItems.length}
        onOpenRfq={() => setIsRfqOpen(true)}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onExploreProducts={handleExploreProducts}
          onOpenRfq={() => setIsRfqOpen(true)}
        />

        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToRfq={handleAddToRfq}
          rfqItems={rfqItems}
        />

        {/* Dedicated PDF Catalog Section */}
        <PdfCatalogShowcase
          onAddToRfq={handleAddToRfq}
          rfqItems={rfqItems}
        />

        {/* Dedicated Food Container & Mould Section */}
        <FoodContainerSection
          onOpenRfq={() => setIsRfqOpen(true)}
        />

        <CompanyProfile />

        <QualitySection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={setSelectedCategory} />

      {/* Product Specification Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToRfq={handleAddToRfq}
        isInRfq={selectedProduct ? rfqItems.some((i) => i.product.id === selectedProduct.id) : false}
      />

      {/* RFQ Quotation Drawer */}
      <RfqDrawer
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        items={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveRfqItem}
        onClearAll={handleClearRfq}
      />

      {/* Floating Action Button */}
      <QuickWhatsApp
        rfqCount={rfqItems.length}
        onOpenRfq={() => setIsRfqOpen(true)}
      />

    </div>
  );
}

export default App;
