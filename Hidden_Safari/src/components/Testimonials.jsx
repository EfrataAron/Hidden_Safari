import React, { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0); // Track the chunk of testimonials
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(ENDPOINTS.TESTIMONIALS);
        console.log("Testimonials API response:", response.data);
        
        // Check if response.data is an array, if not, check if it has a property that is an array
        let testimonialsData = response.data;
        
        if (!Array.isArray(testimonialsData)) {
          // Check if the data might be nested (common API pattern)
          if (response.data && response.data.testimonials && Array.isArray(response.data.testimonials)) {
            testimonialsData = response.data.testimonials;
          } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
            testimonialsData = response.data.data;
          } else if (response.data && typeof response.data === 'object') {
            // If it's an object but not an array, try to extract values
            testimonialsData = Object.values(response.data).filter(item => item && typeof item === 'object');
          } else {
            // If we can't find any arrays, use an empty array
            testimonialsData = [];
            throw new Error("Invalid data format received from API");
          }
        }
        
        setTestimonials(testimonialsData);
      } catch (err) {
        console.error(err);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    const nextChunk = currentChunkIndex + 1;
    if (nextChunk * 3 < testimonials.length) {
      setCurrentChunkIndex(nextChunk);
      setCurrentIndex(0); // Reset the index when changing chunks
    }
  };

  const handlePrevious = () => {
    const prevChunk = currentChunkIndex - 1;
    if (prevChunk >= 0) {
      setCurrentChunkIndex(prevChunk);
      setCurrentIndex(0); // Reset the index when changing chunks
    }
  };

  if (loading) return <p className="text-center py-8">Loading testimonials...</p>;
  if (error || testimonials.length === 0)
    return <p className="text-center text-red-500 py-8">{error || "No testimonials found."}</p>;

  // Slice the testimonials to show only the current chunk
  const currentTestimonials = testimonials.slice(currentChunkIndex * 3, (currentChunkIndex + 1) * 3);

  // If we don't have testimonials in the current chunk, return to first chunk
  if (currentTestimonials.length === 0) {
    setCurrentChunkIndex(0);
    return <p className="text-center py-8">Loading testimonials...</p>;
  }

  // Ensure currentIndex is valid for the current testimonials array
  if (currentIndex >= currentTestimonials.length) {
    setCurrentIndex(0);
    return <p className="text-center py-8">Updating display...</p>;
  }

  // Helper to display stars based on ratings
  const renderStars = (rating) => {
    if (!rating || isNaN(rating)) return "★★★★★";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = "★".repeat(fullStars) + (halfStar ? "½" : "");
    return stars;
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
        Why People ❤️ Invincible
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Experience the best with us
        </p>

        <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto">
          {/* Reviewer List */}
          <div className="w-full md:w-1/3 space-y-4 pr-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
                  index === currentIndex
                    ? "bg-green-400 text-white shadow-lg"
                    : "bg-green-200"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={testimonial.profileImage || "https://via.placeholder.com/50"}
                  alt={testimonial.name || "Reviewer"}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{testimonial.name || "Anonymous"}</h3>
                  <p className="text-sm">{testimonial.role || "Customer"}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Review Section */}
          <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <div className="text-yellow-500 text-2xl mb-4">
              {renderStars(currentTestimonials[currentIndex]?.ratings)} ({currentTestimonials[currentIndex]?.ratings || 5})
            </div>
            <p className="text-gray-700 mb-6">{currentTestimonials[currentIndex]?.review || "Great experience!"}</p>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="text-gray-600 hover:text-gray-900"
              >
                &#8592; Previous
              </button>
              <button
                onClick={handleNext}
                className="text-gray-600 hover:text-gray-900"
              >
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
