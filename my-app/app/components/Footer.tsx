import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';  // Importing icons

const Footer = () => {
  return (
    <div className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-xs sm:text-sm">
          
          {/* Foodstocks Section */}
          <div>
            <h3 className="font-semibold text-lg">Foodstocks</h3>
            <p className="mt-2">Fresh, sustainable, and quality food direct from farm to plate.</p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-lg">Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/" className="hover:text-gray-200 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-200 transition duration-300">About Us</a></li>
              <li><a href="/menu" className="hover:text-gray-200 transition duration-300">Menu</a></li>
              <li><a href="/contact" className="hover:text-gray-200 transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="mt-2 text-xs sm:text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                
                <span>contact@foodstocks.com</span>
              </div>
              <div className="flex items-center gap-2">
            
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2">

                <span>1234 Food Street, New York, USA</span>
              </div>
            </div>
          </div>

          {/* Instagram Gallery Section */}
          <div>
            <h3 className="font-semibold text-lg">Instagram Gallery</h3>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <img src="/Group 26.png" alt="Insta 1" className="w-full h-32 object-cover rounded-md"/>
              <img src="/Group 26.png" alt="Insta 2" className="w-full h-32 object-cover rounded-md"/>
              <img src="/Group 26.png" alt="Insta 3" className="w-full h-32 object-cover rounded-md"/>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 text-xs sm:text-sm">
          <p>&copy; 2020 Foodstocks. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
