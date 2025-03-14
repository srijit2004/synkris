
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Check } from 'lucide-react';

// Cities data with coordinates
const cities = [
  { id: 1, name: "Delhi", coordinates: [28.7041, 77.1025], status: "active", kitchens: 15 },
  { id: 2, name: "Mumbai", coordinates: [19.0760, 72.8777], status: "active", kitchens: 12 },
  { id: 3, name: "Bangalore", coordinates: [12.9716, 77.5946], status: "active", kitchens: 18 },
  { id: 4, name: "Hyderabad", coordinates: [17.3850, 78.4867], status: "active", kitchens: 10 },
  { id: 5, name: "Chennai", coordinates: [13.0827, 80.2707], status: "active", kitchens: 8 },
  { id: 6, name: "Kolkata", coordinates: [22.5726, 88.3639], status: "active", kitchens: 7 },
  { id: 7, name: "Pune", coordinates: [18.5204, 73.8567], status: "active", kitchens: 6 },
  { id: 8, name: "Jaipur", coordinates: [26.9124, 75.7873], status: "active", kitchens: 4 },
  { id: 9, name: "Ahmedabad", coordinates: [23.0225, 72.5714], status: "active", kitchens: 5 },
  { id: 10, name: "Surat", coordinates: [21.1702, 72.8311], status: "coming-soon", kitchens: 0 },
  { id: 11, name: "Lucknow", coordinates: [26.8467, 80.9462], status: "coming-soon", kitchens: 0 },
  { id: 12, name: "Chandigarh", coordinates: [30.7333, 76.7794], status: "coming-soon", kitchens: 0 },
  { id: 13, name: "Kochi", coordinates: [9.9312, 76.2673], status: "coming-soon", kitchens: 0 },
  { id: 14, name: "Indore", coordinates: [22.7196, 75.8577], status: "planned", kitchens: 0 },
  { id: 15, name: "Nagpur", coordinates: [21.1458, 79.0882], status: "planned", kitchens: 0 },
];

const LocationMap = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [cityFilter, setCityFilter] = useState("all"); // all, active, coming-soon, planned
  
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

  const filteredCities = cityFilter === "all" 
    ? cities 
    : cities.filter(city => city.status === cityFilter);

  const getStatusText = (status: string) => {
    switch(status) {
      case "active": return "Operational";
      case "coming-soon": return "Coming Soon";
      case "planned": return "Future Expansion";
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "active": return "text-green-500";
      case "coming-soon": return "text-yellow-500";
      case "planned": return "text-blue-500";
      default: return "text-gray-500";
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="page-section relative bg-synkris-light-gray dark:bg-synkris-dark-gray opacity-0"
    >
      <div className="text-center mb-14">
        <h2 className="section-title">
          Available <span className="text-synkris-green">Locations</span>
        </h2>
        <p className="section-subtitle">
          Explore our network of cloud kitchen facilities across India. 
          Launch your food brand in multiple cities with minimal investment.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* City Listing */}
        <div className="lg:col-span-1">
          <div className="glass-panel p-6 h-full">
            <h3 className="text-xl font-bold mb-4">Our Network</h3>
            
            <div className="flex space-x-2 mb-6">
              <button
                onClick={() => setCityFilter("all")}
                className={`px-3 py-1 text-sm rounded-full ${
                  cityFilter === "all" 
                    ? "bg-synkris-green text-synkris-black" 
                    : "bg-white dark:bg-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setCityFilter("active")}
                className={`px-3 py-1 text-sm rounded-full ${
                  cityFilter === "active" 
                    ? "bg-synkris-green text-synkris-black" 
                    : "bg-white dark:bg-gray-700"
                }`}
              >
                Operational
              </button>
              <button
                onClick={() => setCityFilter("coming-soon")}
                className={`px-3 py-1 text-sm rounded-full ${
                  cityFilter === "coming-soon" 
                    ? "bg-synkris-green text-synkris-black" 
                    : "bg-white dark:bg-gray-700"
                }`}
              >
                Coming Soon
              </button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors ${
                    selectedCity.id === city.id 
                      ? "bg-synkris-green/10 border-l-4 border-synkris-green" 
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedCity(city)}
                >
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-synkris-green mr-2" />
                    <div>
                      <h4 className="font-medium">{city.name}</h4>
                      <p className={`text-xs ${getStatusColor(city.status)}`}>
                        {getStatusText(city.status)}
                      </p>
                    </div>
                  </div>
                  
                  {city.status === "active" && (
                    <span className="text-sm font-medium">{city.kitchens} kitchens</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Map Visualization */}
        <div className="lg:col-span-2">
          <div className="glass-panel p-6 h-full">
            <div className="relative w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              {/* This is a placeholder for the actual map. In a real implementation, you would integrate with a mapping library like Google Maps, Mapbox, etc. */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544976644-0f851fbe496d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover opacity-50"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">{selectedCity.name}</h3>
                  <p className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    selectedCity.status === "active" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                      : selectedCity.status === "coming-soon" 
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}>
                    {getStatusText(selectedCity.status)}
                  </p>
                  
                  {selectedCity.status === "active" ? (
                    <div>
                      <p className="mb-4">
                        <span className="font-bold text-synkris-green text-xl">{selectedCity.kitchens}</span> kitchens available
                      </p>
                      
                      <div className="space-y-2 text-left">
                        <div className="flex items-center">
                          <Check className="h-4 w-4 text-synkris-green mr-2" />
                          <span>Multiple locations across the city</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="h-4 w-4 text-synkris-green mr-2" />
                          <span>Strategic positioning for delivery radius</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="h-4 w-4 text-synkris-green mr-2" />
                          <span>Immediate availability for quick launch</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>
                      {selectedCity.status === "coming-soon" 
                        ? "We're setting up kitchens in this city. Join the waitlist for early access." 
                        : "This city is in our expansion roadmap. Register your interest for future availability."}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm">Operational</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  <span className="text-sm">Coming Soon</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm">Planned</span>
                </div>
              </div>
              
              <span className="text-sm text-gray-500">
                Total cities: {cities.length} | Active: {cities.filter(c => c.status === "active").length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
