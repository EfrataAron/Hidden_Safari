import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../assets/EndPoints";
import "./styles.css";
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';
import EventsCard from "./EventsCard";

const SummerEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  // Create enough duplicated items to ensure smooth infinite scrolling
  // We need at least enough items to fill the scroll area twice
  const duplicatedEvents = [...events, ...events, ...events, ...events];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Summer Events</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience the magic of summer with our exciting outdoor events.
      </p>

      <div className="scroll-wrapper relative overflow-hidden">
        <div className="fade-left"></div>

        <div className="scroll-track">
          {duplicatedEvents.map((event, index) => (
            <div
              key={`${event._id || event.id || "event"}-${index}`}
              className="scroll-item cursor-pointer"
              onClick={() => navigate(`/detail/${event.id || event._id}`)}
            >
              <EventsCard
                image={event.bannerImages1 || event.image}
                imageText={event.heading || event.title}
                icons={[<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />]}
                eventId={event.id || event._id}
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
