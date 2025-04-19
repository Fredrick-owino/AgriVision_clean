import React from 'react';
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Fredrick Onyango',
    role: 'Backend Lead & AI Specialist',
    bio: `Fredrick is passionate about combining deep learning with real-world applications. He spearheaded the development of AgriVision’s disease detection and fruit counting models using TensorFlow and YOLO. Beyond code, he's an innovator driving sustainable tech in agriculture.`,
    image: '/team/fredrick.jpg',
    university: 'Technical University of Mombasa',
  },
  {
    name: 'Ian Muriuki',
    role: 'Frontend Developer & UI/UX Designer',
    bio: `Ian crafted the user experience and built the frontend in React + Tailwind. He ensures that AgriVision is intuitive and accessible for all users. Ian believes in the power of design to bridge the gap between people and technology.`,
    image: '/images/me.jpeg',
    university: 'Technical University of Mombasa',
  },
];

const AboutPage = () => {
  return (
    <section
      className="text-white min-h-screen bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/about-bg.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-85 w-full h-full">
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 text-center px-6 sm:px-12">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-4">
              About AgriVision
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Transforming agriculture through AI-powered crop health monitoring and fruit counting.
            </p>
          </div>
        </div>

        {/* Section Connector */}
        <div className="text-center text-blue-400 italic pb-6 px-4">
          Bridging drone technology with intelligent farming
        </div>

        {/* Introduction */}
        <div className="py-10 px-6 sm:px-12 max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-12"
          >
            AgriVision is a modern agricultural intelligence platform that uses drone footage and artificial intelligence to detect plant diseases and count fruits or crops with precision. We are passionate about empowering African farmers with cutting-edge tools to improve yield, reduce losses, and achieve food sustainability.
          </motion.p>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <FaRocket />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-sm">
                To lead Africa into a new era of smart agriculture by enabling every farmer with intelligent tools that promote productivity and sustainability.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <FaLightbulb />
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-sm">
                To simplify precision agriculture by offering AI-based crop health diagnostics and real-time fruit counting through drone imagery and computer vision.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-950 py-20 px-6 sm:px-12 text-center">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
            <FaUsers className="text-blue-400" /> Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-2xl text-left shadow-lg"
              >
                <div className="flex gap-4 items-start">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-blue-400">{member.role}</p>
                    <p className="text-xs text-gray-400 mb-2">{member.university}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon Note */}
        <div className="bg-gray-900 py-10 px-6 text-center text-gray-400 text-sm">
          <p>
            AgriVision was proudly built for the IEEE Africa Entrepreneurship Summit 2025 DataPort Hackathon.
            Our project represents the future of sustainable agriculture using AI, drone technology, and human innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
