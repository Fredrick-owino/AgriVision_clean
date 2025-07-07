import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Book, Code, Zap, Settings, Camera, BarChart3, Search } from 'lucide-react';

const Docs = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      content: {
        title: 'Getting Started with AgriVision',
        description: 'Learn how to set up and use AgriVision for your farming operations.',
        steps: [
          'Create your AgriVision account',
          'Set up your farm profile and location',
          'Configure your drone or camera settings',
          'Start monitoring your crops',
          'Analyze the results and insights'
        ]
      }
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      content: {
        title: 'API Documentation',
        description: 'Complete reference for AgriVision API endpoints and integration.',
        endpoints: [
          { method: 'POST', path: '/api/predict/apple/', description: 'Upload and analyze fruit images' },
          { method: 'GET', path: '/api/analytics/', description: 'Retrieve analytics data' },
          { method: 'POST', path: '/api/alerts/', description: 'Create disease alerts' },
          { method: 'GET', path: '/api/reports/', description: 'Generate yield reports' }
        ]
      }
    },
    {
      id: 'drone-setup',
      title: 'Drone Setup',
      icon: Camera,
      content: {
        title: 'Drone Configuration',
        description: 'How to set up and configure your drone for optimal monitoring.',
        requirements: [
          'Compatible drone with 4K camera',
          'Stable internet connection',
          'AgriVision mobile app',
          'GPS calibration',
          'Weather considerations'
        ]
      }
    },
    {
      id: 'analytics',
      title: 'Analytics Guide',
      icon: BarChart3,
      content: {
        title: 'Understanding Analytics',
        description: 'Learn how to interpret and use AgriVision analytics data.',
        metrics: [
          'Fruit count accuracy',
          'Disease detection rates',
          'Yield predictions',
          'Growth patterns',
          'Treatment effectiveness'
        ]
      }
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: Settings,
      content: {
        title: 'Common Issues & Solutions',
        description: 'Resolve common problems and optimize your AgriVision experience.',
        issues: [
          { problem: 'Low detection accuracy', solution: 'Ensure proper lighting and camera focus' },
          { problem: 'Connection timeouts', solution: 'Check internet connection and API settings' },
          { problem: 'Blurry images', solution: 'Stabilize drone and adjust camera settings' },
          { problem: 'False disease alerts', solution: 'Calibrate sensitivity settings' }
        ]
      }
    }
  ];

  const activeContent = sections.find(section => section.id === activeSection)?.content;

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Documentation
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to know about using AgriVision for precision agriculture.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search documentation..."
              className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                isDark 
                  ? 'bg-slate-800 text-white border border-slate-700 focus:border-blue-500' 
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
              }`}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 p-6 rounded-xl ${
              isDark ? 'bg-slate-800' : 'bg-white'
            } shadow-lg`}>
              <h3 className={`font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Documentation
              </h3>
              <nav className="space-y-2">
                {filteredSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? isDark
                            ? 'bg-slate-700 text-white'
                            : 'bg-blue-50 text-blue-700'
                          : isDark
                            ? 'text-gray-300 hover:bg-slate-700 hover:text-white'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-xl ${
              isDark ? 'bg-slate-800' : 'bg-white'
            } shadow-lg`}>
              {activeContent && (
                <>
                  <h2 className={`text-3xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {activeContent.title}
                  </h2>
                  <p className={`text-lg mb-8 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {activeContent.description}
                  </p>

                  {/* Getting Started Steps */}
                  {activeContent.steps && (
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Quick Start Guide
                      </h3>
                      <ol className="space-y-3">
                        {activeContent.steps.map((step, index) => (
                          <li key={index} className={`flex items-start space-x-3 p-4 rounded-lg ${
                            isDark ? 'bg-slate-700' : 'bg-gray-50'
                          }`}>
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                              isDark ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                            }`}>
                              {index + 1}
                            </span>
                            <span className={`${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* API Endpoints */}
                  {activeContent.endpoints && (
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Available Endpoints
                      </h3>
                      <div className="space-y-3">
                        {activeContent.endpoints.map((endpoint, index) => (
                          <div key={index} className={`p-4 rounded-lg border ${
                            isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                          }`}>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-bold ${
                                endpoint.method === 'GET' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {endpoint.method}
                              </span>
                              <code className={`font-mono text-sm ${
                                isDark ? 'text-blue-400' : 'text-blue-600'
                              }`}>
                                {endpoint.path}
                              </code>
                            </div>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {endpoint.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Requirements */}
                  {activeContent.requirements && (
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {activeContent.requirements.map((requirement, index) => (
                          <li key={index} className={`flex items-center space-x-3 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Metrics */}
                  {activeContent.metrics && (
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Metrics
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {activeContent.metrics.map((metric, index) => (
                          <div key={index} className={`p-4 rounded-lg ${
                            isDark ? 'bg-slate-700' : 'bg-gray-50'
                          }`}>
                            <span className={`${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Troubleshooting Issues */}
                  {activeContent.issues && (
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Common Issues
                      </h3>
                      <div className="space-y-4">
                        {activeContent.issues.map((issue, index) => (
                          <div key={index} className={`p-4 rounded-lg border-l-4 ${
                            isDark 
                              ? 'bg-slate-700 border-orange-500' 
                              : 'bg-orange-50 border-orange-500'
                          }`}>
                            <h4 className={`font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Problem: {issue.problem}
                            </h4>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              <strong>Solution:</strong> {issue.solution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;