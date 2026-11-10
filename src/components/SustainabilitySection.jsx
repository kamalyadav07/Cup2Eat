import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Recycle, Globe, CheckCircle2 } from 'lucide-react';

export default function SustainabilitySection({ onOpenImpactModal, onOpenBusinessModal }) {
  const handleImpactClick = () => {
    if (onOpenImpactModal) {
      onOpenImpactModal();
    } else if (onOpenBusinessModal) {
      onOpenBusinessModal('corporate');
    }
  };

  return (
    <section
      id="sustainability"
      className="relative bg-[#062C20] text-white py-4 sm:py-6 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        
        {/* DESKTOP & LARGE SCREENS: Exact Replica of Image 5 Panoramic Banner */}
        <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="/assets/sustainability-banner-clean-hd.png"
            alt="Good for You. Greater for Earth. 100% Edible, Zero Plastic, Eco Friendly"
            className="w-full h-auto object-cover select-none"
          />

          {/* Interactive Clickable Area over the "Our Impact →" Golden Button */}
          {/* Positioned precisely over the button in the graphic */}
          <div className="absolute inset-0 pointer-events-none">
            <button
              onClick={handleImpactClick}
              aria-label="Learn more about our environmental impact"
              className="pointer-events-auto absolute left-[31%] lg:left-[32%] top-[70%] lg:top-[72%] -translate-y-1/2 w-[140px] lg:w-[160px] h-[36px] lg:h-[42px] rounded-full bg-transparent hover:bg-white/15 transition-colors cursor-pointer"
            >
              <span className="sr-only">Our Impact</span>
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT: Responsive Recreation of Image 5 */}
        <div className="md:hidden relative rounded-2xl overflow-hidden shadow-2xl border border-[#0e4333]">
          
          {/* Top Half: Dark Green with Earth & Headline */}
          <div className="bg-[#042017] p-6 space-y-5 text-center">
            
            {/* Glowing Earth */}
            <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
              <img
                src="/assets/earth-sustainability.png"
                alt="Earth with golden grain orbit"
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(245,189,84,0.3)] animate-pulse-subtle"
              />
            </div>

            <div className="space-y-2">
              <h2 className="font-editorial text-3xl font-bold text-white leading-tight">
                Good for You.<br />
                <span className="font-handwriting text-4xl font-bold text-[#F5BD54] block mt-0.5">
                  Greater for Earth.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#F5E5C7]/90 max-w-sm mx-auto leading-relaxed">
                An edible cup means less plastic, a cleaner planet and a greener tomorrow.
              </p>
            </div>

            <div>
              <button
                onClick={handleImpactClick}
                className="inline-flex items-center gap-2 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021008] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-[#F5BD54]/20 cursor-pointer"
              >
                <span>Our Impact →</span>
              </button>
            </div>
          </div>

          {/* Bottom Half: Warm Cream with 3 Benefit Columns separated by lines (matching Image 5 right side) */}
          <div className="bg-[#FFF0D6] text-[#17291F] px-4 py-6">
            <div className="grid grid-cols-3 divide-x divide-[#17291F]/20 text-center items-center">
              
              {/* Column 1: 100% Edible */}
              <div className="flex flex-col items-center px-2">
                <span className="text-2xl mb-1">🍃</span>
                <span className="font-serif font-black text-xl text-[#062C20]">
                  100%
                </span>
                <span className="text-xs font-semibold text-[#17291F]/80">
                  Edible
                </span>
              </div>

              {/* Column 2: Zero Plastic */}
              <div className="flex flex-col items-center px-2">
                <span className="text-2xl mb-1">♻</span>
                <span className="font-serif font-black text-xl text-[#062C20]">
                  Zero
                </span>
                <span className="text-xs font-semibold text-[#17291F]/80">
                  Plastic
                </span>
              </div>

              {/* Column 3: Eco Friendly */}
              <div className="flex flex-col items-center px-2">
                <span className="text-2xl mb-1">🌱</span>
                <span className="font-serif font-black text-xl text-[#062C20]">
                  Eco
                </span>
                <span className="text-xs font-semibold text-[#17291F]/80">
                  Friendly
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
