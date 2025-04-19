import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import "./styles.css"; // Ensure this file exists

const SpecialEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://54.210.95.246:3005/api/v1/events/special-events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching special events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (eventId) => {
    navigate('/events');
  };

  return (
    <section className="relative container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Special Events</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience the magic of winter landscapes with our guided snow treks.
      </p>
      {loading ? (
        <div className="text-center text-xl">Loading events...</div>
      ) : (
        <div className="overflow-hidden relative">
          <div className="fade-left" />
          <div className="fade-right" />

          <div className="scroll-wrapper">
            <div className="scroll-track">
              {[...events, ...events].map((event, index) => (
                <div
                  key={`${event._id}-${index}`}
                  className="scroll-item flex items-center justify-center"
                  onClick={() => handleCardClick(event._id)}
                >
                  <Card
                    image={event.bannerImages1}
                    title={event.heading}
                    description={event.about.substring(0, 100) + "..."}
                    imageText={event.calendarDates}
                    icons={[]}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="fade-top"></div>
          <div className="fade-bottom"></div>
        </div>
      )}
    </section>
  );
};

export default SpecialEvents;
