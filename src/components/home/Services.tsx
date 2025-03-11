
import React, { useEffect, useRef } from 'react';
import { CheckCircle, ChefHat, Users, BrainCircuit, ShoppingCart, Utensils, BarChart3, ScrollText, Truck } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <ChefHat className="h-8 w-8 text-synkris-green" />,
      title: "Cloud Kitchen Setup",
      description: "Rent fully equipped kitchens across metro cities with all necessary equipment and infrastructure.",
    },
    {
      icon: <Users className="h-8 w-8 text-synkris-green" />,
      title: "Staffing & Training",
      description: "Provide professional chefs, kitchen assistants, and quality managers trained to your brand standards.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-synkris-green" />,
      title: "AI-Powered Demand Forecasting",
      description: "Leverage advanced AI algorithms to predict sales trends and optimize pricing for maximum profitability.",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-synkris-green" />,
      title: "Procurement & Inventory Management",
      description: "Access bulk ingredient sourcing at lower costs with automated inventory tracking and replenishment.",
    },
    {
      icon: <Utensils className="h-8 w-8 text-synkris-green" />,
      title: "Menu Engineering",
      description: "Optimize your menu for high-margin items based on data-driven insights and customer preferences.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-synkris-green" />,
      title: "Marketing & Branding Support",
      description: "Boost your visibility on food aggregators with professional branding and targeted marketing campaigns.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-synkris-green" />,
      title: "Order Management & Analytics",
      description: "Track performance in real-time with comprehensive analytics and detailed reports on your dashboard.",
    },
    {
      icon: <ScrollText className="h-8 w-8 text-synkris-green" />,
      title: "Regulatory Compliance & Licensing",
      description: "Get support for FSSAI, GST, and local health certifications to ensure complete legal compliance.",
    },
    {
      icon: <Truck className="h-8 w-8 text-synkris-green" />,
      title: "Delivery via Zomato & Swiggy",
      description: "Seamless integration with leading food delivery platforms for efficient last-mile fulfillment.",
    },
  ];

  return (
    <section 
      id="services"
      ref={servicesRef}
      className="page-section relative bg-synkris-light-gray opacity-0 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Our <span className="text-synkris-green">Services</span>
          </h2>
          <p className="section-subtitle">
            We provide end-to-end cloud kitchen services, from setup to scaling, enabling food brands to focus on what they do best - creating amazing food
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-synkris-green/10 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 flex items-center text-synkris-green">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Included in plans</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
