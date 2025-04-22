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
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';
import { ENDPOINTS } from "../assets/EndPoints";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import EventsCard from "./EventsCard";

const HighlightedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  useEffect(() => {
    const fetchHighlightedEvents = async () => {
      try {
        console.log("Fetching from endpoint:", ENDPOINTS.HIGHLIGHTEDEVENTS);
        const response = await axios.get(ENDPOINTS.HIGHLIGHTEDEVENTS);
        
        console.log("Raw API response:", response.data);
        
        // Check if response.data is an array, if not, check if it has a property that is an array
        let eventsData = response.data;
        
        if (!Array.isArray(eventsData)) {
          // Try to handle various response formats
          if (response.data && typeof response.data === 'object') {
            // Option 1: Check for highlighted key
            if (response.data.HighlightedEvents && Array.isArray(response.data.HighlightedEvents)) {
              eventsData = response.data.HighlightedEvents;
            } 
            // Option 2: Check for highlighted-events key
            else if (response.data['highlighted-events'] && Array.isArray(response.data['highlighted-events'])) {
              eventsData = response.data['highlighted-events'];
            }
            // Option 3: Check for data key
            else if (response.data.data && Array.isArray(response.data.data)) {
              eventsData = response.data.data;
            }
            // Option 4: Check if the object itself has event-like properties
            else if (response.data.id || response.data._id || response.data.heading) {
              // The response might be a single event object
              eventsData = [response.data];
            }
            // Option 5: Use all object values that look like events
            else {
              const possibleEvents = Object.values(response.data).filter(
                item => item && typeof item === 'object' && (item.id || item._id || item.heading)
              );
              
              if (possibleEvents.length > 0) {
                eventsData = possibleEvents;
              } else {
                // If all else fails, try using the only array we find
                for (const key in response.data) {
                  if (Array.isArray(response.data[key])) {
                    eventsData = response.data[key];
                    break;
                  }
                }
              }
            }
          }
          
          // If we still don't have an array, create an empty one
          if (!Array.isArray(eventsData)) {
            console.error("Could not extract array data from API response");
            eventsData = [];
          }
        }
        
        // Log what we're working with
        console.log("Events data for processing:", eventsData);
        
        // If we have data, transform it
        if (eventsData.length > 0) {
          // Transform API data to match your Card component's expected format
          const formattedEvents = eventsData.map(event => {
            // Ensure we have all required fields, with fallbacks
            return {
              id: event.id || event._id || `event-${Math.random().toString(36).substr(2, 9)}`,
              image: event.bannerImages1 || event.image || 'https://via.placeholder.com/400',
              imageText: event.heading || event.title || 'Highlighted Event',
              icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
              about: event.about || event.description || '',
              dates: event.calendarDates || event.dates || 'Available soon',
              days: event.numberOfDays || event.days || '3'
            };
          });
          
          console.log("Formatted events:", formattedEvents);
          setEvents(formattedEvents);
        } else {
          setError("No events found");
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching highlighted events:", err);
        setError(err.message || "Failed to load events");
        setLoading(false);
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

  // Create enough duplicated items to ensure smooth infinite scrolling
  // We need at least enough items to fill the scroll area twice
  const duplicatedEvents = [...events, ...events, ...events, ...events];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-2">Highlighted Events</h2>
      <h3 className="text-lg text-gray-700 mb-6">Recommended camps by our Instructors</h3>
      
      {/* Scroll Wrapper with fade effect on edges */}
      <div className="scroll-wrapper relative overflow-hidden">
        {/* Fade effect on left */}
        <div className="fade-left"></div>

        {/* Scrollable content container */}
        <div className="scroll-track">
          {duplicatedEvents.map((event, index) => (
            <div 
              key={`highlighted-${event.id}-${index}`} 
              className="scroll-item cursor-pointer"
              onClick={() => handleCardClick(event.id)}
            >
              <EventsCard
                image={event.image}
                imageText={event.imageText}
                icons={event.icons}
                eventId={event.id}
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

export default HighlightedEvents;