
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, this would fetch from an API
  // For now, we'll use mock data
  const posts = [
    {
      id: '1',
      title: "How AI is Revolutionizing Cloud Kitchen Operations",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      author: "Priya Sharma",
      category: "Technology",
      content: `
        <p>Artificial Intelligence has transformed many industries, and cloud kitchens are no exception. The unique operational challenges of cloud kitchens – from demand forecasting to inventory management – make them perfect candidates for AI-driven optimization.</p>
        
        <h2>Demand Forecasting</h2>
        <p>One of the biggest challenges cloud kitchens face is predicting how much of each menu item they should prepare. Too little, and you'll run out during peak hours. Too much, and you'll face significant waste.</p>
        <p>AI algorithms analyze historical sales data, local events, weather patterns, and even social media trends to provide highly accurate demand forecasts. These predictions can be broken down by the hour, helping kitchen staff prepare just the right amount of food at the right time.</p>
        
        <h2>Inventory Management</h2>
        <p>Cloud kitchens often operate with limited storage space, making efficient inventory management crucial. AI systems can track ingredient usage in real-time, automatically generate purchase orders when supplies run low, and even suggest menu modifications based on ingredient availability.</p>
        <p>Some advanced systems can even predict ingredient price fluctuations, helping kitchen managers make strategic purchasing decisions that can significantly impact the bottom line.</p>
        
        <h2>Menu Optimization</h2>
        <p>Which menu items are most profitable? Which ones are frequently ordered together? AI can analyze sales data to identify these patterns and help cloud kitchens optimize their menus accordingly.</p>
        <p>For example, if the AI notices that customers who order Dish A often also order Dish B, the kitchen might create a bundle offer for these items, increasing the average order value.</p>
        
        <h2>Quality Control</h2>
        <p>Maintaining consistent food quality across multiple cloud kitchen locations can be challenging. AI-powered computer vision systems can analyze images of prepared dishes to ensure they meet visual standards before they're sent out for delivery.</p>
        
        <h2>The Road Ahead</h2>
        <p>As AI technology continues to evolve, we can expect even more innovative applications in the cloud kitchen space. From automated cooking robots to personalized menu recommendations based on customer preferences, the possibilities are truly exciting.</p>
        <p>Synkris is at the forefront of this revolution, providing cloud kitchens with cutting-edge AI tools to optimize their operations and drive profitability. By embracing these technologies, cloud kitchens can focus on what they do best – creating delicious food that keeps customers coming back for more.</p>
      `
    },
    {
      id: '2',
      title: "Top 5 Food Trends Dominating the Indian Cloud Kitchen Scene",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2023",
      author: "Vikram Mehta",
      category: "Food Trends",
      content: `
        <p>The cloud kitchen industry in India has experienced exponential growth in recent years, driven by changing consumer preferences and technological advancements. Here are the top food trends that are currently dominating the Indian cloud kitchen landscape.</p>
        
        <h2>1. Regional Cuisine Fusion</h2>
        <p>Indian consumers are increasingly embracing fusion cuisines that blend traditional regional flavors with international techniques. Cloud kitchens are perfectly positioned to experiment with these innovative combinations without the overhead of a traditional restaurant.</p>
        <p>Examples include Punjabi-Mexican burritos, Kerala-style pasta, and Bengali-inspired sushi, all of which have found success in the cloud kitchen model.</p>
        
        <h2>2. Plant-Based Alternatives</h2>
        <p>As health and environmental awareness grows, plant-based alternatives to popular meat dishes are gaining traction. Cloud kitchens focused exclusively on plant-based menus are reporting significant growth, particularly in metropolitan areas.</p>
        <p>Innovations in plant-based proteins have made it possible to create convincing alternatives to beloved Indian dishes like butter chicken, kebabs, and biryani, appealing to both vegetarians and flexitarians.</p>
        
        <h2>3. Health-Conscious Comfort Food</h2>
        <p>The pandemic has increased demand for comfort food, but with a health-conscious twist. Cloud kitchens are responding with nutritious versions of classic Indian comfort dishes – think whole grain parathas, baked instead of fried samosas, and dal makhani made with plant-based butter.</p>
        <p>These healthier alternatives allow consumers to indulge without guilt, a perfect balance for today's health-aware but food-loving consumer.</p>
        
        <h2>4. Subscription Meal Services</h2>
        <p>Busy professionals are turning to subscription-based meal services for convenience and consistency. Cloud kitchens are ideally structured to offer these services, providing freshly prepared meals on a daily or weekly basis.</p>
        <p>Many successful cloud kitchens now offer customizable meal plans that cater to specific dietary requirements, fitness goals, or taste preferences.</p>
        
        <h2>5. Gourmet Home Dining Experiences</h2>
        <p>With people entertaining at home more frequently, there's growing demand for gourmet dining experiences that can be easily served at home. Cloud kitchens are creating elaborate multi-course meals with detailed reheating and plating instructions.</p>
        <p>These premium offerings often include thoughtful touches like chef's notes, wine pairing suggestions, and elegant packaging, elevating the home dining experience.</p>
        
        <h2>Conclusion</h2>
        <p>These trends represent significant opportunities for cloud kitchen operators who can adapt quickly to changing consumer preferences. By leveraging data analytics and agile operations, cloud kitchens can stay ahead of these trends and position themselves for continued growth in the dynamic Indian food market.</p>
      `
    },
    // Add more blog posts as needed
  ];
  
  const post = posts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link to="/blog" className="text-synkris-green hover:underline">
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <article className="container mx-auto max-w-3xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-synkris-green hover:brightness-110 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span className="bg-synkris-green/10 text-synkris-green px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-synkris-black dark:prose-headings:text-white prose-a:text-synkris-green"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-500 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-400 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="p-2 bg-green-500 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 bg-blue-700 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
