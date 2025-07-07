import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Camera, BarChart3, AlertTriangle, Smartphone, Cloud, Shield, Zap, Target, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);
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

    const elements = [featuresRef.current, statsRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Camera,
      title: 'Drone Integration',
      description: 'Seamlessly connect with your drone for automated aerial monitoring and comprehensive data collection across vast agricultural areas.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '4K Resolution'
    },
    {
      icon: BarChart3,
      title: 'AI Fruit Counting',
      description: 'Advanced computer vision algorithms count fruits with industry-leading 94%+ accuracy for precise yield prediction and harvest planning.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      stats: '94%+ Accuracy'
    },
    {
      icon: AlertTriangle,
      title: 'Disease Detection',
      description: 'Early identification of plant diseases and pests across 38 classes to prevent crop loss and optimize treatment strategies.',
      color: 'red',
      gradient: 'from-red-500 to-orange-500',
      stats: '38 Disease Classes'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Monitor your farm from anywhere with our intuitive mobile application featuring real-time alerts and comprehensive analytics.',
      color: 'purple',
      gradient: 'from-purple-500 to-violet-500',
      stats: 'Real-time Alerts'
    },
    {
      icon: Cloud,
      title: 'Cloud Analytics',
      description: 'Powerful cloud-based analytics provide deep insights and AI-driven recommendations for data-driven farming decisions.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500',
      stats: 'Cloud-powered'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your farm data is protected with end-to-end encryption and compliance with global regulations.',
      color: 'gray',
      gradient: 'from-gray-500 to-slate-500',
      stats: 'Enterprise-grade'
    }
  ];

  const achievements = [
    { icon: Target, value: '500+', label: 'Farms Monitored', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Zap, value: '94%', label: 'Detection Accuracy', color: 'text-green-600 dark:text-green-400' },
    { icon: Globe, value: '50K+', label: 'Images Analyzed', color: 'text-purple-600 dark:text-purple-400' },
    { icon: Shield, value: '24/7', label: 'Monitoring', color: 'text-orange-600 dark:text-orange-400' }
  ];

  return (
    <section ref={sectionRef} className={`section-padding transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className={`text-sm font-medium ${
              isDark ? 'text-yellow-400' : 'text-yellow-600'
            }`}>
              Cutting-edge Technology
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Powerful Features for
            <span className="block text-gradient">Modern Agriculture</span>
          </h2>
          
          <p className={`text-xl md:text-2xl max-w-4xl mx-auto text-balance ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to revolutionize your farming operations with cutting-edge AI technology and precision monitoring.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="animate-on-scroll mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 card overflow-hidden ${
                    isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.gradient} shadow-large group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stats Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {feature.stats}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Stats */}
        <div ref={statsRef} className="animate-on-scroll">
          <div className={`p-12 rounded-4xl glass text-center ${
            isDark ? 'bg-gray-800/30' : 'bg-white/50'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Trusted by Farmers Worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {achievement.value}
                    </div>
                    
                    <div className={`text-sm font-medium ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;