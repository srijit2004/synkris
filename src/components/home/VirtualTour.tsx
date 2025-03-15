
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';

const VirtualTour = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Only load video when section is visible
          setIsLoaded(true);
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const openFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Handle video load event
  const handleVideoLoad = () => {
    console.log("Video content loaded successfully");
  };

  return (
    <section 
      ref={sectionRef}
      className="page-section relative opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          Take a <span className="text-synkris-green">Virtual Tour</span>
        </h2>
        <p className="section-subtitle">
          Experience a Synkris-operated cloud kitchen firsthand with our virtual tour. See how our 
          technology and infrastructure create the perfect environment for your food brand.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-panel overflow-hidden rounded-2xl shadow-xl">
          {/* Video placeholder - Replace this with your actual video */}
          <div className="relative aspect-video bg-synkris-black">
            {isLoaded ? (
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                muted
                playsInline
                loop
                onLoadedData={handleVideoLoad}
              >
                {/* Replace with your actual video source */}
                <source src="https://static.videezy.com/system/resources/previews/000/042/494/original/MKM_7254.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="animate-pulse text-white">Loading tour...</div>
              </div>
            )}
            
            {/* Play/Pause overlay */}
            {isLoaded && !isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-white text-center">
                  <div className="w-20 h-20 rounded-full bg-synkris-green/80 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform" onClick={togglePlay}>
                    <Play className="h-8 w-8 text-synkris-black ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold">Click to start the virtual tour</h3>
                </div>
              </div>
            )}
            
            {/* Video controls */}
            {isLoaded && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-center">
                  <button 
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white ml-0.5" />}
                  </button>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
                    </button>
                    
                    <button 
                      onClick={openFullscreen}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Maximize className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Tour highlights */}
          <div className="p-6 bg-white dark:bg-synkris-dark-gray">
            <h3 className="text-2xl font-bold mb-4">Tour Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">State-of-the-art Equipment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Commercial-grade kitchen setup with the latest cooking technology
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">Operational Workflow</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Optimized space design for maximum efficiency and throughput
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">Digital Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Smart screens and tablets for real-time order management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
