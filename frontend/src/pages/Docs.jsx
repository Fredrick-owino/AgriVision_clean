import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Docs = () => {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">API Documentation</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Access tools and guides to interact with AgriVision’s APIs. Test endpoints, explore the OpenAPI schema, and integrate your app with ease.
          </p>
        </div>

        {/* Swagger + Redoc Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="http://localhost:8000/api/docs/swagger/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-zinc-800 hover:border-blue-500 transition rounded-xl p-6 shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-blue-400 group-hover:text-blue-500 transition">Swagger UI</h2>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-blue-500 text-sm" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interact with the API via a visual interface. Test endpoints and inspect responses in real time.
            </p>
          </a>

          <a
            href="http://localhost:8000/api/docs/redoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-zinc-800 hover:border-orange-400 transition rounded-xl p-6 shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-orange-400 group-hover:text-orange-500 transition">ReDoc</h2>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-orange-400 text-sm" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A structured OpenAPI viewer for in-depth exploration of AgriVision’s endpoints, parameters, and schemas.
            </p>
          </a>
        </div>

        {/* Endpoints Section */}
        <div className="bg-zinc-900 p-8 rounded-xl shadow-md border border-zinc-700">
          <h3 className="text-2xl font-semibold text-white mb-6">Available API Endpoints</h3>
          <ul className="space-y-4 text-sm sm:text-base text-gray-300">
            <li>
              <span className="text-blue-500 font-semibold">POST</span>{' '}
              <code className="bg-gray-800 px-2 py-1 rounded text-white font-mono text-sm">/api/predict/disease/</code> – Predict disease from uploaded crop images.
            </li>
            <li>
              <span className="text-blue-500 font-semibold">POST</span>{' '}
              <code className="bg-gray-800 px-2 py-1 rounded text-white font-mono text-sm">/api/predict/disease/drone/</code> – Detect disease using drone footage.
            </li>
            <li>
              <span className="text-green-400 font-semibold">GET</span>{' '}
              <code className="bg-gray-800 px-2 py-1 rounded text-white font-mono text-sm">/api/predict/disease/classes/</code> – List all supported disease labels.
            </li>
            <li>
              <span className="text-blue-500 font-semibold">POST</span>{' '}
              <code className="bg-gray-800 px-2 py-1 rounded text-white font-mono text-sm">/api/predict/apple/</code> – Count apples using images or videos.
            </li>
            <li>
              <span className="text-green-400 font-semibold">GET</span>{' '}
              <code className="bg-gray-800 px-2 py-1 rounded text-white font-mono text-sm">/api/preview/tmp/&lt;filename&gt;</code> – Access processed media preview.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Docs;
