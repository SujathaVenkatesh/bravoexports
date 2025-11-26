import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu when navigating
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-xl">B</span>
                </div>
              </div>
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Bravo Exports
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              { path: '/about', label: 'About Us' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                  ${
                    isActive(item.path)
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>

                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-emerald-50 rounded-md"></div>
                )}

                {!isActive(item.path) && (
                  <div className="absolute inset-0 bg-emerald-50 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE BUTTON (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              +91 98765 43210
            </a>

            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-md transition"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              { path: '/about', label: 'About Us' },
              { path: '/contact', label: 'Contact' },
            ].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2.5 rounded-md text-base transition-all duration-300
                  ${
                    isActive(item.path)
                      ? 'bg-emerald-50 text-emerald-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInRight 0.3s ease-out ${index * 0.08}s both`
                    : 'none',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE PHONE NUMBER */}
            <a
              href="tel:+919876543210"
              className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              +91 98765 43210
            </a>

            {/* MOBILE QUOTE BUTTON */}
            <Link
              to="/contact"
              className="mx-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-center shadow-md hover:shadow-lg transition"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
