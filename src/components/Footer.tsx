
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Twitter, Linkedin, Instagram, Github, PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-synkris-black text-white pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-white font-bold text-2xl">
                Syn<span className="text-synkris-green">kris</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              India's first end-to-end cloud kitchen operations provider, 
              empowering food brands to scale effortlessly with AI-driven insights.
            </p>
            
            <div className="flex flex-col space-y-3 mb-6">
              <a href="tel:+919876543210" className="text-gray-400 hover:text-synkris-green transition-colors flex items-center gap-2">
                <PhoneCall size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:contact@synkris.com" className="text-gray-400 hover:text-synkris-green transition-colors flex items-center gap-2">
                <Mail size={16} />
                <span>contact@synkris.com</span>
              </a>
              <div className="text-gray-400 flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Tech Park, Bengaluru, Karnataka 560001</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-synkris-green">Platform</h3>
            <ul className="space-y-3">
              <FooterLink href="/solutions/forecasting">AI Forecasting</FooterLink>
              <FooterLink href="/solutions/order-management">Order Management</FooterLink>
              <FooterLink href="/solutions/insights">Profitability Insights</FooterLink>
              <FooterLink href="/solutions/delivery">Delivery Integration</FooterLink>
              <FooterLink href="/solutions/procurement">Procurement</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-synkris-green">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/demo">Request Demo</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-synkris-green">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href="/resources/case-studies">Case Studies</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-16 pt-10 mb-8">
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with the latest in cloud kitchen technology and trends</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white flex-1 focus:outline-none focus:border-synkris-green"
              />
              <button 
                type="submit"
                className="bg-synkris-green text-black px-4 py-2 rounded-lg font-medium hover:brightness-110 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Synkris Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-400 hover:text-synkris-green transition-colors inline-flex items-center"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gray-800 p-2 rounded-full hover:bg-synkris-green hover:text-synkris-black transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
