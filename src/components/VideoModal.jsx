import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  if (!isOpen) return null;

  const stages = [
    { title: 'Stage 01: Pour', desc: 'Hot cappuccino poured at 80°C. Zero leakage guaranteed.' },
    { title: 'Stage 02: Sip', desc: 'Sip comfortably for 40+ minutes without softening.' },
    { title: 'Stage 03: Crunch', desc: 'Crispy baked biscuit treat. 100% zero waste.' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-[#021C15] text-white border border-[#0e4333] rounded-3xl max-w-2xl w-full p-6 text-left shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Mockup Player Screen */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#062C20] via-[#021C15] to-black border border-[#0e4333] flex items-center justify-center shadow-inner">

            {/* Animated Demo Visual */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">

              {/* Steaming Cup animation */}
              <motion.div
                animate={isPlaying ? { y: [0, -6, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-40 h-40 flex items-center justify-center"
              >
                <img
                  src={activeStage === 0 ? "/assets/step-pour.png" : activeStage === 1 ? "/assets/step-sip.png" : "/assets/step-crunch.png"}
                  alt="CUP2EAT Experience Video Demo"
                  className="max-h-full object-contain drop-shadow-2xl"
                />

                {/* Steam particles if playing */}
                {isPlaying && (
                  <motion.div
                    animate={{ opacity: [0.2, 0.7, 0], y: [-5, -25] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white/50 text-xl font-bold"
                  >
                    ♨
                  </motion.div>
                )}
              </motion.div>

              {/* Title of current stage */}
              <div className="mt-3">
                <span className="text-[10px] text-[#F5BD54] font-bold uppercase tracking-wider bg-[#021C15] px-2.5 py-1 rounded-full border border-[#0e4333]">
                  {stages[activeStage].title}
                </span>
                <p className="text-xs text-white/90 mt-1 font-medium">
                  {stages[activeStage].desc}
                </p>
              </div>

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 text-white hover:text-[#F5BD54] transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <div className="flex items-center gap-1.5">
                    {stages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStage(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${activeStage === idx ? 'w-8 bg-[#F5BD54]' : 'w-4 bg-white/30'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                    className="text-[11px] text-[#F5BD54] font-semibold hover:underline"
                  >
                    Next Step →
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-white/70 hover:text-white"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Details below video */}
          <div className="mt-4 flex items-center justify-between text-xs text-[#F5E5C7]/80">
            <span className="font-serif font-bold text-white text-sm">
              CUP2EAT Commercial Showcase • 1080p
            </span>
            <span className="text-[11px] text-[#22C55E] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Certified Food-Safe Biscuit Formula</span>
            </span>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

