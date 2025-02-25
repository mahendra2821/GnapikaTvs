import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Company Info */}
        <div>
          <h2 className="text-2xl font-bold">GNAPIKA TVS</h2>
          <p className="mt-2 text-gray-300">We are committed to providing the best service and customer experience for TVS vehicles.</p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-gray-100">Home</a></li>
            <li><a href="#" className="hover:text-gray-100">About Us</a></li>
            <li><a href="#" className="hover:text-gray-100">Our Products</a></li>
            <li><a href="#" className="hover:text-gray-100">Contact Us</a></li>
          </ul>
        </div>

        {/* Right - Social Media & Locations */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex gap-4">
            <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-gray-400">
              <FaWhatsapp />
            </a>
          </div>

          <h3 className="mt-4 text-lg font-semibold">We Are Available In</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>📍 25-9-39, SANTI NAGAR, Eluru, Eluru, West Godavari-534001, Andhra Pradesh </li>
            <li>📍 Old Bus Stand</li>
            <li>📍 Kakinadagudem</li>
            <li>📍 Tadepalligudem</li>
            <li>📍Dharmajigudem </li>
          </ul>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Gnapika TVS | <a href="#" className="hover:text-gray-200">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
