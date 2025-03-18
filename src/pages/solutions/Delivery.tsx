
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Delivery = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Delivery Management</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Streamline your delivery operations with our integrated delivery management system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Real-time delivery tracking</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Route optimization</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Delivery partner management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Reduce delivery times</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Improve customer satisfaction</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Optimize delivery costs</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-synkris-green text-white px-8 py-6 text-lg">
            Optimize Your Deliveries
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
