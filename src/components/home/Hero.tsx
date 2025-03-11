import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-10 opacity-0" style={{
    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(78, 253, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%)'
  }}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-synkris-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-synkris-green/10 rounded-full blur-3xl" />
        
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-synkris-green rounded-full animate-pulse-green" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-synkris-green rounded-full animate-pulse-green" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-synkris-green rounded-full animate-pulse-green" style={{
        animationDelay: '2s'
      }} />
      </div>
      
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="inline-block mb-6 animate-slide-down opacity-0" style={{
        animationDelay: '0.3s'
      }}>
          <span className="px-4 py-1.5 rounded-full bg-synkris-green/10 font-medium text-sm border border-synkris-green/20 text-synkris-black">
            India's First Cloud Kitchen Operations Platform
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight animate-slide-down opacity-0" style={{
        animationDelay: '0.5s'
      }}>
          The Cloud Kitchen, <br />
          <span className="text-synkris-green">for Cloud Kitchens</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-slide-down opacity-0" style={{
        animationDelay: '0.7s'
      }}>
          Effortlessly manage, optimize, and scale your cloud kitchen operations with 
          AI-driven insights, automated order management, and real-time analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-down opacity-0" style={{
        animationDelay: '0.9s'
      }}>
          <Link to="/demo" className="cta-button flex items-center gap-2 group">
            <span>Launch Your Cloud Kitchen</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link to="/solutions" className="cta-button-outline">
            Explore Solutions
          </Link>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass-panel p-4 animate-slide-up opacity-0" style={{
        animationDelay: '1.2s'
      }}>
          <div className="text-center p-2">
            <p className="text-3xl font-bold text-synkris-green">500+</p>
            <p className="text-sm text-gray-600">Active Kitchens</p>
          </div>
          <div className="text-center p-2">
            <p className="text-3xl font-bold text-synkris-green">25%</p>
            <p className="text-sm text-gray-600">Cost Reduction</p>
          </div>
          <div className="text-center p-2">
            <p className="text-3xl font-bold text-synkris-green">98%</p>
            <p className="text-sm text-gray-600">Order Accuracy</p>
          </div>
          <div className="text-center p-2">
            <p className="text-3xl font-bold text-synkris-green">3x</p>
            <p className="text-sm text-gray-600">Revenue Growth</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;