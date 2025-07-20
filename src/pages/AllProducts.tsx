import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useScrollToTop();

  const products = [
    { id: 1, name: "Classic Aviator", category: "Sunglasses", gender: "Men", price: 299, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Modern Reader", category: "Eyeglasses", gender: "Women", price: 199, image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Sport Shield", category: "Sunglasses", gender: "Men", price: 349, image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Executive Frame", category: "Eyeglasses", gender: "Men", price: 249, image: "/photo/mens1.png" },
    { id: 5, name: "Retro Round", category: "Sunglasses", gender: "Women", price: 279, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Designer Cat-Eye", category: "Eyeglasses", gender: "Women", price: 329, image: "/photo/woglass1.jpeg" },
    { id: 7, name: "Pilot Style", category: "Sunglasses", gender: "Men", price: 399, image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=400&q=80" },
    { id: 8, name: "Vintage Round", category: "Eyeglasses", gender: "Women", price: 189, image: "/photo/wo4.jpeg" },
    { id: 9, name: "Designer Cat-Eye", category: "Eyeglasses", gender: "Women", price: 329, image: "/photo/wg2.jpeg" },
    { id: 10, name: "Designer Cat-Eye", category: "Eyeglasses", gender: "Women", price: 329, image: "/photo/wg4.jpeg"},
    { id: 11, name: "Designer Cat-Eye", category: "Eyeglasses", gender: "Women", price: 329, image: "/photo/wg4.jpeg"},
    { id: 12, name: "Designer Cat-Eye", category: "Sunglasses", gender: "Women", price: 329, image: "/photo/wg4.jpeg"},
    { id: 13, name: "Designer Cat-Eye", category: "Sunglasses", gender: "Women", price: 329, image: "/photo/wg4.jpeg"},
    { id: 14, name: "Designer Cat-Eye", category: "Sunglasses", gender: "Women", price: 329, image: "/photo/wg4.jpeg"},
  ];

  useEffect(() => {
    const category = searchParams.get('category');
    const gender = searchParams.get('gender');
    
    if (category) {
      setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
    }
    if (gender) {
      setSelectedGender([gender.charAt(0).toUpperCase() + gender.slice(1)]);
    }
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const genderMatch = selectedGender.length === 0 || selectedGender.includes(product.gender);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return categoryMatch && genderMatch && priceMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleGenderChange = (gender: string) => {
    setSelectedGender(prev => 
      prev.includes(gender) 
        ? prev.filter(g => g !== gender)
        : [...prev, gender]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const getHeadingText = () => {
    if (selectedCategory === 'All') return 'All Products';
    return `${selectedCategory} Collection`;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-gradient">{getHeadingText()}</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {['All', 'Sunglasses', 'Eyeglasses'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="mr-2 text-purple-500"
                      />
                      <span className="text-gray-300">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Gender</h4>
                <div className="space-y-2">
                  {['Men', 'Women'].map((gender) => (
                    <label key={gender} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedGender.includes(gender)}
                        onChange={() => handleGenderChange(gender)}
                        className="mr-2"
                      />
                      <span className="text-gray-300">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={(value) => {
                    setPriceRange(value);
                    setCurrentPage(1);
                  }}
                  max={500}
                  min={0}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="mb-4 text-gray-400 flex justify-between items-center">
              <span>Showing {displayedProducts.length} of {filteredProducts.length} products</span>
              {totalPages > 1 && (
                <span>Page {currentPage} of {totalPages}</span>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <p className="text-gray-400 text-sm mb-1">{product.category} • {product.gender}</p>
                      <p className="text-xl font-bold text-gradient">${product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                <Button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="border-purple-500/30 text-white hover:bg-purple-500/20"
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    className={currentPage === page 
                      ? "bg-gradient-royal text-white" 
                      : "border-purple-500/30 text-white hover:bg-purple-500/20"
                    }
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  className="border-purple-500/30 text-white hover:bg-purple-500/20"
                >
                  Next
                </Button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;
