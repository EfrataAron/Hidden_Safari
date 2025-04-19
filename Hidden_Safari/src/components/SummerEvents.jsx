import React, { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints"; // Ensure correct path
import Card from "./Card"; // Ensure Card component exists and works

const SummerEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(ENDPOINTS.SUMMER);
        setEvents(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Summer Events</h2>
        <p>Loading events...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Summer Events</h2>
        <p>Error fetching events: {error.message}</p>
      </section>
    );
  }

  // Duplicate the events for an infinite scroll illusion
  const duplicatedEvents = [...events, ...events];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Summer Events</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience the magic of summer with our exciting outdoor events.
      </p>

      <div className="scroll-wrapper relative overflow-hidden">
        {/* Optional fade edges for styling */}
        <div className="fade-left"></div>

        <div className="scroll-track flex gap-4 overflow-x-auto scrollbar-hide">
          {duplicatedEvents.map((event, index) => (
            <div
              key={`${event._id || event.id || "event"}-${index}`}
              className="scroll-item flex-shrink-0"
            >
              <Card
                image={event.bannerImages1}
                imageText={event.heading}
                title={event.heading}
              />
            </div>
          ))}
        </div>

        <div className="fade-right"></div>
        <div className="fade-top"></div>
        <div className="fade-bottom"></div>
      </div>
    </section>
  );
};

export default SummerEvents;
