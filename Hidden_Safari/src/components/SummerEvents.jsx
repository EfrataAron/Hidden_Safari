import React, { useState, useEffect } from "react";
import Card from "./Card";

const SummerEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Simulate fetching data (replace with your actual data fetching logic)
    const fetchEvents = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Replace this with your actual data fetching logic (e.g., from an API)
        const fetchedEvents = [
          {
            image: "/landingPage/kruger.png",
            imageText: "Kruger Park",
            title: "Kruger Park",
          },
          {
            image: "/landingPage/west.png",
            imageText: "Western Cape",
            title: "Western Cape",
          },
          {
            image: "/landingPage/addo.png",
            imageText: "Addo Park",
            title: "Addo Park",
          },
          {
            image: "/landingPage/masai.png",
            imageText: "Masai Mara",
            title: "Masai Mara",
          },
        ];

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
        <p>Error fetching events.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Summer Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <Card
            key={index}
            image={event.image}
            imageText={event.imageText}
            title={event.title}
          />
        ))}
      </div>
    </section>
  );
};

export default SummerEvents;
