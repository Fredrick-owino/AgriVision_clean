import React from 'react';
import { Code, Book, ExternalLink } from 'lucide-react';

function ApiDocs() {
  // API endpoints documentation
  const endpoints = [
    {
      path: '/api/predict-disease/',
      method: 'POST',
      description: 'Upload an image to get disease prediction',
      params: 'image (file): The crop image to analyze',
      returns: 'Prediction results including disease name and confidence score',
    },
    {
      path: '/api/drone-upload/',
      method: 'POST',
      description: 'Upload drone imagery for prediction',
      params: 'image (file): The drone captured image',
      returns: 'Analysis results for the drone image',
    },
    {
      path: '/api/disease-classes/',
      method: 'GET',
      description: 'Get list of supported crop diseases',
      params: 'None',
      returns: 'Array of supported disease classes',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Documentation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Integrate AgriVision's powerful disease detection capabilities into
            your applications using our REST API.
          </p>
        </div>

        {/* Documentation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="/api/docs/swagger/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Code className="h-8 w-8 text-green-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Swagger UI
              </h3>
              <p className="text-gray-600">
                Interactive API documentation
              </p>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400 ml-auto" />
          </a>

          <a
            href="/api/docs/redoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Book className="h-8 w-8 text-green-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                ReDoc
              </h3>
              <p className="text-gray-600">
                Reference documentation
              </p>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400 ml-auto" />
          </a>
        </div>

        {/* API Endpoints */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Available Endpoints
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                    {endpoint.method}
                  </span>
                  <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                    {endpoint.path}
                  </code>
                </div>
                
                <p className="text-gray-600">{endpoint.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Parameters:</h4>
                  <p className="text-gray-600">{endpoint.params}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Returns:</h4>
                  <p className="text-gray-600">{endpoint.returns}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiDocs;