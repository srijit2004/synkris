
import React, { useEffect, useRef } from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';

const Dashboard = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="page-section bg-synkris-black text-white opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          Command Your Kitchen With Our <span className="text-synkris-green">Powerful Dashboard</span>
        </h2>
        <p className="section-subtitle text-gray-400">
          Get a bird's-eye view of your entire operation with real-time data visualization, 
          predictive analytics, and actionable insights.
        </p>
      </div>

      <div className="relative glass-panel-dark p-4 md:p-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 
        opacity-0 animate-slide-up"
        style={{ animationDelay: '0.3s' }}
      >
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-semibold">Kitchen Performance</h3>
            <p className="text-gray-400 text-sm">Last 30 days overview</p>
          </div>
          
          <div className="flex space-x-2 mt-3 sm:mt-0">
            <button className="px-3 py-1 bg-synkris-dark-gray rounded-md hover:bg-gray-700 text-sm">
              Download Report
            </button>
            <button className="px-3 py-1 bg-synkris-green text-synkris-black rounded-md hover:brightness-110 text-sm font-medium">
              Live View
            </button>
          </div>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-synkris-dark-gray p-4 rounded-lg border border-white/5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-gray-400 text-xs">Revenue</p>
                <h4 className="text-2xl font-bold">₹12.4L</h4>
              </div>
              <div className="p-2 bg-green-500/20 rounded-md">
                <BarChart className="w-4 h-4 text-green-500" />
              </div>
            </div>
            <p className="text-xs text-green-500">↑ 18% from last month</p>
          </div>
          
          <div className="bg-synkris-dark-gray p-4 rounded-lg border border-white/5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-gray-400 text-xs">Orders</p>
                <h4 className="text-2xl font-bold">8,921</h4>
              </div>
              <div className="p-2 bg-blue-500/20 rounded-md">
                <LineChart className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <p className="text-xs text-green-500">↑ 12% from last month</p>
          </div>
          
          <div className="bg-synkris-dark-gray p-4 rounded-lg border border-white/5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-gray-400 text-xs">Cost Reduction</p>
                <h4 className="text-2xl font-bold">23%</h4>
              </div>
              <div className="p-2 bg-purple-500/20 rounded-md">
                <PieChart className="w-4 h-4 text-purple-500" />
              </div>
            </div>
            <p className="text-xs text-green-500">↑ 5% from last month</p>
          </div>
        </div>
        
        {/* Chart Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-synkris-dark-gray p-4 rounded-lg h-64 border border-white/5">
            <h4 className="text-sm font-medium mb-3">Revenue Trends</h4>
            <div className="w-full h-48 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Revenue Chart Visualization]
              </div>
            </div>
          </div>
          
          <div className="bg-synkris-dark-gray p-4 rounded-lg h-64 border border-white/5">
            <h4 className="text-sm font-medium mb-3">Top Menu Items</h4>
            <div className="w-full h-48 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Menu Items Chart]
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
          <p className="text-xs text-gray-400">Data last updated: 5 minutes ago</p>
          <button className="text-synkris-green text-xs hover:underline">
            View Detailed Analytics →
          </button>
        </div>
        
        {/* Floating Notifications */}
        <div className="absolute top-4 right-4 bg-synkris-green text-synkris-black text-xs px-3 py-1 rounded-full font-medium animate-pulse-green">
          Live Updates
        </div>
        
        <div className="absolute bottom-20 right-6 glass-panel-dark p-3 rounded-lg border border-synkris-green/20 text-sm max-w-xs">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-synkris-green mt-1.5"></div>
            <div>
              <p className="font-medium">AI Recommendation:</p>
              <p className="text-gray-400 text-xs">Increase chicken biryani production by 15% on weekends based on forecast.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
