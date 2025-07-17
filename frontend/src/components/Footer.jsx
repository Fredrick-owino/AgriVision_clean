import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Send, Heart, Leaf, ArrowRight, Facebook } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600'}
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const solutions = [
    { label: 'Drone Monitoring', href: '/drone-monitoring' },
    { label: 'Disease Detection', href: '/predict' },
    { label: 'Yield Analytics', href: '/monitor' },
    { label: 'Farm Management', href: '/monitor' },
    { label: 'API Access', href: '/docs' },
    { label: 'Enterprise', href: '/contact' }
  ];

  return (
    <footer className={`relative overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto container-padding pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-600 shadow-large">
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                  <h2 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    AgriVision
                  </h2>
                </div>
                
                <p className={`text-lg leading-relaxed max-w-md ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Empowering sustainable farming across Africa with cutting-edge AI and drone technology for the future of agriculture.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                        isDark 
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      } ${social.color} shadow-soft hover:shadow-medium`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`group flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                        isDark 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <a
                      href={solution.href}
                      className={`group flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                        isDark 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{solution.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={`mt-16 p-8 rounded-3xl ${
            isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
          } backdrop-blur-sm`}>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Stay Updated with AgriVision
              </h3>
              <p className={`text-lg mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Get the latest updates on AI farming innovations and agricultural technology.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDark 
                        ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500' 
                        : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500'
                    } shadow-soft focus:shadow-medium`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-soft hover:shadow-medium ${
                    isSubscribed
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white focus:ring-blue-500'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {isSubscribed ? (
                      <span>✓ Subscribed!</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Subscribe</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto container-padding py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p className="flex items-center space-x-1">
                  <span>&copy; {new Date().getFullYear()}</span>
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    AgriVision
                  </span>
                  <span>. Built with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>AgriVision tech department.</span>
                </p>
              </div>
              <div className={`text-xs ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                All rights reserved. Made in Kenya 🇰🇪
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;