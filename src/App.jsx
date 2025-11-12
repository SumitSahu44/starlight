// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Counter from './components/Counter';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Clients from './components/Clients';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Counter />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;