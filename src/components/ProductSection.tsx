
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Classic Aviator",
      category: "Sunglasses",
      price: 299,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Modern Reader",
      category: "Eyeglasses", 
      price: 199,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Sport Shield",
      category: "Sunglasses",
      price: 349,
      image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Executive Frame",
      category: "Eyeglasses",
      price: 249,
      image: "/photo/wo4.jpeg"
    },
    {
      id: 5,
      name: "Retro Round",
      category: "Sunglasses",
      price: 279,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Designer Square",
      category: "Eyeglasses",
      price: 329,
      image: "/photo/mens1.png"
    },
    {
      id: 7,
      name: "Classic Aviator",
      category: "Sunglasses",
      price: 299,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      name: "Designer Cat-Eye",
      category: "Eyeglasses",
      price: 329,
      image: "/photo/woglass1.jpeg"
    },
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  // Show exactly 4 products on homepage
  const displayedProducts = filteredProducts.slice(0, 4);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gradient">Featured Products</span>
        </h2>
        <p className="text-gray-400 text-lg">Premium eyewear crafted to perfection</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-900/50 p-2 rounded-full border border-purple-500/20">
          {['All', 'Sunglasses', 'Eyeglasses'].map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "ghost"}
              className={`mx-1 px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-royal text-white'
                  : 'text-gray-400 hover:text-white hover:bg-purple-500/20'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <Card
            key={product.id}
            className="group bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => handleProductClick(product.id)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                <p className="text-xl font-bold text-gradient">${product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Button
          onClick={() => navigate('/products')}
          className="bg-gradient-royal hover:opacity-90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          View All Products
        </Button>
      </div>
    </section>
  );
};

export default ProductSection;
