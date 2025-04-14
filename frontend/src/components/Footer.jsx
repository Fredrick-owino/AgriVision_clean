import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AgriVision</h3>
            <p className="text-gray-600">
              Empowering farmers with AI-powered crop disease detection and monitoring.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-green-600">About Us</a></li>
              <li><a href="/predict" className="text-gray-600 hover:text-green-600">Disease Prediction</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-green-600">Contact</a></li>
              <li><a href="/api-docs" className="text-gray-600 hover:text-green-600">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} AgriVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;