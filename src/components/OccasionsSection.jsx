import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Coffee, PartyPopper, Briefcase, Gift } from 'lucide-react';
import { OCCASIONS_DATA } from '../data/products';

export default function OccasionsSection({ onSelectOccasion }) {
  const occasionIcons = {
    cafes: Coffee,
    weddings: PartyPopper,
    corporate: Briefcase,
    gifting: Gift,
  };

  return (
    <section id="occasions" className="relative bg-[#062C20] text-white pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#003B2B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Title & Arrow */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#021C15] border border-[#0e4333] text-[#F5BD54] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#F5BD54]" />
              <span>Versatile & Memorable</span>
            </div>

            <div className="flex items-center gap-4">
              <h2 className="font-handwriting text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5BD54] leading-tight">
                Perfect for<br />Every Occasion
              </h2>
              {/* Hand-drawn arrow pointing to the cards */}
              <div className="hidden sm:block text-[#F5BD54] pt-8">
                <svg width="50" height="28" viewBox="0 0 50 30" fill="none">
                  <path d="M5,15 Q25,28 42,12" stroke="#F5BD54" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M35,6 L44,12 L36,19" stroke="#F5BD54" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F5E5C7]/85 font-normal max-w-md">
              From cozy cafés to grand events, CUP2EAT adds a unique touch that guests and patrons remember forever.
            </p>
          </div>

          {/* Right Summary / Bulk Order Callout */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-end gap-4">
            <div className="bg-[#042017] border border-[#0e4333] px-5 py-3 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5BD54]/10 text-[#F5BD54] flex items-center justify-center font-bold text-base">
                📦
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#F5BD54] font-semibold">Bulk B2B Supply</p>
                <p className="text-sm text-white font-medium">Custom branding & wholesale tiers</p>
              </div>
            </div>

            <button
              onClick={() => onSelectOccasion('corporate')}
              className="inline-flex items-center justify-center gap-2 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021C15] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg shadow-[#F5BD54]/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>For Businesses →</span>
            </button>
          </div>

        </div>

        {/* 4 Overlapping Magazine-Style Occasion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OCCASIONS_DATA.map((item, index) => {
            const Icon = occasionIcons[item.id] || Coffee;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectOccasion(item.id)}
                className="group relative rounded-2xl overflow-hidden bg-[#042017] border border-[#0e4333] hover:border-[#F5BD54]/50 shadow-xl cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042017] via-transparent to-black/20" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#021C15]/90 border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#F5BD54] flex items-center gap-1.5 shadow">
                    <Icon className="w-3 h-3 text-[#F5BD54]" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#F5BD54] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F5E5C7]/75 mt-1.5 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#F5BD54] font-semibold">
                    <span>Enquire for this</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

