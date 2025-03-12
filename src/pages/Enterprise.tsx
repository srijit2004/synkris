
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Building, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Enterprise = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    email: "",
    phone: "",
    monthlyOrders: "",
    location: "",
    requirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.businessName || !formData.email || !formData.phone || !formData.industry) {
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
      console.log("Enterprise form submitted:", formData);
      
      // Show success message
      toast({
        title: "Enterprise Inquiry Submitted!",
        description: "Our enterprise team will contact you soon to discuss your requirements.",
      });
      
      // Reset form
      setFormData({
        businessName: "",
        industry: "",
        email: "",
        phone: "",
        monthlyOrders: "",
        location: "",
        requirements: "",
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
            <h1 className="text-3xl font-bold text-synkris-black">Enterprise Solutions</h1>
            <p className="text-gray-600 mt-2">
              Custom solutions for large-scale food operations
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Building className="h-4 w-4" />
                  </span>
                  <Input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="rounded-l-none"
                    placeholder="Your business or company name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry Type <span className="text-red-500">*</span>
                </label>
                <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="cloud_kitchen">Cloud Kitchen</SelectItem>
                    <SelectItem value="catering">Catering</SelectItem>
                    <SelectItem value="franchise">Franchise</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
                    placeholder="you@company.com"
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
                  Estimated Monthly Orders <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  <Select onValueChange={(value) => handleSelectChange("monthlyOrders", value)}>
                    <SelectTrigger className="rounded-l-none">
                      <SelectValue placeholder="Select order volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                      <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                      <SelectItem value="10000-20000">10,000 - 20,000</SelectItem>
                      <SelectItem value="20000+">20,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Kitchen Location <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City or specific areas"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Requirements
                </label>
                <Textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your specific requirements, business goals, or challenges..."
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
                    <span>Submit Enterprise Inquiry</span>
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm text-gray-600">
                Your information is secure and will only be used to contact you about enterprise solutions.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Enterprise;
