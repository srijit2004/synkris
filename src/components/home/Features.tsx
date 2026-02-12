
import React, { useEffect, useRef, useState } from 'react';
import { BrainCircuit, BarChart3, Truck, ShoppingCart, AreaChart, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [counters, setCounters] = useState({ waste: 0, accuracy: 0, cost: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (!hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => { if (featuresRef.current) observer.unobserve(featuresRef.current); };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { waste: 30, accuracy: 99, cost: 25 };
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters({
        waste: Math.round(targets.waste * eased),
        accuracy: Math.round(targets.accuracy * eased * 10) / 10,
        cost: Math.round(targets.cost * eased),
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
  };

  const features = [
    {
      icon: <BrainCircuit className="h-7 w-7" />,
      title: "AI-Driven Demand Forecasting",
      description: "Leverage advanced AI algorithms to predict demand patterns, optimize inventory, and reduce food waste by up to 30%.",
      link: "/solutions/forecasting",
      benefits: ["Reduce food waste by 30%", "Optimize staffing based on demand", "Improve inventory planning"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <ShoppingCart className="h-7 w-7" />,
      title: "Automated Order Management",
      description: "Streamline order processing with seamless POS integration across multiple delivery platforms in one unified dashboard.",
      link: "/solutions/order-management",
      benefits: ["Centralize orders from all platforms", "Reduce processing time by 50%", "Minimize order errors"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Real-Time Profitability Insights",
      description: "Monitor kitchen performance with live dashboards tracking costs, revenues, and profit margins down to individual menu items.",
      link: "/solutions/insights",
      benefits: ["Identify high-margin menu items", "Track costs in real-time", "Optimize pricing strategy"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Last-Mile Delivery Integration",
      description: "Connect with leading delivery partners through our API for optimized routing and real-time delivery tracking.",
      link: "/solutions/delivery",
      benefits: ["Integrate with Zomato, Swiggy", "Real-time delivery tracking", "Optimize delivery routes"],
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <AreaChart className="h-7 w-7" />,
      title: "Bulk Procurement Optimization",
      description: "Access wholesale marketplaces, automate inventory replenishment, and negotiate better rates with consolidated purchasing.",
      link: "/solutions/procurement",
      benefits: ["Reduce ingredient costs by 15-25%", "Automate reordering", "Access wholesale marketplaces"],
      gradient: "from-rose-500 to-pink-500"
    },
  ];

  return (
    <section 
      ref={featuresRef}
      className="page-section bg-muted/30 opacity-0"
    >
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 mb-6">
          Powerful Features
        </span>
        <h2 className="section-title">
          Supercharge Your <span className="text-primary">Cloud Kitchen</span> Operations
        </h2>
        <p className="section-subtitle">
          Our comprehensive suite of tools empowers kitchen operators with everything needed to optimize 
          operations, reduce costs, and scale efficiently.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto">
        {[
          { value: `${counters.waste}%`, label: "Less Food Waste", suffix: "↓" },
          { value: `${counters.accuracy}%`, label: "Order Accuracy", suffix: "↑" },
          { value: `${counters.cost}%`, label: "Cost Reduction", suffix: "↓" },
        ].map((stat, i) => (
          <div key={i} className="text-center p-4 rounded-2xl bg-background border border-border/50">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`group relative bg-background rounded-2xl border border-border/50 p-6 sm:p-8 
              transition-all duration-500 hover:border-primary/30 hover:shadow-elegant cursor-pointer
              opacity-0 animate-slide-up overflow-hidden ${
              activeFeature === index ? 'border-primary/50 shadow-elegant' : ''
            }`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className={`mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white
                group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                activeFeature === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-4 border-t border-border/50 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground/80">Key Benefits:</h4>
                  <ul className="space-y-1.5">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link 
                to={feature.link} 
                className="inline-flex items-center text-primary font-medium text-sm mt-4 group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
