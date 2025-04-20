import React, { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import EventsCard from "./EventsCard"; 
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';

const SnowTreks = () => {
  const [snowTreks, setSnowTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    if (eventId) {
      navigate(`/detail/${eventId}`);
    }
  };

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        console.log("Fetching from endpoint:", ENDPOINTS.SNOWTREKS);
        const response = await axios.get(ENDPOINTS.SNOWTREKS);
        const treks = response.data;
        
        console.log("Snow treks API response:", treks);

        // Filter for snow/winter-related treks
        const filtered = treks.filter(trek =>
          trek.heading?.toLowerCase().includes("snow") ||
          trek.heading?.toLowerCase().includes("winter") ||
          trek.title?.toLowerCase().includes("snow") ||
          trek.title?.toLowerCase().includes("winter")
        );

        console.log("Filtered snow treks:", filtered);
        setSnowTreks(filtered);
      } catch (error) {
        console.error("Failed to fetch treks:", error);
        setError(error.message || "Failed to load snow trek events");
      } finally {
        setLoading(false);
      }
    };

    fetchTreks();
  }, []);

  if (loading) {
    return <div className="text-center p-10 text-gray-600">Loading Snow Treks...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        Error loading snow trek events: {error}
      </div>
    );
  }

  if (snowTreks.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Snow Treks</h2>
        <p className="text-lg text-gray-700 mb-6">
          Experience the magic of winter landscapes with our guided snow treks.
        </p>
        <p className="text-gray-500">No snow trek events available at the moment.</p>
      </div>
    );
  }

  // Create enough duplicated items to ensure smooth infinite scrolling
  // We need at least enough items to fill the scroll area twice
  const duplicatedSnowTreks = [...snowTreks, ...snowTreks, ...snowTreks, ...snowTreks];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Snow Treks</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience the magic of winter landscapes with our guided snow treks.
      </p>

      {/* Scroll Wrapper with fade effect on edges */}
      <div className="scroll-wrapper relative overflow-hidden">
        
        {/* Fade effect on left */}
        <div className="fade-left"></div>

        {/* Scrollable content container */}
        <div className="scroll-track">
          
          {duplicatedSnowTreks.map((trek, index) => (
            <div 
              key={`${trek.id || trek._id || index}`} 
              className="scroll-item cursor-pointer"
              onClick={() => handleCardClick(trek.id || trek._id)}
            >
              <EventsCard
                image={trek.bannerImages1 || trek.image}
                imageText={trek.heading || trek.title}
                icons={[<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />]}
                eventId={trek.id || trek._id}
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

export default SnowTreks;
