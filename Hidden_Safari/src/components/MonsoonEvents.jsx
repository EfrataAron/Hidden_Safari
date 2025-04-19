import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';
import { ENDPOINTS } from "../assets/EndPoints";

const MonsoonEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsoonEvents = async () => {
      try {
        const response = await axios.get(ENDPOINTS.MONSOON);
        
        // Transform API data to match your Card component's expected format
        const formattedEvents = response.data.map(event => ({
          id: event.id,
          image: event.bannerImages1,
          imageText: event.heading,
          icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
          about: event.about,
          dates: event.calendarDates,
          days: event.numberOfDays
        }));
        
        setEvents(formattedEvents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching monsoon events:", err);
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
            {[1, 2, 3].map((_, index) => (
              <div key={`loading-${index}`} className="h-64 bg-gray-200 rounded"></div>
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

  // Duplicate events for infinite scroll effect
  const duplicatedEvents = [...events, ...events];

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
            <div key={`monsoon-${event.id}-${index}`} className="scroll-item">
              <Card
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
      </div>
    </section>
  );
};

export default MonsoonEvents;
