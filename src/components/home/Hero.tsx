
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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 md:px-10 opacity-0 overflow-hidden" 
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15), transparent 50%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted) / 0.3))'
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-gradient-to-l from-primary-glow/15 to-primary/5 rounded-full blur-3xl" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl" />
        
        {/* Grid pattern with enhanced styling */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-ping-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary-glow/40 rounded-sm rotate-45 animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-2/3 right-1/3 w-2 h-8 bg-gradient-to-b from-primary/20 to-transparent animate-pulse" />
      </div>
      
      <div className="max-w-7xl text-center z-10 space-y-8">
        {/* Badge with enhanced styling */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="glass-panel-premium px-4 py-2 inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              India's First Cloud Kitchen Operations Platform
            </span>
          </div>
        </div>
        
        {/* Enhanced title with gradient text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="inline-block">
            The Cloud Kitchen,
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient-x">
            for Cloud Kitchens
          </span>
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Transform your cloud kitchen operations with 
          <span className="font-medium text-foreground"> AI-driven insights</span>, 
          <span className="font-medium text-foreground"> automated order management</span>, and 
          <span className="font-medium text-foreground"> real-time analytics</span>.
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link to="/demo" className="cta-button flex items-center gap-3 group w-full sm:w-auto relative overflow-hidden">
            <span className="relative z-10">Launch Your Cloud Kitchen Today</span>
            <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link to="/solutions" className="cta-button-outline w-full sm:w-auto group relative overflow-hidden">
            <span className="relative z-10">Explore Solutions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      
      {/* Enhanced stats section */}
      <div className="absolute -bottom-8 left-0 right-0 mx-auto max-w-6xl px-4">
        <div className="glass-panel-premium p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: "Active Kitchens", icon: "🏪" },
              { value: "25%", label: "Cost Reduction", icon: "📉" },
              { value: "98%", label: "Order Accuracy", icon: "🎯" },
              { value: "3x", label: "Revenue Growth", icon: "📈" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
