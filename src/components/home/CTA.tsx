
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="page-section relative opacity-0"
    >
      <div className="relative glass-panel p-10 md:p-16 overflow-hidden rounded-2xl">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center">
          <span className="px-4 py-1.5 rounded-full bg-synkris-green/10 text-synkris-green font-medium text-sm border border-synkris-green/20 mb-6 inline-block">
            Ready to Transform Your Kitchen Operations?
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Get Started with Synkris <span className="text-synkris-green">Today</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Join hundreds of successful cloud kitchens already using Synkris to optimize operations, 
            reduce costs, and scale their business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo" className="cta-button flex items-center gap-2 group">
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link to="/pricing" className="cta-button-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
