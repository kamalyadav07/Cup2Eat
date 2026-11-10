import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "919876543210"; // Placeholder configurable number
  const defaultMessage = encodeURIComponent("Hi CUP2EAT team! I'm interested in ordering edible biscuit cups.");
  const url = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Small Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#021C15] text-white border border-[#0e4333] px-3.5 py-2 rounded-full shadow-2xl text-xs backdrop-blur-md animate-in fade-in duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-medium text-[#F5E5C7]">Quick B2B & Bulk Enquiries</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss WhatsApp tooltip"
            className="text-white/40 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with CUP2EAT"
        className="relative w-13 h-13 rounded-full bg-[#25D366] text-[#021C15] flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 cursor-pointer group"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F5BD54] rounded-full border-2 border-[#021C15]" />
      </a>
    </div>
  );
}

