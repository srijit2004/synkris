
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";

// Pages
import Index from './pages/Index';
import Login from './pages/Login';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import Enterprise from './pages/Enterprise';
import Debug from './pages/Debug';
import NotFound from './pages/NotFound';
import BrainDashboard from './pages/BrainDashboard';
import Solutions from './pages/Solutions';
import SolutionsLanding from './pages/SolutionsLanding';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Documentation from './pages/Documentation';
import Support from './pages/Support';
import CaseStudies from './pages/CaseStudies';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCustomers from './pages/admin/Customers';
import AdminSubscriptions from './pages/admin/Subscriptions';
import AdminReports from './pages/admin/Reports';
import AdminLocations from './pages/admin/Locations';
import AdminForms from './pages/admin/Forms';

// Simple loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-synkris-green/30 border-t-synkris-green rounded-full animate-spin"></div>
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  </div>
);

// Simple error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Something went wrong</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

// Error boundary class component
class AppErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean; error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback 
        error={this.state.error as Error} 
        resetErrorBoundary={() => {
          this.setState({ hasError: false, error: null });
          window.location.reload();
        }} 
      />;
    }

    return this.props.children;
  }
}

// Create a QueryClient instance with better error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  console.log('App component rendering');
  
  return (
    <React.StrictMode>
      <AppErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" attribute="class">
            <div className="app-container min-h-screen">
              <Suspense fallback={<PageLoader />}>
                <Router>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/debug" element={<Debug />} />
                    <Route path="/brain-dashboard" element={<BrainDashboard />} />
                    <Route path="/solutions" element={<SolutionsLanding />} />
                    <Route path="/solutions/*" element={<Solutions />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/resources/case-studies" element={<CaseStudies />} />
                    
                    {/* Admin routes */}
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/customers" element={<AdminCustomers />} />
                    <Route path="/admin/subscriptions" element={<AdminSubscriptions />} />
                    <Route path="/admin/reports" element={<AdminReports />} />
                    <Route path="/admin/locations" element={<AdminLocations />} />
                    <Route path="/admin/forms" element={<AdminForms />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Router>
              </Suspense>
            </div>
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>
      </AppErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
