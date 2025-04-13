import React, { useState, useEffect } from "react";
import Card from "./Card";

const SnowTreks = () => {
  const [treks, setTreks] = useState(() => [
    {
      image: "/landingPage/kilimanjaro.png",
      title: "Kilimanjaro Trek",
      imageText: "Kilimanjaro Trek",
    },
    {
      image: "/landingPage/mtkenya.png",
      title: "Mount Kenya Trek",
      imageText: "Mount Kenya Trek",
    },
    {
      image: "/landingPage/rwenzori.png",
      title: "Rwenzori Trek",
      imageText: "Rwenzori Trek",
    },
    {
      image: "/landingPage/atlas.png",
      title: "Atlas Trek",
      imageText: "Atlas Trek",
    },
  ]);

  // useEffect to perform a side effect on component mount
  useEffect(() => {
    console.log("SnowTreks component mounted");
    console.log("Available treks:", treks);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-left mb-8">Snow Treks</h2>
      <p className="text-lg text-gray-700 mb-6">
        Experience the magic of winter landscapes with our guided snow treks.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {treks.map((trek, index) => (
          <Card
            key={index}
            image={trek.image}
            title={trek.title}
            imageText={trek.imageText}
          />
        ))}
      </div>
    </section>
  );
};

export default SnowTreks;
