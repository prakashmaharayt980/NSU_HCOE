import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define the list of navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Education", path: "/education" },
    // { name: "Contact", path: "/contact" },
    // { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center">
        {/* Logo */}
       

        {/* Bar Icon for Mobile */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg hover:text-green-500 transition duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center justify-center text-center">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-3xl text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Navbar Links */}
          <div className="space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-white hover:text-green-500 transition duration-300 ease-in-out"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
