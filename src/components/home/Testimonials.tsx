
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Auto-advance
  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoPlay]);

  const navigate = (direction: 'prev' | 'next') => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex(prev => 
      direction === 'next' 
        ? (prev + 1) % testimonials.length 
        : (prev - 1 + testimonials.length) % testimonials.length
    );
    startAutoPlay();
  };

  const testimonials = [
    {
      quote: "Synkris has been a game-changer for our multi-brand cloud kitchen. We've reduced food waste by 32% and improved order accuracy to 99.7% within just three months.",
      author: "Priya Sharma",
      title: "Operations Director, FoodBox India",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      metric: "32% less waste"
    },
    {
      quote: "The AI forecasting tools are mind-blowing. We can now accurately predict demand patterns for each of our locations, which has optimized our inventory and staffing. Synkris paid for itself in the first month.",
      author: "Vikram Mehta",
      title: "Founder, Cloud Bites",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      rating: 5,
      metric: "ROI in 30 days"
    },
    {
      quote: "Expanding from 2 to 12 kitchens would have been impossible without Synkris. Their platform gave us the real-time insights and operational efficiencies we needed to scale rapidly without sacrificing quality.",
      author: "Ananya Patel",
      title: "CEO, Flavor Fleet",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      metric: "6x growth"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="page-section opacity-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 mb-6">
            Customer Stories
          </span>
          <h2 className="section-title">
            Trusted by Leading <span className="text-primary">Cloud Kitchens</span>
          </h2>
          <p className="section-subtitle">
            Hear from the businesses that have transformed their operations with Synkris.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="bg-background rounded-3xl border border-border/50 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0 text-center">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-primary/20"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                          {testimonial.metric}
                        </div>
                      </div>
                      <div className="flex gap-0.5 justify-center mt-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-lg font-bold">{testimonial.author}</h4>
                        <p className="text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 items-center gap-4">
            <button 
              onClick={() => navigate('prev')}
              className="p-3 rounded-full bg-background border border-border/50 hover:border-primary hover:text-primary transition-all duration-200 hover:shadow-elegant"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setActiveIndex(index);
                    startAutoPlay();
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary w-8 h-3" : "bg-border w-3 h-3 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => navigate('next')}
              className="p-3 rounded-full bg-background border border-border/50 hover:border-primary hover:text-primary transition-all duration-200 hover:shadow-elegant"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
