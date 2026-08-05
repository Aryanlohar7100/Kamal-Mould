import React, { useState } from 'react';
import type { Product } from '../data/products';
import { COMPANY_DETAILS } from '../data/products';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  FileText, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  PackageCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RfqItem {
  product: Product;
  quantity: number;
}

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: RfqItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const RfqDrawer: React.FC<RfqDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    if (items.length === 0) return;

    let text = `*OFFICIAL RFQ QUOTATION REQUEST*\n`;
    text += `*To:* Kamal Moulds (Ahmedabad)\n`;
    if (buyerName) text += `*From:* ${buyerName}\n`;
    if (companyName) text += `*Company:* ${companyName}\n`;
    if (phone) text += `*Phone:* ${phone}\n`;
    if (gstNumber) text += `*GST:* ${gstNumber}\n`;
    text += `\n*REQUIRED PRODUCTS & QUANTITIES:*\n`;

    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} - *Qty:* ${item.quantity.toLocaleString()} units\n`;
      if (item.product.specs.material) text += `   - Material: ${item.product.specs.material}\n`;
    });

    if (notes) text += `\n*Custom Requirements / Mold Notes:* ${notes}\n`;
    text += `\nPlease reply with your best wholesale rates & lead time.`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmitOnline = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || items.length === 0) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full sm:w-screen sm:max-w-md glass-panel border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white font-heading">
                Request For Quote (RFQ)
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  RFQ Received Successfully!
                </h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Thank you <span className="text-cyan-400 font-bold">{buyerName || 'Valued Client'}</span>. Our sales engineer from Sahitya Industrial Hub will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClearAll();
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-cyan-500 text-slate-950 rounded-xl font-bold text-xs"
                >
                  Close Drawer
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <FileText className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-base font-bold text-white">Your RFQ List is Empty</h3>
                <p className="text-xs text-slate-400">
                  Browse our products catalog and click "Add to Quote" to build your bulk inquiry list.
                </p>
              </div>
            ) : (
              <>
                {/* Product List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-800">
                    <span>Selected Items ({items.length})</span>
                    <button
                      onClick={onClearAll}
                      className="text-red-400 hover:text-red-300 text-[11px]"
                    >
                      Clear All
                    </button>
                  </div>

                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center gap-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-slate-900 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {product.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 truncate">
                          {product.specs.material || product.categoryLabel}
                        </p>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(product.id, Math.max(1000, quantity - 1000))}
                            className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-cyan-400 min-w-[60px] text-center">
                            {quantity.toLocaleString()} pcs
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity + 1000)}
                            className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Buyer Form Information */}
                <form onSubmit={handleSubmitOnline} className="space-y-3 pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Buyer & Company Details
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Star Confectioneries Pvt Ltd"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-400 mb-1">Mobile / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 9876543210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">GST Number (Optional)</label>
                        <input
                          type="text"
                          placeholder="24AAAAA0000A1Z5"
                          value={gstNumber}
                          onChange={(e) => setGstNumber(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Custom Notes / Specs</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Need custom logo mold or specific packaging box..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 space-y-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send RFQ Quote via WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Inquiry</span>
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
