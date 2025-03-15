
import React, { useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, LineChart, ChefHat, ShoppingCart, BrainCircuit, Building, Users } from 'lucide-react';

const USPComparison = () => {
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

  const competitors = [
    { name: "Synkris", isUs: true },
    { name: "Speed Kitchen", isUs: false },
    { name: "Kitchens@", isUs: false },
    { name: "Others", isUs: false }
  ];

  const features = [
    {
      name: "End-to-End Operations",
      icon: <Building className="h-5 w-5" />,
      description: "Complete kitchen management from setup to scaling",
      competitors: [true, false, false, false]
    },
    {
      name: "AI-Driven Demand Forecasting",
      icon: <BrainCircuit className="h-5 w-5" />,
      description: "Predict sales patterns and optimize inventory",
      competitors: [true, false, false, false]
    },
    {
      name: "Bulk Procurement Savings",
      icon: <ShoppingCart className="h-5 w-5" />,
      description: "Up to 25% savings on raw materials",
      competitors: [true, false, true, false]
    },
    {
      name: "Staffing & Training",
      icon: <Users className="h-5 w-5" />,
      description: "Professional kitchen staff provided and managed",
      competitors: [true, false, false, false]
    },
    {
      name: "Food Aggregator Integration",
      icon: <LineChart className="h-5 w-5" />,
      description: "Seamless Zomato, Swiggy & EatSure integration",
      competitors: [true, true, true, false]
    },
    {
      name: "Menu Optimization",
      icon: <ChefHat className="h-5 w-5" />,
      description: "Data-driven menu engineering and pricing",
      competitors: [true, false, false, false]
    }
  ];

  return (
    <section 
      id="comparison" 
      ref={sectionRef} 
      className="page-section bg-synkris-light-gray opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          Why Choose <span className="text-synkris-green">Synkris</span>
        </h2>
        <p className="section-subtitle">
          Compare our comprehensive cloud kitchen solution with other providers to see why leading food brands trust Synkris
        </p>
      </div>
      
      <div className="overflow-x-auto pb-6">
        <table className="w-full min-w-[700px] glass-panel">
          <thead>
            <tr>
              <th className="p-4 text-left font-semibold border-b border-gray-200">Features</th>
              {competitors.map((competitor, index) => (
                <th 
                  key={index} 
                  className={`p-4 text-center font-semibold border-b border-gray-200 ${
                    competitor.isUs ? 'bg-synkris-green/10' : ''
                  }`}
                >
                  {competitor.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition-colors hover:bg-gray-100`}
              >
                <td className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="bg-synkris-green/10 p-1.5 rounded-full">
                      {feature.icon}
                    </span>
                    <div>
                      <p className="font-medium">{feature.name}</p>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </td>
                {feature.competitors.map((hasFeature, compIndex) => (
                  <td 
                    key={compIndex} 
                    className={`p-4 text-center border-b border-gray-200 ${
                      competitors[compIndex].isUs ? 'bg-synkris-green/10' : ''
                    }`}
                  >
                    {hasFeature ? (
                      <CheckCircle2 className="mx-auto h-6 w-6 text-synkris-green" />
                    ) : (
                      <XCircle className="mx-auto h-6 w-6 text-gray-300" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 italic">
          Based on publicly available information as of 2023. Features may vary by provider and location.
        </p>
      </div>
    </section>
  );
};

export default USPComparison;
