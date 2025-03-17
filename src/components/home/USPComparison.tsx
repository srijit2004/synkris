
import React from 'react';

const USPComparison = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Synkris</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 border bg-gray-100 dark:bg-gray-700">Features</th>
                <th className="p-4 border bg-gray-100 dark:bg-gray-700">Synkris</th>
                <th className="p-4 border bg-gray-100 dark:bg-gray-700">Competitors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">AI-Powered Kitchen Management</td>
                <td className="p-4 border text-center">✅</td>
                <td className="p-4 border text-center">❌</td>
              </tr>
              <tr>
                <td className="p-4 border">End-to-End Operations</td>
                <td className="p-4 border text-center">✅</td>
                <td className="p-4 border text-center">❌</td>
              </tr>
              <tr>
                <td className="p-4 border">Real-time Analytics</td>
                <td className="p-4 border text-center">✅</td>
                <td className="p-4 border text-center">⚠️</td>
              </tr>
              <tr>
                <td className="p-4 border">Multi-location Support</td>
                <td className="p-4 border text-center">✅</td>
                <td className="p-4 border text-center">⚠️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default USPComparison;
