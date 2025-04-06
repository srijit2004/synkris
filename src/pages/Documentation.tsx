
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Book, FileText, HelpCircle, ExternalLink } from 'lucide-react';

const Documentation = () => {
  // Documentation categories
  const docCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of Synkris platform and set up your first cloud kitchen.",
      icon: <Book className="h-6 w-6" />,
      links: [
        { title: "Platform Overview", url: "/docs/overview" },
        { title: "Quick Start Guide", url: "/docs/quickstart" },
        { title: "Account Setup", url: "/docs/account-setup" },
        { title: "First Kitchen Configuration", url: "/docs/first-kitchen" }
      ]
    },
    {
      title: "AI Forecasting",
      description: "Detailed documentation about our AI-driven demand forecasting engine.",
      icon: <FileText className="h-6 w-6" />,
      links: [
        { title: "Understanding AI Predictions", url: "/docs/ai-predictions" },
        { title: "Configuring Forecast Parameters", url: "/docs/forecast-parameters" },
        { title: "Seasonal Adjustments", url: "/docs/seasonal-adjustments" },
        { title: "Forecast Accuracy Metrics", url: "/docs/forecast-accuracy" }
      ]
    },
    {
      title: "Order Management",
      description: "Learn how to streamline your order processing workflows.",
      icon: <HelpCircle className="h-6 w-6" />,
      links: [
        { title: "Order Processing Overview", url: "/docs/order-processing" },
        { title: "Integrating Order Sources", url: "/docs/order-sources" },
        { title: "Kitchen Display System", url: "/docs/kds" },
        { title: "Order Status Tracking", url: "/docs/order-tracking" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API reference for integrating with our platform.",
      icon: <FileText className="h-6 w-6" />,
      links: [
        { title: "Authentication", url: "/docs/api-auth" },
        { title: "Orders API", url: "/docs/api-orders" },
        { title: "Inventory API", url: "/docs/api-inventory" },
        { title: "Reports API", url: "/docs/api-reports" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-synkris-green">Documentation</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Comprehensive guides and reference documentation to help you get the most out of the Synkris platform
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-synkris-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Documentation categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {docCategories.map((category, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-synkris-green/10 p-3 rounded-lg text-synkris-green mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link 
                            to={link.url} 
                            className="text-synkris-green hover:underline flex items-center"
                          >
                            <ArrowRight className="h-3 w-3 mr-2" />
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional resources */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Book className="h-10 w-10 text-synkris-green mb-3" />
                <h3 className="font-semibold mb-1">User Guides</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Step-by-step guides for common tasks</p>
              </a>
              <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FileText className="h-10 w-10 text-synkris-green mb-3" />
                <h3 className="font-semibold mb-1">Video Tutorials</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Visual walkthroughs of platform features</p>
              </a>
              <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <HelpCircle className="h-10 w-10 text-synkris-green mb-3" />
                <h3 className="font-semibold mb-1">FAQ</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Answers to commonly asked questions</p>
              </a>
            </div>
          </div>

          {/* Need more help section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our support team is available to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/support" className="cta-button-outline flex items-center justify-center gap-2">
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button flex items-center justify-center gap-2"
              >
                Join Our Community
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
