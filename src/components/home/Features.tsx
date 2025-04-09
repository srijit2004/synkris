
import React, { useEffect, useRef, useState } from 'react';
import { BrainCircuit, BarChart3, Truck, ShoppingCart, AreaChart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
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
      link: "/solutions/forecasting",
      benefits: ["Reduce food waste by 30%", "Optimize staffing based on demand", "Improve inventory planning"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-synkris-green" />,
      title: "Automated Order Management",
      description: "Streamline order processing with seamless POS integration across multiple delivery platforms in one unified dashboard.",
      link: "/solutions/order-management",
      benefits: ["Centralize orders from all platforms", "Reduce order processing time by 50%", "Minimize order errors"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-synkris-green" />,
      title: "Real-Time Profitability Insights",
      description: "Monitor kitchen performance with live dashboards tracking costs, revenues, and profit margins down to individual menu items.",
      link: "/solutions/insights",
      benefits: ["Identify high-margin menu items", "Track costs in real-time", "Optimize pricing strategy"]
    },
    {
      icon: <Truck className="h-8 w-8 text-synkris-green" />,
      title: "Last-Mile Delivery Integration",
      description: "Connect with leading delivery partners through our API for optimized routing and real-time delivery tracking.",
      link: "/solutions/delivery",
      benefits: ["Integrate with Zomato, Swiggy and more", "Real-time delivery tracking", "Optimize delivery routes"]
    },
    {
      icon: <AreaChart className="h-8 w-8 text-synkris-green" />,
      title: "Bulk Procurement Optimization",
      description: "Access wholesale marketplaces, automate inventory replenishment, and negotiate better rates with consolidated purchasing.",
      link: "/solutions/procurement",
      benefits: ["Reduce ingredient costs by 15-25%", "Automate reordering", "Access wholesale marketplaces"]
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
            className={`feature-card opacity-0 animate-slide-up group cursor-pointer ${
              activeFeature === index ? 'border-synkris-green/50 bg-synkris-green/5' : ''
            }`}
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <div className="mb-4 p-2 bg-synkris-green/10 rounded-lg inline-block group-hover:bg-synkris-green/20 transition-all">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-synkris-green transition-colors">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            
            {activeFeature === index && (
              <div className="mt-4 space-y-2 animate-fade-in">
                <h4 className="font-medium text-sm">Key Benefits:</h4>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-synkris-green mr-2 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={feature.link} 
                  className="inline-flex items-center text-synkris-green font-medium text-sm mt-3 group"
                >
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
