
import React, { useEffect, useRef } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  BarChart, 
  Shield, 
  Database,
  Zap
} from 'lucide-react';

const SynkrisBrain = () => {
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

  const capabilities = [
    {
      icon: <TrendingUp className="h-6 w-6 text-synkris-green" />,
      title: "AI-Powered Demand Forecasting",
      description: "Predict sales trends, identify seasonal demands, and optimize menu offerings based on real-time market data.",
    },
    {
      icon: <Users className="h-6 w-6 text-synkris-green" />,
      title: "Smart Kitchen Staffing",
      description: "Dynamically adjust staffing based on predicted order volumes, reducing labor costs while maintaining service quality.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-synkris-green" />,
      title: "Intelligent Procurement",
      description: "Auto-source ingredients at optimal prices, predict inventory needs, and minimize food waste with expiration alerts.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-synkris-green" />,
      title: "Dynamic Pricing System",
      description: "Automatically adjust menu prices based on demand, competitor pricing, and time of day to maximize profitability.",
    },
    {
      icon: <Clock className="h-6 w-6 text-synkris-green" />,
      title: "Workflow Optimization",
      description: "Identify bottlenecks in kitchen operations and suggest real-time improvements to speed up food preparation.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-synkris-green" />,
      title: "Profitability Insights",
      description: "View exact profit margins per dish with AI-driven recommendations to improve financial performance.",
    },
    {
      icon: <Shield className="h-6 w-6 text-synkris-green" />,
      title: "Blockchain Authentication",
      description: "Secure your kitchen operations with unique blockchain identifiers that prevent unauthorized access.",
    },
    {
      icon: <Database className="h-6 w-6 text-synkris-green" />,
      title: "Exclusive Data Network",
      description: "Access India's largest cloud kitchen intelligence network with proprietary insights unavailable elsewhere.",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="synkris-brain"
      className="page-section bg-synkris-black text-white opacity-0 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-synkris-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-synkris-green/5 rounded-full blur-3xl" />
        
        {/* Neural network animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="neural-network"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8 text-synkris-green animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold">
              Synkris <span className="text-synkris-green">Brain</span>
            </h2>
          </div>
          
          <div className="text-center">
            <h3 className="section-title mb-4">
              AI-Powered Cloud Kitchen <span className="text-synkris-green">Operating System</span>
            </h3>
            <p className="section-subtitle text-gray-400">
              Our proprietary AI ecosystem continuously learns, improves, and optimizes every aspect 
              of cloud kitchen operations, making your food brand more profitable and scalable.
            </p>
          </div>
        </div>

        {/* Brain visualization */}
        <div className="flex justify-center mb-12 relative">
          <div className="glass-panel-dark p-6 rounded-full border border-synkris-green/20 relative">
            <div className="p-4 bg-synkris-green/10 rounded-full">
              <Brain className="h-16 w-16 md:h-24 md:w-24 text-synkris-green" />
            </div>
            
            {/* Pulsating rings */}
            <div className="absolute inset-0 rounded-full border border-synkris-green/20 animate-ping-slow opacity-50"></div>
            <div className="absolute inset-0 rounded-full border border-synkris-green/10 animate-ping-slower opacity-30 scale-110"></div>
            
            {/* Connection lines (only visible on larger screens) */}
            <div className="hidden md:block">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                <div 
                  key={index}
                  className="absolute w-1 h-20 bg-gradient-to-r from-transparent via-synkris-green/20 to-transparent"
                  style={{ 
                    transform: `rotate(${angle}deg) translateY(-100px)`,
                    transformOrigin: 'bottom center' 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="glass-panel-dark p-5 rounded-xl border border-white/5 
                transition-all duration-300 hover:border-synkris-green/20 hover:scale-[1.02]
                opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-synkris-green/10 rounded-lg inline-block">
                {capability.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-400 text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
        
        {/* Data stream visualization */}
        <div className="mt-12 relative overflow-hidden rounded-lg p-6 glass-panel-dark border border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-3">Continuous Learning Ecosystem</h3>
              <p className="text-gray-400 mb-4">
                Synkris Brain continuously improves as it processes more data, creating an ever-widening 
                competitive advantage that's impossible for competitors to replicate.
              </p>
              <div className="flex items-center gap-2 text-synkris-green">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Uncopyable AI Technology</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 h-40 bg-synkris-dark-gray/50 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 data-stream-animation opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-synkris-green mb-1">32.5M+</div>
                  <div className="text-xs text-gray-400">Data Points Processed Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynkrisBrain;
