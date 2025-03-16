
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import Customers from './pages/admin/Customers';
import Subscriptions from './pages/admin/Subscriptions';
import Forms from './pages/admin/Forms';
import Locations from './pages/admin/Locations';
import Reports from './pages/admin/Reports';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Enterprise from './pages/Enterprise';
import NotFound from './pages/NotFound';
import BrainDashboard from './pages/BrainDashboard';
import Debug from './pages/Debug';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="synkris-theme">
      <Router>
        <Toaster />
        <Routes>
          <Route path="/debug" element={<Debug />} />
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/brain-dashboard" element={<BrainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/enterprise" element={<Enterprise />} />
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="forms" element={<Forms />} />
            <Route path="locations" element={<Locations />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
