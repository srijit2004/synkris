
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Play, ChevronRight } from 'lucide-react';

const VirtualTour = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Scroll into view animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
          Experience Our <span className="text-synkris-green">Kitchen</span>
        </h2>
        
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art cloud kitchen facilities. 
            See how we're revolutionizing the future of food delivery.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md max-w-5xl mx-auto relative">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative group">
            {/* Video overlay for mobile touch */}
            <div 
              className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center z-10 cursor-pointer"
              onClick={handlePlayVideo}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-synkris-green/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-black fill-current" />
              </div>
            </div>
            
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isMobile ? false : true}
              poster="/placeholder.svg"
              playsInline // Important for iOS
              preload="metadata"
            >
              <source src="/0312(1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              className="bg-synkris-green text-black w-full sm:w-auto px-6 py-3 rounded-full font-medium hover:brightness-110 transition-all"
              onClick={() => window.location.href = "/demo"}
            >
              Schedule a Visit
            </Button>
            
            {isMobile && (
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-synkris-green text-synkris-green hover:bg-synkris-green/10"
                onClick={handlePlayVideo}
              >
                Watch Video Tour
              </Button>
            )}
          </div>
          
          {/* Quick facts about the kitchen */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-lg sm:text-xl font-bold text-synkris-green">5000+</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Sq. ft. Area</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-lg sm:text-xl font-bold text-synkris-green">12</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Cooking Stations</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg hidden sm:block">
              <p className="text-lg sm:text-xl font-bold text-synkris-green">24/7</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Operational</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
