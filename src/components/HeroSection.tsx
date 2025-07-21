import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Premium Eyewear Collection",
    description:
      "Discover luxury sunglasses and eyeglasses crafted with precision and style. Elevate your look with ELISTRO's exclusive collection.",
    image:
      "/photo/img1.jpg",
  },
  {
    title: "Modern Frames for Everyone",
    description:
      "Explore trendy and comfortable frames that suit every face shape and personality. See the world through ELISTRO.",
    image:
      "/photo/img2.jpg",
  },
  {
    title: "Style Meets Clarity",
    description:
      "Experience the perfect blend of vision and fashion. Our glasses are made for bold and confident individuals.",
    image:
      "/photo/img3.jpg",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 transition-opacity duration-1000">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-gradient">{slides[currentSlide].title.split(" ")[0]}</span>{" "}
            <span className="text-white block">
              {slides[currentSlide].title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            {slides[currentSlide].description}
          </p>
          <Button
            onClick={() => (window.location.href = "/products")}
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/20 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Explore Collections
          </Button>
        </div>

        {/* Right: Rotating Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-96 h-64 perspective">
            <div className="w-full h-full transform-style-3d spin-3d">
              <img
                key={currentSlide} // forces image update on slide change
                src={slides[currentSlide].image}
                alt="Slide"
                className="w-full h-full object-cover rounded-xl shadow-[0_10px_25px_rgba(128,90,213,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for rotation */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .spin-3d {
          animation: spinY 8s linear infinite;
        }
        @keyframes spinY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
