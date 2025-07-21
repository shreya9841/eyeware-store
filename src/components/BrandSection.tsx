import React from 'react';

const brands = [
  "Ray-Ban", "Oakley", "Gucci", "Prada", "Versace",
  "Tom Ford", "Armani", "Dolce & Gabbana", "Burberry", "Carrera",
  "Maui Jim", "Persol", "Fendi", "Coach", "Vogue Eyewear"
];

const BrandSection = () => {
  return (
    <div className="bg-gray-900 py-6 overflow-hidden">
      <div className="flex gap-16 animate-scroll">
        {[...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="text-xl font-semibold text-purple-300 whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandSection;
