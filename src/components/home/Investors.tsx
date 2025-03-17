
import React from 'react';

const Investors = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Investors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="w-32 h-16 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Investor {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;
