
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, FileText, Star, BarChart, TrendingUp, AlertTriangle, Award } from 'lucide-react';

const CaseStudies = () => {
  // Featured case studies
  const featuredCaseStudies = [
    {
      id: 1,
      title: "How FoodBox India Reduced Food Waste by 32%",
      excerpt: "A cloud kitchen network with 15 locations across Bangalore used Synkris AI forecasting to dramatically reduce waste and improve profitability.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company: "FoodBox India",
      stats: [
        { label: "Food Waste Reduction", value: "32%" },
        { label: "Cost Savings", value: "₹2.4M/year" },
        { label: "ROI", value: "430%" }
      ]
    },
    {
      id: 2,
      title: "Spice Junction's Journey to 3x Order Volume",
      excerpt: "How a single-location cloud kitchen scaled to 8 locations across Delhi NCR with centralized operations management.",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company: "Spice Junction",
      stats: [
        { label: "Order Volume Growth", value: "300%" },
        { label: "Preparation Time", value: "-42%" },
        { label: "Customer Satisfaction", value: "+28%" }
      ]
    },
    {
      id: 3,
      title: "Urban Bites' Kitchen Efficiency Transformation",
      excerpt: "Streamlining operations with integrated order management across multiple delivery platforms.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1572664270929-9a6da21854ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company: "Urban Bites",
      stats: [
        { label: "Order Processing Time", value: "-58%" },
        { label: "Error Reduction", value: "92%" },
        { label: "Revenue Increase", value: "41%" }
      ]
    }
  ];

  // All case studies
  const allCaseStudies = [
    ...featuredCaseStudies,
    {
      id: 4,
      title: "Fresh Plate's Ingredient Procurement Revolution",
      excerpt: "How data-driven procurement helped this Mumbai-based cloud kitchen reduce costs while improving quality.",
      image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company: "Fresh Plate",
      stats: [
        { label: "Procurement Costs", value: "-27%" },
        { label: "Vendor Reduction", value: "65%" },
        { label: "Quality Incidents", value: "-84%" }
      ]
    },
    {
      id: 5,
      title: "Tasty Bowls' Multi-Brand Strategy Success",
      excerpt: "Managing 6 different brands from a single kitchen to maximize revenue and efficiency.",
      image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company: "Tasty Bowls",
      stats: [
        { label: "Revenue Growth", value: "215%" },
        { label: "Kitchen Utilization", value: "+78%" },
        { label: "Profit Margin", value: "+18%" }
      ]
    },
    {
      id: 6,
      title: "Cloud Curry's Delivery Optimization",
      excerpt: "Reducing delivery times and improving customer satisfaction through integrated delivery management.",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1568626037131-8d8556d8f86e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company: "Cloud Curry",
      stats: [
        { label: "Delivery Time", value: "-34%" },
        { label: "On-Time Rate", value: "98.5%" },
        { label: "Repeat Orders", value: "+42%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Customer <span className="text-synkris-green">Success Stories</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Discover how cloud kitchens across India are transforming their operations and growing their businesses with Synkris
          </p>

          {/* Featured case study - highlight the top one */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="bg-synkris-green/10 text-synkris-green px-3 py-1 rounded-full text-sm font-medium">
                    Featured Case Study
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredCaseStudies[0].title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredCaseStudies[0].excerpt}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredCaseStudies[0].stats.map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-synkris-green">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={featuredCaseStudies[0].logo} 
                      alt={featuredCaseStudies[0].company} 
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <span className="font-medium">{featuredCaseStudies[0].company}</span>
                  </div>
                  
                  <Link 
                    to={`/resources/case-studies/${featuredCaseStudies[0].id}`} 
                    className="cta-button-outline flex items-center"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:h-full">
                <img 
                  src={featuredCaseStudies[0].image} 
                  alt={featuredCaseStudies[0].title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Results highlight section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Real Results from Real Customers
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <TrendingUp className="h-10 w-10 text-synkris-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">38%</div>
                <p className="text-gray-600 dark:text-gray-300">Average Revenue Growth</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <AlertTriangle className="h-10 w-10 text-synkris-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">27%</div>
                <p className="text-gray-600 dark:text-gray-300">Food Waste Reduction</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <BarChart className="h-10 w-10 text-synkris-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">93%</div>
                <p className="text-gray-600 dark:text-gray-300">Forecast Accuracy</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <Star className="h-10 w-10 text-synkris-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">4.8</div>
                <p className="text-gray-600 dark:text-gray-300">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* All case studies */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Explore All Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allCaseStudies.slice(1).map((study) => (
              <div key={study.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-video">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{study.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <img 
                        src={study.logo} 
                        alt={study.company} 
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span className="text-sm font-medium">{study.company}</span>
                    </div>
                    
                    <Link 
                      to={`/resources/case-studies/${study.id}`} 
                      className="text-synkris-green font-medium flex items-center hover:brightness-110 transition-all"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry filter section */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Browse by Industry</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2 bg-synkris-green text-white rounded-full hover:brightness-110 transition">All Industries</button>
              <button className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">Multi-brand Kitchens</button>
              <button className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">Specialty Cuisines</button>
              <button className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">Quick Service</button>
              <button className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">Premium & Gourmet</button>
              <button className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">Home Chefs</button>
            </div>
          </div>

          {/* Testimonials section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              What Our Customers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                <div className="text-synkris-green text-5xl font-serif absolute top-4 left-6">"</div>
                <div className="pt-6 pl-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Synkris has revolutionized how we manage our cloud kitchen operations. The AI forecasting is like having a crystal ball for our business. We've cut waste by almost a third and our profit margins have never been better.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                      alt="Rajiv Sharma"
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-medium">Rajiv Sharma</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">CEO, FoodBox India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                <div className="text-synkris-green text-5xl font-serif absolute top-4 left-6">"</div>
                <div className="pt-6 pl-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The order management system alone was worth the investment. We went from juggling multiple tablets and devices to a single, unified dashboard. Our kitchen efficiency improved dramatically, and customer complaints about wrong orders dropped to near zero.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                      alt="Priya Malhotra"
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-medium">Priya Malhotra</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Operations Head, Urban Bites</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-synkris-green/10 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Award className="h-12 w-12 mx-auto mb-6 text-synkris-green" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to write your own success story?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Join the growing community of cloud kitchens that are transforming their operations with Synkris. Schedule a demo today to see how our platform can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/demo" className="cta-button">
                  Request Demo
                </Link>
                <Link to="/contact" className="cta-button-outline">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
