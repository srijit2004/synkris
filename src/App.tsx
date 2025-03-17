
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Index from './pages/Index';
import Debug from './pages/Debug';
import NotFound from './pages/NotFound';

function App() {
  console.log('App component rendering');
  
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="app-container min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/debug" element={<Debug />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
