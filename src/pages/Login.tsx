
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Admin credentials
  const ADMIN_EMAIL = "admin@synkris.com";
  const ADMIN_PASSWORD = "synkris@admin2025";

  const handleLogin = async (e: React.FormEvent) => {
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
    
    try {
      // Check if admin credentials
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Admin login
        toast({
          title: "Admin Login Successful",
          description: "Welcome to the Synkris Admin Panel!",
        });
        
        // Store admin session info in localStorage
        if (rememberMe) {
          localStorage.setItem('adminLoggedIn', 'true');
        }
        
        // Navigate to admin dashboard
        navigate("/admin/dashboard");
        return;
      }
      
      // Try Supabase auth for regular users
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error("Login error:", error);
        toast({
          title: "Login failed",
          description: error.message || "Please check your credentials and try again",
          variant: "destructive",
        });
        return;
      }
      
      // Regular user login success
      toast({
        title: "Login successful",
        description: "Welcome back to Synkris!",
      });
      
      // Navigate to user dashboard
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Login process error:", error);
      toast({
        title: "Login failed",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
              Welcome Back
            </h1>
            <p className="text-gray-600 mt-2">
              Log in to your Synkris dashboard
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
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
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
                type="submit"
                disabled={isLoading}
                className="w-full py-3 font-medium rounded-lg bg-synkris-green text-synkris-black hover:brightness-110 transition-all flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  <span>Log in</span>
                )}
              </button>
              
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-synkris-green hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
