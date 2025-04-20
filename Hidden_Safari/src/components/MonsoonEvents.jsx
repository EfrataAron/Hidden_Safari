import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';
import { ENDPOINTS } from "../assets/EndPoints";
import EventsCard from "./EventsCard";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const MonsoonEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  useEffect(() => {
    const fetchMonsoonEvents = async () => {
      try {
        console.log("Fetching from endpoint:", ENDPOINTS.MONSOON);
        const response = await axios.get(ENDPOINTS.MONSOON);
        
        console.log("Raw API response:", response.data);
        
        // Check if response.data is an array, if not, check if it has a property that is an array
        let eventsData = response.data;
        
        if (!Array.isArray(eventsData)) {
          // Try to handle various response formats
          if (response.data && typeof response.data === 'object') {
            // Option 1: Check for monsoon key
            if (response.data.Monsoon && Array.isArray(response.data.Monsoon)) {
              eventsData = response.data.Monsoon;
            } 
            // Option 2: Check for monsoon-events key
            else if (response.data['monsoon-events'] && Array.isArray(response.data['monsoon-events'])) {
              eventsData = response.data['monsoon-events'];
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
              imageText: event.heading || event.title || 'Monsoon Event',
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
        console.error("Error fetching monsoon events:", err);
        setError(err.message || "Failed to load events");
        setLoading(false);
      }
    };

    fetchMonsoonEvents();
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
        Error loading monsoon events: {error}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-2">Monsoon Events</h2>
        <h3 className="text-lg text-gray-700 mb-6">Experience the magic of monsoon adventures</h3>
        <p className="text-gray-500">No monsoon events available at the moment.</p>
      </div>
    );
  }

  // Create enough duplicated items to ensure smooth infinite scrolling
  const duplicatedEvents = [...events, ...events, ...events, ...events];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-2">Monsoon Events</h2>
      <h3 className="text-lg text-gray-700 mb-6">Experience the magic of monsoon adventures</h3>
      
      {/* Scroll Wrapper with fade effect on edges */}
      <div className="scroll-wrapper relative overflow-hidden">
        {/* Fade effect on left */}
        <div className="fade-left"></div>

        {/* Scrollable content container */}
        <div className="scroll-track">
          {duplicatedEvents.map((event, index) => (
            <div 
              key={`${event.id}-${index}`} 
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

export default MonsoonEvents; 