import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import OrangeBanner from "../components/GreenBanner"; // or OrangeBanner, depending on your actual banner

const Contact = () => {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get(ENDPOINTS.CONTACT);
        setOffices(response.data || []);
      } catch (err) {
        console.error("Failed to fetch contact info:", err);
        setError("Unable to load contact information.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <div className="h-screen w-screen min-h-screen flex flex-col">
      {/* Banner */}
      <OrangeBanner
        title="Contact"
        subtitle="Life is either a daring adventure or nothing."
      />

      {/* Main Content */}
      <div className="p-8">
        {loading ? (
          <p className="text-center text-lg">Loading contact info...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white flex flex-col">
                <div className="bg-orange-100 rounded-lg shadow-md p-6 border border-gray-200">
                  <h2 className="text-lg font-semibold">{office.name}</h2>
                  <p className="text-gray-600 mt-2">{office.address}</p>
                  <p className="text-gray-600">
                    <strong>Office Timings:</strong> {office.timings}
                  </p>
                  <p className="text-orange-500 flex items-center mt-2">
                    📞 {office.phone}
                  </p>
                  {office.otherphone && (
                    <p className="text-orange-500 flex items-center mt-2">
                      📞 {office.otherphone}
                    </p>
                  )}
                  {office.mapLink && (
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 mt-4 inline-block hover:underline self-end"
                    >
                      View On Map ➜
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
