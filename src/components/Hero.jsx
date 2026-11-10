import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenVideo, onExploreFlavours }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#021008] text-white overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 flex items-center"
    >
      {/* Background radial spotlights for atmospheric depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial golden backlight behind the mascot */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#F5BD54]/10 rounded-full blur-[140px]" />
        {/* Deep emerald ambient glow on left */}
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#003B2B]/40 rounded-full blur-[120px]" />

        {/* Framing botanical leaves at bottom-left */}
        <div className="absolute bottom-6 left-0 w-32 sm:w-40 lg:w-48 pointer-events-none select-none z-10 opacity-85">
          <img
            src="/assets/leaves-bottom-left-alpha.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Headline, copy, and CTAs (matches Image 2 left side) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left pl-2 sm:pl-4">
            
            {/* Main Headline: Small Sip. Big Change. */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <h1 className="font-handwriting text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.02]">
                Small Sip.
              </h1>
              <div className="flex items-center gap-3">
                <span className="font-handwriting text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F5BD54] tracking-tight leading-[1.02]">
                  Big Change.
                </span>
                {/* Small playful green leaf doodle beside Big Change */}
                <span className="inline-block text-[#22C55E] text-2xl sm:text-3xl animate-bounce">
                  🍃
                </span>
              </div>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg lg:text-xl text-[#F5E5C7]/90 max-w-lg font-normal leading-relaxed"
            >
              Meet the delicious edible cup that lets you{' '}
              <span className="font-handwriting text-[#F5BD54] text-2xl sm:text-3xl font-bold underline decoration-[#F5BD54] decoration-2 underline-offset-4">
                eat your drink!
              </span>
            </motion.p>

            {/* Action Buttons: Explore Flavours & Watch Video */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Golden Pill Button */}
              <a
                href="#flavours"
                onClick={onExploreFlavours}
                className="group inline-flex items-center gap-2.5 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021008] font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg shadow-[#F5BD54]/25 hover:shadow-xl hover:shadow-[#F5BD54]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Flavours</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Dark Pill Button */}
              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2.5 bg-[#03180d]/80 hover:bg-[#062C20] border border-[#0e4333] hover:border-[#F5BD54]/50 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer group"
              >
                <div className="w-5 h-5 rounded-full bg-[#F5BD54] text-[#021008] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </motion.div>

            {/* 4 Benefit Pills in a Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#F5E5C7]/85"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[#22C55E]">🌱</span>
                <span>100% Edible</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#38BDF8]">♻</span>
                <span>Zero Waste</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#22C55E]">🌿</span>
                <span>Vegetarian</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#F43F5E]">💖</span>
                <span>Delicious</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: The Seamless Mascot & "Eat Your Drink!" Artwork (matches Image 2 right side) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            
            {/* Floating Container: No box border, seamlessly blended */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[540px] select-none"
            >
              <img
                src="/assets/mascot-hd-perfect.png"
                alt="CUP2EAT Edible Biscuit Cup Mascot on Wooden Slab with Eat Your Drink callout"
                className="w-full h-auto object-contain drop-shadow-2xl"
                draggable="false"
              />
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom Organic Wave Transition into Warm Cream Experience Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-[#FFF0D6]"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,110 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
