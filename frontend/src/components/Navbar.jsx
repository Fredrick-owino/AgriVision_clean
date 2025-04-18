import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png" 
                alt="AgriVision Logo"
                className="h-8 w-8"
              />
              <span className="text-2xl font-semibold text-blue-400">AgriVision</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/predict" className="hover:text-blue-400 transition">Predict</Link>
            <Link to="/drone" className="hover:text-blue-400 transition">Monitoring</Link>
            <Link to="/docs" className="hover:text-blue-400 transition">Docs</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            <Link to="/" className="block hover:text-blue-400">Home</Link>
            <Link to="/about" className="block hover:text-blue-400">About</Link>
            <Link to="/predict" className="block hover:text-blue-400">Predict</Link>
            <Link to="/drone" className="block hover:text-blue-400">Monitoring</Link>
            <Link to="/docs" className="block hover:text-blue-400">Docs</Link>
            <Link to="/contact" className="block hover:text-blue-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
