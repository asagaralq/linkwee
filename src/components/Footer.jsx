import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 relative z-40">
      <div className="container mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-white">Linkwee</h2>
          <p className="text-gray-400 mt-2">
            Simplifying URL shortening for efficient sharing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="About" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        &copy; 2024 Linkwee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
