import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8">About AgriVision</h2>

        <p className="mb-4">
          AgriVision is an AI-powered agricultural assistant developed during
          the
          <span className="font-semibold">
            {" "}
            IEEE Africa Entrepreneurship Summit DataPort Hackathon 2025
          </span>
          . This project leverages artificial intelligence and drone technology
          to help farmers monitor crop health and yields. Our goal is to enhance
          sustainable agriculture practices and boost farm productivity through
          tech-driven solutions.
        </p>

        <p className="mb-4">It focuses on two main capabilities:</p>

        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>AI Crop Disease Detection:</strong> Identifies plant
            diseases from both ground-level images and drone-captured imagery,
            enabling early intervention to prevent the spread of crop diseases.
          </li>
          <li className="mt-2">
            <strong>Fruit Counting with YOLOv8:</strong> Uses a state-of-the-art
            YOLOv8 object detection model on drone footage to count fruits
            (e.g., in orchards), helping estimate yields and reduce manual
            effort.
          </li>
        </ul>

        <p className="mb-8">
          By harnessing these technologies, AgriVision can cover large fields
          with autonomous drones and provide real-time insights. This drone-tech
          + AI approach promotes sustainable farming by reducing crop losses and
          optimizing resource use, aligning with global efforts to improve food
          security and climate resilience.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Fredrick Onyango</strong> – AI Systems Developer (Team Lead,
            Technical University of Mombasa Developer Club). Fredrick led the
            backend development and machine learning integration for AgriVision.
          </li>
          <li className="mb-2">
            <strong>Ian Muriuki</strong> – Frontend Developer (Technical
            University of Mombasa). Ian crafted the user interface and ensured a
            smooth, responsive user experience on the platform.
          </li>
        </ul>

        <p className="mt-6">
          Together, we combined our skills to create AgriVision – a solution
          born from a hackathon challenge, aimed at empowering farmers and
          fostering sustainable agriculture through innovation.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
