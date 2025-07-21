
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';
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
      <BrandSection />
      <CategoryCards />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Index;
