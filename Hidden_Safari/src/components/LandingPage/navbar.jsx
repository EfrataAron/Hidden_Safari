import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-green-600">NatureFun</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#places" className="text-gray-700 hover:text-green-600">Places</a>
        <a href="#activities" className="text-gray-700 hover:text-green-600">Activities</a>
        <a href="#trails" className="text-gray-700 hover:text-green-600">Trails</a>
        <a href="#events" className="text-gray-700 hover:text-green-600">Events</a>
        <a href="#testimonials" className="text-gray-700 hover:text-green-600">Testimonials</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
