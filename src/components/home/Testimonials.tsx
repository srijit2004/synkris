
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const testimonials = [
    {
      quote: "Synkris has been a game-changer for our multi-brand cloud kitchen. We've reduced food waste by 32% and improved order accuracy to 99.7% within just three months.",
      author: "Priya Sharma",
      title: "Operations Director, FoodBox India",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "The AI forecasting tools are mind-blowing. We can now accurately predict demand patterns for each of our locations, which has optimized our inventory and staffing. Synkris paid for itself in the first month.",
      author: "Vikram Mehta",
      title: "Founder, Cloud Bites",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "Expanding from 2 to 12 kitchens would have been impossible without Synkris. Their platform gave us the real-time insights and operational efficiencies we needed to scale rapidly without sacrificing quality.",
      author: "Ananya Patel",
      title: "CEO, Flavor Fleet",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="page-section bg-synkris-light-gray opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          Trusted by Leading <span className="text-synkris-green">Cloud Kitchens</span>
        </h2>
        <p className="section-subtitle">
          Hear from the businesses that have transformed their operations with Synkris.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="glass-panel p-8 md:p-10 relative">
                <Quote className="absolute top-8 left-8 h-8 w-8 text-synkris-green opacity-20" />
                
                <div className="text-center">
                  <p className="text-xl md:text-2xl italic text-gray-700 mb-8 px-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full mb-3 border-2 border-synkris-green/30"
                    />
                    <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white border border-gray-200 hover:border-synkris-green hover:text-synkris-green transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-synkris-green w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white border border-gray-200 hover:border-synkris-green hover:text-synkris-green transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
