
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Configure EmailJS with the service and template IDs
      const templateParams = {
        from_name: formData.fullName,
        reply_to: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: "info.synkris@gmail.com"
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_synkris", // Use your EmailJS service ID
        "template_synkris", // Use your EmailJS template ID
        templateParams,
        "your_public_key" // Your EmailJS public key
      );

      // Console log for debugging
      console.log("Contact form submitted:", formData);

      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly."
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later or email us directly at info.synkris@gmail.com",
        variant: "destructive"
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
      <main className="flex-grow px-4 py-12">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 bg-gray-50 p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our platform? Want to schedule a demo? 
              Reach out to us using the form or contact us directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-synkris-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-gray-600 break-words">info.synkris@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-synkris-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-gray-600">+91 8509502285</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-synkris-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Tech Park, Cyber City<br />
                    Gurugram, Haryana 122001
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your contact number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Please describe your inquiry..." rows={5} required />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full py-3 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center">
                  {isSubmitting ? <span>Sending...</span> : <>
                      <Send className="h-4 w-4 mr-2" />
                      <span>Send Message</span>
                    </>}
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
        </div>
      </main>
    </div>
  );
};

export default Contact;
