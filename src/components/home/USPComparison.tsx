
import React, { useState } from 'react';
import { Check, X, AlertTriangle, ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";

const USPComparison = () => {
  const features = [
    {
      name: "End-to-End Kitchen Operations",
      synkris: true,
      competitors: false,
      description: "Complete setup to scaling support",
      detail: "Synkris manages everything from kitchen setup to daily operations, staffing, and scaling strategies."
    },
    {
      name: "Food Preparation & Staffing",
      synkris: true,
      competitors: false,
      description: "Fully managed by our team",
      detail: "We handle staff recruitment, training, and management. You focus on your brand."
    },
    {
      name: "Marketing & Brand Growth",
      synkris: true,
      competitors: "partial",
      description: "Comprehensive marketing support",
      detail: "SEO optimization, menu engineering, and targeted marketing campaigns included."
    },
    {
      name: "Bulk Procurement Discounts",
      synkris: true,
      competitors: false,
      description: "AI-driven cost optimization",
      detail: "Save up to 30% on raw materials through our AI-powered procurement system."
    },
    {
      name: "Smart AI Insights",
      synkris: true,
      competitors: false,
      description: "Data-driven decision making",
      detail: "Real-time analytics and AI predictions for optimal kitchen performance."
    },
    {
      name: "Delivery Integration",
      synkris: true,
      competitors: "partial",
      description: "Seamless delivery management",
      detail: "Direct integration with major delivery platforms and real-time order tracking."
    },
    {
      name: "Cost Efficiency",
      synkris: true,
      competitors: false,
      description: "Flexible payment plans",
      detail: "Start with minimal investment and scale as you grow. No large upfront costs."
    },
    {
      name: "Technology Platform",
      synkris: true,
      competitors: "partial",
      description: "Advanced tech stack",
      detail: "Cutting-edge technology for inventory, orders, and kitchen management."
    }
  ];

  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

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
            The most comprehensive cloud kitchen solution that puts you ahead of the competition
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
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div 
                      className={`grid grid-cols-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer
                        ${selectedFeature === index ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}
                      onMouseEnter={() => setSelectedFeature(index)}
                      onMouseLeave={() => setSelectedFeature(null)}
                    >
                      <div className="col-span-2">
                        <p className="font-medium">{feature.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
                      </div>
                      <div className="flex justify-center items-center">
                        {renderStatus(feature.synkris)}
                      </div>
                      <div className="flex justify-center items-center">
                        {renderStatus(feature.competitors as boolean | "partial")}
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground">{feature.detail}</p>
                      {feature.synkris && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Effectiveness</span>
                            <span>95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                      )}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
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
            
            <button className="bg-synkris-green text-black px-8 py-3 rounded-full font-medium hover:brightness-110 transition-all flex items-center gap-2 mx-auto">
              Start Your Cloud Kitchen Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPComparison;
