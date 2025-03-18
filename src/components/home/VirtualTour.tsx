
import React from 'react';

const VirtualTour = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience Our Kitchen</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art cloud kitchen facilities. See how we're revolutionizing the future of food delivery.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
            >
              <source src="/0312(1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-synkris-green text-black px-6 py-3 rounded-full font-medium hover:brightness-110 transition-all">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
