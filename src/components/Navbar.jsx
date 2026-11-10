import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCart, cartCount, onOpenBusinessModal, onSelectProduct }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cupsDropdownOpen, setCupsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Cups', href: '#flavours', hasDropdown: true },
    { name: 'Our Story', href: '#about' },
    { name: 'For Businesses', href: '#occasions' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  const cupFlavours = [
    { name: 'Chocolate', tag: 'Bestseller' },
    { name: 'Mango', tag: 'Fruity' },
    { name: 'Vanilla', tag: 'Classic' },
    { name: 'Strawberry', tag: 'Berry' },
    { name: 'Elaichi', tag: 'Heritage' },
    { name: 'Pista', tag: 'Gourmet' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#021C15]/95 backdrop-blur-md shadow-lg shadow-black/30 py-2.5 border-b border-[#062C20]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Circular Logo Emblem matching Image 2 */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#F5BD54]/80 shadow-md shadow-[#F5BD54]/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/logo-official-square.png"
                alt="CUP2EAT Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setCupsDropdownOpen(!cupsDropdownOpen)}
                    onMouseEnter={() => setCupsDropdownOpen(true)}
                    className="flex items-center gap-1 text-white/90 hover:text-[#F5BD54] transition-colors py-1 cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${cupsDropdownOpen ? 'rotate-180 text-[#F5BD54]' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-[#F5BD54] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5BD54] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                )}

                {/* Dropdown for Our Cups */}
                {link.hasDropdown && cupsDropdownOpen && (
                  <div
                    onMouseLeave={() => setCupsDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#042017] border border-[#0e4333] rounded-xl shadow-2xl py-2 px-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="px-3 py-1.5 border-b border-[#0e4333] mb-1">
                      <p className="text-[11px] uppercase tracking-wider text-[#F5BD54] font-semibold">
                        6 Delicious Flavours
                      </p>
                    </div>
                    {cupFlavours.map((flavour) => (
                      <a
                        key={flavour.name}
                        href="#flavours"
                        onClick={() => {
                          setCupsDropdownOpen(false);
                          if (onSelectProduct) onSelectProduct(flavour.name.toLowerCase());
                        }}
                        className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-white/80 hover:text-white hover:bg-[#062C20] transition-colors"
                      >
                        <span className="font-medium">{flavour.name} Cup</span>
                        <span className="text-[10px] text-[#F5BD54] bg-[#F5BD54]/10 px-1.5 py-0.5 rounded">
                          {flavour.tag}
                        </span>
                      </a>
                    ))}
                    <div className="mt-2 pt-2 border-t border-[#0e4333] px-3">
                      <a
                        href="#flavours"
                        onClick={() => setCupsDropdownOpen(false)}
                        className="text-[11px] text-[#F5BD54] hover:underline flex items-center gap-1 font-medium"
                      >
                        <span>View All Flavours</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Golden CTA with Cart Integration (matches Image 2) */}
          <div className="flex items-center gap-2">
            {/* Single Unified Shop Cups Golden Button matching Image 2 */}
            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-2 bg-[#F5BD54] hover:bg-[#f8c464] text-[#021008] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-[#F5BD54]/20 hover:shadow-lg hover:shadow-[#F5BD54]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Shop Cups</span>
              <ShoppingBag className="w-3.5 h-3.5" />
              {cartCount > 0 && (
                <span className="bg-[#021008] text-[#F5BD54] font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center -mr-1">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-white hover:text-[#F5BD54] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#F5BD54]" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 border-t border-[#0e4333] bg-[#021C15]/98 rounded-2xl px-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-[#F5BD54] text-base font-medium py-1.5 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="#flavours"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#F5BD54] text-[#021C15] font-semibold text-sm uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <span>Shop All Cups</span>
                  <ShoppingBag className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBusinessModal();
                  }}
                  className="w-full text-center bg-transparent border border-[#F5BD54]/50 text-[#F5BD54] font-medium text-xs uppercase tracking-wider py-2.5 rounded-full hover:bg-[#F5BD54]/10 transition-colors"
                >
                  Bulk / Business Enquiry
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

