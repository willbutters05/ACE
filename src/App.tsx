import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDesign from './pages/services/WebDesign';
import Automation from './pages/services/Automation';
import AutomationPage from './pages/automation';
import AI from './pages/services/AI';
import WebDesignPage from './pages/web-design';
import AIPage from './pages/ai';

function AppContent() {
  const location = useLocation();
  const showSpline = location.pathname === '/';

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {showSpline && (
        <>
          {/* Spline Background */}
          <div className="fixed inset-0" style={{ transform: 'scale(1.5)', transformOrigin: 'center center' }}>
            <spline-viewer 
              url="https://prod.spline.design/JmDHoSpkpO8UuQhe/scene.splinecode"
              style={{ 
                width: '100%', 
                height: '100%',
                background: 'transparent'
              }}
            ></spline-viewer>
          </div>

          {/* Gradient Overlays for Seamless Blend */}
          <div className="pointer-events-none fixed inset-0 bg-gradient-radial from-transparent via-black/10 to-black/80" />
          <div className="pointer-events-none fixed inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
        </>
      )}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/ai" element={<AIPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;