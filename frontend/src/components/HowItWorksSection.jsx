import React from 'react';
import { FaUpload, FaMicroscope, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUpload size={26} />,
    title: '1. Upload Media',
    description: 'Capture images or videos of your crops using a drone or mobile and upload them to the platform.',
  },
  {
    icon: <FaMicroscope size={26} />,
    title: '2. AI Analysis',
    description: 'Our AI models analyze the uploaded media to detect diseases or count fruits with high precision.',
  },
  {
    icon: <FaChartLine size={26} />,
    title: '3. Get Insights',
    description: 'View predictions, confidence scores, and visual outputs to make smart, data-driven decisions.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-14"
        >
          How It Works
        </motion.h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 text-left"
            >
              <div className="bg-blue-900 text-blue-400 p-3 rounded-full shadow-md">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
