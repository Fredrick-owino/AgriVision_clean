import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Predict from './pages/Predict';
import About from './pages/About';
import Contact from './pages/Contact';
import ApiDocs from './pages/ApiDocs';
import DroneMonitoring from './pages/DroneMonitoring';

/**
 * Main App component that handles routing and layout structure
 * Implements a consistent layout with navbar, main content area, and footer
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/drone-monitoring" element={<DroneMonitoring />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api-docs" element={<ApiDocs />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }} 
        />
      </div>
    </Router>
  );
}

export default App;