import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import GreenBanner from "../components/GreenBanner";
import { ENDPOINTS } from "../assets/EndPoints";
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(ENDPOINTS.ALLEVENTS);
        const data = response.data;

        console.log("Fetched Events:", data);

        const combinedEvents = [
          ...(data.EpicAdventures || []),
          ...(data.SnowTreks || []),
          ...(data.Summer || []),
          ...(data.Monsoon || []),
          ...(data.SpecialEvents || []),
        ];

        setEvents(combinedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to handle card click and navigate to event details page
  const handleCardClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <div className="relative">
        <div className="w-full px-4 bg-green-500 text-white p-4">
          <div className="mt-8 px-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Our Events</h1>
              <p className="text-sm italic">Explore our exciting events</p>
            </div>
            <div className="absolute top-4 right-4">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-16 flex-1">
        {loading ? (
          <div className="text-center text-xl">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center text-xl text-gray-500">No events available.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id || event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleCardClick(event._id || event.id)}
              >
                <img
                  src={event.bannerImages1}
                  alt={event.heading}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{event.heading}</h2>
                  <p className="text-gray-600 mt-2">{event.calendarDates}</p>
                  <p className="text-gray-600 mt-4">{event.about}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
