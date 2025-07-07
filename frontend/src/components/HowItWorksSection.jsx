import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Upload, Cpu, BarChart3, Bell } from 'lucide-react';

const HowItWorksSection = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      icon: Upload,
      title: 'Capture & Upload',
      description: 'Use your drone or smartphone to capture high-quality images and videos of your crops.',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Our advanced AI algorithms analyze your media for fruit counting and disease detection.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Get Insights',
      description: 'Receive detailed analytics, yield predictions, and actionable recommendations.',
      color: 'green'
    },
    {
      icon: Bell,
      title: 'Take Action',
      description: 'Get real-time alerts and implement suggested treatments to optimize your harvest.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: isDark ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-600 border-blue-200',
      purple: isDark ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-100 text-purple-600 border-purple-200',
      green: isDark ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-600 border-green-200',
      orange: isDark ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            How It Works
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get started with AgriVision in four simple steps and transform your farming operations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className={`hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 ${
            isDark ? 'bg-slate-700' : 'bg-gray-200'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-6 transition-all duration-300 group-hover:scale-110 ${
                    getColorClasses(step.color)
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Content */}
                  <div className={`p-6 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                    isDark ? 'bg-slate-800' : 'bg-gray-50'
                  }`}>
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isDark ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'
                  } shadow-lg`}>
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 p-12 rounded-2xl text-center ${
          isDark ? 'bg-slate-800' : 'bg-gray-50'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Get Started?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join hundreds of farmers who are already using AgriVision to optimize their crop yields and reduce losses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'bg-slate-700 hover:bg-slate-600 text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-900 border border-gray-300'
            }`}>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;