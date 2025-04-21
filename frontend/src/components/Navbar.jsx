import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="AgriVision Logo" className="h-8 w-8" />
              <span className="text-2xl font-semibold text-blue-400">AgriVision</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/predict" className="hover:text-blue-400 transition">Predict</Link>
            <Link to="/drone" className="hover:text-blue-400 transition">Monitoring</Link>
            <Link to="/docs" className="hover:text-blue-400 transition">Docs</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45 top-2.5' : 'top-0'
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-white rounded transition duration-300 ease-in-out ${
                  menuOpen ? 'opacity-0' : 'top-2.5'
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45 bottom-2.5' : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3 text-sm">
              {['Home', 'About', 'Predict', 'Monitoring', 'Docs', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
