
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, BrainInsight, sampleBrainInsights } from '@/lib/supabase';

// Hook for fetching Synkris Brain insights
export function useBrainInsights() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['brain-insights'],
    queryFn: async (): Promise<BrainInsight[]> => {
      try {
        // If Supabase is connected properly, this will fetch real data
        const { data, error } = await supabase
          .from('brain_insights')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);
          
        if (error) {
          console.error('Error fetching brain insights:', error);
          // Fall back to sample data if there's an error
          return sampleBrainInsights;
        }
        
        return data || sampleBrainInsights;
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
  
  // Simulate increasing data points for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPointsProcessed(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['kitchen-metrics'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('kitchen_metrics')
          .select('*')
          .order('timestamp', { ascending: false })
          .limit(10);
          
        if (error) {
          console.error('Error fetching kitchen metrics:', error);
          return null;
        }
        
        return data;
      } catch (err) {
        console.error('Failed to fetch kitchen metrics:', err);
        return null;
      }
    },
  });

  return {
    metrics: data,
    dataPointsProcessed,
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
