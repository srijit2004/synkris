import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './pages/Index';
import Login from './pages/Login';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import Enterprise from './pages/Enterprise';
import Debug from './pages/Debug';
import NotFound from './pages/NotFound';
import BrainDashboard from './pages/BrainDashboard';
import Solutions from './pages/Solutions';

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

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  console.log('App component rendering');
  
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <div className="app-container min-h-screen">
            <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <Router>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/enterprise" element={<Enterprise />} />
                  <Route path="/debug" element={<Debug />} />
                  <Route path="/brain-dashboard" element={<BrainDashboard />} />
                  <Route path="/solutions/*" element={<Solutions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
            </React.Suspense>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}

export default App;
