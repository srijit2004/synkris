
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, Upload, CheckCircle, AlertCircle, User, Building, Briefcase, Shield, CreditCard, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Define the steps of the signup process
const SIGNUP_STEPS = [
  "Welcome",
  "Business Info",
  "Location",
  "Kitchen Match",
  "Compliance",
  "Payment",
  "Complete"
];

// Define kitchen plan options
const KITCHEN_PLANS = [
  {
    id: "lite",
    name: "Synkris Lite",
    description: "Shared Kitchen Space",
    price: "₹20,000/month",
    features: [
      "Shared kitchen infrastructure",
      "Basic equipment access",
      "10 hours of daily operations",
      "Starter marketing support",
      "Basic order management"
    ],
    recommended: false
  },
  {
    id: "pro",
    name: "Synkris Pro",
    description: "Dedicated Kitchen Space",
    price: "₹50,000/month",
    features: [
      "Dedicated kitchen space",
      "Premium equipment access",
      "24/7 kitchen operations",
      "Enhanced marketing support",
      "Advanced order management",
      "Dedicated account manager"
    ],
    recommended: true
  },
  {
    id: "elite",
    name: "Synkris Elite",
    description: "Enterprise Solution",
    price: "Custom Pricing",
    features: [
      "Multiple dedicated kitchens",
      "Enterprise-grade equipment",
      "24/7 priority operations",
      "Full marketing & branding suite",
      "Advanced analytics & AI insights",
      "Dedicated success team"
    ],
    recommended: false
  }
];

// Define user types
const USER_TYPES = [
  {
    id: "individual",
    name: "Individual Food Entrepreneur",
    description: "Starting a new food brand",
    icon: <User className="h-6 w-6" />
  },
  {
    id: "restaurant",
    name: "Existing Restaurant Owner",
    description: "Expanding your business",
    icon: <Building className="h-6 w-6" />
  },
  {
    id: "enterprise",
    name: "Enterprise Cloud Kitchen",
    description: "Large-scale food operations",
    icon: <Briefcase className="h-6 w-6" />
  }
];

// Define business types
const BUSINESS_TYPES = [
  { id: "cloud_kitchen", name: "Cloud Kitchen" },
  { id: "restaurant", name: "Restaurant" },
  { id: "catering", name: "Catering Service" }
];

// Define cities
const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat"
];

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    userType: "",
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessType: "",
    city: "",
    kitchenPlan: "pro",
    documents: {
      kyc: null,
      business: null,
      fssai: null
    },
    termsAccepted: false
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Handle file uploads
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docType]: e.target.files ? e.target.files[0] : null
        }
      }));
      
      toast({
        title: "Document uploaded",
        description: `${docType.toUpperCase()} document uploaded successfully`,
      });
    }
  };

  // Send OTP
  const sendOTP = () => {
    setIsVerifying(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setIsVerifying(false);
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your phone",
      });
    }, 1500);
  };

  // Verify OTP
  const verifyOTP = () => {
    setIsVerifying(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Verified Successfully",
        description: "Your phone number has been verified",
        variant: "default",
      });
      
      // Move to next step after verification
      if (currentStep === 1) {
        setCurrentStep(prev => prev + 1);
      }
    }, 1500);
  };

  // Navigate to next step
  const nextStep = () => {
    // Basic validation
    if (currentStep === 0 && !formData.userType) {
      toast({
        title: "Selection required",
        description: "Please select a user type to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 1) {
      if (!formData.businessName || !formData.ownerName || !formData.email || !formData.phone || !formData.businessType) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      
      // If phone verified, proceed; otherwise show verification UI
      if (!otpSent) {
        sendOTP();
        return;
      }
    }
    
    if (currentStep === 4 && (!formData.documents.kyc || !formData.documents.fssai)) {
      toast({
        title: "Documents required",
        description: "Please upload the required KYC and FSSAI documents",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 5 && !formData.termsAccepted) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept the terms and conditions to proceed",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentStep(prev => prev + 1);
    
    // Scroll to top when changing steps
    window.scrollTo(0, 0);
  };

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
    
    // Scroll to top when changing steps
    window.scrollTo(0, 0);
  };

  // Complete signup process
  const completeSignup = () => {
    // Show success toast
    toast({
      title: "Signup Successful!",
      description: "Welcome to Synkris! Your Cloud Kitchen is Now Ready to Scale!",
    });
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <span className="font-bold text-2xl">
            Syn<span className="text-synkris-green">kris</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="text-sm text-gray-600 hover:text-synkris-green transition-colors"
            onClick={() => navigate("/login")}
          >
            Already have an account? Login
          </button>
        </div>
      </header>
      
      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8 relative">
          {/* Progress line */}
          <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 -translate-y-1/2 z-0"></div>
          
          {/* Progress filled */}
          <div 
            className="absolute h-1 bg-synkris-green left-0 top-1/2 -translate-y-1/2 z-0 transition-all duration-300"
            style={{ width: `${(currentStep / (SIGNUP_STEPS.length - 1)) * 100}%` }}
          ></div>
          
          {/* Steps */}
          {SIGNUP_STEPS.map((step, index) => (
            <div key={index} className="z-10 flex flex-col items-center">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  index <= currentStep 
                    ? "bg-synkris-green text-synkris-black" 
                    : "bg-gray-200 text-gray-400"
                )}
              >
                {index < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span 
                className={cn(
                  "text-xs mt-2 hidden sm:block font-medium",
                  index <= currentStep ? "text-synkris-black" : "text-gray-400"
                )}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 mb-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Step 1: Welcome & User Type Selection */}
          {currentStep === 0 && (
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <h1 className="text-3xl font-bold text-synkris-black">
                  Launch Your Cloud Kitchen with Synkris
                </h1>
                <p className="text-gray-600">
                  India's first end-to-end cloud kitchen operations provider
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Select Your User Type</h2>
                
                <div className="grid gap-4 sm:grid-cols-3">
                  {USER_TYPES.map(type => (
                    <div 
                      key={type.id}
                      className={cn(
                        "border rounded-xl p-5 cursor-pointer transition-all hover:border-synkris-green",
                        formData.userType === type.id 
                          ? "border-synkris-green bg-synkris-green/5" 
                          : "border-gray-200"
                      )}
                      onClick={() => setFormData(prev => ({ ...prev, userType: type.id }))}
                    >
                      <div className="mb-3 text-synkris-green">
                        {type.icon}
                      </div>
                      <h3 className="font-medium">{type.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Step 2: Basic Business Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-synkris-black">Business Information</h1>
                <p className="text-gray-600 mt-1">Tell us about your food business</p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand/Restaurant Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                    placeholder="e.g., Spice Garden"
                    required
                  />
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner's Full Name *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                    placeholder="e.g., Rajesh Sharma"
                    required
                  />
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green bg-white"
                    required
                  >
                    <option value="">Select Business Type</option>
                    {BUSINESS_TYPES.map(type => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                    placeholder="e.g., info@yourbusiness.com"
                    required
                  />
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-l-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                      placeholder="e.g., 9876543210"
                      required
                    />
                    <button
                      type="button"
                      onClick={otpSent ? verifyOTP : sendOTP}
                      disabled={isVerifying || !formData.phone || formData.phone.length < 10}
                      className={cn(
                        "py-3 px-4 rounded-r-lg font-medium text-sm whitespace-nowrap",
                        isVerifying || !formData.phone || formData.phone.length < 10
                          ? "bg-gray-300 text-gray-500"
                          : "bg-synkris-green text-synkris-black hover:brightness-110"
                      )}
                    >
                      {isVerifying 
                        ? "Verifying..." 
                        : otpSent 
                          ? "Verify OTP" 
                          : "Send OTP"}
                    </button>
                  </div>
                </div>
                
                {otpSent && (
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enter OTP *
                    </label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green"
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      OTP sent to +91 {formData.phone}. 
                      <button 
                        type="button" 
                        className="text-synkris-green ml-1 hover:underline"
                        onClick={sendOTP}
                      >
                        Resend
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Step 3: Location & Kitchen Preferences */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-synkris-black">Location & Kitchen Preferences</h1>
                <p className="text-gray-600 mt-1">Choose your preferred city and kitchen plan</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-synkris-green focus:border-synkris-green bg-white"
                    required
                  >
                    <option value="">Select City</option>
                    {CITIES.map(city => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <h2 className="text-lg font-medium mb-4">Select Kitchen Plan</h2>
                  
                  <div className="grid gap-4 sm:grid-cols-3">
                    {KITCHEN_PLANS.map(plan => (
                      <div 
                        key={plan.id}
                        className={cn(
                          "border rounded-xl p-5 cursor-pointer transition-all relative overflow-hidden",
                          formData.kitchenPlan === plan.id 
                            ? "border-synkris-green bg-synkris-green/5" 
                            : "border-gray-200 hover:border-gray-300"
                        )}
                        onClick={() => setFormData(prev => ({ ...prev, kitchenPlan: plan.id }))}
                      >
                        {plan.recommended && (
                          <div className="absolute top-0 right-0 bg-synkris-green text-synkris-black text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-0 rotate-45 origin-bottom-left">
                            Popular
                          </div>
                        )}
                        
                        <h3 className="font-semibold">{plan.name}</h3>
                        <p className="text-sm text-gray-500">{plan.description}</p>
                        <p className="font-bold text-lg mt-2">{plan.price}</p>
                        
                        <ul className="mt-4 space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-synkris-green mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 4: AI-Based Kitchen Matchmaking */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-synkris-black">AI Kitchen Matchmaking</h1>
                <p className="text-gray-600 mt-1">Our AI will find the perfect kitchen space for your business</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center space-y-3 py-8">
                  <div className="w-16 h-16 bg-synkris-green/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <MapPin className="text-synkris-green h-8 w-8" />
                  </div>
                  <h3 className="font-medium">Finding Your Ideal Kitchen</h3>
                  <p className="text-sm text-gray-500 max-w-md">
                    Our AI is analyzing demand patterns, competitor density, and 
                    available infrastructure to find your perfect kitchen match
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4 border-b">
                  <h3 className="font-medium">Recommended Kitchen Locations</h3>
                </div>
                
                <div className="p-4 space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "p-4 border rounded-lg flex items-start gap-4 cursor-pointer transition-all hover:border-synkris-green",
                        i === 0 ? "border-synkris-green bg-synkris-green/5" : "border-gray-200"
                      )}
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <MapPin className="text-gray-400 h-8 w-8" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Synkris Kitchen {i + 1}</h4>
                            <p className="text-sm text-gray-500">
                              {i === 0 
                                ? "Kormangala, Bangalore" 
                                : i === 1 
                                  ? "HSR Layout, Bangalore" 
                                  : "Indiranagar, Bangalore"}
                            </p>
                          </div>
                          
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {i === 0 
                              ? "98% Match" 
                              : i === 1 
                                ? "85% Match" 
                                : "72% Match"}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="text-xs bg-gray-100 py-1 px-2 rounded">
                            <span className="font-medium">Capacity:</span> {i === 0 ? "Large" : "Medium"}
                          </div>
                          <div className="text-xs bg-gray-100 py-1 px-2 rounded">
                            <span className="font-medium">Orders:</span> {100 + (i * 50)}/day
                          </div>
                          <div className="text-xs bg-gray-100 py-1 px-2 rounded">
                            <span className="font-medium">Available:</span> Now
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Step 5: Legal & Compliance */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-synkris-black">Legal & Compliance</h1>
                <p className="text-gray-600 mt-1">Upload required documents for verification</p>
              </div>
              
              <div className="space-y-5">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <h3 className="font-medium">KYC Documents</h3>
                  </div>
                  
                  <div className="p-5">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                      
                      <h4 className="font-medium mb-2">Upload PAN/Aadhaar</h4>
                      <p className="text-sm text-gray-500 mb-4">
                        JPG, PNG or PDF (Max 5MB)
                      </p>
                      
                      <div className="relative">
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, 'kyc')}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        <button
                          type="button"
                          className="py-2 px-4 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110"
                        >
                          Select File
                        </button>
                      </div>
                      
                      {formData.documents.kyc && (
                        <div className="mt-4 text-sm text-green-600 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>
                            {(formData.documents.kyc as File).name} uploaded successfully
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <h3 className="font-medium">FSSAI License</h3>
                  </div>
                  
                  <div className="p-5">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                      
                      <h4 className="font-medium mb-2">Upload FSSAI License</h4>
                      <p className="text-sm text-gray-500 mb-4">
                        JPG, PNG or PDF (Max 5MB)
                      </p>
                      
                      <div className="relative">
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, 'fssai')}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        <button
                          type="button"
                          className="py-2 px-4 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110"
                        >
                          Select File
                        </button>
                      </div>
                      
                      {formData.documents.fssai && (
                        <div className="mt-4 text-sm text-green-600 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>
                            {(formData.documents.fssai as File).name} uploaded successfully
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <h3 className="font-medium">GST Certificate (Optional)</h3>
                  </div>
                  
                  <div className="p-5">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                      
                      <h4 className="font-medium mb-2">Upload GST Certificate</h4>
                      <p className="text-sm text-gray-500 mb-4">
                        JPG, PNG or PDF (Max 5MB)
                      </p>
                      
                      <div className="relative">
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, 'business')}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        <button
                          type="button"
                          className="py-2 px-4 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110"
                        >
                          Select File
                        </button>
                      </div>
                      
                      {formData.documents.business && (
                        <div className="mt-4 text-sm text-green-600 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>
                            {(formData.documents.business as File).name} uploaded successfully
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 6: Payment & Subscription */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-synkris-black">Payment & Subscription</h1>
                <p className="text-gray-600 mt-1">Complete your subscription setup</p>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b">
                  <h3 className="font-medium">Order Summary</h3>
                </div>
                
                <div className="p-5 space-y-4">
                  <div className="flex justify-between pb-3 border-b">
                    <span className="font-medium">
                      {KITCHEN_PLANS.find(p => p.id === formData.kitchenPlan)?.name}
                    </span>
                    <span className="font-medium">
                      {KITCHEN_PLANS.find(p => p.id === formData.kitchenPlan)?.price}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b">
                    <span>Setup Fee</span>
                    <span>
                      {formData.kitchenPlan === 'elite' 
                        ? 'Custom' 
                        : formData.kitchenPlan === 'pro' 
                          ? '₹25,000' 
                          : '₹10,000'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-3 border-b">
                    <span>GST (18%)</span>
                    <span>
                      {formData.kitchenPlan === 'elite' 
                        ? 'Custom' 
                        : formData.kitchenPlan === 'pro' 
                          ? '₹13,500' 
                          : '₹5,400'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pt-2 font-bold">
                    <span>Total Amount</span>
                    <span>
                      {formData.kitchenPlan === 'elite' 
                        ? 'Custom Pricing' 
                        : formData.kitchenPlan === 'pro' 
                          ? '₹88,500' 
                          : '₹35,400'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b">
                  <h3 className="font-medium">Payment Method</h3>
                </div>
                
                <div className="p-5 space-y-5">
                  <div className="flex flex-col space-y-4">
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer">
                      <input type="radio" name="paymentMethod" defaultChecked className="h-4 w-4 text-synkris-green focus:ring-synkris-green" />
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                        <span>Credit / Debit Card</span>
                      </div>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer">
                      <input type="radio" name="paymentMethod" className="h-4 w-4 text-synkris-green focus:ring-synkris-green" />
                      <span>UPI</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer">
                      <input type="radio" name="paymentMethod" className="h-4 w-4 text-synkris-green focus:ring-synkris-green" />
                      <span>Net Banking</span>
                    </label>
                    
                    {formData.kitchenPlan === 'pro' || formData.kitchenPlan === 'elite' ? (
                      <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer">
                        <input type="radio" name="paymentMethod" className="h-4 w-4 text-synkris-green focus:ring-synkris-green" />
                        <span>EMI Options</span>
                      </label>
                    ) : null}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 py-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="h-5 w-5 mt-0.5 text-synkris-green focus:ring-synkris-green rounded"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the <a href="#" className="text-synkris-green hover:underline">Terms and Conditions</a> and <a href="#" className="text-synkris-green hover:underline">Privacy Policy</a> of Synkris.
                </label>
              </div>
            </div>
          )}
          
          {/* Step 7: Completion */}
          {currentStep === 6 && (
            <div className="space-y-8 text-center py-6">
              <div className="w-20 h-20 bg-synkris-green/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-synkris-green h-10 w-10" />
              </div>
              
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-synkris-black">
                  Welcome to Synkris!
                </h1>
                <p className="text-gray-600 text-xl">
                  Your Cloud Kitchen is Now Ready to Scale!
                </p>
              </div>
              
              <div className="max-w-md mx-auto space-y-6 pt-4">
                <p className="text-gray-500">
                  We've scheduled an onboarding call with our team to help you get started. Check your email for the details.
                </p>
                
                <button
                  type="button"
                  onClick={completeSignup}
                  className="w-full py-3 px-6 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110 flex items-center justify-center space-x-2"
                >
                  <span>Go to Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
          
          {/* Footer with navigation buttons */}
          {currentStep < 6 && (
            <div className="flex justify-between mt-10 pt-6 border-t">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              <button
                type="button"
                onClick={nextStep}
                className="py-2 px-6 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110 flex items-center"
              >
                {currentStep === 5 ? (
                  <>
                    <span>Complete Payment</span>
                    <Shield className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </main>
      
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="bg-synkris-green text-synkris-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
          onClick={() => toast({
            title: "Live Chat Support",
            description: "Our support team is online and ready to help you with any questions!",
          })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Signup;
