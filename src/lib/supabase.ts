
import { createClient } from '@supabase/supabase-js';

// These environment variables will need to be set in your Supabase integration
// They should NOT be hardcoded in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock Supabase client when credentials are missing
let supabase: any;

try {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      'Supabase credentials not found. Using mock Supabase client.'
    );
    
    // Create a mock client to prevent app crashes
    supabase = {
      from: () => ({
        select: () => ({
          order: () => ({
            limit: () => Promise.resolve({ data: [], error: null })
          })
        })
      }),
      auth: {
        signIn: () => Promise.resolve({ user: null, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        onAuthStateChange: () => ({ data: null, error: null })
      }
    };
  } else {
    // Create the real client when credentials are available
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  console.error('Error initializing Supabase client:', error);
  // Provide fallback mock client in case of error
  supabase = {
    from: () => ({
      select: () => ({
        order: () => ({
          limit: () => Promise.resolve({ data: [], error: null })
        })
      })
    }),
    auth: {
      signIn: () => Promise.resolve({ user: null, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: null, error: null })
    }
  };
}

export { supabase };

// Database types for TypeScript - update these as your schema changes
export type BrainInsight = {
  id: string;
  insight_type: 'demand' | 'pricing' | 'inventory' | 'staffing' | 'workflow';
  title: string;
  description: string;
  data_points: number;
  created_at: string;
  status: 'active' | 'pending' | 'archived';
  confidence_score: number;
  priority: 'low' | 'medium' | 'high';
};

export type KitchenMetric = {
  id: string;
  metric_type: 'efficiency' | 'cost' | 'revenue' | 'orders';
  value: number;
  unit: string;
  timestamp: string;
  location_id: string;
};

// Sample data for initial development (will be replaced by actual DB data)
export const sampleBrainInsights: BrainInsight[] = [
  {
    id: '1',
    insight_type: 'demand',
    title: 'Biriyani Demand Spike Expected',
    description: 'Based on historical data and current trends, prepare for 43% increase in Biriyani orders this weekend.',
    data_points: 28500,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.92,
    priority: 'high'
  },
  {
    id: '2',
    insight_type: 'pricing',
    title: 'Price Optimization Opportunity',
    description: 'Competitors have increased prices by avg 8%. Optimal price increase of 5% for premium menu items advised.',
    data_points: 15300,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.87,
    priority: 'medium'
  },
  {
    id: '3',
    insight_type: 'inventory',
    title: 'Ingredient Shortage Alert',
    description: 'Tomato prices rising due to seasonal shortage. Recommend bulk purchase before 15% predicted price increase.',
    data_points: 7200,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.94,
    priority: 'high'
  },
  {
    id: '4',
    insight_type: 'staffing',
    title: 'Staff Optimization Alert',
    description: 'Order volume trending 22% below forecast. Reduce 2 staff during 3-6PM shift to optimize labor costs.',
    data_points: 12100,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.89,
    priority: 'medium'
  },
  {
    id: '5',
    insight_type: 'workflow',
    title: 'Preparation Bottleneck Identified',
    description: 'Kitchen analysis suggests a 15% delay in dessert preparation. Reorganizing station layout could improve efficiency.',
    data_points: 8900,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.91,
    priority: 'medium'
  },
  {
    id: '6',
    insight_type: 'demand',
    title: 'Vegetarian Menu Opportunity',
    description: 'Analysis of ordering patterns shows 35% increase in vegetarian orders. Consider expanding vegetarian options.',
    data_points: 10500,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.88,
    priority: 'high'
  },
  {
    id: '7',
    insight_type: 'pricing',
    title: 'Happy Hour Promotion Impact',
    description: 'Recent 2-hour discount window increased order volume by 28%. Recommend regular implementation.',
    data_points: 5400,
    created_at: new Date().toISOString(),
    status: 'active',
    confidence_score: 0.86,
    priority: 'medium'
  }
];
