import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { SOCIAL_PROOF_STORIES } from '../data/products';

export default function AboutSection({ onOpenStoryModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SOCIAL_PROOF_STORIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SOCIAL_PROOF_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="relative bg-[#FFF0D6] text-[#17291F] pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      
      {/* Decorative organic background blobs */}
      <div className="absolute -top-20 left-1/3 w-72 h-72 bg-[#F5E5C7] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5BD54]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Split Composition matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* COLUMN 1: Lifestyle Hands Holding Cup + Handwritten Note (4 Cols) */}
          <div className="lg:col-span-4 relative flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 group">
              <img
                src="/assets/lifestyle-holding-cup-hd.png"
                alt="Two hands holding a freshly poured CUP2EAT biscuit cup with latte art"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Handwritten callout doodle: "A little cup. A big idea. ♡" */}
            <div className="mt-4 sm:mt-3 pl-2">
              <p className="font-handwriting text-3xl sm:text-4xl font-extrabold text-[#062C20] leading-none">
                A little cup.<br />
                <span className="text-[#C69A43]">A big idea.</span>
              </p>
              {/* Hand-drawn heart doodle */}
              <div className="text-[#C69A43] text-2xl font-bold mt-1 inline-block animate-pulse">
                ♡
              </div>
            </div>
          </div>

          {/* COLUMN 2: About CUP2EAT Mission & Story (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17291F]/10 text-[#062C20] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A43]" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#062C20] leading-tight">
              About CUP2EAT
            </h2>

            <p className="text-base sm:text-lg text-[#17291F]/80 font-medium leading-relaxed">
              We're on a mission to make your snacking and sipping experience more innovative, delicious and sustainable.
            </p>

            <p className="text-xs sm:text-sm text-[#17291F]/70 leading-relaxed">
              Traditional paper cups are coated with a hidden plastic film that makes them non-recyclable in standard plants. CUP2EAT turns that waste into a crispy, baked biscuit treat baked with whole grains and zero preservatives.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-2 bg-[#F5BD54] hover:bg-[#f3b33d] text-[#021C15] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Our Story →</span>
              </button>
            </div>
          </div>

          {/* COLUMN 3: Social Proof "Loved by Many ♡" Carousel (4 Cols) */}
          <div className="lg:col-span-4 bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white shadow-lg space-y-4">
            
            {/* Header: Loved by Many ♡ */}
            <div className="flex items-center justify-between border-b border-[#17291F]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-[#062C20]">
                  Loved by Many
                </span>
                <Heart className="w-4 h-4 text-[#E05353] fill-current" />
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  aria-label="Previous customer review"
                  className="w-7 h-7 rounded-full bg-white text-[#062C20] hover:bg-[#F5BD54] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next customer review"
                  className="w-7 h-7 rounded-full bg-white text-[#062C20] hover:bg-[#F5BD54] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3 Photos Thumbnails Preview (as shown in reference image) */}
            <div className="grid grid-cols-3 gap-2">
              {SOCIAL_PROOF_STORIES.map((story, idx) => (
                <button
                  key={story.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentSlide === idx ? 'border-[#C69A43] scale-102 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  {currentSlide === idx && (
                    <div className="absolute inset-0 bg-[#F5BD54]/10" />
                  )}
                </button>
              ))}
            </div>

            {/* Active Customer Story Detail */}
            <div className="min-h-[85px] pt-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1.5"
                >
                  <p className="text-xs text-[#17291F]/80 italic line-clamp-3">
                    "{SOCIAL_PROOF_STORIES[currentSlide].quote}"
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="font-bold text-[#062C20]">
                      {SOCIAL_PROOF_STORIES[currentSlide].name}
                    </span>
                    <span className="text-[#C69A43] font-medium">
                      {SOCIAL_PROOF_STORIES[currentSlide].location}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {SOCIAL_PROOF_STORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'bg-[#062C20] w-4' : 'bg-[#17291F]/30'
                  }`}
                />
              ))}
            </div>

            {/* Official Instagram Link */}
            <div className="pt-2 border-t border-[#17291F]/10 text-center">
              <a
                href="https://www.instagram.com/cup2eat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062C20] hover:text-[#C69A43] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow us on Instagram</span>
                <span className="text-[#C69A43]">@cup2eat →</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Organic Wave Transition into Deep Green Occasions Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-[#062C20]"
          fill="currentColor"
        >
          <path d="M0,0 C200,90 450,-30 700,50 C950,110 1100,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
