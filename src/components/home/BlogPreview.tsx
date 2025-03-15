
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

// Featured blog posts for the homepage preview
const featuredPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Cloud Kitchen Operations",
    excerpt: "Discover how artificial intelligence is transforming inventory management, demand forecasting, and menu optimization in cloud kitchens.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 15, 2023",
    author: "Priya Sharma",
    category: "Technology"
  },
  {
    id: 2,
    title: "Top 5 Food Trends Dominating the Indian Cloud Kitchen Scene",
    excerpt: "From regional cuisine fusion to plant-based alternatives, these are the food trends driving growth for cloud kitchens in India.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2023",
    author: "Vikram Mehta",
    category: "Food Trends"
  },
  {
    id: 5,
    title: "How Synkris Helped FoodBox India Reduce Food Waste by 32%",
    excerpt: "A case study examining how our AI-driven forecasting tools transformed inventory management for a leading cloud kitchen operator.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "January 15, 2023",
    author: "Team Synkris",
    category: "Case Study"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white dark:bg-synkris-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Latest <span className="text-synkris-green">Insights</span></h2>
          <p className="section-subtitle">
            Stay updated with the latest trends, insights, and success stories from the world of cloud kitchens
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div 
              key={post.id} 
              className="glass-panel hover:shadow-lg transition-shadow animate-fade-in"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-t-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
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
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/blog" 
            className="cta-button-outline flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
