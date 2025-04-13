import React, { useEffect, useState } from "react";
import GreenBanner from "../components/GreenBanner";
import { ENDPOINTS } from "../assets/EndPoints"; // Adjust the path accordingly

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(ENDPOINTS.TEAM); // Use the endpoint from ENDPOINTS.js
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeamMembers(data); // Assuming the array of team members is in the response body
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <GreenBanner
        title="Our Team"
        subtitle="Meet the heroes behind our Success"
      />

      <div className="w-full p-6">
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading team members...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">Error loading team members: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-2">
                  <img
                    src={member.profileImage || "/default.png"} // Use profileImage directly
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default.png"; // Fallback to default image if the member's image fails to load
                    }}
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
