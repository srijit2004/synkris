
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-synkris-black font-bold text-2xl">
            Syn<span className="text-synkris-green">kris</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks desktop={true} />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className="text-synkris-black font-medium hover:text-synkris-green transition-colors"
          >
            Login
          </Link>
          <Link to="/demo" className="cta-button">
            Request Demo
          </Link>
        </div>

        <button 
          className="md:hidden text-synkris-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6">
          <NavLinks desktop={false} onClick={() => setIsOpen(false)} />
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
            <Link 
              to="/login" 
              className="text-synkris-black font-medium hover:text-synkris-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/demo" 
              className="cta-button text-center"
              onClick={() => setIsOpen(false)}
            >
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
}

const NavLinks = ({ desktop, onClick }: NavLinksProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleLinkClick = () => {
    if (onClick) onClick();
    setActiveDropdown(null);
  };

  const dropdowns = {
    solutions: [
      { label: 'AI Demand Forecasting', href: '/solutions/forecasting' },
      { label: 'Order Management', href: '/solutions/order-management' },
      { label: 'Profitability Insights', href: '/solutions/insights' },
      { label: 'Delivery Integration', href: '/solutions/delivery' },
      { label: 'Procurement', href: '/solutions/procurement' },
    ],
    resources: [
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
    ],
  };

  const NavDropdown = ({ 
    title, 
    items, 
    id 
  }: { 
    title: string; 
    items: { label: string; href: string }[]; 
    id: string;
  }) => {
    const isActive = activeDropdown === id;

    return (
      <div className={desktop ? 'relative' : ''}>
        <button
          onClick={() => toggleDropdown(id)}
          className={cn(
            "flex items-center space-x-1 text-synkris-black font-medium transition-colors",
            desktop ? "hover:text-synkris-green" : "w-full justify-between",
            isActive && "text-synkris-green"
          )}
        >
          <span>{title}</span>
          <ChevronDown 
            className={cn(
              "h-4 w-4 transition-transform", 
              isActive && "rotate-180"
            )} 
          />
        </button>
        
        <div
          className={cn(
            desktop 
              ? "absolute left-0 mt-2 w-64 origin-top-left bg-white rounded-xl shadow-lg ring-1 ring-black/5" 
              : "mt-2 space-y-1 pl-4",
            desktop && !isActive && "hidden"
          )}
        >
          {!desktop || isActive ? (
            <div className={desktop ? "p-2" : ""}>
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className={cn(
                    "block transition-colors",
                    desktop 
                      ? "px-4 py-2 text-sm rounded-lg hover:bg-gray-50" 
                      : "py-2 hover:text-synkris-green"
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
      <NavDropdown 
        title="Solutions" 
        items={dropdowns.solutions} 
        id="solutions" 
      />
      <Link 
        to="/pricing" 
        className="text-synkris-black font-medium hover:text-synkris-green transition-colors"
        onClick={handleLinkClick}
      >
        Pricing
      </Link>
      <NavDropdown 
        title="Resources" 
        items={dropdowns.resources} 
        id="resources" 
      />
      <Link 
        to="/investors" 
        className="text-synkris-black font-medium hover:text-synkris-green transition-colors"
        onClick={handleLinkClick}
      >
        Investors
      </Link>
    </>
  );
};

export default Navbar;
