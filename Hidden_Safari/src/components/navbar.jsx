// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import clsx from "clsx";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaUsers,
//   FaInfoCircle,
//   FaEnvelope,
//   FaUser,
//   FaSignOutAlt,
//   FaSignInAlt
// } from "react-icons/fa";
// import "./styles.css"; // Your custom CSS

// const Navbar = ({ className }) => {
//   const navigate = useNavigate();
//   const isAuthenticated = localStorage.getItem("authToken");

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   return (
//     <nav
//       className={clsx(
//         "p-1 flex justify-between items-center fixed top-0 w-full z-50 bg-green-500",
//         className
//       )}
//     >
//       <div className="text-xl font-bold text-white">Hidden Safari</div>

//       <div className="hidden md:flex space-x-6 items-center text-white !hover:text-black">
//         <Link to="/home" className="navbar-link flex items-center gap-2">
//           <FaHome /> Home
//         </Link>
//         <Link to="/events" className="navbar-link flex items-center gap-2">
//           <FaCalendarAlt /> Events
//         </Link>
//         <Link to="/team" className="navbar-link flex items-center gap-2">
//           <FaUsers /> Team
//         </Link>
//         <Link to="/about" className="navbar-link flex items-center gap-2">
//           <FaInfoCircle /> About
//         </Link>
//         <Link to="/contact" className="navbar-link flex items-center gap-2">
//           <FaEnvelope /> Contact
//         </Link>

//         {isAuthenticated ? (
//           <>
//             <Link to="/profile" className="navbar-link flex items-center gap-2">
//               <FaUser /> Profile
//             </Link>
//             <button
//               className="logout-button flex items-center gap-2 text-white hover:text-red-300"
//               onClick={handleLogout}
//             >
//               <FaSignOutAlt /> Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" className="navbar-link flex items-center gap-2">
//             <FaSignInAlt /> Login
//           </Link>
//         )}
//       </div>

//       {/* Mobile Hamburger Icon */}
//       <button className="md:hidden focus:outline-none text-white">
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    closeMenu();
  };

  return (
    <nav
      className={clsx(
        "p-1 flex flex-col md:flex-row justify-between items-center fixed top-0 w-full z-50 bg-green-500",
        className
      )}
    >
      {/* Title and Toggle */}
      <div className="flex justify-between w-full md:w-auto items-center px-4 py-2">
        <div className="text-xl font-bold text-white">Hidden Safari</div>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 items-center text-white px-6">
        <Link to="/home" className="navbar-link flex items-center gap-2 hover:text-black">
          <FaHome /> Home
        </Link>
        <Link to="/events" className="navbar-link flex items-center gap-2 hover:text-black">
          <FaCalendarAlt /> Events
        </Link>
        <Link to="/team" className="navbar-link flex items-center gap-2 hover:text-black">
          <FaUsers /> Team
        </Link>
        <Link to="/about" className="navbar-link flex items-center gap-2 hover:text-black">
          <FaInfoCircle /> About
        </Link>
        <Link to="/contact" className="navbar-link flex items-center gap-2 hover:text-black">
          <FaEnvelope /> Contact
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/profile" className="navbar-link flex items-center gap-2 hover:text-black">
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
          <Link to="/login" className="navbar-link flex items-center gap-2 hover:text-black">
            <FaSignInAlt /> Login
          </Link>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-green-600 text-white py-4 px-6 rounded-b-md shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/home" className="flex items-center gap-2" onClick={closeMenu}>
              <FaHome /> Home
            </Link>
            <Link to="/events" className="flex items-center gap-2" onClick={closeMenu}>
              <FaCalendarAlt /> Events
            </Link>
            <Link to="/team" className="flex items-center gap-2" onClick={closeMenu}>
              <FaUsers /> Team
            </Link>
            <Link to="/about" className="flex items-center gap-2" onClick={closeMenu}>
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact" className="flex items-center gap-2" onClick={closeMenu}>
              <FaEnvelope /> Contact
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/profile" className="flex items-center gap-2" onClick={closeMenu}>
                  <FaUser /> Profile
                </Link>
                <button
                  className="flex items-center gap-2 text-white hover:text-red-300"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center gap-2" onClick={closeMenu}>
                <FaSignInAlt /> Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
