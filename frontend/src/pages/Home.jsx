
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutSection />
    </div>
  );
};

export default Home;