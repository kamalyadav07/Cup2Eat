import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, CheckCircle2, MessageCircle, Building2, Coffee, ShieldCheck } from 'lucide-react';

export default function BusinessModal({ isOpen, onClose, initialCategory = 'cafes', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    enquiryType: initialCategory,
    quantity: '1000-5000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('B2B enquiry received! Our partnerships team will connect within 24 hours.');
      }
    }, 600);
  };

  // WhatsApp configurable link with pre-filled message
  const whatsappNumber = "919876543210"; // Placeholder configurable number
  const whatsappText = encodeURIComponent(
    `Hello CUP2EAT Team! I am enquiring about edible cups for my business: ${formData.businessName || 'Business'} (${formData.enquiryType}). Estimated requirement: ${formData.quantity} cups.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

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
          className="relative bg-[#021C15] text-white border border-[#0e4333] rounded-3xl max-w-xl w-full p-6 sm:p-8 text-left shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close business enquiry modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">
                Partnership Enquiry Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#F5E5C7]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our enterprise team will send wholesale catalogue pricing, sample pack details and minimum order quantities to <strong className="text-[#F5BD54]">{formData.email}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-[#021C15] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#062C20] text-white/80 hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#062C20] border border-[#0e4333] text-[#F5BD54] text-[11px] font-semibold uppercase tracking-wider">
                  <Building2 className="w-3 h-3 text-[#F5BD54]" />
                  <span>B2B & Wholesale Partnerships</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Serve CUP2EAT at Your Venue
                </h3>
                <p className="text-xs text-[#F5E5C7]/80">
                  Join leading cafes, eco-resorts, event planners & distributors across India.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3.5 py-2.5 rounded-xl text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Business / Entity Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      placeholder="e.g. Blue Bean Roastery"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3.5 py-2.5 rounded-xl text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3.5 py-2.5 rounded-xl text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3.5 py-2.5 rounded-xl text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Enquiry Type *</label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3 py-2.5 rounded-xl text-white outline-none"
                    >
                      <option value="cafes">Café & Coffee Shop Partner</option>
                      <option value="weddings">Weddings & Private Celebrations</option>
                      <option value="corporate">Corporate Event & Conclaves</option>
                      <option value="gifting">Curated Gifting & Hampers</option>
                      <option value="distributor">Wholesale / Regional Distributor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Estimated Monthly Quantity</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3 py-2.5 rounded-xl text-white outline-none"
                    >
                      <option value="samples">Sample Tasting Kit (50-100 cups)</option>
                      <option value="500-1000">500 – 1,000 cups / month</option>
                      <option value="1000-5000">1,000 – 5,000 cups / month</option>
                      <option value="5000-20000">5,000 – 20,000 cups / month</option>
                      <option value="20000+">20,000+ cups (Commercial Bulk)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-medium">Tell us about your event or venue requirements</label>
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Preferred flavours, custom cup stamping, delivery timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] px-3.5 py-2 rounded-xl text-white outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021C15] font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full shadow-lg shadow-[#F5BD54]/20 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Business Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Or chat on WhatsApp now</span>
                  </a>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[10px] text-white/50 border-t border-white/5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>We respect your privacy. No spam. Direct response from founder / B2B lead.</span>
                </div>
              </form>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}

