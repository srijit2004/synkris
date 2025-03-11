
import React, { useEffect, useRef } from 'react';
import { BrainCircuit, BarChart3, Truck, ShoppingCart, AreaChart } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-synkris-green" />,
      title: "AI-Driven Demand Forecasting",
      description: "Leverage advanced AI algorithms to predict demand patterns, optimize inventory, and reduce food waste by up to 30%.",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-synkris-green" />,
      title: "Automated Order Management",
      description: "Streamline order processing with seamless POS integration across multiple delivery platforms in one unified dashboard.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-synkris-green" />,
      title: "Real-Time Profitability Insights",
      description: "Monitor kitchen performance with live dashboards tracking costs, revenues, and profit margins down to individual menu items.",
    },
    {
      icon: <Truck className="h-8 w-8 text-synkris-green" />,
      title: "Last-Mile Delivery Integration",
      description: "Connect with leading delivery partners through our API for optimized routing and real-time delivery tracking.",
    },
    {
      icon: <AreaChart className="h-8 w-8 text-synkris-green" />,
      title: "Bulk Procurement Optimization",
      description: "Access wholesale marketplaces, automate inventory replenishment, and negotiate better rates with consolidated purchasing.",
    },
  ];

  return (
    <section 
      ref={featuresRef}
      className="page-section bg-synkris-light-gray opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          Supercharge Your <span className="text-synkris-green">Cloud Kitchen</span> Operations
        </h2>
        <p className="section-subtitle">
          Our comprehensive suite of tools empowers kitchen operators with everything needed to optimize 
          operations, reduce costs, and scale efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card opacity-0 animate-slide-up"
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className="mb-4 p-2 bg-synkris-green/10 rounded-lg inline-block">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
