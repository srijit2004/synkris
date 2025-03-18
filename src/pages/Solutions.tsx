
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Forecasting from './solutions/Forecasting';
import OrderManagement from './solutions/OrderManagement';
import Insights from './solutions/Insights';
import Delivery from './solutions/Delivery';
import Procurement from './solutions/Procurement';

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="forecasting" element={<Forecasting />} />
          <Route path="order-management" element={<OrderManagement />} />
          <Route path="insights" element={<Insights />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="procurement" element={<Procurement />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
