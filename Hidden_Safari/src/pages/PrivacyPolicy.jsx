import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import GreenBanner from "../components/GreenBanner"; // You can rename to OrangeBanner if needed

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await axios.get(ENDPOINTS.PRIVACY);
        // Assuming API returns { content: "<html content here>" }
        setContent(response.data?.content || "");
      } catch (err) {
        setError("Failed to load privacy policy. Please try again later.");
        console.error("Privacy Policy fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  return (
    <div className="h-screen w-screen min-h-screen flex flex-col">
      {/* Header */}
      <GreenBanner
        title="Privacy Policy"
        subtitle="We value your trust and privacy."
      />

      <div className="container mx-auto p-6 flex-grow">
        {loading ? (
          <p className="text-center text-lg">Loading privacy policy...</p>
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

export default PrivacyPolicy;
