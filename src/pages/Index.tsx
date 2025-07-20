
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryCards from '@/components/CategoryCards';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Index = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <CategoryCards />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Index;
