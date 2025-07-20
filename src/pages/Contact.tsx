import React from 'react';
import Navbar from '@/components/Navbar'; // Adjust import path if needed

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80)`
        }}>
        <div className="bg-black/70 p-8 rounded-lg text-center max-w-xl">
          <h1 className="text-5xl font-bold text-gradient mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">We're here to help and answer any question you might have.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-black border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-black border border-purple-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us what's on your mind..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Reach out to our team for questions about orders, product availability, or partnership opportunities.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 font-medium">📍 Address:</p>
              <p className="text-gray-400">123 ELISTRO Lane, Vision City, USA</p>
            </div>
            <div>
              <p className="text-gray-300 font-medium">📞 Phone:</p>
              <p className="text-gray-400">+1 (800) 456-7890</p>
            </div>
            <div>
              <p className="text-gray-300 font-medium">✉️ Email:</p>
              <p className="text-gray-400">support@elistro.com</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-300 font-medium">🕒 Working Hours:</p>
              <p className="text-gray-400">Mon - Fri: 9am - 6pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
