
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-10',
        scrolled 
          ? 'py-2 bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.5)] border-b border-border/30' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-50" onClick={() => setIsOpen(false)}>
          <span className={cn(
            "font-bold py-0 my-0 mx-0 px-0 text-2xl sm:text-3xl md:text-4xl transition-all duration-300",
            scrolled ? "text-foreground" : "text-foreground"
          )}>
            Syn<span className="text-primary">kris</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLinks desktop={true} handleNavLinkClick={handleNavLinkClick} />
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link to="/contact" className="text-foreground/70 font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5">
            Contact
          </Link>
          <Link to="/login" className="text-foreground/70 font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5">
            Login
          </Link>
          <Link to="/demo" className="cta-button text-sm flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Request Demo
          </Link>
        </div>

        <button 
          className="md:hidden text-foreground z-50 p-2 rounded-lg hover:bg-primary/5 transition-colors" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 pt-20 pb-8 px-6 md:hidden overflow-y-auto transition-all duration-500 ease-out', 
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-2 pt-4">
          <NavLinks 
            desktop={false} 
            onClick={() => setIsOpen(false)} 
            handleNavLinkClick={handleNavLinkClick} 
          />
          <div className="flex flex-col space-y-3 pt-6 border-t border-border/50 mt-4">
            <Link 
              to="/contact" 
              className="text-foreground text-lg font-medium hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-primary/5" 
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/login" 
              className="text-foreground text-lg font-medium hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-primary/5" 
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/demo" 
              className="cta-button text-center py-4 mt-2 text-lg flex items-center justify-center gap-2" 
              onClick={() => setIsOpen(false)}
            >
              <Sparkles className="h-5 w-5" />
              Request Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  desktop: boolean;
  onClick?: () => void;
  handleNavLinkClick: (sectionId: string) => void;
}

const NavLinks = ({ desktop, onClick, handleNavLinkClick }: NavLinksProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleLinkClick = () => {
    if (onClick) onClick();
    setActiveDropdown(null);
  };

  const dropdowns = {
    solutions: [
      { label: 'All Solutions', href: '/solutions' },
      { label: 'AI Demand Forecasting', href: '/solutions/forecasting' },
      { label: 'Order Management', href: '/solutions/order-management' },
      { label: 'Profitability Insights', href: '/solutions/insights' },
      { label: 'Delivery Integration', href: '/solutions/delivery' },
      { label: 'Procurement', href: '/solutions/procurement' }
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' }
    ]
  };

  const NavDropdown = ({ title, items, id }: { title: string; items: { label: string; href: string; }[]; id: string; }) => {
    const isActive = activeDropdown === id;
    const isCurrentPath = items.some(item => location.pathname.startsWith(item.href));
    
    return (
      <div className={desktop ? 'relative' : ''}>
        <button 
          onClick={() => toggleDropdown(id)} 
          className={cn(
            "flex items-center space-x-1 font-medium transition-all duration-200", 
            desktop 
              ? "hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5 text-foreground/70" 
              : "w-full justify-between text-lg py-3 px-4 rounded-xl hover:bg-primary/5 text-foreground", 
            (isActive || isCurrentPath) && "text-primary"
          )}
        >
          <span>{title}</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isActive && "rotate-180")} />
        </button>
        
        <div 
          className={cn(
            desktop ? 
              "absolute left-0 mt-2 w-64 origin-top-left bg-background/95 backdrop-blur-xl rounded-xl shadow-xl ring-1 ring-border/50 z-50 border border-border/30 transition-all duration-200" : 
              "mt-1 space-y-1 pl-4", 
            desktop && !isActive && "hidden",
            desktop && isActive && "animate-fade-in"
          )}
        >
          {!desktop || isActive ? (
            <div className={desktop ? "p-2" : ""}>
              {items.map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.href} 
                  className={cn(
                    "block transition-all duration-200", 
                    desktop 
                      ? "px-4 py-2.5 text-sm rounded-lg hover:bg-primary/5 text-foreground/70 hover:text-primary" 
                      : "py-3 px-4 text-base hover:text-primary rounded-lg hover:bg-primary/5",
                    location.pathname === item.href && "text-primary bg-primary/5"
                  )} 
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <NavDropdown title="Solutions" items={dropdowns.solutions} id="solutions" />
      <Link
        to="/#services"
        className={cn(
          "font-medium hover:text-primary transition-all duration-200 text-left",
          desktop 
            ? "px-3 py-2 rounded-lg hover:bg-primary/5 text-foreground/70" 
            : "text-lg py-3 px-4 rounded-xl hover:bg-primary/5 text-foreground"
        )}
        onClick={() => {
          handleNavLinkClick('services');
          handleLinkClick();
        }}
      >
        Services
      </Link>
      <Link
        to="/#pricing"
        className={cn(
          "font-medium hover:text-primary transition-all duration-200 text-left",
          desktop 
            ? "px-3 py-2 rounded-lg hover:bg-primary/5 text-foreground/70" 
            : "text-lg py-3 px-4 rounded-xl hover:bg-primary/5 text-foreground"
        )}
        onClick={() => {
          handleNavLinkClick('pricing');
          handleLinkClick();
        }}
      >
        Pricing
      </Link>
      <NavDropdown title="Resources" items={dropdowns.resources} id="resources" />
    </>
  );
};

export default Navbar;
