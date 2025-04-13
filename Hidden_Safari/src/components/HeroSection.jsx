
// import React, { useState } from "react";
// import './HeroSection.css'; // Import the CSS file

// const HeroSection = () => {
//   // Using useState to manage statistics dynamically
//   const [stats, setStats] = useState([
//     { value: "2,11,500+", label: "Participants" },
//     { value: "2750+", label: "Volunteers" },
//     { value: "68+", label: "Events" },
//     { value: "Years", label: "" },
//   ]);

//   return (
//     <div className="hero-section relative w-screen h-screen flex items-start text-white">
//       <div className="flex flex-col px-6 h-full">
//         <div className="flex flex-col justify-center h-full">
//           <h1 className="text-5xl font-bold">Experience Nature</h1>
//         </div>

//         <div className="flex flex-col items-start">
//           <p className="mt-4 text-lg">India's Largest Trekking Organisation</p>

//           {/* Dynamic Statistics */}
//           <div className="mt-8 flex flex-wrap justify-center gap-4 mb-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <span className="text-2xl font-bold">{stat.value}</span>
//                 {stat.label && <span className="text-sm">{stat.label}</span>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState } from "react";
import { FaUsers, FaHandsHelping, FaCalendarAlt, FaHistory } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  const [stats, setStats] = useState([
    { value: "2,11,500+", label: "Participants", icon: <FaUsers /> },
    { value: "2750+", label: "Volunteers", icon: <FaHandsHelping /> },
    { value: "68+", label: "Events", icon: <FaCalendarAlt /> },
    { value: "Years", label: "", icon: <FaHistory /> },
  ]);

  return (
    <div className="hero-section relative w-screen h-screen flex items-start text-white">
      <div className="flex flex-col px-6 h-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold">Experience Nature</h1>
        </div>

        <div className="flex flex-col items-start">
          <p className="mt-4 text-lg">India's Largest Trekking Organisation</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                {stat.icon && <div className="text-3xl mb-2">{stat.icon}</div>}
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.label && <span className="text-sm">{stat.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;