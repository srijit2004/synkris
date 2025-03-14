
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
    tags: ["AI", "Technology", "Cloud Kitchen"]
  },
  {
    id: 2,
    title: "Top 5 Food Trends Dominating the Indian Cloud Kitchen Scene",
    excerpt: "From regional cuisine fusion to plant-based alternatives, these are the food trends driving growth for cloud kitchens in India.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food Trends",
    date: "April 28, 2023",
    author: "Vikram Mehta",
    tags: ["Food Trends", "Indian Cuisine", "Market Research"]
  },
  {
    id: 3,
    title: "Scaling Your Food Brand: From Single Kitchen to National Presence",
    excerpt: "Learn the strategies and operational frameworks behind successful food brands that scaled from local operations to national franchises.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Growth",
    date: "March 12, 2023",
    author: "Ananya Patel",
    tags: ["Scaling", "Growth Strategy", "Operations"]
  },
  {
    id: 4,
    title: "The Economics of Cloud Kitchens: Breaking Down the Numbers",
    excerpt: "A detailed analysis of startup costs, operational expenses, and profit margins in India's growing cloud kitchen industry.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Finance",
    date: "February 20, 2023",
    author: "Raj Kapoor",
    tags: ["Finance", "Economics", "Business Model"]
  },
  {
    id: 5,
    title: "How Synkris Helped FoodBox India Reduce Food Waste by 32%",
    excerpt: "A case study examining how our AI-driven forecasting tools transformed inventory management for a leading cloud kitchen operator.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Case Study",
    date: "January 15, 2023",
    author: "Team Synkris",
    tags: ["Case Study", "Success Story", "Food Waste"]
  },
  {
    id: 6,
    title: "The Future of Food Delivery: Trends to Watch in 2023",
    excerpt: "From drone deliveries to sustainable packaging, these innovations are shaping the future of the food delivery ecosystem.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Industry Insights",
    date: "December 5, 2022",
    author: "Neha Gupta",
    tags: ["Food Delivery", "Innovation", "Future Trends"]
  }
];

// Get all unique categories
const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];

// Get all unique tags
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
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
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </section>
        
        {/* Filters and Content */}
        <section className="py-12 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {allCategories.map((category, index) => (
                        <li key={index}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`text-left w-full px-3 py-2 rounded-md transition-colors ${
                              selectedCategory === category
                                ? "bg-synkris-green/10 text-synkris-green font-medium"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
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
                          onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                          className={`px-3 py-1 rounded-full text-sm flex items-center ${
                            selectedTag === tag
                              ? "bg-synkris-green text-synkris-black font-medium"
                              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                          }`}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Blog Posts */}
              <div className="lg:col-span-3">
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <div key={post.id} className="glass-panel hover:shadow-lg transition-shadow">
                        <div className="aspect-video mb-4 overflow-hidden rounded-t-xl">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
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
                          
                          <div className="flex items-center justify-between">
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
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
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
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-16 px-6 md:px-10 bg-synkris-light-gray dark:bg-synkris-dark-gray">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Cloud Kitchen Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest industry trends, success stories, 
              and exclusive Synkris updates delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow"
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
