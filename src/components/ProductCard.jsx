import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onSelect, onAddToCart }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-center group cursor-pointer"
      onClick={() => onSelect(product)}
    >
      {/* Product Card Container with Pedestal Aesthetic */}
      <div className="relative w-full flex flex-col items-center">

        {/* Floating Badge (e.g. Bestseller) */}
        {product.badge && (
          <div className="absolute -top-3 z-20 px-2.5 py-0.5 rounded-full bg-[#F5BD54] text-[#021C15] font-bold text-[10px] uppercase tracking-wider shadow-md">
            {product.badge}
          </div>
        )}

        {/* Cup on Pedestal Container */}
        <div className="relative w-full aspect-[4/5] max-w-[190px] flex items-center justify-center p-2 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 group-hover:border-[#F5BD54]/40 transition-all duration-300 shadow-xl overflow-hidden">

          {/* Subtle background glow matching flavour color */}
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity blur-xl rounded-full"
            style={{ backgroundColor: product.color }}
          />

          {/* Product Image */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={`${product.name} Edible Cup`}
              className="max-h-[85%] w-auto object-contain drop-shadow-2xl group-hover:scale-108 transition-transform duration-500"
            />
          </div>

          {/* Hover Overlay with Quick Action Buttons */}
          <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(product);
              }}
              className="w-full py-1.5 px-3 rounded-full bg-white/90 hover:bg-white text-[#021C15] font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-full py-1.5 px-3 rounded-full bg-[#F5BD54] hover:bg-[#f3b33d] text-[#021C15] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Pedestal Base Display Name */}
        <div className="mt-3 text-center">
          <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#F5BD54] transition-colors">
            {product.name}
          </h3>
          <p className="text-[11px] text-[#F5E5C7]/70 font-medium line-clamp-1">
            {product.tagline}
          </p>
          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-[#F5BD54]">
              ₹{product.price}
            </span>
            <span className="text-[10px] text-white/40 line-through">
              ₹{product.originalPrice}
            </span>
            <span className="text-[9px] text-[#F5E5C7]/60">
              ({product.packSize})
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

