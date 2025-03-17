
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
        // Always return sample data while Supabase is not properly connected
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
        console.log('Fetching kitchen metrics...');
        // Always return null while Supabase is not properly connected
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
