import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ import this
import { ENDPOINTS } from "../assets/EndPoints";
import Card from "./Card";

const EpicAdventure = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const response = await axios.get(ENDPOINTS.ADVENTURES);
        setAdventures(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdventures();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
        <p>Loading adventures...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
        <p className="text-red-500">Error fetching adventures: {error.message}</p>
      </section>
    );
  }

  // Duplicate for infinite scroll effect (optional use)
  const duplicatedAdventures = [...adventures, ...adventures];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience thrilling expeditions across Africa and beyond.
      </p>

      <div className="scroll-wrapper relative overflow-hidden">
        {/* Fade effect on left */}
        <div className="fade-left"></div>

        {/* Scrollable content container */}
        <div className="scroll-track">
          {duplicatedAdventures.map((adventure, index) => (
            <div
              key={`${adventure.id}-${index}`}
              className="scroll-item flex items-center justify-center cursor-pointer"
              onClick={() => navigate(`/detail/${adventure.id}`)} // ✅ navigate to detail
            >
              <Card
                image={adventure.bannerImages1}
                title={adventure.heading}
                buttonText="Explore"
                imageText={adventure.heading}
              />
            </div>
          ))}
        </div>

        {/* Fade effects */}
        <div className="fade-right"></div>
        <div className="fade-top"></div>
        <div className="fade-bottom"></div>
      </div>
    </section>
  );
};

export default EpicAdventure;
