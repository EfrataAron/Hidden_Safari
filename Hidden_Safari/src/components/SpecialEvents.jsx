
// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import Card from "./Card";
// import "./styles.css";
// import { ENDPOINTS } from "../assets/EndPoints";
// import axios from 'axios';

// const SpecialEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(ENDPOINTS.SPECIALEVENTS);

//         // Make sure each event has an `_id` property
//         console.log("Fetched events:", response.data);

//         setEvents(response.data);
//       } catch (error) {
//         console.error("Error fetching special events:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleCardClick = (eventId) => {
//     if (eventId) {
//       navigate(`/detail/${eventId}`);
//     } else {
//       console.warn("Missing event ID");
//     }
//   };

//   const duplicatedEvents = [...events, ...events];

//   return (
//     <section className="relative container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-left mb-8">Special Events</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         Experience the magic of winter landscapes with our guided snow treks.
//       </p>
//       {loading ? (
//         <div className="text-center text-xl">Loading events...</div>
//       ) : (
//         <div className="overflow-hidden relative">
//           <div className="fade-left" />
//           <div className="fade-right" />

//           <div className="scroll-wrapper">
//             <div className="scroll-track">
//               {duplicatedEvents.map((event, index) => (
//                 <div
//                   key={`${event._id}-${index}`} // Use _id for key
//                   className="scroll-item flex items-center justify-center"
//                   onClick={() => handleCardClick(event._id)} // Use _id for navigation
//                 >
//                   <Card
//                     image={event.bannerImages1}
//                     title={event.heading}
//                     description={
//                       event.about ? event.about.substring(0, 100) + "..." : ""
//                     }
//                     imageText={event.calendarDates}
//                     icons={[]} // Add icons if needed
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="fade-top"></div>
//           <div className="fade-bottom"></div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SpecialEvents;


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import "./styles.css";
import { ENDPOINTS } from "../assets/EndPoints";
import axios from 'axios';

const SpecialEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(ENDPOINTS.SPECIALEVENTS);
        
        // Verify the data structure
        if (!Array.isArray(response.data)) {
          throw new Error("Invalid data format received from API");
        }
        
        // Ensure each event has an ID
        const validatedEvents = response.data.map(event => {
          if (!event.id) {
            console.warn("Event missing ID:", event);
            return { ...event, id: Math.random().toString(36).substr(2, 9) };
          }
          return event;
        });

        setEvents(validatedEvents);
      } catch (error) {
        console.error("Error fetching special events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (eventId) => {
    if (!eventId) {
      console.error("Invalid event ID - cannot navigate");
      return;
    }
    navigate(`/detail/${eventId}`);
  };

  // Create infinite scroll effect by duplicating events
  const duplicatedEvents = [...events, ...events];

  if (error) {
    return (
      <section className="relative container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Special Events</h2>
        <div className="text-red-500 text-center py-10">{error}</div>
      </section>
    );
  }

  return (
    <section className="relative container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Special Events</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience unique cultural celebrations and extraordinary events across Africa.
      </p>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl">Loading events...</div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-10">No special events available at this time.</div>
      ) : (
        <div className="overflow-hidden relative">
          {/* Gradient fade effects */}
          <div className="fade-left" />
          <div className="fade-right" />

          {/* Scrollable event cards */}
          <div className="scroll-wrapper">
            <div className="scroll-track">
              {duplicatedEvents.map((event, index) => (
                <div
                  key={`${event.id}-${index}`}  // Changed from _id to id
                  className="scroll-item flex items-center justify-center"
                  onClick={() => handleCardClick(event.id)}  // Changed from _id to id
                >
                  <Card
                    image={event.bannerImages1}
                    title={event.heading}
                    description={
                      event.about ? `${event.about.substring(0, 100)}...` : ""
                    }
                    imageText={event.calendarDates}
                    icons={[]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SpecialEvents;