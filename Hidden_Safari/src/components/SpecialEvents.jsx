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
        console.log("Special events API response:", response.data);
        
        // Check if response.data is an array, if not, check if it has a property that is an array
        let eventsData = response.data;
        
        if (!Array.isArray(eventsData)) {
          // Check if the data might be nested (common API pattern)
          if (response.data && response.data.SpecialEvents && Array.isArray(response.data.SpecialEvents)) {
            eventsData = response.data.SpecialEvents;
          } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
            eventsData = response.data.data;
          } else if (response.data && typeof response.data === 'object') {
            // If it's an object but not an array, try to extract values
            eventsData = Object.values(response.data).filter(item => item && typeof item === 'object');
          } else {
            // If we can't find any arrays, use an empty array
            eventsData = [];
            throw new Error("Invalid data format received from API");
          }
        }
        
        // Ensure each event has an ID
        const validatedEvents = eventsData.map(event => {
          if (!event.id && !event._id) {
            console.warn("Event missing ID:", event);
            return { ...event, id: Math.random().toString(36).substr(2, 9) };
          }
          return { ...event, id: event.id || event._id };
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
                  key={`${event.id}-${index}`}
                  className="scroll-item flex items-center justify-center"
                  onClick={() => handleCardClick(event.id)}
                >
                  <Card
                    image={event.bannerImages1}
                    title={event.heading}
                    description={
                      event.about ? `${event.about.substring(0, 100)}...` : ""
                    }
                    imageText={event.calendarDates}
                    icons={[]}
                    eventId={event.id}
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