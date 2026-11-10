import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_PRICING_DISCLAIMER } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const total = subtotal - discountAmount + shipping;

  const freeShippingThreshold = 499;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'ZEROWASTE' || promoCode.toUpperCase() === 'CUP2EAT') {
      setDiscountPercent(15);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "ZEROWASTE" for 15% off');
    }
  };

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setOrderPlaced(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-md bg-[#021C15] text-white border-l border-[#0e4333] shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#0e4333] flex items-center justify-between bg-[#042017]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F5BD54] text-[#021C15] flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Your Shopping Cart</h3>
                <span className="text-[11px] text-[#F5E5C7]/70">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#062C20] px-5 py-2.5 border-b border-[#0e4333] text-xs">
            {subtotal >= freeShippingThreshold ? (
              <span className="text-[#22C55E] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>You unlocked Free Nationwide Delivery! 🎉</span>
              </span>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#F5E5C7]/80">
                  <span>Add ₹{freeShippingThreshold - subtotal} more for Free Delivery</span>
                  <span>{progressToFreeShipping}%</span>
                </div>
                <div className="w-full bg-[#021C15] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#F5BD54] h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderPlaced ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  Sample Order Confirmed!
                </h4>
                <p className="text-xs text-[#F5E5C7]/80 max-w-xs mx-auto leading-relaxed">
                  Thank you for testing the CUP2EAT zero-waste shopping experience! In production, this completes via Razorpay / Stripe.
                </p>
                <div className="bg-[#042017] border border-[#0e4333] p-4 rounded-xl text-xs space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-white/60">Demo Order ID:</span>
                    <span className="text-[#F5BD54] font-mono">#C2E-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Status:</span>
                    <span className="text-[#22C55E] font-bold">Ready for dispatch</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full py-3 bg-[#F5BD54] text-[#021C15] font-bold rounded-full text-xs uppercase tracking-wider"
                >
                  Continue Browsing
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#062C20] border border-[#0e4333] text-[#F5BD54] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Your cart is empty</h4>
                <p className="text-xs text-[#F5E5C7]/70 max-w-xs mx-auto">
                  Looks like you haven't picked your edible biscuit cup flavor yet!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#F5BD54] text-[#021C15] font-bold text-xs uppercase tracking-wider"
                >
                  Browse Flavours
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 bg-[#042017] border border-[#0e4333] p-3 rounded-xl"
                  >
                    <div className="w-16 h-16 rounded-lg bg-black/40 p-1 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-white truncate">
                        {item.name} Cup
                      </h4>
                      <p className="text-[11px] text-[#F5E5C7]/60">
                        {item.packSize} • {item.volume}
                      </p>
                      <span className="text-xs font-bold text-[#F5BD54]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#0e4333] rounded-lg bg-[#021C15]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-white/70 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-white/70 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-white/40 hover:text-[#E05353] transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={applyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder='Promo code (try "ZEROWASTE")'
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3 py-2 rounded-lg text-xs text-white uppercase outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#062C20] hover:bg-[#0e4333] text-[#F5BD54] border border-[#0e4333] rounded-lg text-xs font-bold uppercase"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[10px] text-[#E05353] mt-1">{promoError}</p>
                  )}
                  {discountPercent > 0 && (
                    <p className="text-[10px] text-[#22C55E] mt-1 font-semibold">
                      ✓ 15% Zero-Waste Discount Applied!
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-5 border-t border-[#0e4333] bg-[#042017] space-y-3">
              <div className="space-y-1.5 text-xs text-[#F5E5C7]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#22C55E]">
                    <span>Discount (15%)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Nationwide Shipping</span>
                  <span>{shipping === 0 ? <strong className="text-[#22C55E]">FREE</strong> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white">
                  <span>Estimated Total</span>
                  <span className="text-base text-[#F5BD54]">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021C15] font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#F5BD54]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Order (Demo Checkout)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>100% Food-grade safe packaging • Freshly baked batch</span>
              </div>

              <p className="text-[9px] text-center text-white/40 italic">
                * {SAMPLE_PRICING_DISCLAIMER}
              </p>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}

