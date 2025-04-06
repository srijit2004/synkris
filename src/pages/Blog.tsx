
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  // Blog posts data (this would typically come from an API or CMS)
  const blogPosts = [
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
      id: 3,
      title: "Scaling Your Cloud Kitchen: Lessons from Industry Leaders",
      excerpt: "Learn the strategies and tactics that successful cloud kitchen operators used to scale from one to multiple locations efficiently.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 12, 2023",
      author: "Raj Patel",
      category: "Business"
    },
    {
      id: 4,
      title: "Inventory Management Best Practices for Cloud Kitchens",
      excerpt: "Effective inventory management strategies to reduce waste, control costs, and ensure you never run out of critical ingredients.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "February 20, 2023",
      author: "Neha Gupta",
      category: "Operations"
    },
    {
      id: 5,
      title: "How Synkris Helped FoodBox India Reduce Food Waste by 32%",
      excerpt: "A case study examining how our AI-driven forecasting tools transformed inventory management for a leading cloud kitchen operator.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "January 15, 2023",
      author: "Team Synkris",
      category: "Case Study"
    },
    {
      id: 6,
      title: "The Future of Cloud Kitchens: Emerging Tech and Opportunities",
      excerpt: "Exploring the technologies and market trends that will shape the future of cloud kitchens over the next decade.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "December 8, 2022",
      author: "Arjun Singh",
      category: "Future Trends"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Synkris <span className="text-synkris-green">Blog</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Insights, tips, and industry news to help you optimize your cloud kitchen operations
            and grow your food business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div className="aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="bg-synkris-green/10 text-synkris-green px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm">
                      <User className="h-3 w-3 mr-1" />
                      <span className="text-gray-500 dark:text-gray-400">{post.author}</span>
                    </div>
                    
                    <div className="text-synkris-green font-medium flex items-center hover:brightness-110 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
