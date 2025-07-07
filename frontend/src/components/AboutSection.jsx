import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Leaf, Target, Globe, Users, Heart, Zap, Shield, Award, ArrowRight, Play } from 'lucide-react';

const AboutSection = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = [heroRef.current, valuesRef.current, teamRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Leveraging AI to deliver 94%+ accuracy in crop monitoring and disease detection for data-driven farming decisions.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Sustainable Impact',
      description: 'Supporting UN SDGs for Zero Hunger, Responsible Consumption, and Climate Action across Sub-Saharan Africa.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Farmer Empowerment',
      description: 'Making advanced agricultural technology accessible and affordable for smallholder farmers and large-scale operations.',
      color: 'purple',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'Real-time Intelligence',
      description: 'Transforming reactive farming into proactive agriculture with instant insights from drone-powered AI analysis.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Scalable Solutions',
      description: 'Building robust, enterprise-grade technology that scales from individual farms to continental agricultural networks.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const founders = [
    {
      name: 'Fredrick Onyango',
      role: 'Co-Founder & AI Engineer',
      bio: 'Leading AI innovation in agricultural technology with expertise in computer vision and deep learning systems.',
      avatar: 'FO',
      gradient: 'from-blue-600 via-purple-600 to-blue-800',
      expertise: ['TensorFlow', 'Computer Vision', 'Agricultural AI'],
      achievement: 'IEEE Dataport Hackathon Winner 2025'
    },
    {
      name: 'Ian Muriuki',
      role: 'Co-Founder & Full-Stack Developer',
      bio: 'Architecting scalable platforms that bridge cutting-edge AI with intuitive user experiences for farmers.',
      avatar: 'IM',
      gradient: 'from-emerald-600 via-teal-600 to-green-800',
      expertise: ['React', 'Django', 'System Architecture'],
      achievement: 'Technical University of Mombasa Excellence Award'
    },
    {
      name: 'Dr. Sarah Kimani',
      role: 'Co-Founder & Agricultural Scientist',
      bio: 'Bridging traditional farming wisdom with modern technology to create sustainable agricultural solutions.',
      avatar: 'SK',
      gradient: 'from-rose-600 via-pink-600 to-purple-800',
      expertise: ['Crop Science', 'Sustainable Agriculture', 'Research'],
      achievement: 'African Agricultural Innovation Fellowship'
    }
  ];

  return (
    <section ref={sectionRef} className={`relative overflow-hidden transition-all duration-700 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div ref={heroRef} className="pt-20 pb-16 text-center opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 mb-8">
            <Award className="w-4 h-4 text-blue-500" />
            <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              IEEE Dataport Hackathon 2025 Winners
            </span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Revolutionizing</span>
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
              African Agriculture
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            AgriVision empowers farmers across Sub-Saharan Africa with AI-powered drone technology, 
            transforming crop monitoring from reactive guesswork into proactive, data-driven agriculture.
          </p>

          {/* Hero Image/Video Placeholder */}
          <div className={`relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-16 ${
            isDark ? 'bg-slate-800' : 'bg-gray-100'
          }`}>
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-green-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-slate-700' : 'bg-white'
                  } shadow-lg`}>
                    <Play className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Watch Our Story
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    See how we're transforming agriculture across Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`py-16 text-center ${
          isDark ? 'bg-slate-800/50' : 'bg-gray-50'
        } rounded-3xl mb-20 backdrop-blur-sm`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Mission
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed max-w-5xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We believe that every farmer, regardless of farm size or location, deserves access to the same 
            advanced monitoring and analysis tools used by the world's largest agricultural operations. 
            Through accessible AI technology and drone-powered insights, we're democratizing precision 
            agriculture to build a more sustainable future for food production across Africa.
          </p>
        </div>

        {/* Core Values */}
        <div ref={valuesRef} className="py-20 opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Core Values
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The principles that drive our innovation and guide our mission to transform agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isDark ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {value.title}
                    </h3>
                    
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meet the Founders */}
        <div ref={teamRef} className="py-20 opacity-0 transform translate-y-8 transition-all duration-1000 delay-500">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Meet Our Founders
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Visionary leaders combining AI expertise, agricultural science, and engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 ${
                  isDark ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                } shadow-xl hover:shadow-2xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8">
                  {/* Avatar */}
                  <div className="text-center mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-white font-bold text-2xl">{founder.avatar}</span>
                    </div>
                    
                    {/* Achievement Badge */}
                    <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium mt-4 ${
                      isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      <Award className="w-3 h-3" />
                      <span>{founder.achievement}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {founder.name}
                    </h3>
                    
                    <p className={`text-sm font-medium mb-4 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {founder.role}
                    </p>
                    
                    <p className={`text-sm leading-relaxed mb-6 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {founder.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDark ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className={`py-16 rounded-3xl mb-20 ${
          isDark ? 'bg-slate-800/50' : 'bg-gray-50'
        } backdrop-blur-sm`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '94%+', label: 'Detection Accuracy', icon: Target },
              { value: '38', label: 'Disease Classes', icon: Shield },
              { value: '60K+', label: 'Training Images', icon: Zap },
              { value: '3', label: 'UN SDGs Supported', icon: Globe }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Join the Agricultural Revolution
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Be part of the movement transforming agriculture across Africa. Together, we can build a more sustainable and prosperous future for farming.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg">
              <Heart className="w-5 h-5" />
              <span>Join Our Mission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' 
                : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
            } shadow-lg`}>
              <Leaf className="w-5 h-5" />
              <span>See Our Vision</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;