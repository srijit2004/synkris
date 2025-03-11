
import React, { useEffect, useRef } from 'react';
import { TrendingUp, Users, LineChart, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Investors = () => {
  const investorsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (investorsRef.current) {
      observer.observe(investorsRef.current);
    }
    
    return () => {
      if (investorsRef.current) {
        observer.unobserve(investorsRef.current);
      }
    };
  }, []);

  const marketStats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-synkris-green" />,
      title: "$3B+",
      description: "Projected market size for India's cloud kitchen industry by 2027"
    },
    {
      icon: <Users className="h-8 w-8 text-synkris-green" />,
      title: "500+",
      description: "Cloud kitchens operated on the Synkris platform"
    },
    {
      icon: <LineChart className="h-8 w-8 text-synkris-green" />,
      title: "35%",
      description: "Annual growth rate in cloud kitchen market"
    },
    {
      icon: <Building className="h-8 w-8 text-synkris-green" />,
      title: "12",
      description: "Major Indian cities with Synkris kitchen hubs"
    }
  ];

  return (
    <section 
      id="investors"
      ref={investorsRef}
      className="page-section relative opacity-0"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-synkris-green/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Investor <span className="text-synkris-green">Relations</span>
          </h2>
          <p className="section-subtitle">
            Join us in revolutionizing India's cloud kitchen ecosystem and building the AWS for food brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marketStats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 text-center opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-synkris-green/10 rounded-lg inline-block">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-synkris-green">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-4">Our Vision: The AWS for Cloud Kitchens</h3>
              <p className="text-gray-600 mb-6">
                Synkris is building India's first comprehensive cloud kitchen infrastructure platform. Our mission is to
                become the AWS for cloud kitchens, providing the technology, operations, and scale that enables food
                brands to launch, operate, and grow without the traditional barriers of high capital investment and
                operational complexity.
              </p>
              <p className="text-gray-600 mb-6">
                With our asset-light model, AI-driven operations, and nationwide kitchen network, we're positioned
                to capture a significant share of India's rapidly growing cloud kitchen market.
              </p>
              <Link to="/investor-deck" className="inline-flex items-center text-synkris-green font-medium group">
                <span>Download our investor deck</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-2xl font-bold mb-4">Funding & Expansion Plans</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-synkris-green/10 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-synkris-green font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Series A: Kitchen Network Expansion</h4>
                    <p className="text-gray-600 text-sm">Establishing kitchen hubs in 20+ Tier-1 and Tier-2 cities across India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-synkris-green/10 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-synkris-green font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Series B: AI & Technology Enhancement</h4>
                    <p className="text-gray-600 text-sm">Developing proprietary AI systems for demand forecasting and kitchen automation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-synkris-green/10 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-synkris-green font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Series C: International Expansion</h4>
                    <p className="text-gray-600 text-sm">Expanding to Southeast Asian markets with proven model and technology</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="cta-button inline-flex items-center gap-2 group">
                  <span>Connect with Our Investment Team</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
