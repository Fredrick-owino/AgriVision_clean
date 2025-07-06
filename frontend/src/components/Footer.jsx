import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black text-gray-400 px-6 pt-16 pb-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-2">AgriVision</h2>
          <p className="text-sm mb-4">
            Empowering sustainable farming with AI and drone technology.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-white transition duration-300">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition duration-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Project Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Project Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-500">Hackathon:</span>{" "}
              IEEE Dataport Hackathon 2025
            </li>
            <li>
              <span className="text-gray-500">Institution:</span>{" "}
              Technical University of Mombasa
            </li>
          </ul>
        </div>


 {/*TODO implement the newsletter subscription functionality to send emails to the user? */}
        {/* Newsletter / Feature */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe for updates on our latest AI farming solutions.
          </p>
          <form className="flex flex-col items-center sm:items-start space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-zinc-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Attribution */}
      <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-white">AgriVision</span>. Built with ❤️ by Fredrick Onyango & Ian Muriuki.
        </p>
        <p className="mt-1">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
