
import React, { useEffect, useRef, useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

type Cuisine = 'north-indian' | 'south-indian' | 'chinese' | 'italian' | 'fast-food' | 'desserts';
type City = 'delhi' | 'mumbai' | 'bangalore' | 'hyderabad' | 'chennai' | 'pune';

interface CityFactor {
  name: string;
  factor: number;
}

interface CuisineData {
  name: string;
  factor: number;
  description: string;
}

const SubscriptionCalculator = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [monthlySales, setMonthlySales] = useState<number>(300000);
  const [cuisine, setCuisine] = useState<Cuisine>('north-indian');
  const [city, setCity] = useState<City>('delhi');
  const [isMultiMenu, setIsMultiMenu] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  
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

  const cityOptions: Record<City, CityFactor> = {
    'delhi': { name: 'Delhi NCR', factor: 1.0 },
    'mumbai': { name: 'Mumbai', factor: 1.1 },
    'bangalore': { name: 'Bangalore', factor: 1.05 },
    'hyderabad': { name: 'Hyderabad', factor: 0.95 },
    'chennai': { name: 'Chennai', factor: 0.9 },
    'pune': { name: 'Pune', factor: 0.85 }
  };

  const cuisineOptions: Record<Cuisine, CuisineData> = {
    'north-indian': { 
      name: 'North Indian', 
      factor: 1.0,
      description: 'Butter chicken, naan, biryani, and other popular North Indian dishes'
    },
    'south-indian': { 
      name: 'South Indian', 
      factor: 0.9,
      description: 'Dosas, idli, vada, and authentic South Indian specialties'
    },
    'chinese': { 
      name: 'Chinese', 
      factor: 1.1,
      description: 'Indo-Chinese and authentic Chinese cuisine options'
    },
    'italian': { 
      name: 'Italian', 
      factor: 1.2,
      description: 'Pizza, pasta, and other Italian favorites'
    },
    'fast-food': { 
      name: 'Fast Food', 
      factor: 0.8,
      description: 'Burgers, fries, sandwiches, and quick service options'
    },
    'desserts': { 
      name: 'Desserts', 
      factor: 0.7,
      description: 'Sweet treats, cakes, ice creams, and specialty desserts'
    }
  };

  // Calculate monthly subscription cost
  const calculateMonthlyCost = (): number => {
    // Base cost calculation as a percentage of monthly sales
    let baseCost = monthlySales * 0.15;
    
    // Adjust by city factor
    baseCost *= cityOptions[city].factor;
    
    // Adjust by cuisine factor
    baseCost *= cuisineOptions[cuisine].factor;
    
    // Extra charge for multi-menu brands
    if (isMultiMenu) {
      baseCost *= 1.2;
    }
    
    return Math.round(baseCost);
  };

  // Calculate potential savings
  const calculateSavings = (): number => {
    // Estimated percentage savings compared to traditional restaurant
    const savingsPercentage = 0.25;
    return Math.round(monthlySales * savingsPercentage);
  };
  
  // Calculate ROI
  const calculateROI = (): number => {
    const monthlyCost = calculateMonthlyCost();
    const savings = calculateSavings();
    return Math.round((savings / monthlyCost) * 100);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <section 
      ref={sectionRef}
      className="page-section relative opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          <span className="text-synkris-green">AI-Powered</span> Subscription Calculator
        </h2>
        <p className="section-subtitle">
          Estimate your monthly subscription cost and potential savings with Synkris based on your 
          business details.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel overflow-hidden rounded-xl">
          <div className={`grid grid-cols-1 ${showResults ? 'lg:grid-cols-5' : 'lg:grid-cols-3'}`}>
            {/* Calculator Form */}
            <div className={`${showResults ? 'lg:col-span-2' : 'lg:col-span-1'} p-8 bg-gray-50 dark:bg-gray-800`}>
              <div className="flex items-center mb-6">
                <Calculator className="h-6 w-6 text-synkris-green mr-2" />
                <h3 className="text-xl font-bold">Calculator</h3>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Average Monthly Sales (₹)
                    </label>
                    <Input 
                      type="number" 
                      value={monthlySales}
                      onChange={(e) => setMonthlySales(Number(e.target.value))}
                      placeholder="Enter your monthly sales"
                      className="bg-white dark:bg-gray-700"
                      min="50000"
                      max="10000000"
                      required
                    />
                    <div className="mt-2">
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="50000"
                        value={monthlySales}
                        onChange={(e) => setMonthlySales(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹50K</span>
                        <span>₹1M</span>
                        <span>₹2M</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Primary Cuisine
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(cuisineOptions).map(([key, value]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setCuisine(key as Cuisine)}
                          className={`text-left px-4 py-3 rounded-lg border ${
                            cuisine === key 
                              ? 'border-synkris-green bg-synkris-green/10' 
                              : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="flex-grow text-sm">{value.name}</span>
                            {cuisine === key && (
                              <Check className="h-4 w-4 text-synkris-green" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {cuisineOptions[cuisine].description}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value as City)}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-synkris-green focus:border-synkris-green"
                    >
                      {Object.entries(cityOptions).map(([key, value]) => (
                        <option key={key} value={key}>
                          {value.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="multi-menu"
                      checked={isMultiMenu}
                      onChange={() => setIsMultiMenu(!isMultiMenu)}
                      className="h-4 w-4 text-synkris-green border-gray-300 rounded focus:ring-synkris-green"
                    />
                    <label htmlFor="multi-menu" className="ml-2 text-sm">
                      Multi-menu brand (multiple cuisines)
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-synkris-green text-synkris-black hover:brightness-110"
                  >
                    Calculate Estimate
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Results */}
            {showResults ? (
              <div className="lg:col-span-3 p-8">
                <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-synkris-green/10 rounded-xl p-6 text-center">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Monthly Subscription</h4>
                    <p className="text-3xl font-bold">₹{calculateMonthlyCost().toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">15-20% of monthly sales</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Potential Monthly Savings</h4>
                    <p className="text-3xl font-bold text-green-500">₹{calculateSavings().toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">vs. traditional restaurant</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Estimated ROI</h4>
                    <p className="text-3xl font-bold text-synkris-green">{calculateROI()}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">return on investment</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>Fully equipped kitchen space in {cityOptions[city].name}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>Professional kitchen staff</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>AI-driven inventory management</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>Order integration with food delivery platforms</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>Real-time performance analytics</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-synkris-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>Full operational support & maintenance</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold mb-2">Disclaimer</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This estimate is provided for informational purposes only and may vary based on 
                    actual business requirements, kitchen specifications, and operational needs. 
                    Please contact our sales team for a customized quote.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="cta-button flex items-center justify-center gap-2 group"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Button
                    onClick={() => setShowResults(false)}
                    variant="outline"
                    className="border-synkris-green text-synkris-green hover:bg-synkris-green/10"
                  >
                    Recalculate
                  </Button>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-2 p-8 flex flex-col justify-center items-center text-center">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Synkris?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our cloud kitchen platform helps food entrepreneurs save on setup costs, 
                    operational expenses, and staffing, while maximizing efficiency and reach.
                  </p>
                  
                  <div className="space-y-4 text-left mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-synkris-green/10 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3.5 w-3.5 text-synkris-green" />
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Lower startup costs:</span> No heavy investment in real estate or kitchen equipment
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-synkris-green/10 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3.5 w-3.5 text-synkris-green" />
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Reduced operational complexity:</span> Let us handle staffing, training and management
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-synkris-green/10 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3.5 w-3.5 text-synkris-green" />
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Tech-driven efficiency:</span> AI forecasting reduces waste and optimizes inventory
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-synkris-green/10 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3.5 w-3.5 text-synkris-green" />
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Quick scaling:</span> Expand to multiple locations without additional infrastructure costs
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Fill in your details to get an estimate of your monthly subscription cost
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCalculator;
