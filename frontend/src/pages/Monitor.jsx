// File: frontend/src/pages/Monitor.jsx

import React, { useState } from 'react';
import { LayoutDashboard, BarChart3, Settings, Video } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import DashboardComponent from '../components/DashboardComponent';
import DroneMonitorComponent from '../components/DroneMonitorComponent';
import AnalyticsComponent from '../components/AnalyticsComponent';
import SettingsComponent from '../components/SettingsComponent';
import ThemeToggle from '../components/ThemeToggle';

const Monitor = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const { isDark } = useTheme();

  const views = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, component: DashboardComponent },
    { id: 'drone', label: 'Drone Monitor', icon: Video, component: DroneMonitorComponent },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, component: AnalyticsComponent },
    { id: 'settings', label: 'Settings', icon: Settings, component: SettingsComponent }
  ];

  const ActiveComponent = views.find(view => view.id === activeView)?.component || DashboardComponent;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="flex pt-20 md:pt-24"> {/* Add top padding to avoid overlapping the navbar */}
        {/* Sidebar */}
        <div className={`w-64 min-h-[calc(100vh-5rem)] transition-colors duration-300 ${
          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
        } border-r flex flex-col`}>
          <div className={`p-6 border-b transition-colors duration-300 ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  AgriVision
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-gray-500'
                }`}>
                  Monitor Dashboard
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {views.map((view) => {
                const Icon = view.icon;
                return (
                  <li key={view.id}>
                    <button 
                      onClick={() => setActiveView(view.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left group ${
                        activeView === view.id 
                          ? isDark
                            ? 'bg-slate-700 text-white shadow-lg'
                            : 'bg-blue-50 text-blue-700 shadow-sm'
                          : isDark
                            ? 'text-slate-300 hover:bg-slate-700 hover:text-white'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <Icon size={20} className={`transition-transform duration-300 ${
                        activeView === view.id ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      <span className="font-medium">{view.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`flex-1 transition-colors duration-300 ${
          isDark ? 'bg-slate-900' : 'bg-gray-50'
        }`}>
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Monitor;