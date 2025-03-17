
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
  Zap,
  AlertTriangle,
  CheckCircle,
  BrainCog
} from 'lucide-react';
import { useBrainInsights, useKitchenMetrics, BrainCapability } from '@/hooks/use-synkris-brain';
import { BrainInsight } from '@/lib/supabase';
import { Button } from '@/components/ui/button';

const SynkrisBrain = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { insights, isLoading: insightsLoading } = useBrainInsights();
  const { dataPointsProcessed } = useKitchenMetrics();
  const [selectedInsight, setSelectedInsight] = useState<BrainInsight | null>(null);
  
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

  useEffect(() => {
    if (insights && insights.length > 0 && !selectedInsight) {
      setSelectedInsight(insights[0]);
    }
  }, [insights, selectedInsight]);

  const capabilities: BrainCapability[] = [
    {
      icon: <TrendingUp className="h-6 w-6 text-synkris-green" />,
      title: "AI-Powered Demand Forecasting",
      description: "Predict sales trends, identify seasonal demands, and optimize menu offerings based on real-time market data.",
      type: 'demand'
    },
    {
      icon: <Users className="h-6 w-6 text-synkris-green" />,
      title: "Smart Kitchen Staffing",
      description: "Dynamically adjust staffing based on predicted order volumes, reducing labor costs while maintaining service quality.",
      type: 'staffing'
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-synkris-green" />,
      title: "Intelligent Procurement",
      description: "Auto-source ingredients at optimal prices, predict inventory needs, and minimize food waste with expiration alerts.",
      type: 'procurement'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-synkris-green" />,
      title: "Dynamic Pricing System",
      description: "Automatically adjust menu prices based on demand, competitor pricing, and time of day to maximize profitability.",
      type: 'pricing'
    },
    {
      icon: <Clock className="h-6 w-6 text-synkris-green" />,
      title: "Workflow Optimization",
      description: "Identify bottlenecks in kitchen operations and suggest real-time improvements to speed up food preparation.",
      type: 'workflow'
    },
    {
      icon: <BarChart className="h-6 w-6 text-synkris-green" />,
      title: "Profitability Insights",
      description: "View exact profit margins per dish with AI-driven recommendations to improve financial performance.",
      type: 'profitability'
    },
    {
      icon: <Shield className="h-6 w-6 text-synkris-green" />,
      title: "Blockchain Authentication",
      description: "Secure your kitchen operations with unique blockchain identifiers that prevent unauthorized access.",
      type: 'security'
    },
    {
      icon: <Database className="h-6 w-6 text-synkris-green" />,
      title: "Exclusive Data Network",
      description: "Access India's largest cloud kitchen intelligence network with proprietary insights unavailable elsewhere.",
      type: 'data'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 0.9) return 'text-green-500';
    if (score >= 0.8) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section 
      ref={sectionRef}
      id="synkris-brain"
      className="page-section bg-synkris-black text-white opacity-0 scroll-mt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-synkris-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-synkris-green/5 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="neural-network"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8 text-synkris-green animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold">
              Syn<span className="text-synkris-green">kris</span> <span className="text-synkris-green">Brain</span>
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

            <div className="mt-6">
              <Link to="/brain-dashboard">
                <Button className="cta-button flex items-center gap-2">
                  <BrainCog className="h-5 w-5" />
                  Access Synkris Brain Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-12 glass-panel-dark p-6 border border-synkris-green/20 rounded-xl">
          <div className="flex items-center mb-4 gap-2">
            <Zap className="h-5 w-5 text-synkris-green" />
            <h3 className="font-semibold text-xl">Live Synkris Brain Insights</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 space-y-2">
              {insightsLoading ? (
                <div className="animate-pulse space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-16 bg-gray-800/50 rounded-lg"></div>
                  ))}
                </div>
              ) : (
                insights.map(insight => (
                  <div 
                    key={insight.id}
                    onClick={() => setSelectedInsight(insight)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3
                      ${selectedInsight?.id === insight.id 
                        ? 'bg-synkris-green/20 border border-synkris-green/30' 
                        : 'bg-gray-900/50 hover:bg-gray-800/50 border border-white/5'}`}
                  >
                    {insight.insight_type === 'demand' && <TrendingUp className="h-5 w-5 text-synkris-green" />}
                    {insight.insight_type === 'pricing' && <DollarSign className="h-5 w-5 text-synkris-green" />}
                    {insight.insight_type === 'inventory' && <ShoppingCart className="h-5 w-5 text-synkris-green" />}
                    {insight.insight_type === 'staffing' && <Users className="h-5 w-5 text-synkris-green" />}
                    {insight.insight_type === 'workflow' && <Clock className="h-5 w-5 text-synkris-green" />}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm truncate">{insight.title}</h4>
                        <span className={`text-xs ${getPriorityColor(insight.priority)}`}>
                          {insight.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 truncate">{insight.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="col-span-1 lg:col-span-2 bg-gray-900/50 p-4 rounded-lg border border-white/5">
              {selectedInsight ? (
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{selectedInsight.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                        <span>ID: {selectedInsight.id}</span>
                        <span>•</span>
                        <span>Created: {new Date(selectedInsight.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(selectedInsight.priority)}`}>
                      {selectedInsight.priority.toUpperCase()} PRIORITY
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{selectedInsight.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Data Points Analyzed</div>
                      <div className="font-semibold">{selectedInsight.data_points.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Confidence Score</div>
                      <div className={`font-semibold ${getConfidenceColor(selectedInsight.confidence_score)}`}>
                        {(selectedInsight.confidence_score * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Status</div>
                      <div className="font-semibold flex items-center gap-1">
                        {selectedInsight.status === 'active' && (
                          <><CheckCircle className="h-3 w-3 text-green-500" /> Active</>
                        )}
                        {selectedInsight.status === 'pending' && (
                          <><Clock className="h-3 w-3 text-yellow-500" /> Pending</>
                        )}
                        {selectedInsight.status === 'archived' && (
                          <><AlertTriangle className="h-3 w-3 text-gray-500" /> Archived</>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm font-medium mb-2">AI Recommendation</div>
                    <div className="bg-synkris-green/10 border border-synkris-green/20 p-3 rounded-lg text-sm">
                      {selectedInsight.insight_type === 'demand' && 
                        "Increase production capacity by 40% this weekend. Prep ingredients in advance and schedule 2 additional staff members."}
                      {selectedInsight.insight_type === 'pricing' && 
                        "Implement the suggested 5% price increase on premium items this week. Monitor customer response for 7 days before further adjustments."}
                      {selectedInsight.insight_type === 'inventory' && 
                        "Purchase 3-week supply of tomatoes immediately from approved supplier ID#2742 at current rates to avoid upcoming price surge."}
                      {selectedInsight.insight_type === 'staffing' && 
                        "Reduce staffing during 3-6PM by 2 team members. Reassign them to inventory management or prep for dinner rush."}
                      {selectedInsight.insight_type === 'workflow' && 
                        "Rearrange preparation station #3 to reduce movement between cooking and assembly areas. Estimated time saving: 12%."}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-10 text-gray-500">
                  <p>Select an insight to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12 relative">
          <div className="glass-panel-dark p-6 rounded-full border border-synkris-green/20 relative">
            <div className="p-4 bg-synkris-green/10 rounded-full">
              <Brain className="h-16 w-16 md:h-24 md:w-24 text-synkris-green" />
            </div>
            
            <div className="absolute inset-0 rounded-full border border-synkris-green/20 animate-ping-slow opacity-50"></div>
            <div className="absolute inset-0 rounded-full border border-synkris-green/10 animate-ping-slower opacity-30 scale-110"></div>
            
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
                  <div className="text-2xl font-bold text-synkris-green mb-1">
                    {dataPointsProcessed.toLocaleString()}+
                  </div>
                  <div className="text-xs text-gray-400">Data Points Processed Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Ready to revolutionize your cloud kitchen operations?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Experience the power of Synkris Brain in action. Get real-time insights, optimize your operations,
            and increase your profitability with our proprietary AI ecosystem.
          </p>
          <Link to="/brain-dashboard">
            <Button className="cta-button flex items-center gap-2">
              <BrainCog className="h-5 w-5" />
              Access Synkris Brain Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SynkrisBrain;
