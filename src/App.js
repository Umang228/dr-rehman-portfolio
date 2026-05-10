import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIOffer from './components/WhatIOffer';
import Features from './components/Features';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Stats from './components/Stats';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhatIOffer />
      <Features />
      <Certifications />
      <Services />
      <Stats />
      <Journey />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
