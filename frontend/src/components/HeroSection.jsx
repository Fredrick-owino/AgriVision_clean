import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Play, Zap, Shield, BarChart3, Sparkles, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = [heroRef.current, statsRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: BarChart3, text: '94% Detection Accuracy', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Shield, text: 'Early Disease Detection', color: 'text-green-600 dark:text-green-400' },
    { icon: Zap, text: 'Real-time Analysis', color: 'text-purple-600 dark:text-purple-400' },
  ];

  const stats = [
    { value: '500+', label: 'Farms Monitored', icon: '🌾' },
    { value: '94.2%', label: 'AI Accuracy', icon: '🎯' },
    { value: '38', label: 'Disease Classes', icon: '🔬' },
    { value: '60K+', label: 'Training Images', icon: '📸' },
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        {/* Hero Content */}
        <div ref={heroRef} className="animate-on-scroll">
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8 group hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            {/*  */}
            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block mb-2">Smart Farming</span>
            <span className="text-gradient">Powered by AI</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-balance ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transform your agricultural operations with drone-based monitoring, 
            AI-powered fruit counting, and precision disease detection for sustainable farming.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full glass hover:scale-105 transition-all duration-300 ${
                    isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className={`w-4 h-4 ${feature.color}`} />
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {feature.text}
                  </span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link
              to="/monitor"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-large hover:shadow-glow"
            >
              <span>Start Monitoring</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className={`group inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 glass ${
              isDark 
                ? 'text-white hover:bg-white/10' 
                : 'text-gray-900 hover:bg-gray-100/50'
            } shadow-medium hover:shadow-large`}>
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl glass hover:scale-105 transition-all duration-300 ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100/30'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;