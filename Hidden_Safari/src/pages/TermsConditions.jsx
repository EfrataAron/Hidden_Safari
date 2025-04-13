import React, { useState, useEffect } from "react";
import OrangeBanner from "../components/GreenBanner";
import { ENDPOINTS } from "../assets/EndPoints";

const TermsConditions = () => {
  const [terms, setTerms] = useState({
    title: "Terms and Conditions",
    subtitle: "Meet the heroes behind our Success",
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      setLoading(true);
      try {
        const response = await fetch(ENDPOINTS.TERMS);
        if (!response.ok) {
          throw new Error("Failed to fetch terms");
        }
        const data = await response.json();
        setTerms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="h-screen w-screen min-h-screen flex flex-col">
      {/* Orange Banner Section */}
      <OrangeBanner
        title={terms.title}
        subtitle={terms.subtitle}
      />

      {/* Content Section */}
      <div className="container mx-auto p-6 flex-grow overflow-auto"> {/* Added overflow-auto here */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {loading ? (
            <p>Loading Terms and Conditions...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div
              className="text-gray-700 text-sm"
              dangerouslySetInnerHTML={{ __html: terms.content }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
