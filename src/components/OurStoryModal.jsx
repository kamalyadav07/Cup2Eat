import React from 'react';
import { motion } from 'framer-motion';
import { X, Heart, Sparkles, Leaf, CheckCircle2, Award } from 'lucide-react';

export default function OurStoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#021C15] text-white border border-[#0e4333] rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close story modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#F5BD54] uppercase tracking-wider bg-[#062C20] px-3 py-1 rounded-full border border-[#0e4333]">
                The CUP2EAT Origin Story
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mt-2">
                Why throw away your cup when you can eat it?
              </h3>
              <p className="font-handwriting text-2xl text-[#F5BD54]">
                "Turning coffee waste into a crunchy celebration."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#0e4333]">
                <img
                  src="/assets/lifestyle-holding-cup.png"
                  alt="Holding CUP2EAT cup"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#0e4333]">
                <img
                  src="/assets/occasion-cafes.png"
                  alt="Café table setting"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#F5E5C7]/85 leading-relaxed">
              <p>
                Every single day, over <strong>16 billion paper cups</strong> are discarded worldwide. Most people don’t realise that standard paper cups are coated with a hidden polyethylene plastic lining, preventing them from decomposing and making them nearly impossible to recycle.
              </p>
              <p>
                We asked a simple, playful question: <em>What if the vessel holding your beverage was as delicious as the drink itself?</em>
              </p>
              <p>
                After months of baking experiments, thermal testing, and flavour curation, <strong>CUP2EAT</strong> was born: a 100% vegetarian, all-natural wafer cup that stays crisp for over 40 minutes with piping hot beverages, then delivers a deeply satisfying crunch at the very end.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10 text-center text-xs">
              <div className="p-3 rounded-xl bg-[#042017] border border-[#0e4333]">
                <Leaf className="w-5 h-5 text-[#22C55E] mx-auto mb-1" />
                <span className="font-bold text-white block">Zero Waste</span>
                <span className="text-[10px] text-white/50">Eaten or degraded in days</span>
              </div>
              <div className="p-3 rounded-xl bg-[#042017] border border-[#0e4333]">
                <Sparkles className="w-5 h-5 text-[#F5BD54] mx-auto mb-1" />
                <span className="font-bold text-white block">6 Flavours</span>
                <span className="text-[10px] text-white/50">From Cocoa to Elaichi</span>
              </div>
              <div className="p-3 rounded-xl bg-[#042017] border border-[#0e4333]">
                <Award className="w-5 h-5 text-[#38BDF8] mx-auto mb-1" />
                <span className="font-bold text-white block">Food-Grade Pure</span>
                <span className="text-[10px] text-white/50">100% Pure Vegetarian</span>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#F5BD54] text-[#021C15] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#f8c464] transition-colors"
              >
                Close Story
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

