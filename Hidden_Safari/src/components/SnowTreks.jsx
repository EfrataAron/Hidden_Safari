import React, { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import Card from "./Card"; 

const SnowTreks = () => {
  const [snowTreks, setSnowTreks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await axios.get(ENDPOINTS.SNOWTREK);
        const treks = response.data;

        // Filter for snow/winter-related treks
        const filtered = treks.filter(trek =>
          trek.heading.toLowerCase().includes("snow") ||
          trek.heading.toLowerCase().includes("winter")
        );

        setSnowTreks(filtered);
      } catch (error) {
        console.error("Failed to fetch treks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTreks();
  }, []);

  if (loading) {
    return <div className="text-center p-10 text-gray-600">Loading Snow Treks...</div>;
  }

  // Duplicating the snowTreks to create a seamless loop
  const duplicatedSnowTreks = [...snowTreks, ...snowTreks]; // Duplicating for seamless loop

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
        <div className="scroll-track flex gap-4 overflow-x-auto scrollbar-hide">
          {duplicatedSnowTreks.map((trek, index) => (
            <div key={`${trek.id}-${index}`} className="scroll-item flex-shrink-0">
              <Card
                image={trek.bannerImages1}
                title={trek.heading}
                imageText={trek.heading}
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
