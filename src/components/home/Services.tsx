
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ChefHat, Users, BrainCircuit, ShoppingCart, Utensils, BarChart3, ScrollText, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface ServiceItem {
  id: string;
  icon_name: string;
  title: string;
  description: string;
  link: string;
}

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Map icon names to components
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'ChefHat': <ChefHat className="h-8 w-8 text-synkris-green" />,
      'Users': <Users className="h-8 w-8 text-synkris-green" />,
      'BrainCircuit': <BrainCircuit className="h-8 w-8 text-synkris-green" />,
      'ShoppingCart': <ShoppingCart className="h-8 w-8 text-synkris-green" />,
      'Utensils': <Utensils className="h-8 w-8 text-synkris-green" />,
      'BarChart3': <BarChart3 className="h-8 w-8 text-synkris-green" />,
      'ScrollText': <ScrollText className="h-8 w-8 text-synkris-green" />,
      'Truck': <Truck className="h-8 w-8 text-synkris-green" />
    };
    return iconMap[iconName] || <ChefHat className="h-8 w-8 text-synkris-green" />;
  };
  
  // Fetch services from Supabase
  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('id');
          
        if (error) {
          console.error('Error fetching services:', error);
          toast({
            title: "Failed to load services",
            description: "Using fallback data instead",
            variant: "destructive",
          });
          // Use fallback data if fetch fails
          setServices(getFallbackServices());
        } else if (data && data.length > 0) {
          setServices(data);
        } else {
          // Use fallback if no data returned
          setServices(getFallbackServices());
        }
      } catch (err) {
        console.error('Error in services fetch:', err);
        setServices(getFallbackServices());
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchServices();
  }, [toast]);
  
  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  // Fallback services data if backend fails
  const getFallbackServices = (): ServiceItem[] => [
    {
      id: '1',
      icon_name: 'ChefHat',
      title: "Cloud Kitchen Setup",
      description: "Rent fully equipped kitchens across metro cities with all necessary equipment and infrastructure.",
      link: "/services/kitchen-setup"
    },
    {
      id: '2',
      icon_name: 'Users',
      title: "Staffing & Training",
      description: "Provide professional chefs, kitchen assistants, and quality managers trained to your brand standards.",
      link: "/services/staffing"
    },
    {
      id: '3',
      icon_name: 'BrainCircuit',
      title: "AI-Powered Demand Forecasting",
      description: "Leverage advanced AI algorithms to predict sales trends and optimize pricing for maximum profitability.",
      link: "/solutions/forecasting"
    },
    {
      id: '4',
      icon_name: 'ShoppingCart',
      title: "Procurement & Inventory",
      description: "Access bulk ingredient sourcing at lower costs with automated inventory tracking and replenishment.",
      link: "/solutions/procurement"
    },
    {
      id: '5',
      icon_name: 'Utensils',
      title: "Menu Engineering",
      description: "Optimize your menu for high-margin items based on data-driven insights and customer preferences.",
      link: "/services/menu-engineering"
    },
    {
      id: '6',
      icon_name: 'BarChart3',
      title: "Marketing & Branding",
      description: "Boost your visibility on food aggregators with professional branding and targeted marketing campaigns.",
      link: "/services/marketing"
    },
    {
      id: '7',
      icon_name: 'BarChart3',
      title: "Order Management",
      description: "Track performance in real-time with comprehensive analytics and detailed reports on your dashboard.",
      link: "/solutions/order-management"
    },
    {
      id: '8',
      icon_name: 'ScrollText',
      title: "Regulatory Compliance",
      description: "Get support for FSSAI, GST, and local health certifications to ensure complete legal compliance.",
      link: "/services/compliance"
    },
    {
      id: '9',
      icon_name: 'Truck',
      title: "Delivery Integration",
      description: "Seamless integration with leading food delivery platforms for efficient last-mile fulfillment.",
      link: "/solutions/delivery"
    },
  ];

  return (
    <section 
      id="services"
      ref={servicesRef}
      className="page-section relative bg-synkris-light-gray opacity-0 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-synkris-green/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Our <span className="text-synkris-green">Services</span>
          </h2>
          <p className="section-subtitle">
            We provide end-to-end cloud kitchen services, from setup to scaling, enabling food brands to focus on what they do best - creating amazing food
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-synkris-green/30 border-t-synkris-green rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.link}
                className="feature-card opacity-0 animate-slide-up group transition-all hover:border-synkris-green/30"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-synkris-green/10 rounded-lg inline-block group-hover:bg-synkris-green/20 transition-colors">
                  {getIconComponent(service.icon_name)}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-synkris-green transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 flex items-center text-synkris-green">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Included in plans</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
