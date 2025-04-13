import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} NatureFun</p>
      <p>
        <a href="#" className="hover:underline">Privacy Policy</a> | 
        <a href="#" className="hover:underline"> Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
