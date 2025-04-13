import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'; // Import icons
import { FaSquareThreads } from 'react-icons/fa6'
import "./styles.css"; 

const Footer = () => {
  return (
    <footer className="bg-green-400 p-6 mt-auto">
      <div className="flex flex-col items-center">
        <div className="!text-white font-bold text-xl">HiddenSafari</div>
        <nav className=" flex space-x-4 my-2">
          <Link to="/team" className="navbar-link">Teams</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/events" className="navbar-link">Events</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
          <Link to="/terms" className="navbar-link">Terms and Conditions</Link>
          <Link to="/privacypolicy" className="navbar-link">Privacy Policy</Link>
        </nav>

        <div className="flex items-center mb-4">
          <input type="email" placeholder="Enter your Email" className="border p-2 rounded-l-md" />
          <button className="bg-gray-500 text-white px-4 py-2 rounded-r-md">
            <img src="./icons/search.svg" className="w-6 h-6" alt="search" />
          </button>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 text-xl"></a> {/* Removed empty link */}
          <a href="#" className="text-blue-600 text-xl">
            <FaLinkedin className="text-blue-700 w-7 h-7" />
          </a>
          <a href="#" className="text-red-600 text-xl">
           <FaFacebook className="text-blue-700 hover:text-blue-800 w-7 h-7" />
          </a>
          <a href="#" className="text-red-600 text-xl">
            <FaSquareThreads className="text-black w-7 h-7" />
          </a>
          <a href="#" className="text-red-600 text-xl">
            <FaYoutube className="text-red-600 w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;