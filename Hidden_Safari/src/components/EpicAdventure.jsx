import React, { useState } from "react";
import Card from "./Card";

const EpicAdventure = () => {
  // Initializing adventures directly in useState
  const [adventures, setAdventures] = useState(() => [
    {
      image: "/landingPage/kiltrek.png",
      title: "Kilimanjaro Trek",
      imageText: "KILIMANJARO",
      buttonText: "Explore",
    },
    {
      image: "/landingPage/hwange.png",
      title: "Hwange Park",
      imageText: "HWANGE PARK",
      buttonText: "Visit",
    },
    {
      image: "/landingPage/botswana.png",
      title: "Botswana",
      imageText: "BOTSWANA",
      buttonText: "Discover",
    },
  ]);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Epic Adventure</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adventures.map((adventure, index) => (
          <Card
            key={index}
            image={adventure.image}
            title={adventure.title}
            buttonText={adventure.buttonText}
            imageText={adventure.imageText}
          />
        ))}
      </div>
    </section>
  );
};

export default EpicAdventure;
