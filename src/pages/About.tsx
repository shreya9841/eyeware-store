import React from 'react';
import Navbar from '@/components/Navbar'; // Adjust path if needed

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1602526212430-7d48f1d6a9bd?auto=format&fit=crop&w=1400&q=80)`,
        }}
      >
        <div className="bg-black/70 p-8 rounded-lg max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-gradient mb-4">About ELISTRO</h1>
          <p className="text-gray-300 text-lg">
            Discover the story behind ELISTRO – a brand built on style, quality, and vision.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1600180758890-6a6640a8e978?auto=format&fit=crop&w=400&q=80"
              alt="Our Mission"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-400 mb-2">Our Mission</h2>
            <p className="text-gray-300">
              We aim to inspire confidence through luxurious eyewear that blends art and functionality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-500 delay-100">
            <img
              src="https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=400&q=80"
              alt="Our Vision"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-400 mb-2">Our Vision</h2>
            <p className="text-gray-300">
              To become the go-to brand for premium eyewear, where quality meets sophistication.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-500 delay-200">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1e7a94b?auto=format&fit=crop&w=400&q=80"
              alt="Why Choose Us"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-400 mb-2">Why Choose Us?</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Designer frames for all face types</li>
              <li>High-quality lenses</li>
              <li>Global delivery & support</li>
              <li>Style + Comfort in every pair</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Visual Section */}
      <section className="bg-gray-950 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Meet the Brand</h2>
          <p className="text-gray-400 text-lg mb-8">
            Behind every frame is a team passionate about fashion and functionality. Our designs are born from a blend of artistry, research, and feedback from real people.
          </p>
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b7a7e99b?auto=format&fit=crop&w=1000&q=80"
            alt="Team"
            className="rounded-lg shadow-lg w-full max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gradient">Our Creative Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
                alt="Alice"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">Alice Johnson</h3>
                <p className="text-purple-400 text-sm mb-2">Creative Director</p>
                <p className="text-gray-400 text-sm">
                  Visionary behind the ELISTRO brand, Alice brings design and identity together.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 delay-100">
              <img
                src="https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=500&q=80"
                alt="Mark"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">Mark Thompson</h3>
                <p className="text-purple-400 text-sm mb-2">Product Designer</p>
                <p className="text-gray-400 text-sm">
                  Specializes in ergonomic eyewear built for beauty and long-term comfort.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 delay-200">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a0?auto=format&fit=crop&w=500&q=80"
                alt="Sara"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">Sara Lee</h3>
                <p className="text-purple-400 text-sm mb-2">Marketing Lead</p>
                <p className="text-gray-400 text-sm">
                  Drives brand awareness and global storytelling for ELISTRO eyewear collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
