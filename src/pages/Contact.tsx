import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    setFormData(prev => ({ ...prev, [name]: value }));
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
      const response = await emailjs.send(
        "service_synkris", // Use your EmailJS service ID
        "template_synkris", // Use your EmailJS template ID
        templateParams, 
        "0-cRGh0QYH2tdp9z1" // Your provided EmailJS public key
      );

      console.log("Email sent successfully:", response);

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

  return <div className="min-h-screen bg-white dark:bg-synkris-black dark:text-white flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-synkris-green">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our platform? Looking to partner with us? 
              Our team is ready to assist you with any inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have questions about our platform? Want to schedule a demo? 
                Reach out to us using the form or contact us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-synkris-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 break-words">info.synkris@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-synkris-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">+91 9564034845</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-synkris-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Tech Park, Cyber City<br />
                      Gurugram, Haryana 122001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-3">Connect With Us</h3>
                <div className="flex space-x-3">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-synkris-green hover:text-synkris-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-synkris-green hover:text-synkris-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-synkris-green hover:text-synkris-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your name" className="w-full" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your contact number" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" className="w-full" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Please describe your inquiry..." rows={5} className="w-full" required />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full py-3 bg-synkris-green text-synkris-black font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center">
                    {isSubmitting ? <span>Sending...</span> : <>
                        <Send className="h-4 w-4 mr-2" />
                        <span>Send Message</span>
                      </>}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    By submitting this form, you agree to our{' '}
                    <Link to="/privacy" className="text-synkris-green hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">How quickly can I start with Synkris?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Most brands are operational within 2-4 weeks of signing up, depending on menu complexity 
                  and customization requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">What cities do you currently operate in?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We currently have cloud kitchens in Delhi NCR, Mumbai, Bangalore, Hyderabad, 
                  Chennai, and Pune, with more cities coming soon.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Do I need to provide my own staff?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No, we provide fully trained kitchen staff. You only need to share your recipes 
                  and quality standards with us.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">How is the subscription fee calculated?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our fees are typically 15-20% of your monthly sales, varying based on location, 
                  cuisine type, and operational complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default Contact;
