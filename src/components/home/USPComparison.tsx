
import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

const USPComparison = () => {
  const features = [
    {
      name: "AI-Powered Kitchen Management",
      synkris: true,
      competitors: false,
      description: "Smart predictions and real-time optimization"
    },
    {
      name: "End-to-End Operations",
      synkris: true,
      competitors: false,
      description: "Complete kitchen management from inventory to delivery"
    },
    {
      name: "Real-time Analytics",
      synkris: true,
      competitors: "partial",
      description: "Live insights and performance tracking"
    },
    {
      name: "Multi-location Support",
      synkris: true,
      competitors: "partial",
      description: "Seamless management across multiple kitchens"
    },
    {
      name: "AI Demand Forecasting",
      synkris: true,
      competitors: false,
      description: "Predict demand patterns with ML algorithms"
    },
    {
      name: "Smart Inventory Management",
      synkris: true,
      competitors: "partial",
      description: "AI-driven stock optimization"
    },
    {
      name: "Integrated POS System",
      synkris: true,
      competitors: true,
      description: "Seamless point-of-sale integration"
    },
    {
      name: "Menu Optimization",
      synkris: true,
      competitors: false,
      description: "AI-powered menu and pricing suggestions"
    }
  ];

  const renderStatus = (status: boolean | "partial") => {
    if (status === true) {
      return <Check className="w-6 h-6 text-synkris-green" />;
    } else if (status === false) {
      return <X className="w-6 h-6 text-red-500" />;
    } else {
      return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Synkris?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the future of cloud kitchen management with our AI-powered platform
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-100 dark:bg-gray-800 px-6 py-4">
              <div className="col-span-2 font-semibold">Features</div>
              <div className="text-center font-semibold">Synkris</div>
              <div className="text-center font-semibold">Others</div>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {features.map((feature, index) => (
                <div key={index} className="grid grid-cols-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="col-span-2">
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    {renderStatus(feature.synkris)}
                  </div>
                  <div className="flex justify-center items-center">
                    {renderStatus(feature.competitors)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center mr-4">
                <Check className="w-4 h-4 text-synkris-green mr-1" /> Available
              </span>
              <span className="inline-flex items-center mr-4">
                <AlertTriangle className="w-4 h-4 text-yellow-500 mr-1" /> Partial
              </span>
              <span className="inline-flex items-center">
                <X className="w-4 h-4 text-red-500 mr-1" /> Not Available
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPComparison;
