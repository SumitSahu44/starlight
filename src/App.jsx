// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Counter from './components/Counter';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Preloader from './components/Preloader';
import Guarantees from './components/Guarantees';
import FAQ from './components/FAQ';
import Contact from "./components/ContactForm";

// Pages
import BuilderProgram from "./components/BuilderProgram";
import RealtorPartnership from './components/RealtorPartnership';
import BlogPage from './components/Blogs';
import SolarPanelsService from './components/SolarPanelsService';
import BatteryStorage from './components/BatteryStorage';
import EVCharging from './components/EVCharging';
import ContactForm from './components/ContactForm';
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Guarantees />
      <Brands />
      <Testimonials />
      <FAQ />
      {/* Contact on homepage also (already below globally) */}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <div
        className="App"
        style={{ opacity: loading ? 0 : 1, transition: "opacity .5s ease" }}
      >
        <Router>

          {/* ⭐ Works for all routes */}
          <ScrollToTop />

          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/BuilderProgram" element={<BuilderProgram />} />
            <Route path="/RealtorPartner" element={<RealtorPartnership />} />
            <Route path="/Blogs" element={<BlogPage />} />
            <Route path="/services/SolarPanel" element={<SolarPanelsService />} />
             <Route path="/services/BatteryStorage" element={<BatteryStorage />} />
              <Route path="/services/EVCharging" element={<EVCharging />} />
                 </Routes>

          {/* ⭐ Contact on all pages */}
          <Contact />

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
