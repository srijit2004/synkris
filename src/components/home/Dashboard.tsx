
import React, { useEffect, useRef } from 'react';
import { BarChart, PieChart, LineChart, TrendingUp, ArrowUpRight } from 'lucide-react';

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="page-section bg-foreground text-background opacity-0 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 mb-6">
            Live Dashboard
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-background">
            Command Your Kitchen With Our <span className="text-primary">Powerful Dashboard</span>
          </h2>
          <p className="text-base sm:text-lg text-background/50 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a bird's-eye view of your entire operation with real-time data visualization, 
            predictive analytics, and actionable insights.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-background/10 bg-background/5 backdrop-blur-sm p-4 md:p-8
          opacity-0 animate-slide-up shadow-2xl"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-background/10">
            <div>
              <h3 className="text-xl font-bold text-background">Kitchen Performance</h3>
              <p className="text-background/40 text-sm">Last 30 days overview</p>
            </div>
            
            <div className="flex space-x-2 mt-3 sm:mt-0">
              <button className="px-4 py-2 bg-background/5 rounded-xl hover:bg-background/10 text-sm text-background/60 transition-colors border border-background/10">
                Download Report
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:brightness-110 text-sm font-semibold transition-all">
                Live View
              </button>
            </div>
          </div>
          
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Revenue", value: "₹12.4L", change: "+18%", icon: <BarChart className="w-5 h-5" />, color: "from-emerald-500 to-teal-500" },
              { label: "Orders", value: "8,921", change: "+12%", icon: <LineChart className="w-5 h-5" />, color: "from-blue-500 to-indigo-500" },
              { label: "Cost Reduction", value: "23%", change: "+5%", icon: <PieChart className="w-5 h-5" />, color: "from-violet-500 to-purple-500" },
            ].map((metric, i) => (
              <div key={i} className="bg-background/5 p-5 rounded-2xl border border-background/5 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-background/40 text-xs font-medium uppercase tracking-wider">{metric.label}</p>
                    <h4 className="text-3xl font-bold mt-1 text-background">{metric.value}</h4>
                  </div>
                  <div className={`p-2.5 bg-gradient-to-br ${metric.color} rounded-xl text-white shadow-lg`}>
                    {metric.icon}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{metric.change} from last month</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chart Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-background/5 p-5 rounded-2xl h-64 border border-background/5">
              <h4 className="text-sm font-semibold mb-4 text-background/60">Revenue Trends</h4>
              <div className="w-full h-48 flex items-end justify-between gap-2 px-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div 
                      className="w-full bg-gradient-to-t from-primary/60 to-primary rounded-t-lg transition-all duration-500 hover:from-primary/80 hover:to-primary"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                    />
                    <span className="text-[10px] text-background/30">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background/5 p-5 rounded-2xl h-64 border border-background/5">
              <h4 className="text-sm font-semibold mb-4 text-background/60">Top Menu Items</h4>
              <div className="space-y-4">
                {[
                  { name: "Chicken Biryani", value: 85 },
                  { name: "Butter Chicken", value: 72 },
                  { name: "Paneer Tikka", value: 65 },
                  { name: "Dal Makhani", value: 58 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-background/60">{item.name}</span>
                      <span className="text-primary font-medium">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-background/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full transition-all duration-1000" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dashboard Footer */}
          <div className="mt-6 pt-4 border-t border-background/10 flex justify-between items-center">
            <p className="text-xs text-background/30">Data last updated: 5 minutes ago</p>
            <button className="text-primary text-xs hover:underline font-medium">
              View Detailed Analytics →
            </button>
          </div>
          
          {/* Live badge */}
          <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-glow">
            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            Live Updates
          </div>
          
          {/* AI Notification */}
          <div className="absolute bottom-24 right-6 bg-background/10 backdrop-blur-xl p-4 rounded-2xl border border-primary/20 text-sm max-w-xs hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-background text-xs">AI Recommendation</p>
                <p className="text-background/50 text-xs mt-1">Increase chicken biryani production by 15% on weekends based on forecast.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
