import React from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt
} from "react-icons/fa";
import "./styles.css"; // Your custom CSS

const Navbar = ({ className }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav
      className={clsx(
        "p-1 flex justify-between items-center fixed top-0 w-full z-50 bg-green-500",
        className
      )}
    >
      <div className="text-xl font-bold text-white">Hidden Safari</div>

      <div className="hidden md:flex space-x-6 items-center text-white !hover:text-black">
        <Link to="/home" className="navbar-link flex items-center gap-2">
          <FaHome /> Home
        </Link>
        <Link to="/events" className="navbar-link flex items-center gap-2">
          <FaCalendarAlt /> Events
        </Link>
        <Link to="/team" className="navbar-link flex items-center gap-2">
          <FaUsers /> Team
        </Link>
        <Link to="/about" className="navbar-link flex items-center gap-2">
          <FaInfoCircle /> About
        </Link>
        <Link to="/contact" className="navbar-link flex items-center gap-2">
          <FaEnvelope /> Contact
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/profile" className="navbar-link flex items-center gap-2">
              <FaUser /> Profile
            </Link>
            <button
              className="logout-button flex items-center gap-2 text-white hover:text-red-300"
              onClick={handleLogout}
            >
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="navbar-link flex items-center gap-2">
            <FaSignInAlt /> Login
          </Link>
        )}
      </div>

      {/* Mobile Hamburger Icon */}
      <button className="md:hidden focus:outline-none text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
