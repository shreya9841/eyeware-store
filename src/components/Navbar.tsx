
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setIsMenuOpen(false);
    if (category === 'All') {
      navigate('/products');
    } else {
      navigate(`/products?category=${category.toLowerCase()}`);
    }
  };

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">ELISTRO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">About</Link>
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link>
            <Link to="/dashboard" className="text-white hover:text-purple-400 transition-colors">Dashboard</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-purple-500/20 rounded-lg shadow-xl">
                <div className="py-2">
                  <button
                    onClick={() => handleCategoryClick('All')}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500/20 transition-colors"
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Sunglasses')}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500/20 transition-colors"
                  >
                    Sunglasses
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Eyeglasses')}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500/20 transition-colors"
                  >
                    Eyeglasses
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button (for small screens) */}
          <div className="md:hidden">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-purple-400 transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-white hover:text-purple-400 transition-colors text-sm">About</Link>
              <Link to="/contact" className="text-white hover:text-purple-400 transition-colors text-sm">Contact</Link>
              <Link to="/dashboard" className="text-white hover:text-purple-400 transition-colors text-sm">Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
