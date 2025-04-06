
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const SolutionsLanding = () => {
  const solutions = [
    {
      title: 'AI Demand Forecasting',
      description: 'Predict demand patterns and optimize your kitchen operations with AI-powered forecasting.',
      icon: '📊',
      path: '/solutions/forecasting'
    },
    {
      title: 'Order Management',
      description: 'Streamline your order processing and delivery operations with our intelligent management system.',
      icon: '📝',
      path: '/solutions/order-management'
    },
    {
      title: 'Profitability Insights',
      description: 'Make data-driven decisions with our advanced analytics and insights platform.',
      icon: '💹',
      path: '/solutions/insights'
    },
    {
      title: 'Delivery Integration',
      description: 'Streamline your delivery operations with our integrated delivery management system.',
      icon: '🚚',
      path: '/solutions/delivery'
    },
    {
      title: 'Procurement',
      description: 'Optimize your purchasing process with AI-powered procurement management.',
      icon: '🛒',
      path: '/solutions/procurement'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Our <span className="text-synkris-green">Solutions</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Comprehensive cloud kitchen management solutions to optimize your operations, 
            increase profitability, and scale your food business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, idx) => (
              <Link 
                to={solution.path} 
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{solution.description}</p>
                <div className="flex items-center mt-auto text-synkris-green font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsLanding;
