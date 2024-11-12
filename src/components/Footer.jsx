import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-white py-3" style={{ backgroundColor: "#2A0046" }}> {/* Darker purple background */}
      <div className="container mx-auto px-6">
        {/* Top Section with Social Media and Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h6 className="text-lg font-semibold mb-2">Quick Links</h6>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white">
              <li>
                <a href="/about" className="hover:text-gray-300 transition" style={{ textDecoration: 'none' }}>About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300 transition" style={{ textDecoration: 'none' }}>Our Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition" style={{ textDecoration: 'none' }}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 Rajyog Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
