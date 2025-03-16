
import React, { useEffect, lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import { useIsMobile } from '@/hooks/use-mobile';

// Lazy load components that aren't immediately visible
const Features = lazy(() => import('../components/home/Features'));
const HowItWorks = lazy(() => import('../components/home/HowItWorks'));
const Services = lazy(() => import('../components/home/Services'));
const Pricing = lazy(() => import('../components/home/Pricing'));
const Dashboard = lazy(() => import('../components/home/Dashboard'));
const SynkrisBrain = lazy(() => import('../components/home/SynkrisBrain'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const Investors = lazy(() => import('../components/home/Investors'));
const CTA = lazy(() => import('../components/home/CTA'));
const VirtualTour = lazy(() => import('../components/home/VirtualTour'));
const BlogPreview = lazy(() => import('../components/home/BlogPreview'));
const USPComparison = lazy(() => import('../components/home/USPComparison'));

// Simple loading component with brand colors
const LoadingSection = () => (
  <div className="w-full py-12 sm:py-16 flex justify-center items-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 sm:w-48 mb-3 sm:mb-4"></div>
      <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 sm:w-64"></div>
    </div>
  </div>
);

const Index = () => {
  const isMobile = useIsMobile();
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

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

    // Show/hide floating CTA based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingCTA(scrollPosition > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <USPComparison />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Pricing />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Dashboard />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <SynkrisBrain />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <VirtualTour />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Investors />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <BlogPreview />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />

      {/* Floating CTA button for mobile */}
      {isMobile && showFloatingCTA && (
        <div className="floating-cta">
          <Link to="/demo" className="floating-cta-button">
            <span>Request Demo</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Index;
