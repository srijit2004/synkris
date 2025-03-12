
import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, ShoppingCart, Users, Settings, ArrowLeft } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b py-4 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="font-bold text-2xl">
              Syn<span className="text-synkris-green">kris</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome to your Dashboard!</h1>
            <p className="text-gray-500 mt-1">Your cloud kitchen journey starts here</p>
          </div>
          
          <Link 
            to="/"
            className="flex items-center text-gray-600 hover:text-synkris-green"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Order Management</h2>
              <ShoppingCart className="text-synkris-green h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm mb-3">Track and manage all your orders in real-time</p>
            <div className="mt-4">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Analytics</h2>
              <BarChart3 className="text-synkris-green h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm mb-3">Understand your business performance with AI insights</p>
            <div className="mt-4">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Team Management</h2>
              <Users className="text-synkris-green h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm mb-3">Manage your kitchen staff and operations</p>
            <div className="mt-4">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg">Your Onboarding Progress</h2>
            <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">2/5 Steps Complete</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-100">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-800">1</span>
                </div>
                <span>Account Setup</span>
              </div>
              <span className="text-sm text-green-800">Completed</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-100">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-800">2</span>
                </div>
                <span>Kitchen Selection</span>
              </div>
              <span className="text-sm text-green-800">Completed</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800">3</span>
                </div>
                <span>Menu Setup</span>
              </div>
              <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">Pending</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800">4</span>
                </div>
                <span>Set Up Delivery Partners</span>
              </div>
              <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">Pending</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800">5</span>
                </div>
                <span>Launch Your Kitchen</span>
              </div>
              <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">Pending</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
