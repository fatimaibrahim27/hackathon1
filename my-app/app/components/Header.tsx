"use client"

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
        {/* Logo */}
        <div className="text-xs font-bold">
          <Link href="/" className="flex items-center">
            <span className="text-green-600">FOOD</span>
            <span className="text-black">TUCK</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={`hidden sm:flex gap-6 text-xs font-medium justify-center items-center`}
        >
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/Menu" className="text-gray-700 hover:text-green-600 transition">
            Menu
          </Link>
          <Link href="/Blog" className="text-gray-700 hover:text-green-600 transition">
            Blog
          </Link>
          <Link href="/Pages" className="text-gray-700 hover:text-green-600 transition">
            Pages
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-green-600 transition">
            About
          </Link>
          <Link href="/Signup" className="text-gray-700 hover:text-green-600 transition">
            Signup
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-green-600 text-xl"
          >
            &#9776; {/* Hamburger menu for mobile */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 py-4 px-6 bg-white shadow-md">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/Menu" className="text-gray-700 hover:text-green-600 transition">
            Menu
          </Link>
          <Link href="/Blog" className="text-gray-700 hover:text-green-600 transition">
            Blog
          </Link>
          <Link href="/Pages" className="text-gray-700 hover:text-green-600 transition">
            Pages
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-green-600 transition">
            About
          </Link>
          <Link href="/Signup" className="text-gray-700 hover:text-green-600 transition">
            Signup
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
