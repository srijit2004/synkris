
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug issues with mounting
console.log('Starting app render...');

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
});

// Global error handler for uncaught exceptions
window.addEventListener('error', (event) => {
  console.error('Uncaught Error:', event.error);
});

// Add CSS for neural network animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .neural-network {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 20%, rgba(38, 201, 111, 0.05) 0%, transparent 30%),
      radial-gradient(circle at 70% 60%, rgba(38, 201, 111, 0.05) 0%, transparent 30%),
      radial-gradient(circle at 40% 80%, rgba(38, 201, 111, 0.05) 0%, transparent 30%);
    background-size: 100% 100%;
  }
  
  .data-stream-animation {
    background: 
      linear-gradient(90deg, transparent 0%, rgba(38, 201, 111, 0.2) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: streamData 3s infinite linear;
  }
  
  @keyframes streamData {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }
  
  .animate-ping-slow {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-ping-slower {
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }
  
  .animate-pulse-green {
    animation: pulseGreen 2s infinite;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulseGreen {
    0%, 100% { background-color: rgba(38, 201, 111, 1); }
    50% { background-color: rgba(38, 201, 111, 0.6); }
  }
`;
document.head.appendChild(styleSheet);

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
      <App />
    );
    
    console.log('App rendered successfully');
  }
} catch (error) {
  console.error('Critical error during app initialization:', error);
  // Show a visible error on the page
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Critical React error. Check console for details.</div>';
}
