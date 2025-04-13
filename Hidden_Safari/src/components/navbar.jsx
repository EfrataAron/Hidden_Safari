// import React from "react";
// import clsx from "clsx";

// const Navbar = ({ className }) => { // Accept className prop
//   return (
//     <nav className={clsx(
//       "p-4 flex justify-between items-center",
//       className // Apply the className prop
//     )}>
//       <div className="text-xl font-bold text-green-800">Hidden Safari</div>

//       <div className="hidden md:flex space-x-6 text-white">
//         <a href="/" className="hover:text-green-600">Home</a>
//         <a href="#activities" className="hover:text-green-600">Events</a>
//         <a href="#trails" className="hover:text-green-600">Team</a>
//         <a href="#trails" className="hover:text-green-600">About</a>
//         <a href="#testimonials" className="hover:text-green-600">Contact</a>
//       </div>

//       <button className="md:hidden focus:outline-none">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 

const Navbar = ({ className }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <nav
      className={clsx(
        "p-1 flex justify-between items-center fixed top-0 w-full z-50 bg-green-500",
        className
      )}
    >
      <div className="text-xl font-bold text-green-800">Hidden Safari</div>

      <div className="hidden md:flex space-x-6"> {/* Removed text-white here */}
        <Link to="/home" className="navbar-link home-link"> 
          Home
        </Link>
        <Link to="/Events" className="navbar-link">
          Events
        </Link>
        <Link to="/team" className="navbar-link">
          Team
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>

       

        {isAuthenticated ? (
          <>
          <Link to="/profile" className="navbar-link">
          Profile
            </Link>
            
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
           
          </>
        ) : (
          <Link to="/login" className="navbar-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import clsx from "clsx";

// const Navbar = ({ className }) => { // Accept className prop
//   return (
//     <nav className={clsx(
//       "p-4 flex justify-between items-center",
//       className // Apply the className prop
//     )}>
//       <div className="text-xl font-bold text-green-800">Hidden Safari</div>

//         <div className="hidden md:flex space-x-6 text-white">
//       <Link to="/" className="hover:text-green-600">Home</Link>
//       <Link to="/Events" className="hover:text-green-600">Events</Link>
//       <Link to="/team" className="hover:text-green-600">Team</Link> {/* Updated */}
//       <Link to="/about" className="hover:text-green-600">About</Link> {/* Updated */}
//       <Link to="/contact" className="hover:text-green-600">Contact</Link> {/* Updated */}
//       </div>

//       <button className="md:hidden focus:outline-none">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
