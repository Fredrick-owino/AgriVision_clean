import React from 'react';
import { Activity, AlertTriangle, Apple, MapPin, TrendingUp, Calendar, Thermometer, Droplets } from 'lucide-react';

const DashboardComponent = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Real-time monitoring and insights for your agricultural operations</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Disease Alerts</p>
              <p className="text-2xl font-bold text-red-600">3</p>
              <p className="text-xs text-gray-400">Active alerts</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Fruit Count</p>
              <p className="text-2xl font-bold text-green-600">1,530</p>
              <p className="text-xs text-gray-400">Last updated</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Apple className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Per-Tree Average</p>
              <p className="text-2xl font-bold text-blue-600">24</p>
              <p className="text-xs text-gray-400">Fruits per tree</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Monitoring Status</p>
              <p className="text-2xl font-bold text-purple-600">Active</p>
              <p className="text-xs text-gray-400">All systems online</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Disease Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Disease Alerts</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h4 className="font-semibold text-red-800">Leaf Blight</h4>
              </div>
              <p className="text-sm text-red-700 mb-2">Severity: Moderate</p>
              <p className="text-xs text-red-600">Affected Area: 120 m²</p>
              <p className="text-xs text-red-600">Location: 1.234, 30.678</p>
            </div>
          </div>
        </div>

        {/* Fruit Report */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Apple className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Fruit Report</h3>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1,530</div>
            <p className="text-sm text-gray-600 mb-4">Total Fruit Count</p>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700 mb-1">Per-Tree Avg</p>
              <p className="text-2xl font-bold text-green-800">24</p>
            </div>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Location</h3>
          </div>
          
          <div className="bg-green-100 rounded-lg h-40 flex items-center justify-center relative">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="absolute top-2 right-2 text-xs text-gray-600">
              Farm Location
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Treatment Suggestions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Treatment Suggestions</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Apply Fungicide</h4>
              <p className="text-sm text-orange-700 mb-2">
                Spray copper-based fungicide. Repeat after 7-10 days if needed.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Monitor Yield</h4>
              <p className="text-sm text-blue-700">
                Continue monitoring fruit development and count accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Yield Trend Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Yield Trend</h3>
          </div>
          
          <div className="h-48 bg-gray-50 rounded-lg flex items-end justify-between p-4 space-x-2">
            {[5, 15, 25, 35, 45, 55, 65].map((height, index) => (
              <div key={index} className="flex-1 bg-purple-200 rounded-t" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Mar</span>
            <span>Apr</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
          </div>
        </div>
      </div>

      {/* Environmental Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-lg font-semibold text-gray-900">24°C</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Droplets className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-lg font-semibold text-gray-900">68%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-lg font-semibold text-gray-900">2 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;