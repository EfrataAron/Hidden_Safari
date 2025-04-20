// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ENDPOINTS } from "../assets/EndPoints";
// import OrangeBanner from "../components/GreenBanner";

// const About = () => {
//   const [content, setContent] = useState({
//     vision: "",
//     mission: "",
//     objectives: ""
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const response = await axios.get(ENDPOINTS.ABOUT);
//         const fullContent = response.data?.content || "";

//         // Split content into sections using regex
//         const sections = {
//           vision: extractSection(fullContent, "Vision", "Mission"),
//           mission: extractSection(fullContent, "Mission", "Objectives"),
//           objectives: extractSection(fullContent, "Objectives", "")
//         };

//         setContent(sections);
//       } catch (err) {
//         console.error("Failed to fetch About content:", err);
//         setError("Could not load About Us content.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAbout();
//   }, []);

//   // Helper function to extract sections
//   const extractSection = (text, startMarker, endMarker) => {
//     const regex = new RegExp(`${startMarker}(.+?)${endMarker ? endMarker : "$"}`, "s");
//     const match = text.match(regex);
//     return match ? match[1].trim() : `${startMarker} content not available`;
//   };

//   return (
//     <div className="h-full w-screen bg-gray-100">
//       {/* Banner */}
//       <OrangeBanner title="About Us" subtitle="Who we are & where do we stand" />

//       {/* Content */}
//       <div className="p-6 mt-6 rounded-lg"> {/* Removed max-w-4xl and mx-auto */}
//         {loading ? (
//           <p className="text-center text-lg">Loading about us...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <div className="space-y-8">
//             {/* Vision Section */}
//             <div className="section-container">
//               <h2 className="section-title text-green-500">Vision</h2>
//               <div
//                 className="section-content"
//                 dangerouslySetInnerHTML={{ __html: content.vision }}
//               />
//             </div>

//             {/* Mission Section */}
//             <div className="section-container">
//               <h2 className="section-title text-green-500">Mission</h2>
//               <div
//                 className="section-content"
//                 dangerouslySetInnerHTML={{ __html: content.mission }}
//               />
//             </div>

//             {/* Objectives Section */}
//             <div className="section-container mb-12 py-6">
//               <h2 className="section-title text-green-500">Objectives</h2>
//               <div
//                 className="section-content"
//                 dangerouslySetInnerHTML={{ __html: content.objectives }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//       {/* You can add your footer component here if you have one */}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default About;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import OrangeBanner from "../components/GreenBanner";

const About = () => {
  const [content, setContent] = useState({
    vision: "",
    mission: "",
    objectives: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(ENDPOINTS.ABOUT);
        const fullContent = response.data?.content || "";

        // Split content into sections using regex
        const sections = {
          vision: extractSection(fullContent, "Vision", "Mission"),
          mission: extractSection(fullContent, "Mission", "Objectives"),
          objectives: extractSection(fullContent, "Objectives", "")
        };

        setContent(sections);
      } catch (err) {
        console.error("Failed to fetch About content:", err);
        setError("Could not load About Us content.");
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  // Helper function to extract sections
  const extractSection = (text, startMarker, endMarker) => {
    const regex = new RegExp(`${startMarker}(.+?)${endMarker ? endMarker : "$"}`, "s");
    const match = text.match(regex);
    return match ? match[1].trim() : `${startMarker} content not available`;
  };

  return (
    <div className="h-full w-screen bg-gray-100">
      {/* Banner */}
      <OrangeBanner title="About Us" subtitle="Who we are & where do we stand" />

      {/* Content */}
      <div className="h-screen w-full p-6">
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading ...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="space-y-8">
            {/* Vision Section */}
            <div className="section-container">
              <h2 className="section-title text-green-500">Vision</h2>
              <div
                className="section-content"
                dangerouslySetInnerHTML={{ __html: content.vision }}
              />
            </div>

            {/* Mission Section */}
            <div className="section-container">
              <h2 className="section-title text-green-500">Mission</h2>
              <div
                className="section-content"
                dangerouslySetInnerHTML={{ __html: content.mission }}
              />
            </div>

            {/* Objectives Section */}
            <div className="section-container mb-12 py-6">
              <h2 className="section-title text-green-500">Objectives</h2>
              <div
                className="section-content"
                dangerouslySetInnerHTML={{ __html: content.objectives }}
              />
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default About;
