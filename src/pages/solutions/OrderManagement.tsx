
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderManagement = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Order Management System</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Streamline your order processing and delivery operations with our intelligent management system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Real-time order tracking and updates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Automated order routing and assignment</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Multi-platform integration (Swiggy, Zomato)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Reduce order processing time by 50%</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Minimize order errors and mix-ups</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-synkris-green mt-1 mr-2" />
                <span>Improve customer satisfaction rates</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-synkris-green text-white px-8 py-6 text-lg">
            Streamline Your Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
