// HighlightedEvents.js
import React, { useState } from "react";
import Card from "./Card";
import { FaBus, FaUtensils, FaCampground, FaHiking, FaPlusSquare } from 'react-icons/fa';

const HighlightedEvents = () => {
  const [events, setEvents] = useState(() => [
    {
      image: "/landingPage/kilimanjaro.png",
      // title: "Kilimanjaro",
      imageText: "Kilimanjaro",
      icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
    },
    {
      image: "/landingPage/madagascar.png",
      // title: "Madagascar",
      imageText: "Madagascar",
      icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
    },
    {
      image: "/landingPage/capetown.png",
      // title: "Cape Town",
      imageText: "Cape Town",
      icons: [<FaBus />, <FaUtensils />, <FaCampground />, <FaHiking />, <FaPlusSquare />],
    },
  ]);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-2">Highlighted Events</h2>
      <h3 className="text-lg text-gray-700 mb-6">Recommended camps by our Instructors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card
            key={index}
            image={event.image}
            // title={event.title}
            imageText={event.imageText}
            icons={event.icons}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightedEvents;