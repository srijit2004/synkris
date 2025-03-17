
import React, { useEffect } from 'react';

const Debug = () => {
  useEffect(() => {
    console.log('Debug component mounted');
  }, []);

  return (
    <div className="debug-page" style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'red', marginBottom: '20px' }}>Debug Page</h1>
      <p>If you can see this page, basic React rendering is working.</p>
      <div style={{ 
        backgroundColor: '#ffeeee', 
        padding: '10px', 
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        Current URL: {window.location.href}
      </div>
    </div>
  );
};

export default Debug;
