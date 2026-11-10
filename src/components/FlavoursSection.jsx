import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, SAMPLE_PRICING_DISCLAIMER } from '../data/products';
import { Sparkles, Eye, Plus, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function FlavoursSection({ onSelectProduct, onAddToCart, onOpenBusinessModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All 6 Flavours' },
    { id: 'bestseller', label: 'Bestsellers' },
    { id: 'dessert', label: 'Dessert & Fruity' },
    { id: 'spiced', label: 'Chai & Nutty' },
  ];

  const filtered = PRODUCTS.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'bestseller') return item.badge === 'Bestseller' || item.badge === 'Heritage Chai Match';
    if (activeTab === 'dessert') return ['mango', 'strawberry', 'vanilla', 'chocolate'].includes(item.id);
    if (activeTab === 'spiced') return ['elaichi', 'pista'].includes(item.id);
    return true;
  });

  return (
    <section
      id="flavours"
      className="relative bg-[#062C20] text-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#003B2B]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Our Flavours with Hand-Drawn Arrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#021C15] border border-[#0e4333] text-[#F5BD54] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F5BD54]" />
              <span>Taste Meets Sustainability</span>
            </div>

            <div className="flex items-center gap-4">
              <h2 className="font-handwriting text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5BD54] leading-tight">
                Our Flavours
              </h2>
              {/* Hand-drawn arrow pointing to the row */}
              <div className="hidden sm:block text-[#F5BD54] pt-2">
                <svg width="48" height="26" viewBox="0 0 50 30" fill="none">
                  <path d="M5,15 Q25,28 42,12" stroke="#F5BD54" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M35,6 L44,12 L36,19" stroke="#F5BD54" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F5E5C7]/85 font-normal max-w-xl">
              A burst of flavour in every cup! Crafted with pure vegetarian ingredients and natural aroma.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#F5BD54] text-[#021C15] shadow-lg shadow-[#F5BD54]/30 scale-102'
                    : 'bg-[#021C15]/80 text-white/70 hover:text-white hover:bg-[#021C15] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 FLAVOURS SHOWCASE - Master Panoramic Pedestal Presentation */}
        {/* On desktop: Natural pedestals without harsh boxy card borders, matching master mockup */}
        <div className="hidden lg:block relative my-6">
          {/* Master HD Pedestals Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/flavours-showcase-hd.png"
              alt="CUP2EAT Flavours Lineup: Chocolate, Mango, Vanilla, Strawberry, Elaichi, Pista"
              className="w-full h-auto object-cover select-none"
            />

            {/* Interactive Overlay Grid for each of the 6 pedestals */}
            <div className="absolute inset-0 grid grid-cols-6 z-20">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  onMouseEnter={() => setHoveredProduct(prod.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => onSelectProduct(prod)}
                  className="relative h-full flex flex-col justify-end items-center pb-4 cursor-pointer group transition-all"
                >
                  {/* Subtle hover spotlight */}
                  <div className="absolute inset-0 bg-[#F5BD54]/0 group-hover:bg-[#F5BD54]/10 transition-colors rounded-xl" />

                  {/* Floating Action Pill on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-200 flex flex-col items-center gap-1.5 z-30">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(prod);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-[#F5BD54] hover:bg-[#f8c464] text-[#021C15] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-xl"
                    >
                      <Plus className="w-3 h-3 stroke-[3]" />
                      <span>Add to Cart</span>
                    </button>
                    <span className="text-[10px] text-white/80 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      Click for details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information & Pricing Row beneath the 6 pedestals */}
          <div className="grid grid-cols-6 gap-3 pt-6 text-center">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="cursor-pointer group space-y-1 p-2 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-center gap-1">
                  <h3 className="font-serif font-bold text-base text-white group-hover:text-[#F5BD54] transition-colors">
                    {prod.name}
                  </h3>
                  {prod.badge === 'Bestseller' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD54]" />
                  )}
                </div>
                <p className="text-[11px] text-[#F5E5C7]/70 line-clamp-1">
                  {prod.tagline}
                </p>
                <div className="flex items-center justify-center gap-2 pt-0.5">
                  <span className="text-xs font-bold text-[#F5BD54]">
                    ₹{prod.price}
                  </span>
                  <span className="text-[10px] text-white/40 line-through">
                    ₹{prod.originalPrice}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(prod);
                  }}
                  className="mt-1 w-full py-1 text-[11px] font-semibold text-[#F5BD54] border border-[#F5BD54]/30 rounded-full hover:bg-[#F5BD54] hover:text-[#021C15] transition-all"
                >
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT: Touch-Friendly Horizontal Pedestal Carousel */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory">
            {filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="snap-center flex-shrink-0 w-[240px] sm:w-[260px] bg-[#042017] border border-[#0e4333] rounded-2xl p-4 flex flex-col items-center text-center group cursor-pointer shadow-xl"
              >
                {/* Badge */}
                {product.badge && (
                  <span className="text-[10px] font-bold text-[#021C15] bg-[#F5BD54] px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    {product.badge}
                  </span>
                )}

                {/* Cup HD Image */}
                <div className="relative w-full aspect-[4/5] max-w-[180px] flex items-center justify-center">
                  <img
                    src={`/assets/cup-${product.id}-hd.png`}
                    alt={`${product.name} Cup on Pedestal`}
                    className="max-h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="mt-2 space-y-1 w-full">
                  <h3 className="font-serif font-bold text-lg text-white">
                    {product.name} Cup
                  </h3>
                  <p className="text-xs text-[#F5E5C7]/70 line-clamp-1">
                    {product.tagline}
                  </p>
                  <div className="flex items-center justify-center gap-2 py-1">
                    <span className="text-sm font-bold text-[#F5BD54]">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-white/40 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-[10px] text-[#F5E5C7]/60">
                      ({product.packSize})
                    </span>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="flex-1 py-2 rounded-full bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="flex-1 py-2 rounded-full bg-[#F5BD54] text-[#021C15] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#f8c464] transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner & Business CTA Bar */}
        <div className="mt-8 pt-6 border-t border-[#0e4333]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5E5C7]/70">
          <p className="italic text-center sm:text-left">
            * {SAMPLE_PRICING_DISCLAIMER}
          </p>

          <button
            onClick={onOpenBusinessModal}
            className="inline-flex items-center gap-2 text-[#F5BD54] hover:text-white font-bold uppercase tracking-wider text-xs hover:underline cursor-pointer"
          >
            <span>Explore Custom Flavours & Bulk Tiers for Cafés</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 text-[#021008]"
          fill="currentColor"
        >
          <path d="M0,0 C300,90 600,-30 900,50 C1050,100 1150,20 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
