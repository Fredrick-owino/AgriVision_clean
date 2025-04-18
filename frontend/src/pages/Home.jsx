import React from 'react';

import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection'; 
import AboutSection from '../components/AboutSection';


const Home = () => {
  return (
    <>
     
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />   
        <AboutSection />
      </main>
     
    </>
  );
};

export default Home;
