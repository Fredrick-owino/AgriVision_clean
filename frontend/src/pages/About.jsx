import React from 'react';
import { Users, Target, Award } from 'lucide-react';

function About() {
  // Team members data
  const team = [
    {
      name: 'Muriuki Iann',
      role: 'Lead AI Researcher',
      image: '/images/me.jpeg',
    },
    {
      name: 'Fredrick Onyango',
      role: 'Agricultural Expert',
      image: '/images/me.jpeg',
    },
    {
      name: 'Dennis Wambua',
      role: 'Computer Vision Specialist',
      image: '/images/me.jpeg',
    },
  ];

  return (
    <div className="py-12">
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          About AgriVision
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize crop disease detection through AI-powered technology,
              making agriculture more sustainable and efficient.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              Creating a world where every farmer has access to advanced
              crop monitoring tools for better yield and sustainability.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, sustainability, and accessibility drive everything
              we do in supporting global agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Technology
        </h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            AgriVision combines advanced machine learning algorithms with
            computer vision technology to provide accurate crop disease detection.
            Our system uses TensorFlow for deep learning models and supports both
            regular and drone imagery for comprehensive crop monitoring.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;