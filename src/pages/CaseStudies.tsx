
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BarChart3, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const caseStudies = [
  {
    id: 1,
    title: "How FoodBox India Reduced Food Waste by 32% with Synkris AI",
    client: "FoodBox India",
    description: "A multi-brand cloud kitchen operator with 20+ kitchens across Delhi NCR struggled with inventory management and food wastage. See how Synkris transformed their operations.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: <Clock />, label: "Implementation Time", value: "4 weeks" },
      { icon: <BarChart3 />, label: "Food Waste Reduction", value: "32%" },
      { icon: <TrendingUp />, label: "Revenue Growth", value: "28%" }
    ],
    category: "AI & Analytics",
    featured: true
  },
  {
    id: 2,
    title: "Flavor Fleet: Expanding from 2 to 12 Kitchens in 6 Months",
    client: "Flavor Fleet",
    description: "A regional food brand with ambitious expansion plans needed a scalable infrastructure. Learn how Synkris enabled their rapid growth across three cities.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: <Clock />, label: "Scale-up Time", value: "6 months" },
      { icon: <BarChart3 />, label: "Kitchen Expansion", value: "500%" },
      { icon: <TrendingUp />, label: "Order Volume Increase", value: "680%" }
    ],
    category: "Scaling & Growth",
    featured: true
  },
  {
    id: 3,
    title: "Cloud Bites: Optimizing Menu Performance with Data-Driven Insights",
    client: "Cloud Bites",
    description: "A startup cloud kitchen with multiple cuisine offerings struggled with menu optimization. Discover how Synkris analytics transformed their menu strategy.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: <Clock />, label: "Analysis Period", value: "2 months" },
      { icon: <BarChart3 />, label: "High-margin Items", value: "+45%" },
      { icon: <TrendingUp />, label: "Profitability Increase", value: "37%" }
    ],
    category: "Menu Optimization",
    featured: false
  },
  {
    id: 4,
    title: "SpiceSage: Streamlining Multi-Platform Order Management",
    client: "SpiceSage",
    description: "Managing orders across Zomato, Swiggy and their own platform created operational challenges. See how Synkris unified their order processing.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: <Clock />, label: "Order Processing Time", value: "-62%" },
      { icon: <BarChart3 />, label: "Order Accuracy", value: "99.7%" },
      { icon: <TrendingUp />, label: "Customer Satisfaction", value: "+41%" }
    ],
    category: "Order Management",
    featured: false
  },
  {
    id: 5,
    title: "Fresh Fusion: Building a Pan-India Virtual Restaurant Brand",
    client: "Fresh Fusion",
    description: "A chef-entrepreneur with a unique concept needed infrastructure across multiple cities. Learn how Synkris helped launch a nationwide virtual brand.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: <Clock />, label: "Launch Time", value: "3 months" },
      { icon: <BarChart3 />, label: "Cities Covered", value: "8" },
      { icon: <TrendingUp />, label: "Monthly Orders", value: "18,500+" }
    ],
    category: "Brand Building",
    featured: false
  }
];

// Get all unique categories
const categories = ["All", ...new Set(caseStudies.map(study => study.category))];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCase, setActiveCase] = useState(caseStudies[0]);
  
  const filteredStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-synkris-black dark:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 px-6 md:px-10 text-center bg-gray-50 dark:bg-synkris-dark-gray">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-synkris-green">Stories</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how Synkris has transformed cloud kitchen operations for businesses 
              across India, driving growth and operational excellence
            </p>
          </div>
        </section>
        
        {/* Featured Case Study */}
        <section className="py-12 px-6 md:px-10 bg-white dark:bg-synkris-black">
          <div className="max-w-6xl mx-auto">
            <div className="glass-panel overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 flex flex-col justify-center">
                  <span className="bg-synkris-green/10 text-synkris-green px-3 py-1 rounded-full text-sm inline-block mb-4">
                    Featured Case Study
                  </span>
                  <h2 className="text-3xl font-bold mb-3">{activeCase.title}</h2>
                  <p className="text-lg font-medium mb-2">{activeCase.client}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {activeCase.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {activeCase.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="mb-2 inline-flex p-2 bg-synkris-green/10 rounded-full">
                          {React.cloneElement(metric.icon, { 
                            className: "h-5 w-5 text-synkris-green" 
                          })}
                        </div>
                        <div className="text-2xl font-bold text-synkris-green">{metric.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/case-studies/${activeCase.id}`}
                    className="inline-flex items-center text-synkris-green font-medium group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="lg:h-[28rem] overflow-hidden">
                  <img 
                    src={activeCase.image} 
                    alt={activeCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-8 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-synkris-green text-synkris-black font-medium"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-8 px-6 md:px-10 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <div 
                  key={study.id}
                  className="glass-panel overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setActiveCase(study)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="bg-synkris-green/10 text-synkris-green px-2 py-1 rounded-full text-xs">
                      {study.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mt-3 mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {study.description}
                    </p>
                    
                    <div className="flex items-center">
                      <span className="mr-2 font-medium">{study.client}</span>
                      <ArrowRight className="h-4 w-4 text-synkris-green" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
