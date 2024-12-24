// pages/about.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
          {/* Logo */}
          <div className="text-sm font-bold">
            <Link href="/" className="flex items-center">
              <span className="text-white">FOOD</span>
              <span className="text-yellow-400">TUCK</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-4 text-xs sm:text-sm font-medium justify-center items-center">
            <Link href="/" className="text-white hover:text-yellow-400 transition">
              Home
            </Link>
            <Link href="/Menu" className="text-white hover:text-yellow-400 transition">
              Menu
            </Link>
            <Link href="/Blog" className="text-white hover:text-yellow-400 transition">
              Blog
            </Link>
            <Link href="/Pages" className="text-white hover:text-yellow-400 transition">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition">
              About
            </Link>
            <Link href="/Shop" className="text-white hover:text-yellow-400 transition">
              Shop
            </Link>
            <Link href="/Contact" className="text-white hover:text-yellow-400 transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Section with background image and text */}
      <div
        className="bg-cover bg-center h-[90px] sm:h-[130px] p-[26px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")',
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold">About Us</h1>
        <p className="mt-2 text-sm sm:text-base">Explore our delicious menu options.</p>

        {/* Breadcrumb */}
        <div className="absolute bottom-4 text-xs sm:text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2"> &gt; </span>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-8 gap-6 sm:gap-12 bg-gray-100">
        {/* Image Section */}
        <div className="flex flex-col items-center sm:w-1/2 gap-4">
          <div className="w-28 h-28 sm:w-32 sm:h-32">
            <Image
              src="/unsplash_lP5MCM6nZ5A.png"
              alt="Delicious Food"
              width={112}
              height={112}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex gap-4 w-full justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src="/unsplash_CLMpC9UhyTo.png"
                alt="Delicious Food Left"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src="/unsplash_ZuIDLSz3XLg.png"
                alt="Delicious Food Right"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start text-left max-w-sm w-full sm:w-1/2 mt-4 sm:mt-0">
          {/* Title */}
          <h5 className="text-green-600 font-serif text-xs sm:text-sm">
            <i>About us</i>
          </h5>
          <h1 className="font-extrabold text-sm sm:text-lg text-gray-800 leading-tight">
            Food is an important part of a balanced diet
          </h1>

          {/* Subtitle */}
          <h6 className="text-xs sm:text-sm font-thin text-gray-800 mt-2 italic">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.&quot;
          </h6>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            {/* Show More Button */}
            <button className="px-2 py-1 bg-green-800 text-white text-xs rounded-md hover:bg-green-600 transition duration-300">
              Show More
            </button>

            {/* Watch Videos Button */}
            <button className="px-2 py-1 border border-green-800 text-green-500 text-xs rounded-md hover:bg-green-100 transition duration-300">
              Watch Videos
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white p-6 sm:p-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
          <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Curabitur at odio vitae sapien tempus dignissim.</i>
        </p>
        <div className="mt-3">
          <Image
            src="/unsplash_3iexvMShGfQ.png"
            alt="Why Choose Us"
            width={300}
            height={160}
            className="w-full max-w-md mx-auto rounded-md"
          />
        </div>
      </div>

      {/* Chef Logos Section */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto flex flex-wrap justify-center gap-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24">
            <Image
              src="/Best chef.png"
              alt="Chef One"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24">
            <Image
              src="/120 item.png"
              alt="Chef Two"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24">
            <Image
              src="/Best chef.png"
              alt="Chef Three"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="font-extrabold text-lg sm:text-xl text-gray-800 leading-tight mb-4">
          Our Food Menu
        </h1>

        <h6 className="text-[10px] sm:text-xs font-thin text-gray-800 mt-2 italic mb-6">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod&quot;
        </h6>

        {/* Menu Categories (Breakfast, Lunch, Dinner) */}
        <div className="flex justify-around w-full mb-6">
          <button className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-transparent hover:border-green-800 transition duration-300">
            Breakfast
          </button>
          <button className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-transparent hover:border-green-800 transition duration-300">
            Lunch
          </button>
          <button className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-transparent hover:border-green-800 transition duration-300">
            Dinner
          </button>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {/* Breakfast Items */}
          <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
            <button>Grilled Salmon</button>
            <span className="text-sm text-green-800 mt-2">$32</span>
          </div>
          <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
            <button>BBQ Chicken Breast</button>
            <span className="text-sm text-green-800 mt-2">$28</span>
          </div>
          <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
            <button>Fried Shrimp</button>
            <span className="text-sm text-green-800 mt-2">$24</span>
          </div>
          <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
            <button>Caesar Salad</button>
            <span className="text-sm text-green-800 mt-2">$20</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-between gap-8">
            {/* FoodTuck Section */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-2xl font-semibold mb-4">FOOD TUCK</h3>
              <p className="text-sm">
                Explore the world of delicious meals and gourmet dishes. Enjoy the finest food delivered right to your door.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link href="/Menu" className="hover:text-yellow-400">Menu</Link></li>
                <li><Link href="/Blog" className="hover:text-yellow-400">Blog</Link></li>
                <li><Link href="/Shop" className="hover:text-yellow-400">Shop</Link></li>
                <li><Link href="/Contact" className="hover:text-yellow-400">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-sm">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-sm">contact@foodtuck.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} FOOD TUCK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
