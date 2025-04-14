import React from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, Bone as Drone, Brain, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Plant className="h-12 w-12 text-green-600" />,
      title: 'Crop Disease Detection',
      description: 'Advanced AI-powered detection of crop diseases from images.',
    },
    {
      icon: <Drone className="h-12 w-12 text-green-600" />,
      title: 'Drone Integration',
      description: 'Support for drone imagery for large-scale crop monitoring.',
    },
    {
      icon: <Brain className="h-12 w-12 text-green-600" />,
      title: 'Smart Analysis',
      description: 'Get detailed predictions with confidence scores.',
    },
    {
      icon: <Upload className="h-12 w-12 text-green-600" />,
      title: 'Easy Upload',
      description: 'Simple interface for uploading and analyzing images.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32 flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4">
              AI-Powered Crop Disease Detection
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 px-4 max-w-2xl mx-auto">
              Protect your crops with advanced disease detection technology. Upload images from your device or drone for instant analysis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Link
                to="/predict"
                className="w-full sm:w-auto px-8 py-4 text-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Detection
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 text-center border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={featuresInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-6 p-4 bg-green-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to protect your crops?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Start using our AI-powered disease detection today and ensure the health of your crops.
            </p>
            <Link
              to="/predict"
              className="inline-block px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Try It Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;