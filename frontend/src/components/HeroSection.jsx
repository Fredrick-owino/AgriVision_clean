import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-6 py-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/m12.png')" }} // replace with your image path
      />

      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-4xl z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Revolutionizing Agriculture <br className="hidden md:inline" />
          <span className="text-blue-400">with Artificial Intelligence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          AgriVision empowers farmers and researchers with real-time crop
          disease detection and fruit counting using drone-based AI.
        </p>

        <div className="flex justify-center space-x-4 flex-wrap gap-4">
          <Link
            to="/predict"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
