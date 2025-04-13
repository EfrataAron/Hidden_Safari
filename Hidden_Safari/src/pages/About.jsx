import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import OrangeBanner from "../components/GreenBanner"; // Rename to match your banner if needed

const About = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(ENDPOINTS.ABOUT);
        setContent(response.data?.content || "No content found.");
      } catch (err) {
        console.error("Failed to fetch About content:", err);
        setError("Could not load About Us content.");
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 min-h-screen">
      {/* Banner */}
      <OrangeBanner title="About Us" subtitle="Who we are & where do we stand" />

      {/* Content */}
      <div className="p-6 bg-white shadow-md mt-6 rounded-lg max-w-4xl mx-auto">
        {loading ? (
          <p className="text-center text-lg">Loading about us...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
};

export default About;
