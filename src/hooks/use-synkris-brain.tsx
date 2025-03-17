
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, BrainInsight, sampleBrainInsights } from '@/lib/supabase';

// Hook for fetching Synkris Brain insights
export function useBrainInsights() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['brain-insights'],
    queryFn: async (): Promise<BrainInsight[]> => {
      try {
        console.log('Fetching brain insights...');
        // Attempt to fetch from Supabase if connected
        if (supabase) {
          const { data, error } = await supabase
            .from('brain_insights')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10);
            
          if (error) {
            console.error('Supabase error:', error);
            return sampleBrainInsights;
          }
          
          return data?.length ? data : sampleBrainInsights;
        }
        
        // Fall back to sample data if Supabase is not properly connected
        return sampleBrainInsights;
      } catch (err) {
        console.error('Failed to fetch brain insights:', err);
        // Fall back to sample data if there's an exception
        return sampleBrainInsights;
      }
    },
  });

  return {
    insights: data || sampleBrainInsights,
    isLoading,
    error
  };
}

// Hook for kitchen metrics
export function useKitchenMetrics() {
  const [dataPointsProcessed, setDataPointsProcessed] = useState(32500000);
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [salesData, setSalesData] = useState<any[]>([]);
  
  // Simulate increasing data points for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPointsProcessed(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    
    // Sample data for charts
    const generateSampleData = () => {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const revenue = days.map(day => ({
        name: day,
        revenue: Math.floor(Math.random() * 30000) + 20000
      }));
      
      const sales = days.map(day => ({
        name: day,
        orders: Math.floor(Math.random() * 200) + 100
      }));
      
      setRevenueData(revenue);
      setSalesData(sales);
    };
    
    generateSampleData();
    
    return () => clearInterval(interval);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['kitchen-metrics'],
    queryFn: async () => {
      try {
        console.log('Fetching kitchen metrics...');
        if (supabase) {
          const { data, error } = await supabase
            .from('kitchen_metrics')
            .select('*')
            .order('timestamp', { ascending: false })
            .limit(10);
            
          if (error) {
            console.error('Supabase error:', error);
            return null;
          }
          
          return data;
        }
        
        return null;
      } catch (err) {
        console.error('Failed to fetch kitchen metrics:', err);
        return null;
      }
    },
  });

  return {
    metrics: data,
    dataPointsProcessed,
    revenueData,
    salesData,
    isLoading
  };
}

// Hook for AI chat assistant
export function useAIAssistant() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Sample AI responses based on common questions
  const sampleResponses: Record<string, string> = {
    'inventory': 'Based on your historical data for 300 orders, you will need approximately: 45kg of rice, 30kg of chicken, 15kg of vegetables, and 5kg of spices.',
    'profitable': 'Your most profitable menu items are: 1. Chicken Biryani (62% margin), 2. Paneer Butter Masala (58% margin), 3. Butter Naan (70% margin).',
    'supplier': 'Based on current market rates, supplier "Fresh Direct" offers the lowest prices for your ingredients with an average of 12% below market rate.',
    'trends': 'There is a 40% increase in demand for biriyani in your area. Consider increasing your stock and running a promotional campaign.',
    'staff': 'Your peak productivity hours are between 6PM-9PM. Consider scheduling 2 additional staff members during this period.',
    'default': 'I\'m your Synkris Brain assistant. How can I help optimize your kitchen operations today?'
  };
  
  const sendMessage = async (message: string) => {
    setIsLoading(true);
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate response based on keywords in the message
      let response = sampleResponses.default;
      if (message.toLowerCase().includes('inventory') || message.toLowerCase().includes('orders')) {
        response = sampleResponses.inventory;
      } else if (message.toLowerCase().includes('profit') || message.toLowerCase().includes('profitable')) {
        response = sampleResponses.profitable;
      } else if (message.toLowerCase().includes('supplier') || message.toLowerCase().includes('ingredients')) {
        response = sampleResponses.supplier;
      } else if (message.toLowerCase().includes('trends') || message.toLowerCase().includes('demand')) {
        response = sampleResponses.trends;
      } else if (message.toLowerCase().includes('staff') || message.toLowerCase().includes('productivity')) {
        response = sampleResponses.staff;
      }
      
      // Add AI response
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error processing your request. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    messages,
    sendMessage,
    isLoading
  };
}

// Hook for menu optimization
export function useMenuOptimization() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Sample menu items
        const sampleMenuItems = [
          {
            id: 1,
            name: 'Chicken Biryani',
            price: 250,
            suggestedPrice: 280,
            popularity: 92,
            profit: 62,
            ingredients: ['rice', 'chicken', 'spices']
          },
          {
            id: 2,
            name: 'Paneer Butter Masala',
            price: 220,
            suggestedPrice: 240,
            popularity: 85,
            profit: 58,
            ingredients: ['paneer', 'butter', 'tomato', 'spices']
          },
          {
            id: 3,
            name: 'Butter Naan',
            price: 40,
            suggestedPrice: 45,
            popularity: 95,
            profit: 70,
            ingredients: ['flour', 'butter', 'yeast']
          },
          {
            id: 4,
            name: 'Dal Makhani',
            price: 180,
            suggestedPrice: 200,
            popularity: 78,
            profit: 55,
            ingredients: ['dal', 'butter', 'cream', 'spices']
          },
          {
            id: 5,
            name: 'Masala Dosa',
            price: 120,
            suggestedPrice: 140,
            popularity: 88,
            profit: 65,
            ingredients: ['rice batter', 'potatoes', 'spices']
          }
        ];
        
        setMenuItems(sampleMenuItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMenuItems();
  }, []);
  
  const updateMenuItem = (id: number, updates: Partial<any>) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };
  
  return {
    menuItems,
    updateMenuItem,
    isLoading
  };
}

// Brain capability types for the UI
export type BrainCapability = {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: 'demand' | 'staffing' | 'procurement' | 'pricing' | 'workflow' | 'profitability' | 'security' | 'data';
};

// Add BrainDashboard page to the router
export function useBrainDashboard() {
  const { insights } = useBrainInsights();
  const { dataPointsProcessed, revenueData, salesData } = useKitchenMetrics();
  
  return {
    insights,
    dataPointsProcessed,
    revenueData,
    salesData
  };
}
