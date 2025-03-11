
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }
    
    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  const pricingPlans = [
    {
      name: "Synkris Lite",
      subtitle: "For small F&B entrepreneurs & local food brands",
      price: "₹20,000",
      period: "per month",
      color: "bg-green-400",
      features: [
        "Shared kitchen space in metro city",
        "AI-driven demand forecasting",
        "Ingredient procurement support",
        "Order integration with Swiggy/Zomato",
        "Basic analytics dashboard",
        "Email support"
      ],
      cta: "Start with Lite"
    },
    {
      name: "Synkris Pro",
      subtitle: "For existing restaurants looking to expand",
      price: "₹50,000",
      period: "per month",
      color: "bg-yellow-400",
      popular: true,
      features: [
        "Dedicated kitchen setup",
        "Full staffing (chefs, kitchen assistants)",
        "Bulk procurement savings",
        "AI-driven pricing & menu optimization",
        "Marketing & analytics dashboard",
        "Priority email & phone support",
        "Monthly business consultation"
      ],
      cta: "Upgrade to Pro"
    },
    {
      name: "Synkris Elite",
      subtitle: "For large food chains, global brands entering India",
      price: "Custom",
      period: "starting ₹1,50,000/month",
      color: "bg-red-500",
      features: [
        "Private cloud kitchen network",
        "AI-powered kitchen automation",
        "Customized menu development & branding",
        "Priority licensing & legal support",
        "End-to-end logistics consulting",
        "Dedicated account manager",
        "Unlimited scaling support"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section 
      id="pricing"
      ref={pricingRef}
      className="page-section relative opacity-0"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Simple, Transparent <span className="text-synkris-green">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that best fits your business needs and scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-panel relative p-8 border-2 ${plan.popular ? 'border-synkris-green' : 'border-transparent'} rounded-2xl opacity-0 animate-slide-up`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-synkris-green text-synkris-black text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className={`w-12 h-12 ${plan.color} rounded-xl mb-6 flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 text-sm">{plan.subtitle}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600 text-sm"> {plan.period}</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className={`w-full block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                index === 1 
                  ? 'bg-synkris-green text-synkris-black hover:brightness-110' 
                  : 'border-2 border-synkris-green text-synkris-green hover:bg-synkris-green/10'
              }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
          <Link to="/contact" className="inline-flex items-center text-synkris-green font-medium group">
            <span>Contact our sales team</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
