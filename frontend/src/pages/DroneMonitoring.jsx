import React, { useState, useEffect } from 'react';
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../services/api';

function DroneMonitoring() {
  const [droneStatus, setDroneStatus] = useState('active');
  const [lastImage, setLastImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated drone data - replace with real API calls
  const monitoringStats = {
    totalScans: 145,
    activeAreas: 3,
    lastScanTime: new Date().toLocaleTimeString(),
    batteryLevel: '85%'
  };

  useEffect(() => {
    // Simulated real-time updates
    const interval = setInterval(() => {
      // This would be replaced with actual API polling
      setDroneStatus(prev => prev === 'active' ? 'scanning' : 'active');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'scanning': return 'text-blue-500';
      case 'warning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Drone Monitoring System</h1>
        <p className="mt-2 text-gray-600">Real-time crop monitoring and disease detection</p>
      </div>

      {/* Status Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Drone Status</h3>
            <Activity className={`h-5 w-5 ${getStatusColor(droneStatus)}`} />
          </div>
          <p className="mt-2 text-2xl font-semibold capitalize">{droneStatus}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Total Scans Today</h3>
          <p className="mt-2 text-2xl font-semibold">{monitoringStats.totalScans}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Active Areas</h3>
          <p className="mt-2 text-2xl font-semibold">{monitoringStats.activeAreas}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Battery Level</h3>
          <p className="mt-2 text-2xl font-semibold">{monitoringStats.batteryLevel}</p>
        </div>
      </div>

      {/* Live Feed Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Live Drone Feed</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              {lastImage ? (
                <img 
                  src={lastImage} 
                  alt="Latest drone capture" 
                  className="rounded-lg object-cover w-full h-full"
                />
              ) : (
                <p className="text-gray-500">Awaiting drone feed...</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Detections</h3>
            <div className="space-y-4">
              {predictions.length > 0 ? (
                predictions.map((prediction, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    {prediction.confidence > 0.7 ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
                    )}
                    <div>
                      <p className="font-medium">{prediction.disease}</p>
                      <p className="text-sm text-gray-500">
                        Confidence: {(prediction.confidence * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No recent detections</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DroneMonitoring;