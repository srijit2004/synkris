
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug issues with mounting
console.log('Starting app render...');

try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found in DOM!');
    document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found</div>';
  } else {
    console.log('Root element found, creating React root...');
    const root = createRoot(rootElement);
    console.log('Rendering app into root...');
    
    root.render(
      // Temporarily remove StrictMode to reduce complexity while debugging
      <App />
    );
    
    console.log('App rendered successfully');
  }
} catch (error) {
  console.error('Critical error during app initialization:', error);
  // Show a visible error on the page
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Critical React error. Check console for details.</div>';
}
