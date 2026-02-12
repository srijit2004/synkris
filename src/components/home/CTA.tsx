
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';

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
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => { if (ctaRef.current) observer.unobserve(ctaRef.current); };
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="page-section relative opacity-0"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-2xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 p-8 sm:p-12 md:p-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Transform Your Kitchen?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Started with Synkris
            <br />
            <span className="text-primary">Today</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-background/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join hundreds of successful cloud kitchens already using Synkris to optimize operations, 
            reduce costs, and scale their business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo" className="group relative bg-primary text-primary-foreground font-semibold rounded-full px-8 py-4 flex items-center gap-3 hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
              <span>Request a Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/contact" className="group border-2 border-background/20 text-background/80 font-semibold rounded-full px-8 py-4 flex items-center gap-3 hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto justify-center">
              <Phone className="h-4 w-4" />
              <span>Talk to Sales</span>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-background/40">
            <span className="flex items-center gap-2">✓ No setup fees</span>
            <span className="flex items-center gap-2">✓ 14-day free trial</span>
            <span className="flex items-center gap-2">✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
