import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import GreenBanner from "../components/GreenBanner";

const PrivacyPolicy = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await axios.get(ENDPOINTS.PRIVACY);
        const rawContent = response.data?.content || "";

        // Split content into sections
        const sectionRegex = /(?=\n\d+\.\s)/g;
        const rawSections = rawContent
          .split(sectionRegex)
          .map((section) => section.trim());

        const formattedSections = rawSections.map((sectionText) => {
          const html = sectionText
            .replace(
              /^(\d+\.\s)/,
              '<strong class="text-green-600 text-lg">$1</strong>'
            )
            .replace(/\n/g, "<br />");
          return html;
        });

        setSections(formattedSections);
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
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-gray-50">
      {/* Banner */}
      <GreenBanner
        title="Privacy Policy"
        subtitle="We value your trust and privacy."
      />

      <div className="container mx-auto px-4 py-6 flex-grow">
        {/* Loading State */}
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm"
                dangerouslySetInnerHTML={{ __html: section }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
