
import React, { Suspense, ErrorBoundary } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Index from './pages/Index';
import Debug from './pages/Debug';
import NotFound from './pages/NotFound';

// Simple error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
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
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} resetErrorBoundary={() => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
      }} />;
    }

    return this.props.children;
  }
}

function App() {
  console.log('App component rendering');
  
  return (
    <AppErrorBoundary>
      <ThemeProvider defaultTheme="light" attribute="class">
        <div className="app-container min-h-screen">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/debug" element={<Debug />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </Suspense>
        </div>
      </ThemeProvider>
    </AppErrorBoundary>
  );
}

export default App;
