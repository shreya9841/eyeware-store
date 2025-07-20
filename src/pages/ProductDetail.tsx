import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Classic Aviator", category: "Sunglasses", gender: "Men", price: 299, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80", description: "Timeless aviator sunglasses with premium polarized lenses and lightweight titanium frame. Perfect for any occasion." },
    { id: 2, name: "Modern Reader", category: "Eyeglasses", gender: "Women", price: 199, image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80", description: "Contemporary reading glasses with blue light filtering technology and ergonomic design for all-day comfort." },
    { id: 3, name: "Sport Shield", category: "Sunglasses", gender: "Men", price: 349, image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=600&q=80", description: "High-performance sports sunglasses with UV400 protection and anti-slip grip for active lifestyles." },
    { id: 4, name: "Executive Frame", category: "Eyeglasses", gender: "Men", price: 249, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80", description: "Professional eyeglasses with acetate frame and precision-crafted lenses for sharp vision." },
    { id: 5, name: "Retro Round", category: "Sunglasses", gender: "Women", price: 279, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", description: "Vintage-inspired round sunglasses with gradient lenses and distinctive metal frame." },
    { id: 6, name: "Designer Cat-Eye", category: "Eyeglasses", gender: "Women", price: 329, image: "/photo/wg4.jpeg", description: "Elegant cat-eye frames with crystal accents and premium Italian craftsmanship." },
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));
  const [mainImage, setMainImage] = useState(product?.image || '');

  const extraImages = [
    product?.image || '',
    "/photo/wg2.jpeg",
    "/photo/wg4.jpeg",
    "/photo/wg2.jpeg",
  ];

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image & Thumbnails */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/20 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </CardContent>
            </Card>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              {extraImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className="w-20 h-20 object-cover rounded cursor-pointer border-2 hover:border-purple-400 transition"
                  alt={`thumb-${idx}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {product.category}
              </span>
              <span className="inline-block bg-gold/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-2 ml-2">
                {product.gender}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>

            <p className="text-3xl font-bold text-gradient mb-6">${product.price}</p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Premium materials and construction</li>
                <li>• UV400 protection</li>
                <li>• Lightweight and comfortable</li>
                <li>• Scratch-resistant coating</li>
                <li>• 2-year warranty included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
