
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';

// Lazy load components that aren't immediately visible
const Features = lazy(() => import('../components/home/Features'));
const HowItWorks = lazy(() => import('../components/home/HowItWorks'));
const Services = lazy(() => import('../components/home/Services'));
const Pricing = lazy(() => import('../components/home/Pricing'));
const Dashboard = lazy(() => import('../components/home/Dashboard'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const Investors = lazy(() => import('../components/home/Investors'));
const CTA = lazy(() => import('../components/home/CTA'));
const VirtualTour = lazy(() => import('../components/home/VirtualTour'));
const BlogPreview = lazy(() => import('../components/home/BlogPreview'));

// Simple loading component
const LoadingSection = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Preload critical components
    const preloadComponents = async () => {
      try {
        await import('../components/home/Features');
        await import('../components/home/HowItWorks');
        console.log('Critical components preloaded');
      } catch (error) {
        console.error('Error preloading components:', error);
      }
    };
    
    preloadComponents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <Suspense fallback={<LoadingSection />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <HowItWorks />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Pricing />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Dashboard />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <VirtualTour />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Investors />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <BlogPreview />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
