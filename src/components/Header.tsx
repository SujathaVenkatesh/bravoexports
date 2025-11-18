import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-xl">B</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                Bravo Exports
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              { path: '/about', label: 'About Us' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-emerald-600 font-semibold'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-emerald-50 rounded-lg animate-slideIn"></div>
                )}
                {!isActive(item.path) && (
                  <div className="absolute inset-0 bg-emerald-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium transform hover:scale-105 transition-transform"
            >
              +91 98765 43210
            </a>
            <Link
              to="/contact"
              className="relative px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
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
                className={`px-4 py-3 rounded-lg transition-all duration-300 transform ${
                  isActive(item.path)
                    ? 'bg-emerald-50 text-emerald-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInRight 0.3s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-300"
            >
              +91 98765 43210
            </a>
            <Link
              to="/contact"
              className="mx-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-shadow duration-300"
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
