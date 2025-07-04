import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-soft hover:shadow-medium transform hover:scale-105 ${
        isDark 
          ? 'bg-gray-700 focus:ring-offset-gray-800' 
          : 'bg-gray-200 focus:ring-offset-white'
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-300 transform flex items-center justify-center shadow-medium ${
          isDark 
            ? 'translate-x-7 bg-gray-900' 
            : 'translate-x-0 bg-white'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-blue-400" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;