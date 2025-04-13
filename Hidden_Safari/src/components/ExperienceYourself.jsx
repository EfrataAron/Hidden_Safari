import React, { useState } from "react";
import Video from "./Video"; // Import the Video component

const ExperienceYourself = () => {
  // Initializing items using useState
  const [items, setItems] = useState(() => [
    {
      media: { type: "youtube", videoId: "dzA4h-jHryQ" }, // YouTube video ID
      title: "Camp 1",
      description: "Exclusive footage from Camp 1.",
    },
    {
      media: { type: "youtube", videoId: "-IkEMMKSqcw&pp=ygUGdHJhdmVs" }, // YouTube video ID
      title: "Camp 2",
      description: "Exclusive footage from Camp 2.",
    },
    {
      media: { type: "video", url: "https://www.example.com/video3.mp4" }, // Local video URL
      title: "Camp 3",
      description: "Exclusive footage from Camp 3.",
    },
  ]);

  return (
    <section className="bg-red-100 container mx-auto p-4">
      {/* Heading and Description */}
      <h2 className="text-3xl font-bold text-left mb-4">Experience Yourself</h2>
      <p className="text-lg text-gray-600 text-left mb-8">
        Exclusive footage from our camps
      </p>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Video
            key={index}
            media={item.media} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceYourself;
