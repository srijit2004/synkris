
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, AlertCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Demo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This would typically be a backend API call to send the email
      // For now, we'll simulate a successful submission
      // In a real implementation, you'd use a service like EmailJS, Zapier, or a custom backend
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Email would be sent to info.synkris@gmail.com here
      console.log("Form submitted:", formData);
      
      // Show success message
      toast({
        title: "Request Submitted!",
        description: "We'll contact you shortly to schedule your demo.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-synkris-black">Request a Demo</h1>
            <p className="text-gray-600 mt-2">
              See how Synkris can transform your cloud kitchen operations
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your cloud kitchen or restaurant name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred City <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Where is your business located?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business and requirements..."
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    <span>Request Demo</span>
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm text-gray-600">
                By submitting this form, you agree to our{' '}
                <Link to="/privacy" className="text-synkris-green hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
