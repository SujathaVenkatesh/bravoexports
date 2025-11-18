import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 px-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-xl">B</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-white">Bravo Exports</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium quality exports worldwide. Excellence in every shipment.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <li key={link.path} style={{ animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s both` }}>
                  <Link
                    to={link.path}
                    className="hover:text-emerald-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-white relative inline-block">
              Our Products
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {[
                'Agricultural Products',
                'Textiles & Fabrics',
                'Handicrafts',
                'Spices & Herbs',
                'Industrial Goods',
              ].map((product, index) => (
                <li key={index} style={{ animation: `fadeInLeft 0.5s ease-out ${index * 0.1 + 0.2}s both` }}>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-white relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: '123 Export Street, Business District, Mumbai, India' },
                { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: Mail, text: 'info@bravosexports.co.in', href: 'mailto:info@bravosexports.co.in' },
              ].map((contact, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 group"
                  style={{ animation: `fadeInRight 0.5s ease-out ${index * 0.1 + 0.3}s both` }}
                >
                  <contact.icon className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="hover:text-emerald-400 transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="group-hover:text-emerald-400 transition-colors duration-300">
                      {contact.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm animate-fadeIn">
              &copy; {currentYear} Bravo Exports. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
