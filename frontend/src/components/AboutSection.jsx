import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-950 text-gray-100 py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Intro */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">About AgriVision</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Revolutionizing agriculture with AI and drone-powered insights to support food security and sustainable farming.
          </p>
        </div>

        {/* Project Overview */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-blue-400">Our Mission</h3>
          <p>
            <span className="font-semibold">AgriVision</span> is an AI-driven agricultural assistant, developed at the 
            <span className="text-blue-300 font-semibold"> IEEE Africa Entrepreneurship Summit DataPort Hackathon 2025</span>.
            It combines cutting-edge drone technology and artificial intelligence to assist farmers in monitoring crop health,
            diagnosing plant diseases, and maximizing yield potential.
          </p>
          <p>
            Designed with scalability in mind, AgriVision empowers farmers across Africa by offering accessible,
            real-time agricultural intelligence for smarter, more efficient farming.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Core Capabilities</h3>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <span className="font-semibold text-white">AI Crop Disease Detection:</span> 
              Detects diseases from both close-up leaf images and drone aerial views, enabling farmers to take action before it’s too late.
            </li>
            <li>
              <span className="font-semibold text-white">Fruit Counting with YOLOv8:</span> 
              Utilizes advanced object detection on drone footage to count fruits (like mangoes or oranges), estimate yields,
              and automate farm analytics.
            </li>
          </ul>
        </div>

        {/* Impact Statement */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Technology for Impact</h3>
          <p>
            AgriVision covers large agricultural fields using autonomous drones, 
            capturing real-time data and delivering actionable insights.
            This approach reduces crop loss, boosts efficiency, and supports climate-resilient agriculture.
          </p>
          <p>
            Our vision is to align with global sustainability goals by helping farmers adapt to changing climates,
            reduce dependency on manual processes, and ultimately improve food production systems.
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Meet the Team</h3>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <span className="font-semibold text-white">Fredrick Onyango</span> – AI Systems Developer & Team Lead (Technical University of Mombasa Developer Club). Spearheaded backend systems and machine learning model integration.
            </li>
            <li>
              <span className="font-semibold text-white">Ian Muriuki</span> – Frontend Developer (Technical University of Mombasa). Designed and built the user interface for an intuitive, responsive platform.
            </li>
          </ul>
        </div>

        {/* Closing */}
        <div className="text-center mt-10">
          <p className="text-lg text-gray-300">
            From hackathon ideation to real-world impact, AgriVision is built by passionate innovators aiming to transform agriculture — one drone at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
