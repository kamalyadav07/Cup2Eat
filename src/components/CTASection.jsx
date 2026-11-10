import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

export default function CTASection({ onShopNow, onOpenBusinessModal }) {
  return (
    <section className="relative bg-[#021C15] text-white py-20 sm:py-28 overflow-hidden border-t border-[#0e4333]">

      {/* Background ambient golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F5BD54]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Botanical leaves on left matching master artboard */}
      <div className="absolute top-0 left-0 w-36 sm:w-48 pointer-events-none select-none z-10 opacity-70">
        <img
          src="/assets/leaves-bottom-left-alpha.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Chocolate chunks decorative crop in bottom right matching reference */}
      <div className="absolute -bottom-2 -right-2 sm:right-6 w-36 sm:w-48 opacity-85 pointer-events-none select-none">
        <img
          src="/assets/decor-chocolate-hd.png"
          alt="Chocolate pieces decorative accent"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">

        {/* Hashtag Campaign Pill */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#062C20] border border-[#0e4333] text-[#F5BD54] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-inner">
          <Sparkles className="w-4 h-4 text-[#F5BD54]" />
          <span>#EatYourDrink</span>
        </div>

        {/* Headline matching reference image exactly */}
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
          Ready to be a part of the<br />
          <span className="font-handwriting text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5BD54] block mt-1">
            #ZeroWasteRevolution?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#F5E5C7]/85 max-w-xl mx-auto font-normal leading-relaxed">
          Upgrade your daily coffee, chai or event catering with the crispy cup that satisfies your tastebuds and honors the planet.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">

          {/* Main Golden Button "Shop Now →" matching reference image */}
          <button
            onClick={onShopNow}
            className="group inline-flex items-center gap-3 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021C15] font-extrabold text-sm sm:text-base uppercase tracking-wider px-9 py-4 rounded-full shadow-xl shadow-[#F5BD54]/30 hover:shadow-[#F5BD54]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Secondary Business Button */}
          <button
            onClick={onOpenBusinessModal}
            className="inline-flex items-center gap-2 bg-[#062C20] hover:bg-[#042017] border border-[#0e4333] hover:border-[#F5BD54]/50 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
          >
            <span>Order for Cafés & Events</span>
          </button>

        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#F5E5C7]/60">
          <span>✓ Shipped fresh across India</span>
          <span>✓ 100% Vegetarian & FSSAI Compliant</span>
          <span>✓ Stays crisp for 40+ minutes</span>
        </div>

      </div>

    </section>
  );
}

