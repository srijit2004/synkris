
import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Features data structure
const features = [
  {
    id: 1,
    name: "End-to-End Kitchen Operations",
    synkris: true,
    competitors: false,
    synkrisDescription: "Full support from setup to scaling with dedicated operations staff",
    competitorsDescription: "Only basic kitchen space rental with no operational support",
    progressValue: 98, // Out of 100
  },
  {
    id: 2,
    name: "Food Preparation & Staffing",
    synkris: true,
    competitors: false,
    synkrisDescription: "Professionally trained staff managed by Synkris, handling all food prep needs",
    competitorsDescription: "Brand must hire, train and manage their own staff",
    progressValue: 95,
  },
  {
    id: 3,
    name: "Marketing & Brand Growth",
    synkris: true,
    competitors: "partial",
    synkrisDescription: "Complete marketing solutions including SEO, social media, and menu optimization",
    competitorsDescription: "Limited marketing support or additional fees required",
    progressValue: 90,
  },
  {
    id: 4,
    name: "Bulk Procurement Discounts",
    synkris: true,
    competitors: false,
    synkrisDescription: "AI-driven cost optimization with up to 30% savings on ingredients",
    competitorsDescription: "No savings on raw materials, brands pay retail prices",
    progressValue: 100,
  },
  {
    id: 5,
    name: "Plug-and-Play Model",
    synkris: true,
    competitors: false,
    synkrisDescription: "Easy entry model ideal for small brands with minimal upfront investment",
    competitorsDescription: "Requires high setup costs and long-term commitments",
    progressValue: 93,
  },
  {
    id: 6,
    name: "Smart AI Insights",
    synkris: true,
    competitors: false,
    synkrisDescription: "Advanced AI that forecasts demand, optimizes pricing and predicts trends",
    competitorsDescription: "No technology-driven insights or data analytics",
    progressValue: 97,
  },
  {
    id: 7,
    name: "Delivery Management",
    synkris: true,
    competitors: "partial",
    synkrisDescription: "Fully integrated with Swiggy/Zomato and other delivery platforms",
    competitorsDescription: "Brands must handle delivery logistics and partnerships themselves",
    progressValue: 92,
  },
  {
    id: 8,
    name: "Affordable & Scalable",
    synkris: true,
    competitors: false,
    synkrisDescription: "Flexible plans with monthly or yearly options to fit your budget",
    competitorsDescription: "Expensive upfront investment with rigid contract terms",
    progressValue: 96,
  },
];

// Stats for the benefits section
const benefitStats = [
  { value: "98%", label: "of cloud kitchens improve profitability within 6 months" },
  { value: "30%", label: "average cost savings on raw materials" },
  { value: "40%", label: "less staff required compared to traditional kitchens" },
  { value: "2x", label: "faster market launch for new food brands" },
];

const USPComparison = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const renderStatus = (status: boolean | "partial") => {
    if (status === true) {
      return <CheckCircle2 className="w-6 h-6 text-synkris-green" />;
    } else if (status === "partial") {
      return <Info className="w-6 h-6 text-orange-400" />;
    } else {
      return <XCircle className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-synkris-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-synkris-green">Synkris</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            More than just kitchen space—Synkris handles operations, staffing, marketing & everything in between.
          </p>
        </div>
        
        {/* Hero Illustration */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="glass-panel p-6 text-center max-w-xs animate-fade-in">
            <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-4 inline-flex mb-4">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Other Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Chef stressed & struggling with operations, staffing, and management
            </p>
          </div>
          
          <div className="hidden md:block text-3xl font-bold">VS</div>
          
          <div className="glass-panel p-6 text-center max-w-xs animate-fade-in">
            <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-4 inline-flex mb-4">
              <CheckCircle2 className="w-8 h-8 text-synkris-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">With Synkris</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Chef smiling & running operations effortlessly with AI-driven support
            </p>
          </div>
        </div>
        
        {/* Features Comparison Table */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Synkris vs. Other Cloud Kitchen Providers
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-4 px-2 text-left">Feature</th>
                  <th className="py-4 px-2 text-center">
                    <span className="flex items-center justify-center gap-1">
                      <span className="text-synkris-green font-bold">Synkris</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">(Best Choice)</span>
                    </span>
                  </th>
                  <th className="py-4 px-2 text-center">
                    <span className="flex items-center justify-center gap-1">
                      <span className="font-bold">Others</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">(Limited Support)</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr 
                    key={feature.id} 
                    className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors ${
                      selectedFeature === feature.id ? 'bg-gray-100 dark:bg-gray-700/50' : ''
                    }`}
                    onClick={() => setSelectedFeature(feature.id === selectedFeature ? null : feature.id)}
                  >
                    <td className="py-4 px-2">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <span className="font-medium cursor-help flex items-center gap-1">
                            {feature.name}
                            <Info className="h-4 w-4 text-gray-400" />
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 p-4">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">{feature.name}</h4>
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="h-4 w-4 text-synkris-green" />
                                <span className="font-medium">Synkris:</span>
                              </div>
                              <p className="text-sm pl-6">{feature.synkrisDescription}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span className="font-medium">Others:</span>
                              </div>
                              <p className="text-sm pl-6">{feature.competitorsDescription}</p>
                            </div>
                            <div className="mt-3">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Industry standard</span>
                                <span>Synkris performance</span>
                              </div>
                              <Progress value={feature.progressValue} className="h-2" />
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </td>
                    <td className="py-4 px-2 text-center">
                      {renderStatus(feature.synkris)}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {renderStatus(feature.competitors as boolean | "partial")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Benefits Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {benefitStats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-synkris-green mb-2">{stat.value}</div>
                <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to transform your food business?</h3>
          <Button asChild className="bg-synkris-green text-black hover:bg-synkris-green/90 px-8 py-6 text-lg rounded-full">
            <Link to="/demo" className="inline-flex items-center gap-2">
              Start Your Cloud Kitchen with Synkris
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default USPComparison;
