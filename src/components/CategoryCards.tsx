import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CategoryCards = () => {
  const navigate = useNavigate();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const categories = [
    {
      title: "Women's Collection",
      image: "/photo/womenglass.jpg",
      description: "Elegant frames designed for the modern woman",
      filter: "women",
    },
    {
      title: "Men's Collection",
      image: "/photo/menglasses.jpg",
      description: "Bold styles for the distinguished gentleman",
      filter: "men",
    }
  ];

  const handleViewCollection = (filter: string) => {
    navigate(`/products?gender=${filter}`);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gradient">Curated Collections</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover our handpicked selection of premium eyewear, crafted to complement every personality and style.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full h-96 perspective group"
            onMouseEnter={() => setFlippedIndex(index)}
            onMouseLeave={() => setFlippedIndex(null)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-1000 preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''}`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden rounded-2xl border border-purple-400/50 bg-white shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 w-full bg-white/90 p-4">
                  <h3 className="text-purple-600 text-xl font-semibold">{category.title}</h3>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full rounded-2xl border border-purple-400/50 overflow-hidden backface-hidden rotate-y-180 shadow-xl">
                {/* Same image */}
                <img
                  src={category.image}
                  alt={`${category.title} back`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with content */}
                <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-200">{category.description}</p>
                  </div>
                  <Button
                    onClick={() => handleViewCollection(category.filter)}
                    className="bg-gradient-royal hover:opacity-90 text-white mt-6 rounded-full px-6 py-2 transition-transform hover:scale-105"
                  >
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default CategoryCards;
