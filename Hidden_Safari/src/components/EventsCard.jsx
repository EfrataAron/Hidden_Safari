import React from "react";

/**
 * EventsCard - A standardized card component for displaying events
 * 
 * @param {string} image - URL of the event image
 * @param {string} imageText - Text to display over the image (usually event title)
 * @param {Array} icons - Array of icon components to show at the bottom of the card
 * @param {string} eventId - Unique identifier for the event (for navigation)
 */
const EventsCard = ({ image, imageText, icons, eventId }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      {/* Image with Overlay Text */}
      <div className="relative">
        {/* Image */}
        <img className="w-full h-48 object-cover" src={image} alt={imageText} />

        {/* Overlay Text */}
        {imageText && (
          <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white drop-shadow-md text-center px-4">{imageText}</h2>
          </div>
        )}
      </div>

      {/* Icons - only if provided */}
      {icons && (
        <div className="px-6 py-2 flex justify-center space-x-3 bg-transparent">
          {icons.map((icon, index) => (
            <span
              key={index}
              className="text-lg text-gray-700 hover:text-orange-500 transition"
            >
              {icon}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsCard; 