import React, { useState } from 'react';
import { ArrowRight, Heart, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onSubscribeNewsletter, onOpenBusinessModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    if (onSubscribeNewsletter) onSubscribeNewsletter(email);
    setEmail('');
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Cups', href: '#flavours' },
    { name: 'Our Story', href: '#about' },
    { name: 'For Businesses', href: '#occasions' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-[#021C15] text-white border-t border-[#062C20] pt-14 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching the reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#0e4333]/80">
          
          {/* LEFT: Logo + Tagline (4 Cols) */}
          <div className="md:col-span-4 flex items-center gap-4">
            {/* Logo Badge */}
            <a href="#hero" className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F5BD54]/80 shadow-md bg-[#062C20] flex-shrink-0">
              <img
                src="/assets/logo.png"
                alt="CUP2EAT Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-1 text-[#F5BD54] leading-tight font-bold text-[9px]">
                <span>CUP</span>
                <span className="text-white text-[11px] font-black -my-0.5">2</span>
                <span>EAT</span>
              </div>
            </a>

            {/* Handwritten Tagline */}
            <div>
              <span className="font-handwriting text-3xl font-extrabold text-white block leading-none">
                Eat Your Drink.
              </span>
              <span className="text-[11px] text-[#F5BD54] tracking-wider uppercase font-semibold">
                Innovative Edible Cups
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links & Social Icons (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-center gap-4 text-center">
            
            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-[#F5E5C7]/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#F5BD54] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-4 text-white/70">
              <a
                href="https://www.instagram.com/cup2eat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @cup2eat"
                className="w-8 h-8 rounded-full bg-[#062C20] border border-[#0e4333] hover:border-[#F5BD54] hover:text-[#F5BD54] flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#062C20] border border-[#0e4333] hover:border-[#F5BD54] hover:text-[#F5BD54] flex items-center justify-center transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#062C20] border border-[#0e4333] hover:border-[#F5BD54] hover:text-[#F5BD54] flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* RIGHT: Newsletter Form "Stay in the loop!" (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-2">
            <span className="text-xs uppercase tracking-wider text-white font-semibold">
              Stay in the loop!
            </span>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#22C55E] bg-[#062C20] px-4 py-2.5 rounded-full border border-[#0e4333]">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're on the VIP zero-waste list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-xs">
                <div className="relative w-full flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#042017] border border-[#0e4333] focus:border-[#F5BD54] text-xs text-white placeholder-white/40 px-4 py-2.5 rounded-full outline-none pr-10"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter subscription"
                    className="absolute right-1 w-7 h-7 rounded-full bg-[#F5BD54] text-[#021C15] flex items-center justify-center hover:bg-[#f8c464] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
            <span className="text-[10px] text-white/40">
              Weekly recipes, sustainability tips & flavour drops.
            </span>
          </div>

        </div>

        {/* Bottom Copyright and Credit Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
          <p>
            © {new Date().getFullYear()} CUP2EAT. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#E05353] fill-current" />
            <span>for a sustainable tomorrow.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
