
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, AlertCircle, Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import emailjs from "@emailjs/browser";

const Demo = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
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
      // 1. Store the demo request in Supabase
      const { data: demoData, error: demoError } = await supabase
        .from('demo_requests')
        .insert([
          { 
            full_name: formData.fullName,
            business_name: formData.businessName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            message: formData.message,
            status: 'new'
          }
        ]);
      
      if (demoError) {
        console.error("Error saving demo request:", demoError);
        // Continue with email even if database save fails
      }
      
      // 2. Send email notification using EmailJS
      if (formRef.current) {
        await emailjs.sendForm(
          'service_synkris',
          'template_synkris',
          formRef.current,
          '0-cRGh0QYH2tdp9z1'
        );
      }
      
      // Log success info
      console.log("Demo request submitted to info.synkris@gmail.com:", formData);
      
      // Show success message
      toast({
        title: "Demo Request Submitted!",
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
      
      // Redirect to thank you page after short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden fields for EmailJS */}
              <input type="hidden" name="to_email" value="info.synkris@gmail.com" />
              
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
              
              <div className="py-2 px-4 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3">
                <Mail className="w-5 h-5 text-synkris-green mt-1" />
                <div className="text-sm">
                  <p>Your request will be sent directly to:</p>
                  <p className="font-medium">info.synkris@gmail.com</p>
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-t-transparent border-synkris-black rounded-full animate-spin mr-2"></div>
                    <span>Submitting...</span>
                  </div>
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
