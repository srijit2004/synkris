
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Debug from './pages/Debug';
import NotFound from './pages/NotFound';

// Extremely simplified version to identify the issue
function App() {
  console.log('App component rendering');
  
  return (
    <div className="app-container">
      <h1>Basic App Container</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Debug />} />
          <Route path="/debug" element={<Debug />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
