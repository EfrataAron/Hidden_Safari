// // HighlightedEvents.js
// import React, { useState } from "react";
// import Card from "./Card";
// import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';

// const HighlightedEvents = () => {
//   const [events, setEvents] = useState(() => [
//     {
//       image: "/landingPage/kilimanjaro.png",
//       // title: "Kilimanjaro",
//       imageText: "Kilimanjaro",
//       icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
//     },
//     {
//       image: "/landingPage/madagascar.png",
//       // title: "Madagascar",
//       imageText: "Madagascar",
//       icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
//     },
//     {
//       image: "/landingPage/capetown.png",
//       // title: "Cape Town",
//       imageText: "Cape Town",
//       icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
//     },
//   ]);

//   return (
//     <section className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-left mb-2">Highlighted Events</h2>
//       <h3 className="text-lg text-gray-700 mb-6">Recommended camps by our Instructors</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event, index) => (
//           <Card
//             key={index}
//             image={event.image}
//             // title={event.title}
//             imageText={event.imageText}
//             icons={event.icons}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HighlightedEvents;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';
import { ENDPOINTS } from "../assets/EndPoints";

const HighlightedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHighlightedEvents = async () => {
      try {
        const response = await axios.get(ENDPOINTS.HIGHLIGHTEDEVENTS);
        
        // Transform API data to match your Card component's expected format
        const formattedEvents = response.data.map(event => ({
          id: event.id,
          image: event.bannerImages1, // Using the first banner image
          imageText: event.heading,
          icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
          // Include additional data you might want to use
          about: event.about,
          dates: event.calendarDates,
          days: event.numberOfDays
        }));
        
        setEvents(formattedEvents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching highlighted events:", err);
      }
    };

    fetchHighlightedEvents();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        Error loading highlighted events: {error}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-2">Highlighted Events</h2>
        <h3 className="text-lg text-gray-700 mb-6">Recommended camps by our Instructors</h3>
        <p className="text-gray-500">No highlighted events available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-2">Highlighted Events</h2>
      <h3 className="text-lg text-gray-700 mb-6">Recommended camps by our Instructors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            image={event.image}
            imageText={event.imageText}
            icons={event.icons}
            // Pass any additional props your Card component might need
            eventId={event.id}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightedEvents;