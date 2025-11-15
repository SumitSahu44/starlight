// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

// Contact Component
import Contact from "./components/ContactForm";

// ---- Pages -----
import BuilderProgram from "./components/BuilderProgram";
import RealtorPartnership from './components/RealtorPartnership';


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
      <Contact />   {/* Contact ONLY here se hataya */}
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
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/BuilderProgram" element={<BuilderProgram />} />
            <Route path="/RealtorPartner" element={<RealtorPartnership />} />
          </Routes>

          {/* ⭐ MAKE CONTACT AVAILABLE IN ALL PAGES */}
          <Contact />

          {/* FOOTER ON ALL PAGES */}
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
