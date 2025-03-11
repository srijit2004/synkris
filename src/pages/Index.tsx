
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Services from '../components/home/Services';
import Pricing from '../components/home/Pricing';
import Dashboard from '../components/home/Dashboard';
import Testimonials from '../components/home/Testimonials';
import Investors from '../components/home/Investors';
import CTA from '../components/home/CTA';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Services />
        <Pricing />
        <Dashboard />
        <Investors />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
