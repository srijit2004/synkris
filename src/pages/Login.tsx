
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, AlertCircle, UserCog } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing information",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, let's check if this is the admin login
      // In a real app, this would be verified by your backend
      if (email === "admin@synkris.com" && password === "admin123") {
        // Admin login
        toast({
          title: "Admin Login Successful",
          description: "Welcome to the Synkris Admin Panel!",
        });
        
        // Navigate to admin dashboard
        navigate("/admin/dashboard");
      } else {
        // Regular user login
        toast({
          title: "Login successful",
          description: "Welcome back to Synkris!",
        });
        
        // Navigate to user dashboard
        navigate("/dashboard");
      }
    }, 1500);
  };

  const toggleAdminLogin = () => {
    setIsAdmin(!isAdmin);
    if (!isAdmin) {
      setEmail("admin@synkris.com");
      setPassword("admin123");
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="font-bold text-2xl">
            Syn<span className="text-synkris-green">kris</span>
          </span>
        </Link>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-synkris-black">
              {isAdmin ? "Admin Login" : "Welcome Back"}
            </h1>
            <p className="text-gray-600 mt-2">
              {isAdmin 
                ? "Access the Synkris admin dashboard" 
                : "Log in to your Synkris dashboard"}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-synkris-green hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-synkris-green focus:ring-synkris-green rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <button 
                  type="button" 
                  onClick={toggleAdminLogin}
                  className="flex items-center text-sm text-synkris-green hover:underline"
                >
                  <UserCog className="h-3 w-3 mr-1" />
                  {isAdmin ? "User Login" : "Admin Login"}
                </button>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center ${
                  isAdmin 
                    ? "bg-slate-800 text-white" 
                    : "bg-synkris-green text-synkris-black"
                }`}
              >
                {isLoading ? (
                  <span>Logging in...</span>
                ) : (
                  <span>{isAdmin ? "Login as Admin" : "Log in"}</span>
                )}
              </button>
              
              {!isAdmin && (
                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-synkris-green hover:underline font-medium">
                    Sign up
                  </Link>
                </div>
              )}
              
              {isAdmin && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <p className="text-xs text-yellow-800">
                    <strong>Demo Admin Credentials</strong><br />
                    Email: admin@synkris.com<br />
                    Password: admin123
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
