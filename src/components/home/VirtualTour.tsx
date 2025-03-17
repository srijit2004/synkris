
import React from 'react';

const VirtualTour = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Virtual Tour</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Take a virtual tour of our state-of-the-art cloud kitchen facilities.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-600">
              <p className="text-xl text-gray-500 dark:text-gray-400">Virtual Tour Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
