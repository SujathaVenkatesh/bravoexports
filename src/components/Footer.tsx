import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    "LIMESTONE SLABS & TILES",
    "NATURAL PEBBLE STONES",
    "WALL CLADDING STONES",
    "PEBBLE STONES",
    "MARBLE MOSAIC CHIPS",
    "GRANITE SLABS STONES",
    "COBBLE STONES",
    "GRANITE STONES",
    "SLATE STONE",
    "LANDSCAPING STONES",
    "DECORATIVE WALL PEBBLES STONE",
    "MONUMENT AND TOMBSTONE",
    "FLOORING TILES",
    "PAVERS AND KERB STONES",
    "GRANITE STATUE",
    "MARBLE STONES",
  ];

  // Split into 2 large columns
  const mid = Math.ceil(products.length / 2);
  const col1 = products.slice(0, mid);
  const col2 = products.slice(mid);

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-10">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* ---------- COMPANY ----------- */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-xl">B</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-white whitespace-nowrap">
                Bravo Exports
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Your trusted partner for premium quality exports worldwide.
            </p>

            <div className="flex space-x-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ---------- QUICK LINKS ----------- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Company Profile
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Profile</Link>
              </li>
              <li>
                <Link to="/products">Our Products</Link>
              </li>
              <li>
                <a href="#">Corporate Video</a>
              </li>
              <li>
                <a href="#">Corporate Brochure</a>
              </li>
              <li>
                <a href="#">Corporate Presentation</a>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* ---------- PRODUCTS ----------- */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">
              Products & Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
              {/* COLUMN 1 */}
              <ul className="space-y-2 text-sm">
                {col1.map((item, i) => (
                  <li key={i} className="break-normal">
                    {item}
                  </li>
                ))}
              </ul>

              {/* COLUMN 2 */}
              <ul className="space-y-2 text-sm">
                {col2.map((item, i) => (
                  <li key={i} className="break-normal">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- FOOTER BOTTOM ----------- */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bravo Exports. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end space-x-6 text-sm">
            <a href="#" className="hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
