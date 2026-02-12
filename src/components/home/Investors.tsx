
import React from 'react';

const partners = [
  "Zomato", "Swiggy", "Dunzo", "Amazon", "Flipkart", "PhonePe", "Razorpay", "Google Cloud"
];

const Investors = () => {
  return (
    <section className="py-16 border-y border-border/30 overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
          Trusted by India's Leading Brands
        </p>
      </div>
      
      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <div className="px-8 py-4 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
                <span className="text-lg md:text-xl font-bold text-muted-foreground/60 hover:text-primary transition-colors whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;
