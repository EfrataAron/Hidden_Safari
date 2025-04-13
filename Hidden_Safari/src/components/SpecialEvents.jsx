import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./styles.css"; // Make sure this file exists

const SpecialEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section className="relative container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Special Events</h2>

      {loading ? (
        <div className="text-center text-xl">Loading events...</div>
      ) : (
        <div className="overflow-hidden relative">
          {/* Optional fade effect on edges */}
          <div className="fade-left" />
          <div className="fade-right" />

          <div className="scroll-wrapper">
            <div className="scroll-track">
              {[...events, ...events].map((event, index) => (
                <div key={index} className="scroll-item">
                  <Card
                    image={event.bannerImages1}
                    title={event.heading}
                    description={event.about}
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

