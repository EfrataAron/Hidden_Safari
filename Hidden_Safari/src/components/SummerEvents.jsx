import React, { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints"; // Ensure correct path for ENDPOINTS
import Card from "./Card"; // Assuming you have a Card component

const SummerEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetching data from the SUMMER endpoint
        const response = await axios.get(ENDPOINTS.SUMMER);
        const fetchedEvents = response.data;
        setEvents(fetchedEvents);
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

  // Duplicating the events to make the scroll infinite
  const duplicatedEvents = [...events, ...events]; // Duplicates the events array

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Summer Events</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience the magic of winter landscapes with our guided snow treks.
      </p>
      {/* Scroll Wrapper with fade effect on edges */}
      <div className="scroll-wrapper relative overflow-hidden">
        {/* Fade effect on left */}
        <div className="fade-left"></div>

        {/* Scrollable content container */}
        <div className="scroll-track">
          {duplicatedEvents.map((event, index) => (
            <div key={index} className="scroll-item">
              <Card
                image={event.bannerImages1}  // Using bannerImages1 as an example
                imageText={event.heading}
                title={event.heading}
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

export default SummerEvents;
