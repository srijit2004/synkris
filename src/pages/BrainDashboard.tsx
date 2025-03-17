
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Brain, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  BrainCog,
  Clock,
  BarChart,
  Settings,
  LayoutDashboard,
  Search,
  Bell,
  Zap,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBrainInsights, useKitchenMetrics } from "@/hooks/use-synkris-brain";
import { useToast } from "@/hooks/use-toast";
import AIChatAssistant from "@/components/brain/AIChatAssistant";

const BrainDashboard = () => {
  const { insights, isLoading: insightsLoading } = useBrainInsights();
  const { dataPointsProcessed, revenueData, salesData } = useKitchenMetrics();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "Welcome to Synkris Brain",
      description: "AI insights are being generated for your kitchen operations",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-synkris-black text-white">
      <header className="border-b border-white/10 py-4 px-6 bg-synkris-black/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-gray-400 hover:text-white mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Brain className="h-6 w-6 text-synkris-green" />
            <span className="font-bold text-xl">
              Syn<span className="text-synkris-green">kris</span> <span className="text-synkris-green">Brain</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-64">
              <Input 
                type="text" 
                placeholder="Search insights..." 
                className="bg-white/5 border-white/10 text-sm pl-9 focus-visible:ring-synkris-green"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-synkris-green text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
            <div className="w-8 h-8 bg-synkris-green/20 rounded-full flex items-center justify-center text-synkris-green">
              S
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <div className="hidden md:block">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="pb-2 border-b border-white/10">
                <h3 className="font-medium text-sm text-gray-400">MAIN MENU</h3>
              </div>
              <div className="space-y-1 pt-1">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "dashboard" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "insights" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("insights")}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Market Insights
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "staffing" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("staffing")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Smart Staffing
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "procurement" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("procurement")}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Procurement
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "pricing" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("pricing")}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Dynamic Pricing
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "workflow" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("workflow")}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Workflow Optimization
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "profitability" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("profitability")}
                >
                  <BarChart className="h-4 w-4 mr-2" />
                  Profitability
                </Button>
              </div>
              
              <div className="pt-4 pb-2 border-t border-white/10 mt-4">
                <h3 className="font-medium text-sm text-gray-400">SETTINGS</h3>
              </div>
              <div className="space-y-1 pt-1">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "security" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("security")}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-sm ${activeTab === "settings" ? "bg-synkris-green/20 text-synkris-green hover:bg-synkris-green/30" : "text-gray-300"}`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
              
              <div className="mt-6 bg-synkris-green/10 rounded-lg p-4 border border-synkris-green/20">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCog className="h-5 w-5 text-synkris-green" />
                  <h3 className="font-medium text-synkris-green">Data Training</h3>
                </div>
                <p className="text-xs text-gray-300 mb-2">Your AI is continuously improving based on your kitchen data.</p>
                <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-synkris-green h-full rounded-full" style={{ width: "78%" }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400 flex justify-between">
                  <span>Data Processed</span>
                  <span className="text-synkris-green">{dataPointsProcessed.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            {/* Mobile search and menu */}
            <div className="flex gap-4 items-center md:hidden mb-4">
              <div className="flex-1 relative">
                <Input 
                  type="text" 
                  placeholder="Search insights..." 
                  className="bg-white/5 border-white/10 text-sm pl-9 focus-visible:ring-synkris-green w-full"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <Button 
                variant="outline" 
                className="border-white/10 hover:bg-white/5 hover:text-white"
                onClick={() => toast({
                  title: "Mobile Menu",
                  description: "This feature is coming soon",
                })}
              >
                Menu
              </Button>
            </div>
            
            {/* Dashboard Overview */}
            <div className="glass-panel-dark p-6 border border-white/10 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Welcome to Synkris Brain</h1>
                  <p className="text-gray-400">Your AI-powered cloud kitchen assistant</p>
                </div>
                <div>
                  <Button className="bg-synkris-green text-black hover:bg-synkris-green/90">
                    <Zap className="h-4 w-4 mr-2" />
                    Get AI Recommendation
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm text-gray-400">Active Insights</h3>
                    <TrendingUp className="h-5 w-5 text-synkris-green" />
                  </div>
                  <div className="text-xl font-bold">{insights?.filter(i => i.status === "active").length || 0}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    <span className="text-green-400">+2</span> since yesterday
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm text-gray-400">Revenue Optimized</h3>
                    <DollarSign className="h-5 w-5 text-synkris-green" />
                  </div>
                  <div className="text-xl font-bold">₹27,500</div>
                  <div className="text-xs text-gray-400 mt-1">
                    <span className="text-green-400">+12%</span> this week
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm text-gray-400">Staff Optimization</h3>
                    <Users className="h-5 w-5 text-synkris-green" />
                  </div>
                  <div className="text-xl font-bold">18% <span className="text-sm">reduction</span></div>
                  <div className="text-xs text-gray-400 mt-1">
                    <span className="text-green-400">-5</span> labor hours today
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm text-gray-400">AI Confidence</h3>
                    <BrainCog className="h-5 w-5 text-synkris-green" />
                  </div>
                  <div className="text-xl font-bold">92%</div>
                  <div className="text-xs text-gray-400 mt-1">
                    <span className="text-green-400">+3%</span> since last week
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Real-Time AI Insights</h2>
                  <div className="space-y-3">
                    {insightsLoading ? (
                      <div className="animate-pulse space-y-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-20 bg-white/5 rounded-lg"></div>
                        ))}
                      </div>
                    ) : (
                      insights?.slice(0, 3).map(insight => (
                        <div key={insight.id} className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col sm:flex-row gap-4 transition-all hover:border-synkris-green/30">
                          <div className="sm:w-64 flex-shrink-0">
                            <div className="flex items-center gap-2 mb-1">
                              {insight.insight_type === 'demand' && <TrendingUp className="h-4 w-4 text-synkris-green" />}
                              {insight.insight_type === 'pricing' && <DollarSign className="h-4 w-4 text-synkris-green" />}
                              {insight.insight_type === 'inventory' && <ShoppingCart className="h-4 w-4 text-synkris-green" />}
                              {insight.insight_type === 'staffing' && <Users className="h-4 w-4 text-synkris-green" />}
                              {insight.insight_type === 'workflow' && <Clock className="h-4 w-4 text-synkris-green" />}
                              <span className="text-sm font-medium capitalize">{insight.insight_type} Insight</span>
                            </div>
                            <div className="text-xs text-gray-400 flex items-center justify-between">
                              <span>Confidence: {(insight.confidence_score * 100).toFixed(0)}%</span>
                              <span className={`capitalize px-2 py-0.5 rounded text-xs ${
                                insight.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                                insight.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-blue-500/20 text-blue-300'
                              }`}>
                                {insight.priority}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{insight.title}</h3>
                            <p className="text-sm text-gray-300 mt-1">{insight.description}</p>
                          </div>
                          <div className="flex-shrink-0 flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-start">
                            <Button size="sm" variant="outline" className="text-xs border-synkris-green/30 text-synkris-green hover:bg-synkris-green/10">
                              View Details
                            </Button>
                            <Button size="sm" variant="ghost" className="text-xs text-gray-400 hover:text-white">
                              Dismiss
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="border-white/10 hover:bg-white/5">
                      View All Insights
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-4">AI Assistant</h2>
                  <AIChatAssistant />
                </div>
              </div>
            </div>
            
            {/* Additional Content */}
            <div className="glass-panel-dark p-6 border border-white/10 rounded-xl">
              <h2 className="text-lg font-semibold mb-6">Synkris Brain Learning Status</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Demand Forecasting</span>
                    <span className="text-synkris-green">92% Complete</span>
                  </div>
                  <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-synkris-green h-full rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Kitchen Staffing</span>
                    <span className="text-synkris-green">78% Complete</span>
                  </div>
                  <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-synkris-green h-full rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Procurement Optimization</span>
                    <span className="text-synkris-green">65% Complete</span>
                  </div>
                  <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-synkris-green h-full rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Dynamic Pricing</span>
                    <span className="text-synkris-green">85% Complete</span>
                  </div>
                  <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-synkris-green h-full rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-synkris-green/10 rounded-lg border border-synkris-green/20">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-synkris-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">AI Training Recommendation</h3>
                    <p className="text-sm text-gray-300">Upload at least 200 more orders with detailed preparation times to improve Workflow Optimization algorithms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrainDashboard;
