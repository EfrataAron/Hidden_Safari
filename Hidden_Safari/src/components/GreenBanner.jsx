import React from "react";
import Navbar from "./navbar"; // Adjust the path if needed

const GreenBanner = ({ title, subtitle }) => {
  return (
    <div className="relative">
      <div className="w-full px-4 bg-green-500 text-white p-4">
        <div className="mt-8 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm italic">{subtitle}</p>
          </div>
          <div className="absolute top-4 right-4">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenBanner;
