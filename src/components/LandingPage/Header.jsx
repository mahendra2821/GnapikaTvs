import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Scrolling Header */}
      <div className="bg-blue-900 text-white text-sm py-2 overflow-hidden ">
        <div className="relative flex w-full">
          <div className="animate-marquee flex space-x-10 min-w-full ml-[15vw]">
            <span>📍 25-9-39, SANTI NAGAR, Eluru, West Godavari-534001, Andhra Pradesh</span>
            <span>📞 +91-7995705959</span>
            <span>📞 +91-7095708383</span>
            <span>🕘 9 AM TO 9 PM</span>
          </div>
        </div>
      </div>





      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-900 flex items-center space-x-2">
        <Link to="/"> <img src="/assets/Gnapika_logo.jpg" alt="Logo" className="h-12" /></Link>  
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold text-blue-900">
          <li><Link to="/" className="hover:text-blue-700 transition">HOME</Link></li>
          <li><Link to="/products" className="hover:text-blue-700 transition">OUR PRODUCTS</Link></li>
          <li><Link to="/service" className="hover:text-blue-700 transition">SERVICE</Link></li>
          <li><Link to="/blog" className="hover:text-blue-700 transition">BLOG</Link></li>
          <li><Link to="/aboutus" className="hover:text-blue-700 transition">About</Link></li>
        </ul>

        {/* Contact Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-900 transition">
            CONTACT US
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-blue-900 text-2xl">
          <FaBars />
        </button>
      </nav>

      {/* Right-Side Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 left-4 text-2xl text-blue-900"
        >
          <FaTimes />
        </button>

        {/* Mobile Menu */}
        <ul className="flex flex-col items-start space-y-6 pt-16 pl-6 text-lg font-semibold text-blue-900">
          <li><Link to="/" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/products" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>OUR PRODUCTS</Link></li>
          <li><Link to="/service" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>SERVICE</Link></li>
          <li><Link to="/blog" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
          <li><Link to="/aboutus" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>About</Link></li>

        </ul>

        <Link to="/contact">
          <button className="w-full bg-blue-700 text-white py-3 mt-6 text-lg font-semibold hover:bg-blue-900 transition">
            CONTACT US
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
