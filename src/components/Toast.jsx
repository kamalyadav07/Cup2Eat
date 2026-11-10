import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="pointer-events-auto bg-[#042017] border border-[#F5BD54]/40 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-full bg-[#F5BD54] text-[#021C15] flex items-center justify-center flex-shrink-0 font-bold">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-xs text-[#F5E5C7] leading-snug flex-1">
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}

