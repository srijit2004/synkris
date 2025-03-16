
import React from 'react';

const Debug = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Debug Page</h1>
      <p className="max-w-md mb-6">
        If you can see this page, React is rendering correctly but there might be issues with other components.
      </p>
      <div className="p-4 bg-red-100 text-red-800 rounded-lg">
        Current route: {window.location.pathname}
      </div>
    </div>
  );
};

export default Debug;
