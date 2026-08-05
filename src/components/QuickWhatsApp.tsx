import React from 'react';
import { MessageSquare, ShoppingCart } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface QuickWhatsAppProps {
  rfqCount: number;
  onOpenRfq: () => void;
}

export const QuickWhatsApp: React.FC<QuickWhatsAppProps> = ({ rfqCount, onOpenRfq }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Floating RFQ Cart Button */}
      <button
        onClick={onOpenRfq}
        className="relative bg-slate-900 border border-cyan-500/40 text-cyan-400 p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        title="View RFQ Quote Drawer"
      >
        <ShoppingCart className="w-5 h-5" />
        {rfqCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
            {rfqCount}
          </span>
        )}
      </button>

      {/* Floating WhatsApp Action */}
      <a
        href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=Hello%20Kamal%20Moulds,%20I%20am%20visiting%20your%20website%20and%20need%20a%20quote.`}
        target="_blank"
        rel="noreferrer"
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-3.5 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-110 transition-all duration-300 flex items-center gap-2 font-bold text-xs group"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden group-hover:inline pr-1 transition-all">WhatsApp Chat</span>
      </a>
    </div>
  );
};
