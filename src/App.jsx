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

// ---- Separate Page -----
import BuilderProgram from "./components/BuilderProgram";
import RealtorPartnership from './components/RealtorPartnership';
import Guarantees from './components/Guarantees';
import FAQ from './components/FAQ';
{/* <Counter /> */}
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
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
