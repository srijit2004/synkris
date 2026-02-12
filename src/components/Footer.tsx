
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Github, PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-background font-bold text-3xl">
                Syn<span className="text-primary">kris</span>
              </h2>
            </Link>
            <p className="text-background/50 mb-6 max-w-md leading-relaxed">
              India's first end-to-end cloud kitchen operations provider, 
              empowering food brands to scale effortlessly with AI-driven insights.
            </p>
            
            <div className="flex flex-col space-y-3 mb-8">
              <a href="tel:+919876543210" className="text-background/40 hover:text-primary transition-colors flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <PhoneCall size={14} />
                </div>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:contact@synkris.com" className="text-background/40 hover:text-primary transition-colors flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={14} />
                </div>
                <span>contact@synkris.com</span>
              </a>
              <div className="text-background/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span>123 Tech Park, Bengaluru, Karnataka 560001</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <SocialLink href="https://twitter.com" icon={<Twitter size={16} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={16} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={16} />} />
              <SocialLink href="https://github.com" icon={<Github size={16} />} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-primary tracking-wider uppercase">Platform</h3>
            <ul className="space-y-3">
              <FooterLink href="/solutions/forecasting">AI Forecasting</FooterLink>
              <FooterLink href="/solutions/order-management">Order Management</FooterLink>
              <FooterLink href="/solutions/insights">Profitability Insights</FooterLink>
              <FooterLink href="/solutions/delivery">Delivery Integration</FooterLink>
              <FooterLink href="/solutions/procurement">Procurement</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-primary tracking-wider uppercase">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/demo">Request Demo</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-primary tracking-wider uppercase">Resources</h3>
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
        <div className="border-t border-background/10 mt-16 pt-10 mb-8">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-background/40 text-sm mb-6">Get the latest in cloud kitchen technology and trends</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/5 border border-background/10 rounded-full px-5 py-3 text-background flex-1 focus:outline-none focus:border-primary placeholder:text-background/30 text-sm"
              />
              <button 
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:brightness-110 transition-all flex items-center gap-2 text-sm"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/30 text-sm">
            © {currentYear} Synkris Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-background/30 text-sm hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-background/30 text-sm hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/sitemap" className="text-background/30 text-sm hover:text-primary transition-colors">
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
      className="text-background/40 hover:text-primary transition-colors text-sm inline-flex items-center group"
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
    className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-background/40"
  >
    {icon}
  </a>
);

export default Footer;
