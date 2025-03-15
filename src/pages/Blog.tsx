
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Tag, Calendar, User, ArrowRight, ChevronLeft, Filter, Newspaper } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Cloud Kitchen Operations",
    excerpt: "Discover how artificial intelligence is transforming inventory management, demand forecasting, and menu optimization in cloud kitchens.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Technology",
    date: "May 15, 2023",
    author: "Priya Sharma",
    tags: ["AI", "Technology", "Cloud Kitchen"],
    content: `
      <h2>The AI Revolution in Kitchen Management</h2>
      <p>Cloud kitchens are increasingly turning to artificial intelligence to optimize operations, reduce costs, and improve customer satisfaction. From inventory management to demand forecasting, AI is transforming every aspect of how cloud kitchens function.</p>
      
      <h3>Inventory Management</h3>
      <p>AI algorithms can predict inventory needs with remarkable accuracy, reducing food waste and ensuring operators never run out of key ingredients during peak hours.</p>
      
      <h3>Demand Forecasting</h3>
      <p>By analyzing historical order data alongside external factors like weather, local events, and even social media trends, AI can predict customer demand patterns with incredible precision.</p>
      
      <h3>Menu Optimization</h3>
      <p>Cloud kitchens can use AI to analyze which menu items are performing well and which aren't, helping them optimize their offerings for maximum profitability and customer satisfaction.</p>
      
      <h2>Real-World Applications</h2>
      <p>Forward-thinking cloud kitchen operators are already implementing these technologies. Some have reported up to 30% reduction in food waste and 15% improvement in order accuracy after implementing AI solutions.</p>
      
      <p>As the technology continues to advance, we can expect even more sophisticated applications that will further revolutionize how cloud kitchens operate.</p>
    `
  },
  {
    id: 2,
    title: "Top 5 Food Trends Dominating the Indian Cloud Kitchen Scene",
    excerpt: "From regional cuisine fusion to plant-based alternatives, these are the food trends driving growth for cloud kitchens in India.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food Trends",
    date: "April 28, 2023",
    author: "Vikram Mehta",
    tags: ["Food Trends", "Indian Cuisine", "Market Research"],
    content: `
      <h2>Emerging Food Trends in Indian Cloud Kitchens</h2>
      <p>The Indian cloud kitchen landscape is evolving rapidly, with several key food trends emerging as major drivers of growth and consumer interest.</p>
      
      <h3>1. Regional Cuisine Fusion</h3>
      <p>Cloud kitchens are experimenting with fusion concepts that blend regional Indian cuisines with international flavors, creating unique offerings that appeal to adventurous diners.</p>
      
      <h3>2. Plant-Based Alternatives</h3>
      <p>With growing health consciousness, plant-based alternatives to popular meat dishes are gaining traction, particularly in metropolitan areas.</p>
      
      <h3>3. Gourmet Comfort Food</h3>
      <p>Elevated versions of familiar comfort foods are proving popular, with cloud kitchens offering gourmet takes on street food classics and homestyle favorites.</p>
      
      <h3>4. Health-Focused Menus</h3>
      <p>Calorie-counted, protein-rich, and nutrient-dense menu options are becoming standard offerings as health-conscious consumers seek balanced meal options for delivery.</p>
      
      <h3>5. DIY Meal Kits</h3>
      <p>Semi-prepared meal kits that allow customers to finish cooking at home are carving out a niche, appealing to those who want fresh food with a touch of personal involvement.</p>
      
      <h2>Market Implications</h2>
      <p>Cloud kitchens that successfully capitalize on these trends are seeing significantly higher customer retention and order values. The data suggests that being ahead of food trends can translate directly to business growth.</p>
    `
  },
  {
    id: 3,
    title: "Scaling Your Food Brand: From Single Kitchen to National Presence",
    excerpt: "Learn the strategies and operational frameworks behind successful food brands that scaled from local operations to national franchises.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Growth",
    date: "March 12, 2023",
    author: "Ananya Patel",
    tags: ["Scaling", "Growth Strategy", "Operations"],
    content: `
      <h2>The Path to National Scale</h2>
      <p>Scaling a food brand from a single location to a national presence requires careful planning, robust systems, and strategic decision-making. This article explores the journeys of several successful brands and extracts key learnings.</p>
      
      <h3>Standardization is Key</h3>
      <p>Successful scaling requires obsessive attention to standardization - from recipes and preparation methods to service standards and brand experience.</p>
      
      <h3>Technology Infrastructure</h3>
      <p>Brands that scale successfully invest early in technology systems that can grow with them, particularly in inventory management, order processing, and customer data analysis.</p>
      
      <h3>Hub and Spoke Model</h3>
      <p>Many successful cloud kitchen operations utilize a hub and spoke model, with central commissaries supporting multiple satellite delivery kitchens.</p>
      
      <h3>Phased Geographical Expansion</h3>
      <p>Rather than attempting to go national immediately, successful brands typically expand in concentric circles from their core market, ensuring operational stability before moving to new territories.</p>
      
      <h2>Case Studies</h2>
      <p>The article examines three Indian food brands that successfully scaled nationwide, analyzing their growth trajectories, operational models, and strategic decision points.</p>
      
      <p>With the right systems and strategies in place, cloud kitchen concepts can scale more rapidly and with lower capital requirements than traditional restaurant models, creating exciting opportunities for food entrepreneurs.</p>
    `
  },
  {
    id: 4,
    title: "The Economics of Cloud Kitchens: Breaking Down the Numbers",
    excerpt: "A detailed analysis of startup costs, operational expenses, and profit margins in India's growing cloud kitchen industry.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Finance",
    date: "February 20, 2023",
    author: "Raj Kapoor",
    tags: ["Finance", "Economics", "Business Model"],
    content: `
      <h2>Financial Breakdown of Cloud Kitchen Operations</h2>
      <p>Cloud kitchens have disrupted the food service industry by dramatically reducing the capital and operational expenses associated with traditional restaurants. This article provides a detailed financial analysis of typical cloud kitchen operations in India.</p>
      
      <h3>Initial Investment</h3>
      <p>The startup costs for a basic cloud kitchen operation in a Tier 1 Indian city typically range from ₹15-25 lakhs, a fraction of what a comparable dine-in restaurant would require.</p>
      
      <h3>Operating Expenses</h3>
      <p>Cloud kitchens benefit from significantly lower rent and staffing costs, but face higher packaging expenses and delivery platform commissions that can range from 20-30% of order values.</p>
      
      <h3>Break-Even Analysis</h3>
      <p>With efficient operations, cloud kitchens can achieve break-even within 6-9 months, compared to 18-24 months for traditional restaurants.</p>
      
      <h3>Profit Margins</h3>
      <p>Well-run cloud kitchen operations can achieve net profit margins of 15-20%, substantially higher than the 5-10% typical in traditional restaurant models.</p>
      
      <h2>Optimization Strategies</h2>
      <p>The article explores several financial optimization strategies, including multi-brand operations from single kitchens, strategic menu engineering to maximize profitability, and reducing dependency on third-party delivery platforms.</p>
      
      <p>The economic advantages of the cloud kitchen model make it particularly attractive for food entrepreneurs looking to maximize returns while minimizing initial capital requirements.</p>
    `
  },
  {
    id: 5,
    title: "How Synkris Helped FoodBox India Reduce Food Waste by 32%",
    excerpt: "A case study examining how our AI-driven forecasting tools transformed inventory management for a leading cloud kitchen operator.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Case Study",
    date: "January 15, 2023",
    author: "Team Synkris",
    tags: ["Case Study", "Success Story", "Food Waste"],
    content: `
      <h2>Transforming Inventory Management at FoodBox India</h2>
      <p>FoodBox India, operating 35+ cloud kitchens across 5 cities, faced significant challenges with inventory management and food waste. This case study examines how Synkris's AI-driven solutions transformed their operations.</p>
      
      <h3>The Challenge</h3>
      <p>Before implementing Synkris, FoodBox was experiencing food waste rates of approximately 18% across their operation, significantly impacting their bottom line and sustainability efforts.</p>
      
      <h3>The Implementation</h3>
      <p>Synkris deployed its AI-powered demand forecasting and inventory management system across FoodBox's operations. The system analyzed historical order data, identified patterns, and began providing increasingly accurate predictions of daily ingredient requirements.</p>
      
      <h3>Key Features Utilized</h3>
      <ul>
        <li>Predictive demand forecasting based on historical data, weather patterns, and local events</li>
        <li>Automated inventory tracking and depletion calculation</li>
        <li>Smart procurement recommendations with just-in-time ordering suggestions</li>
        <li>Performance dashboards with actionable insights</li>
      </ul>
      
      <h3>The Results</h3>
      <p>After six months of implementation and system learning, FoodBox achieved:</p>
      <ul>
        <li>32% reduction in overall food waste</li>
        <li>24% decrease in emergency ingredient purchases</li>
        <li>18% improvement in gross margin</li>
        <li>Reduction in stockouts of key ingredients by 89%</li>
      </ul>
      
      <h2>Long-Term Impact</h2>
      <p>The system's continuous learning capabilities have enabled FoodBox to further refine their operations over time. One year after implementation, the company reports that the Synkris system has become an indispensable part of their operational framework and a key driver of profitability.</p>
    `
  },
  {
    id: 6,
    title: "The Future of Food Delivery: Trends to Watch in 2023",
    excerpt: "From drone deliveries to sustainable packaging, these innovations are shaping the future of the food delivery ecosystem.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Industry Insights",
    date: "December 5, 2022",
    author: "Neha Gupta",
    tags: ["Food Delivery", "Innovation", "Future Trends"],
    content: `
      <h2>Emerging Innovations in Food Delivery</h2>
      <p>The food delivery ecosystem continues to evolve rapidly, with several emerging technologies and approaches poised to transform how meals move from kitchens to customers in 2023 and beyond.</p>
      
      <h3>Drone and Autonomous Vehicle Deliveries</h3>
      <p>Several companies are trialing drone and autonomous robot deliveries in controlled environments, with wider deployment expected as regulations evolve and technology matures.</p>
      
      <h3>Sustainable Packaging Solutions</h3>
      <p>As environmental concerns grow, innovative biodegradable and even edible packaging solutions are gaining traction, with delivery platforms increasingly highlighting eco-friendly packaging options.</p>
      
      <h3>Dark Stores and Micro-Fulfillment Centers</h3>
      <p>The rapid delivery model (10-15 minutes) is driving the development of hyper-local micro-fulfillment centers strategically placed to serve dense urban areas.</p>
      
      <h3>Blockchain for Food Traceability</h3>
      <p>Blockchain technology is being implemented to provide end-to-end traceability of food items, addressing growing consumer demand for transparency around sourcing and preparation.</p>
      
      <h3>Personalization Through AI</h3>
      <p>Artificial intelligence is enabling increasingly sophisticated personalization of recommendations and offerings, creating more tailored customer experiences.</p>
      
      <h2>Impact on Cloud Kitchens</h2>
      <p>These delivery innovations will have profound implications for cloud kitchen operators, potentially enabling service to wider delivery radiuses, reducing delivery costs, and creating opportunities for new menu concepts optimized for emerging delivery methods.</p>
      
      <p>Forward-thinking cloud kitchen operators should be monitoring these developments closely and positioning themselves to capitalize on delivery innovations as they mature.</p>
    `
  }
];

// Get all unique categories
const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];

// Get all unique tags
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

// Function to get post by ID
const getPostById = (id: string) => {
  const postId = parseInt(id);
  return blogPosts.find(post => post.id === postId);
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [showFilters, setShowFilters] = useState(false);
  const { id } = useParams<{ id?: string }>();
  const isMobile = useIsMobile();
  const post = id ? getPostById(id) : null;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Filter based on search term, category and tag
    let results = blogPosts;
    
    if (searchTerm) {
      results = results.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "All") {
      results = results.filter(post => post.category === selectedCategory);
    }
    
    if (selectedTag) {
      results = results.filter(post => post.tags.includes(selectedTag));
    }
    
    setFilteredPosts(results);
  }, [searchTerm, selectedCategory, selectedTag]);

  if (post) {
    // Single blog post view
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-synkris-black dark:text-white">
        <Navbar />
        
        <main className="flex-grow">
          {/* Breadcrumbs */}
          <div className="bg-gray-50 dark:bg-synkris-dark-gray py-4 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/blog">Blog</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{post.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
          
          {/* Article Content */}
          <article className="py-10 px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <Link 
                to="/blog" 
                className="inline-flex items-center mb-6 text-synkris-green hover:brightness-110 transition-all"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to all articles
              </Link>
              
              {/* Header */}
              <header className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-synkris-green/10 text-synkris-green px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </header>
              
              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden mb-10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Content */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-lg font-semibold mb-4">Related Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-2" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
          
          {/* Related Articles */}
          <section className="py-12 px-6 md:px-10 bg-gray-50 dark:bg-synkris-dark-gray">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">You might also like</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <div key={relatedPost.id} className="glass-panel hover:shadow-lg transition-shadow">
                      <div className="aspect-video mb-4 overflow-hidden rounded-t-xl">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <Link 
                          to={`/blog/${relatedPost.id}`} 
                          className="text-synkris-green font-medium flex items-center hover:brightness-110 transition-all"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
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
  }

  // Blog listing view
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-synkris-black dark:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 px-6 md:px-10 text-center bg-gray-50 dark:bg-synkris-dark-gray">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Knowledge Hub & <span className="text-synkris-green">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Stay up-to-date with the latest trends, insights, and success stories 
              from the world of cloud kitchens and food tech
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3"
                aria-label="Search articles"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </section>
        
        {/* Mobile Toggle for Filters */}
        {isMobile && (
          <div className="sticky top-16 z-10 bg-white dark:bg-synkris-black border-b border-gray-200 dark:border-gray-800 px-6 py-3">
            <Button 
              variant="outline" 
              className="w-full flex justify-between items-center"
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
              aria-controls="blog-filters"
            >
              <span className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter Articles
              </span>
              {showFilters ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <Filter className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
        
        {/* Filters and Content */}
        <section className="py-12 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters - Desktop or Mobile when shown */}
              {(!isMobile || (isMobile && showFilters)) && (
                <div className="lg:col-span-1" id="blog-filters">
                  <div className={`${isMobile ? 'pb-4 mb-6 border-b border-gray-200 dark:border-gray-800' : 'sticky top-24 space-y-8'}`}>
                    {/* Categories */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Categories</h3>
                      <ul className="space-y-2">
                        {allCategories.map((category, index) => (
                          <li key={index}>
                            <button
                              onClick={() => {
                                setSelectedCategory(category);
                                if (isMobile) setShowFilters(false);
                              }}
                              className={`text-left w-full px-3 py-2 rounded-md transition-colors ${
                                selectedCategory === category
                                  ? "bg-synkris-green/10 text-synkris-green font-medium"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                              aria-pressed={selectedCategory === category}
                            >
                              {category}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Popular Tags */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedTag(tag === selectedTag ? "" : tag);
                              if (isMobile) setShowFilters(false);
                            }}
                            className={`px-3 py-1 rounded-full text-sm flex items-center ${
                              selectedTag === tag
                                ? "bg-synkris-green text-synkris-black font-medium"
                                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                            aria-pressed={selectedTag === tag}
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Blog Posts */}
              <div className={`${isMobile && showFilters ? 'hidden' : ''} lg:col-span-3`}>
                {/* Mobile Category Tabs */}
                {isMobile && (
                  <Tabs 
                    defaultValue="All" 
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                    className="mb-8"
                  >
                    <TabsList className="w-full overflow-x-auto flex-nowrap justify-start px-2 py-1 h-auto">
                      {allCategories.map((category) => (
                        <TabsTrigger 
                          key={category} 
                          value={category}
                          className="whitespace-nowrap"
                        >
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                )}
                
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span className="bg-synkris-green/10 text-synkris-green px-2 py-1 rounded-full text-xs">
                              {post.category}
                            </span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </CardContent>
                        
                        <CardFooter className="px-6 pb-6 pt-0">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center text-sm">
                              <User className="h-3 w-3 mr-1" />
                              <span className="text-gray-500 dark:text-gray-400">{post.author}</span>
                            </div>
                            
                            <Link 
                              to={`/blog/${post.id}`} 
                              className="text-synkris-green font-medium flex items-center hover:brightness-110 transition-all"
                            >
                              <span>Read More</span>
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Newspaper className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                        setSelectedTag("");
                      }}
                      variant="outline"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
                
                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <Pagination className="mt-12">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup - Sticky on Mobile */}
        <section className={`py-16 px-6 md:px-10 bg-synkris-light-gray dark:bg-synkris-dark-gray ${isMobile ? 'sticky bottom-0 z-10 py-6' : ''}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Cloud Kitchen Insights
            </h2>
            {!isMobile && (
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest industry trends, success stories, 
                and exclusive Synkris updates delivered to your inbox
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow"
                aria-label="Your email address"
              />
              <Button className="bg-synkris-green text-synkris-black hover:brightness-110">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
