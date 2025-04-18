import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl font-bold mb-1">AgriVision</h2>
          <p className="text-sm">Empowering sustainable farming with AI.</p>
        </div>

        {/* Links */}
        <div className="space-x-6 text-sm">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
          <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
          <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
        </div>
      </div>

      {/* Attribution */}
      <div className="text-center text-xs text-gray-600 mt-6 space-y-1">
        <p>
          &copy; {new Date().getFullYear()} AgriVision. Made with <span className="text-white">❤️</span> by Fredrick Onyango & Ian Muriuki.
        </p>
        <p>
          Technical University of Mombasa &bull; IEEE Dataport Hackathon 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
