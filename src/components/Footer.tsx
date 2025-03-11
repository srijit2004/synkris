
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

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
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <FooterLink href="/solutions/forecasting">AI Forecasting</FooterLink>
              <FooterLink href="/solutions/order-management">Order Management</FooterLink>
              <FooterLink href="/solutions/insights">Profitability Insights</FooterLink>
              <FooterLink href="/solutions/delivery">Delivery Integration</FooterLink>
              <FooterLink href="/solutions/procurement">Procurement</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/investors">Investors</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href="/resources/case-studies">Case Studies</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
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
