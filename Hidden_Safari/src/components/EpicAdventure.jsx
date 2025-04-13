// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "./Card";
// import { ENDPOINTS } from "../assets/EndPoints"; // Ensure ENDPOINTS is correctly imported

// const EpicAdventure = () => {
//   const [adventures, setAdventures] = useState([]);

//   // Fetch adventure data from the API
//   useEffect(() => {
//     const fetchAdventures = async () => {
//       try {
//         const response = await axios.get(ENDPOINTS.ADVENTURES); // Make sure the endpoint matches your API
//         console.log("Fetched Adventures:", response.data);

//         if (Array.isArray(response.data)) {
//           setAdventures(response.data);
//         } else {
//           console.error("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching adventures:", error);
//       }
//     };

//     fetchAdventures();
//   }, []);

//   return (
//     <section className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {adventures.map((adventure) => (
//           <Card
//             key={adventure.id} // Using adventure.id as the key for each card
//             image={adventure.bannerImages1} // You can adjust the image source based on your needs
//             title={adventure.heading}
//             buttonText="Explore" // This is static for now, you can customize based on your requirements
//             imageText={adventure.heading} // Optionally, use this for some text over the image
//           />
//         ))}
//            {/* Fade effect on right */}
//            <div className="fade-right"></div>
//         <div className="fade-top"></div>
//         <div className="fade-bottom"></div>
//       </div>
//     </section>
//   );
// };

// export default EpicAdventure;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import Card from "./Card";

const EpicAdventure = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const response = await axios.get(ENDPOINTS.ADVENTURES);
        setAdventures(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdventures();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
        <p>Loading adventures...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
        <p>Error fetching adventures: {error.message}</p>
      </section>
    );
  }

  // Duplicate for infinite scroll effect
  const duplicatedAdventures = [...adventures, ...adventures];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience thrilling expeditions across Africa and beyond.
      </p>

      {/* Scroll Wrapper with fade effect on edges */}
      <div className="scroll-wrapper relative overflow-hidden">
        {/* Fade effect on left */}
        <div className="fade-left"></div>

        {/* Scrollable content container */}
        <div className="scroll-track">
          {adventures.map((adventure, index) => (
            <div key={index} className="scroll-item">
              <Card
                image={adventure.bannerImages1}
                title={adventure.heading}
                buttonText="Explore"
                imageText={adventure.heading}
              />
            </div>
          ))}
        </div>

        {/* Fade effect on right */}
        <div className="fade-right"></div>
        <div className="fade-top"></div>
        <div className="fade-bottom"></div>
      </div>
    </section>
  );
};

export default EpicAdventure;
