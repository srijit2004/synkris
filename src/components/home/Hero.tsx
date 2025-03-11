
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, ChefHat, ShoppingCart, BrainCircuit, Building, Users } from 'lucide-react';

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

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-10 opacity-0" 
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(78, 253, 0, 0.15) 0%, rgba(0, 0, 0, 0) 60%)'
      }}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-synkris-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-synkris-green/10 rounded-full blur-3xl" />
        
        {/* Animated grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,253,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,253,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        {/* Floating animated elements */}
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
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight animate-slide-down opacity-0" style={{
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
            <span>Launch Your Cloud Kitchen Today</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link to="/solutions" className="cta-button-outline">
            Explore Solutions
          </Link>
        </div>
        
        {/* Visual workflow mini-preview */}
        <div className="mt-16 opacity-0 animate-slide-up" style={{ animationDelay: '1.1s' }}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              { icon: <Building className="h-5 w-5" />, label: "Setup" },
              { icon: <Users className="h-5 w-5" />, label: "Staff" },
              { icon: <BrainCircuit className="h-5 w-5" />, label: "AI Forecast" },
              { icon: <ShoppingCart className="h-5 w-5" />, label: "Source" },
              { icon: <ChefHat className="h-5 w-5" />, label: "Prepare" },
              { icon: <LineChart className="h-5 w-5" />, label: "Scale" },
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-synkris-green/10 rounded-full flex items-center justify-center text-synkris-green">
                  {step.icon}
                </div>
                <span className="text-xs md:text-sm text-gray-600 ml-2">{step.label}</span>
                {index < 5 && (
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Our end-to-end cloud kitchen solution</p>
        </div>
        
        {/* Feature icons */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-up opacity-0" style={{
          animationDelay: '1.1s'
        }}>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-synkris-green/10 rounded-full flex items-center justify-center mb-3">
              <LineChart className="h-6 w-6 text-synkris-green" />
            </div>
            <p className="text-sm text-gray-600">AI-Driven Forecasting</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-synkris-green/10 rounded-full flex items-center justify-center mb-3">
              <ChefHat className="h-6 w-6 text-synkris-green" />
            </div>
            <p className="text-sm text-gray-600">Kitchen Staffing</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-synkris-green/10 rounded-full flex items-center justify-center mb-3">
              <ShoppingCart className="h-6 w-6 text-synkris-green" />
            </div>
            <p className="text-sm text-gray-600">Bulk Procurement</p>
          </div>
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
    </section>
  );
};

export default Hero;
