import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[var(--primary-color)]">FitLife</h3>
            <p className="mt-4">Transform your body, transform your life with our expert guidance and support.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Classes</li>
              <li className="mb-2">Schedule</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <p>123 Fitness Street</p>
            <p>New York, NY 10001</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@fitlife.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl cursor-pointer hover:text-[var(--primary-color)]" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-[var(--primary-color)]" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-[var(--primary-color)]" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-[var(--primary-color)]" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-600">
          <p>&copy; 2023 FitLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
