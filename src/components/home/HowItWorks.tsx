
import React, { useEffect, useRef } from 'react';
import { Check, Clipboard, Building, BrainCircuit, ShoppingCart, ChefHat, Smartphone, BarChart3 } from 'lucide-react';

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
      title: "Brand Registration & Plan Selection",
      description: "Register your brand and select a subscription plan that fits your business needs.",
      icon: <Clipboard className="h-8 w-8 text-synkris-green" />,
      points: [
        "Quick and easy registration process",
        "Flexible subscription plans",
        "Dedicated onboarding specialist",
      ]
    },
    {
      number: "02",
      title: "Kitchen Space Assignment & Setup",
      description: "We assign your kitchen space and begin the operational setup process.",
      icon: <Building className="h-8 w-8 text-synkris-green" />,
      points: [
        "Prime locations in metro cities",
        "Fully equipped kitchen infrastructure",
        "Customizable workspace layout",
      ]
    },
    {
      number: "03",
      title: "AI-Driven Demand Forecasting",
      description: "Our AI analyzes market data to optimize your menu and pricing strategy.",
      icon: <BrainCircuit className="h-8 w-8 text-synkris-green" />,
      points: [
        "Predictive analytics for menu planning",
        "Dynamic pricing recommendations",
        "Trend analysis for food categories",
      ]
    },
    {
      number: "04",
      title: "Bulk Procurement & Inventory",
      description: "We source raw materials in bulk to lower your costs and manage inventory.",
      icon: <ShoppingCart className="h-8 w-8 text-synkris-green" />,
      points: [
        "Discounted bulk purchasing",
        "Quality-assured ingredients",
        "Real-time inventory tracking",
      ]
    },
    {
      number: "05",
      title: "Food Preparation & Quality Control",
      description: "Synkris handles staffing, food preparation, and quality checks according to your brand standards.",
      icon: <ChefHat className="h-8 w-8 text-synkris-green" />,
      points: [
        "Professional kitchen staff",
        "Consistent quality assurance",
        "Health and safety compliance",
      ]
    },
    {
      number: "06",
      title: "Order Management via Aggregators",
      description: "Orders are received through integrated platforms like Zomato & Swiggy for seamless fulfillment.",
      icon: <Smartphone className="h-8 w-8 text-synkris-green" />,
      points: [
        "Multi-platform integration",
        "Automated order processing",
        "Real-time order tracking",
      ]
    },
    {
      number: "07",
      title: "Insights & Scaling Support",
      description: "Access detailed insights and marketing support to scale your food brand effectively.",
      icon: <BarChart3 className="h-8 w-8 text-synkris-green" />,
      points: [
        "Comprehensive performance analytics",
        "Targeted marketing strategies",
        "Growth consulting and support",
      ]
    },
  ];

  return (
    <section 
      id="how-it-works"
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
          Our end-to-end process helps you transform your food brand into a successful cloud kitchen operation
          in just seven simple steps.
        </p>
      </div>

      <div className="relative z-10">
        <div className="hidden lg:block absolute left-[3.25rem] top-[3.5rem] h-[calc(100%-12rem)] w-0.5 bg-gradient-to-b from-synkris-green/80 to-synkris-green/30"></div>
        
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-16 lg:mb-12 opacity-0 animate-slide-up"
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className="flex-shrink-0 flex gap-6 items-center">
              <div className="bg-synkris-green/10 rounded-full w-16 h-16 flex items-center justify-center z-10">
                <span className="text-synkris-green font-bold text-xl">{step.number}</span>
              </div>
              
              <div className="hidden lg:flex flex-shrink-0 bg-synkris-green/10 rounded-full w-14 h-14 items-center justify-center">
                {step.icon}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="lg:hidden flex-shrink-0 bg-synkris-green/10 rounded-full w-14 h-14 items-center justify-center mb-4 inline-flex">
                {step.icon}
              </div>
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
            
            <div className="hidden lg:block w-64 h-48 glass-panel animate-float">
              <div className="w-full h-full flex items-center justify-center">
                <div className={`animate-pulse-green rounded-full w-10 h-10 flex items-center justify-center bg-synkris-green/10`}>
                  <span className="text-synkris-green font-bold">{index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
