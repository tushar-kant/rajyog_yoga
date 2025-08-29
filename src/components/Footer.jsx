import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#2A0046" }}>
      <div className="container mx-auto px-6">
        {/* Top Section with Social Media and Address */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 mb-6">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="text-lg font-semibold mb-3">Connect with Us</h6>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <h6 className="text-lg font-semibold mb-3">Contact Us</h6>
            <p className="text-sm">
              Rajyog Wellness<br />
              123 Wellness Street<br />
              Pune, Maharashtra, India<br />
              Phone: +91 98765 43210<br />
              Email: info@rajyogwellness.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Bottom Section with Copyright */}
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; 2024 <span className="font-semibold">Rajyog Wellness</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
