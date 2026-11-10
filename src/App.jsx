import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import FlavoursSection from './components/FlavoursSection';
import SustainabilitySection from './components/SustainabilitySection';
import AboutSection from './components/AboutSection';
import OccasionsSection from './components/OccasionsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import BusinessModal from './components/BusinessModal';
import VideoModal from './components/VideoModal';
import OurStoryModal from './components/OurStoryModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Toast from './components/Toast';
import { PRODUCTS } from './data/products';

export default function App() {
  // Shopping Cart State
  const [cart, setCart] = useState([
    {
      id: "chocolate",
      name: "Chocolate",
      price: 149,
      packSize: "Pack of 6 Cups",
      volume: "110 ml",
      image: "/assets/flavour-chocolate.png",
      quantity: 1,
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);

  // Modals State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  const [businessCategory, setBusinessCategory] = useState('cafes');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productToAdd.id);
      const qtyToAdd = productToAdd.quantity || 1;
      if (existing) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            packSize: productToAdd.packSize || "Pack of 6 Cups",
            volume: productToAdd.volume || "110 ml",
            image: productToAdd.image,
            quantity: qtyToAdd,
          }
        ];
      }
    });
    showToast(`Added ${productToAdd.name} Cup to your cart! ☕`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast('Item removed from cart.');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenProduct = (productOrId) => {
    if (typeof productOrId === 'string') {
      const found = PRODUCTS.find((p) => p.id === productOrId || p.name.toLowerCase() === productOrId.toLowerCase());
      if (found) setSelectedProduct(found);
    } else {
      setSelectedProduct(productOrId);
    }
  };

  const handleOpenBusinessModal = (category = 'cafes') => {
    setBusinessCategory(category);
    setBusinessModalOpen(true);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#021C15] text-[#17291F] font-sans antialiased selection:bg-[#F5BD54] selection:text-[#021C15]">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        cartCount={totalCartCount}
        onOpenBusinessModal={() => handleOpenBusinessModal('cafes')}
        onSelectProduct={handleOpenProduct}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenVideo={() => setVideoModalOpen(true)}
          onExploreFlavours={() => {
            const el = document.getElementById('flavours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Signature 3-Step Experience (Pour, Sip, Crunch) */}
        <ExperienceSection
          onSeeHowItWorks={() => {
            const el = document.getElementById('flavours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Our Flavours Section */}
        <FlavoursSection
          onSelectProduct={handleOpenProduct}
          onAddToCart={handleAddToCart}
          onOpenBusinessModal={() => handleOpenBusinessModal('cafes')}
        />

        {/* 4. Sustainability Section */}
        <SustainabilitySection
          onOpenImpactModal={() => handleOpenBusinessModal('corporate')}
          onOpenBusinessModal={() => handleOpenBusinessModal('corporate')}
        />

        {/* 5. About CUP2EAT & Social Proof ("Loved by Many") */}
        <AboutSection
          onOpenStoryModal={() => setStoryModalOpen(true)}
        />

        {/* 6. Perfect for Every Occasion */}
        <OccasionsSection
          onSelectOccasion={(occ) => handleOpenBusinessModal(occ)}
        />

        {/* 7. Final Call to Action */}
        <CTASection
          onShopNow={() => setCartOpen(true)}
          onOpenBusinessModal={() => handleOpenBusinessModal('corporate')}
        />
      </main>

      {/* Footer */}
      <Footer
        onSubscribeNewsletter={(email) => showToast(`Thanks for subscribing with ${email}! Welcome to the zero-waste club.`)}
        onOpenBusinessModal={() => handleOpenBusinessModal('cafes')}
      />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* B2B / Wholesale Enquiry Modal */}
      <BusinessModal
        isOpen={businessModalOpen}
        onClose={() => setBusinessModalOpen(false)}
        initialCategory={businessCategory}
        onShowToast={showToast}
      />

      {/* Video Demonstration Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Our Story Origin Modal */}
      <OurStoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Toast Notification Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}

