# CUP2EAT — Eat Your Drink ☕🍪

> **Innovative Sustainable Food-Tech Brand:** 100% Vegetarian, Edible Biscuit Cups in 6 Flavours.  
> *"Why throw away your cup when you can eat it?"*

[![Built with React](https://img.shields.io/badge/Built%20with-React%2018-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%206-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer%20Motion-FF0055.svg)](https://www.framer.com/motion/)

---

## 🌟 Overview

CUP2EAT replaces single-use plastic and paper cups with delicious, crispy biscuit drinkware engineered to hold piping hot beverages (up to 85°C) and chilled drinks for over 40 minutes without leaking or getting soggy. Once you finish your coffee or tea, crunch into the cup!

### Key Features
- **Cinematic Forest Atmosphere:** Custom editorial palette inspired by nature (`#062C20`, `#FFF0D6`, `#F5BD54`, `#63351E`).
- **Signature 3-Step Experience:** Step 1: *Pour*, Step 2: *Sip*, Step 3: *Crunch*.
- **6 Signature Flavours:** Chocolate, Mango, Vanilla, Strawberry, Elaichi, and Pista.
- **Sustainability Ribbon:** Highlighting 100% Edible, Zero Plastic, and Eco-Friendly metrics.
- **B2B & Commercial Conversion:** Interactive quote and wholesale request forms for Cafés, Weddings, Corporate ESG Summits, and Distributors.
- **Interactive Cart & Quick View:** Sliding drawer with promo codes (`ZEROWASTE`), quantity controls, and celebratory confetti checkout.
- **Mobile First & Responsive:** Optimized touch interactions across phones, tablets, and ultra-wide desktops.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/kamalyadav07/Cup2Eat.git

# Navigate into project directory
cd Cup2Eat

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
Cup2Eat/
├── public/
│   └── assets/            # High-definition visual assets & iconography
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky nav, brand emblem, cart drawer trigger
│   │   ├── Hero.jsx                 # "Small Sip. Big Change.", 3D Mascot & "Eat Your Drink!"
│   │   ├── ExperienceSection.jsx    # Warm cream 3-step ritual (Pour, Sip, Crunch)
│   │   ├── FlavoursSection.jsx      # 6 Pedestals showcase with interactive filters
│   │   ├── SustainabilitySection.jsx# Panoramic organic ribbon & benefit indicators
│   │   ├── AboutSection.jsx         # Lifestyle editorial & "Loved by Many" carousel
│   │   ├── OccasionsSection.jsx     # Cafes, Weddings, Corporate, Gifting magazine cards
│   │   ├── CTASection.jsx           # Climax call to action with botanical framing
│   │   ├── Footer.jsx               # Navigation, newsletter signup & social links
│   │   ├── CartDrawer.jsx           # Sliding cart with promo code engine & demo checkout
│   │   ├── ProductModal.jsx         # Deep-dive nutrition, pairings, and pack sizes
│   │   ├── BusinessModal.jsx        # B2B partnership enquiry with WhatsApp integration
│   │   ├── VideoModal.jsx           # Simulated 1080p ritual demo video
│   │   ├── OurStoryModal.jsx        # Origin story & zero-waste mission
│   │   ├── WhatsAppFloat.jsx        # Quick floating WhatsApp chat button
│   │   ├── SocialIcons.jsx          # SVG brand icons
│   │   └── Toast.jsx                # Toast alerts
│   ├── data/
│   │   └── products.js              # Centralised catalogue, pricing & stories
│   ├── App.jsx                      # App root & state coordinator
│   ├── main.jsx                     # Vite DOM mount
│   └── index.css                    # Tailwind directives & custom utilities
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License & Attribution
© CUP2EAT. All rights reserved. Made with ♥ for a sustainable tomorrow.
