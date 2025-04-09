
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, ChefHat, ShoppingCart, BrainCircuit, Building, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:py-20 px-4 md:px-10 opacity-0" 
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(78, 253, 0, 0.15) 0%, rgba(0, 0, 0, 0) 60%)'
      }}
    >
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-5 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-synkris-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-5 md:right-10 w-40 md:w-80 h-40 md:h-80 bg-synkris-green/10 rounded-full blur-3xl" />
        
        {/* Animated grid effect - simplified */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,253,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,253,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-30" />
      </div>
      
      <div className="max-w-6xl text-center z-10 my-px mx-0 px-0 py-4 md:py-[71px]">
        <div className="inline-block mb-6 md:mb-8">
          <span className="px-3 py-1.5 rounded-full bg-synkris-green/10 font-medium text-xs md:text-sm border border-synkris-green/20 text-synkris-black">
            India's First Cloud Kitchen Operations Platform
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
          The Cloud Kitchen, <br />
          <span className="text-synkris-green">for Cloud Kitchens</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10">
          Effortlessly manage, optimize, and scale your cloud kitchen operations with 
          AI-driven insights, automated order management, and real-time analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <Link to="/demo" className="cta-button flex items-center gap-2 group w-full sm:w-auto">
            <span>Launch Your Cloud Kitchen Today</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link to="/solutions" className="cta-button-outline w-full sm:w-auto mt-3 sm:mt-0">
            Explore Solutions
          </Link>
        </div>
        
        {/* Visual workflow mini-preview - simplified */}
        <div className="mt-12 md:mt-16">
          {isMobile ? (
            <div className="overflow-x-auto touch-scroll pb-2">
              <div className="flex gap-3 md:gap-4 min-w-[600px] px-2">
                {[{
                  icon: <Building className="h-5 w-5" />,
                  label: "Setup"
                }, {
                  icon: <Users className="h-5 w-5" />,
                  label: "Staff"
                }, {
                  icon: <BrainCircuit className="h-5 w-5" />,
                  label: "AI Forecast"
                }, {
                  icon: <ShoppingCart className="h-5 w-5" />,
                  label: "Source"
                }, {
                  icon: <ChefHat className="h-5 w-5" />,
                  label: "Prepare"
                }, {
                  icon: <LineChart className="h-5 w-5" />,
                  label: "Scale"
                }].map((step, index) => (
                  <div key={index} className="flex items-center flex-shrink-0">
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
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {[{
                icon: <Building className="h-5 w-5" />,
                label: "Setup"
              }, {
                icon: <Users className="h-5 w-5" />,
                label: "Staff"
              }, {
                icon: <BrainCircuit className="h-5 w-5" />,
                label: "AI Forecast"
              }, {
                icon: <ShoppingCart className="h-5 w-5" />,
                label: "Source"
              }, {
                icon: <ChefHat className="h-5 w-5" />,
                label: "Prepare"
              }, {
                icon: <LineChart className="h-5 w-5" />,
                label: "Scale"
              }].map((step, index) => (
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
          )}
          <p className="text-xs text-gray-500 mt-2">Our end-to-end cloud kitchen solution</p>
        </div>
      </div>
      
      {/* Stats section - redesigned */}
      <div className="absolute -bottom-6 sm:bottom-4 left-0 right-0 mx-auto max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-4xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 glass-panel p-3 md:p-4">
          <div className="text-center p-1 md:p-2 hover:bg-synkris-green/5 transition-colors rounded-lg">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-synkris-green">500+</p>
            <p className="text-xs sm:text-sm text-gray-600">Active Kitchens</p>
          </div>
          <div className="text-center p-1 md:p-2 hover:bg-synkris-green/5 transition-colors rounded-lg">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-synkris-green">25%</p>
            <p className="text-xs sm:text-sm text-gray-600">Cost Reduction</p>
          </div>
          <div className="text-center p-1 md:p-2 hover:bg-synkris-green/5 transition-colors rounded-lg">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-synkris-green">98%</p>
            <p className="text-xs sm:text-sm text-gray-600">Order Accuracy</p>
          </div>
          <div className="text-center p-1 md:p-2 hover:bg-synkris-green/5 transition-colors rounded-lg">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-synkris-green">3x</p>
            <p className="text-xs sm:text-sm text-gray-600">Revenue Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
