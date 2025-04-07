import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MessageCircle, Phone, Clock, HelpCircle, FileText, ExternalLink, ArrowRight } from 'lucide-react';

const Support = () => {
  // Common questions for the FAQ section
  const faqs = [
    {
      question: "How do I integrate my delivery platforms with Synkris?",
      answer: "Synkris offers built-in integrations with major delivery platforms including Swiggy, Zomato, and others. Navigate to Settings > Integrations in your dashboard to connect your accounts."
    },
    {
      question: "Can I customize the AI forecasting parameters?",
      answer: "Yes, you can adjust various parameters such as seasonality factors, special events, and historical data weightings in the Forecasting section of your dashboard."
    },
    {
      question: "How accurate is the demand forecasting?",
      answer: "Our AI forecasting typically achieves 85-95% accuracy depending on your data quality and business predictability. The system continuously improves as it gathers more data from your operations."
    },
    {
      question: "How can I add multiple kitchen locations?",
      answer: "Enterprise and Growth plan subscribers can add multiple locations from the Locations section in the dashboard. Each location can have its own menu, inventory, and forecasting parameters."
    },
    {
      question: "What reports are available for tracking performance?",
      answer: "Synkris offers comprehensive reporting including sales performance, ingredient usage, wastage tracking, profit margins, and forecast accuracy. Custom reports can be created in the Reports section."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-synkris-green">Support</span> Center
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We're here to help you succeed with your cloud kitchen operations
          </p>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
              <div className="bg-synkris-green/10 p-4 rounded-full inline-flex mx-auto mb-4">
                <Mail className="h-8 w-8 text-synkris-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:support@synkris.com" 
                className="text-synkris-green font-medium hover:underline"
              >
                support@synkris.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
              <div className="bg-synkris-green/10 p-4 rounded-full inline-flex mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-synkris-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chat with our support team in real-time during business hours.
              </p>
              <button className="cta-button-outline w-full">
                Start Chat
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
              <div className="bg-synkris-green/10 p-4 rounded-full inline-flex mx-auto mb-4">
                <Phone className="h-8 w-8 text-synkris-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Call us directly for urgent issues or complex questions.
              </p>
              <a 
                href="tel:+918043210000" 
                className="text-synkris-green font-medium hover:underline"
              >
                +91 80 4321 0000
              </a>
              <div className="flex items-center justify-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>9 AM - 6 PM IST (Mon-Fri)</span>
              </div>
            </div>
          </div>

          {/* Submit a ticket form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Submit a Support Ticket</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green appearance-none bg-white dark:bg-gray-800"
                >
                  <option value="">Select a category</option>
                  <option value="account">Account Issues</option>
                  <option value="billing">Billing & Subscription</option>
                  <option value="forecasting">AI Forecasting</option>
                  <option value="orders">Order Management</option>
                  <option value="integration">Integration Problems</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green"
                  placeholder="Please describe your issue in detail"
                ></textarea>
              </div>

              <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Attachment (optional)
                </label>
                <input
                  type="file"
                  id="attachment"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synkris-green"
                />
                <p className="text-sm text-gray-500 mt-1">Max file size: 10MB</p>
              </div>

              <button
                type="submit"
                className="cta-button w-full md:w-auto px-8"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          {/* FAQ section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 flex items-start">
                    <HelpCircle className="h-5 w-5 text-synkris-green mr-2 flex-shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/docs" className="text-synkris-green font-medium hover:underline flex items-center justify-center">
                View all FAQs in our knowledge base
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Additional resources */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/docs" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FileText className="h-10 w-10 text-synkris-green mb-3" />
                <h3 className="font-semibold mb-1">Documentation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Comprehensive guides and tutorials</p>
              </Link>
              <Link to="/resources/case-studies" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FileText className="h-10 w-10 text-synkris-green mb-3" />
                <h3 className="font-semibold mb-1">Case Studies</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Learn from success stories</p>
              </Link>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="h-10 w-10 text-synkris-green mb-3" />
                <h3 className="font-semibold mb-1">Community Forum</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Connect with other cloud kitchen operators</p>
                <ExternalLink className="h-3 w-3 mt-1 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
