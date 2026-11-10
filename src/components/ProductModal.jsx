import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Star, Plus, Minus, ShoppingBag, ShieldAlert, Sparkles, Heart } from 'lucide-react';
import { SAMPLE_PRICING_DISCLAIMER } from '../data/products';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState('pack-6');

  if (!isOpen || !product) return null;

  const packOptions = [
    { id: 'pack-6', label: 'Pack of 6', multiplier: 1, discount: '' },
    { id: 'pack-12', label: 'Pack of 12', multiplier: 1.85, discount: 'Save 15%' },
    { id: 'pack-24', label: 'Party Box (24)', multiplier: 3.4, discount: 'Save 25%' },
  ];

  const currentMultiplier = packOptions.find((p) => p.id === selectedPack)?.multiplier || 1;
  const currentPrice = Math.round(product.price * currentMultiplier);

  const handleAdd = () => {
    onAddToCart({
      ...product,
      price: currentPrice,
      packSize: packOptions.find((p) => p.id === selectedPack)?.label,
      quantity: quantity,
    });
    onClose();
  };

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
            aria-label="Close product modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Left Image & Pedestal Display */}
            <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-[#042017] to-transparent border border-[#0e4333] p-4 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-25 blur-2xl rounded-full"
                style={{ backgroundColor: product.color }}
              />
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[90%] w-auto object-contain drop-shadow-2xl relative z-10"
              />
              <span className="absolute bottom-3 left-3 text-[10px] bg-[#021C15] px-2.5 py-1 rounded-full text-[#F5BD54] font-semibold border border-[#0e4333]">
                {product.volume} • 40+ min crisp
              </span>
            </div>

            {/* Right Product Details */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#F5BD54] bg-[#062C20] px-2.5 py-1 rounded border border-[#0e4333]">
                  {product.badge || 'Signature Flavour'}
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-1">
                  {product.name} Edible Cup
                </h3>
                <p className="font-handwriting text-xl text-[#F5BD54] mt-0.5">
                  "{product.tagline}"
                </p>
              </div>

              <p className="text-xs text-[#F5E5C7]/80 leading-relaxed">
                {product.tasteProfile}
              </p>

              {/* Best Beverage Pairing */}
              <div className="bg-[#042017] border border-[#0e4333] p-2.5 rounded-xl text-xs space-y-1">
                <span className="text-[#F5BD54] font-bold block text-[11px] uppercase tracking-wider">
                  ☕ Best Beverage Match:
                </span>
                <span className="text-white/80">{product.bestWith}</span>
              </div>

              {/* Pack selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-white/60 font-semibold block">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {packOptions.map((pack) => (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPack(pack.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${selectedPack === pack.id
                          ? 'border-[#F5BD54] bg-[#F5BD54]/10 text-white'
                          : 'border-white/10 bg-[#042017] text-white/60 hover:text-white'
                        }`}
                    >
                      <span className="block">{pack.label}</span>
                      {pack.discount && (
                        <span className="text-[9px] text-[#22C55E] block">{pack.discount}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Quantity Add */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-2xl font-bold text-[#F5BD54]">
                    ₹{currentPrice}
                  </span>
                  <span className="text-xs text-white/40 line-through ml-2">
                    ₹{Math.round(product.originalPrice * currentMultiplier)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#0e4333] rounded-lg bg-[#042017]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-white/60 hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-white/60 hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className="bg-[#F5BD54] hover:bg-[#f8c464] text-[#021C15] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-md shadow-[#F5BD54]/20 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Nutrition & Ingredients Mini Tabs */}
              <div className="pt-2 border-t border-white/10 text-[10px] text-white/50 space-y-1">
                <p><strong>Ingredients:</strong> {product.ingredients}</p>
                <p><strong>Nutrition:</strong> {product.nutrition.calories} • {product.nutrition.protein} Protein • {product.nutrition.carbs} Carbs</p>
                <p className="italic">* {SAMPLE_PRICING_DISCLAIMER}</p>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

