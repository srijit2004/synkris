
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Onboard Your Kitchen",
      description: "Set up your kitchen profile, integrate with POS systems, and connect delivery platforms in minutes.",
      points: [
        "Quick 15-minute setup process",
        "Seamless POS integration",
        "Multi-location support",
      ]
    },
    {
      number: "02",
      title: "Optimize Operations",
      description: "Use AI-driven insights to forecast demand, manage inventory, and streamline staffing.",
      points: [
        "Smart inventory management",
        "Dynamic staffing plans",
        "Automated procurement",
      ]
    },
    {
      number: "03",
      title: "Scale Effortlessly",
      description: "Expand to new locations, add brands, and increase capacity with data-backed decisions.",
      points: [
        "New location recommendations",
        "Multi-brand kitchen support",
        "Performance benchmarking",
      ]
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="page-section relative opacity-0"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
      </div>
      
      <div className="text-center mb-14 z-10 relative">
        <h2 className="section-title">
          How Synkris <span className="text-synkris-green">Works</span>
        </h2>
        <p className="section-subtitle">
          Our simple, powerful platform helps you transform your cloud kitchen operations
          in just three easy steps.
        </p>
      </div>

      <div className="relative z-10">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 opacity-0 animate-slide-up"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <div className="flex-shrink-0 bg-synkris-green/10 rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-synkris-green font-bold text-xl">{step.number}</span>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4 max-w-xl">{step.description}</p>
              
              <ul className="space-y-2">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-synkris-green mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block w-64 h-48 glass-panel animate-float">
              <div className="w-full h-full flex items-center justify-center text-center text-gray-400">
                [Interactive visualization {index + 1}]
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
