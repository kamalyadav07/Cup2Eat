import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';

export default function ExperienceSection({ onSeeHowItWorks }) {
  const steps = [
    {
      num: '1',
      title: 'Pour',
      image: '/assets/step-pour-hd.png',
      caption: 'Fill it with your favourite drink!',
      description: 'Pour hot coffee, fragrant tea, or chilled dessert drinks up to 85°C.',
      subnote: '100% leakproof for 40+ minutes',
    },
    {
      num: '2',
      title: 'Sip',
      image: '/assets/step-sip-hd.png',
      caption: 'Enjoy every delicious sip!',
      description: 'The cup insulates warmth naturally without changing the beverage aroma.',
      subnote: 'No soggy paper taste, ever',
    },
    {
      num: '3',
      title: 'Crunch',
      image: '/assets/step-crunch-hd.png',
      caption: 'Finish by eating the cup!',
      description: 'Once finished, bite into the rich crunchy biscuit infused with natural flavour.',
      subnote: 'Zero waste left behind',
    },
  ];

  return (
    <section id="experience" className="relative bg-[#FFF0D6] text-[#17291F] pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">

      {/* Decorative organic background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E5C7]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F5BD54]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left Column: Storytelling Headline (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">

            {/* Step Counter Badge */}
            <div className="inline-block px-3 py-1 bg-[#17291F]/10 rounded-full text-xs font-bold text-[#062C20] uppercase tracking-wider">
              The 3-Step Experience
            </div>

            {/* Handwritten Headline */}
            <div className="space-y-1">
              <h2 className="font-handwriting text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#062C20] leading-[1.05]">
                The Last Bite<br />
                <span className="text-[#C69A43] underline decoration-[#C69A43] decoration-2 underline-offset-4">
                  is the Best Part!
                </span>
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#17291F]/80 font-medium leading-relaxed max-w-sm">
              A unique 3-in-1 experience — <strong className="text-[#062C20] font-bold">Pour, Sip, Crunch!</strong> Why toss your cup when you can snack on it?
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#flavours"
                onClick={onSeeHowItWorks}
                className="inline-flex items-center gap-2 bg-[#062C20] hover:bg-[#021C15] text-[#F5BD54] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>See How It Works</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>

            {/* Extra note */}
            <div className="pt-2 text-xs text-[#17291F]/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#104C38]" />
              <span>Engineered to stay crispy for 40+ minutes of hot or cold drinks.</span>
            </div>
          </div>

          {/* Right Column: 3-Step Horizontal Sequence (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-start">

              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number & Title Pill */}
                  <div className="flex items-center gap-2 mb-3 bg-[#021C15] text-white px-4 py-1.5 rounded-full shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-[#F5BD54] text-[#021C15] font-black text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="font-serif font-bold text-sm tracking-wide">
                      {step.title}
                    </span>
                  </div>

                  {/* High Quality Product Step Image */}
                  <div className="relative w-full max-w-[210px] aspect-square rounded-2xl overflow-hidden p-2 bg-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={step.image}
                      alt={`Step ${step.num}: ${step.title} - ${step.caption}`}
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Handwritten Annotation with subtle curved indicator */}
                  <div className="mt-2 space-y-1">
                    <p className="font-handwriting text-2xl font-bold text-[#062C20] leading-tight">
                      "{step.caption}"
                    </p>
                    <p className="text-xs text-[#17291F]/70 max-w-[190px] mx-auto leading-normal">
                      {step.description}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-[#63351E] bg-[#F5E5C7] px-2 py-0.5 rounded-full">
                      ✓ {step.subnote}
                    </span>
                  </div>

                  {/* Connecting Arrow (Desktop only between 1->2 and 2->3) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-24 pointer-events-none text-[#C69A43] text-2xl font-bold opacity-70"
                      style={{ left: index === 0 ? '30%' : '63%' }}>
                      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                        <path d="M4,16 Q20,4 34,12" stroke="#C69A43" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
                        <path d="M30,8 L36,12 L30,16" stroke="#C69A43" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Organic Wave Transition into Deep Emerald Green Flavours Section */}
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

