import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Docs from './pages/Docs';
import Monitor from './pages/Monitor';
import Predict from './pages/Predict';
import DroneMonitoring from './pages/DroneMonitoring';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/monitor" element={<Monitor />} />
              <Route path="/predict" element={<Predict />} />
              <Route path="/drone-monitoring" element={<DroneMonitoring />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;