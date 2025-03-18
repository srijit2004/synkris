
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Procurement = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Smart Procurement</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Optimize your purchasing process with AI-powered procurement management.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Automated vendor management</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Price comparison tools</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Inventory forecasting</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Reduce procurement costs</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Streamline ordering process</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Minimize stockouts</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-synkris-green text-white px-8 py-6 text-lg">
            Optimize Your Procurement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Procurement;
