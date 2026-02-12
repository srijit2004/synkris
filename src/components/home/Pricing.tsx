
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (pricingRef.current) observer.observe(pricingRef.current);
    return () => { if (pricingRef.current) observer.unobserve(pricingRef.current); };
  }, []);

  const pricingPlans = [
    {
      name: "Synkris Lite",
      subtitle: "For small F&B entrepreneurs & local food brands",
      price: "₹20,000",
      period: "per month",
      icon: <Star className="h-6 w-6" />,
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Shared kitchen space in metro city",
        "AI-driven demand forecasting",
        "Ingredient procurement support",
        "Order integration with Swiggy/Zomato",
        "Basic analytics dashboard",
        "Email support"
      ],
      cta: "Start with Lite"
    },
    {
      name: "Synkris Pro",
      subtitle: "For existing restaurants looking to expand",
      price: "₹50,000",
      period: "per month",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-primary to-primary-glow",
      popular: true,
      features: [
        "Dedicated kitchen setup",
        "Full staffing (chefs, kitchen assistants)",
        "Bulk procurement savings",
        "AI-driven pricing & menu optimization",
        "Marketing & analytics dashboard",
        "Priority email & phone support",
        "Monthly business consultation"
      ],
      cta: "Upgrade to Pro"
    },
    {
      name: "Synkris Elite",
      subtitle: "For large food chains, global brands entering India",
      price: "Custom",
      period: "starting ₹1,50,000/month",
      icon: <Crown className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500",
      features: [
        "Private cloud kitchen network",
        "AI-powered kitchen automation",
        "Customized menu development & branding",
        "Priority licensing & legal support",
        "End-to-end logistics consulting",
        "Dedicated account manager",
        "Unlimited scaling support"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section 
      id="pricing"
      ref={pricingRef}
      className="page-section relative opacity-0 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 mb-6">
            Flexible Plans
          </span>
          <h2 className="section-title">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that best fits your business needs and scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-4px]
                opacity-0 animate-slide-up overflow-hidden
                ${plan.popular 
                  ? 'bg-foreground text-background border-2 border-primary shadow-glow' 
                  : 'bg-background border-2 border-border/50 hover:border-primary/30 hover:shadow-elegant'
                }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}>{plan.subtitle}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}> {plan.period}</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 ${
                      plan.popular ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-background/80' : 'text-muted-foreground'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className={`w-full block text-center py-3.5 px-6 rounded-full font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:brightness-110 shadow-elegant' 
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-4">Need a custom solution for your business?</p>
          <Link to="/contact" className="inline-flex items-center text-primary font-semibold group hover:gap-3 transition-all">
            <span>Contact our sales team</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
