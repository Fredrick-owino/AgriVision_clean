import React from 'react';
import { FaRobot, FaLanguage, FaLeaf } from 'react-icons/fa';
import { GiFlyingShuriken } from 'react-icons/gi';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaRobot size={32} />,
    title: 'AI Disease Detection',
    description: 'Upload leaf or crop images and let our model identify diseases with high confidence.',
  },
  {
    icon: <GiFlyingShuriken size={32} />,
    title: 'Drone-Based Counting',
    description: 'Use drone footage to detect and count fruits like apples using YOLOv8.',
  },
  {
    icon: <FaLanguage size={32} />,
    title: 'Multilingual Support',
    description: 'Interact with the system in English or Kiswahili for a seamless local experience.',
  },
  {
    icon: <FaLeaf size={32} />,
    title: 'Sustainable Farming',
    description: 'Empowering farmers with smart tools for healthier yields and sustainable agriculture practices.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12"
        >
          Core Features
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition"
            >
              <div className="mb-4 flex items-center justify-center h-14 w-14 mx-auto bg-blue-900 rounded-full text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
