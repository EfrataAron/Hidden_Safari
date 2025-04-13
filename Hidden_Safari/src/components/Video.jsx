// components/Video.js
import React from "react";

const Video = ({ media, title, description, imageText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Video or YouTube Embed */}
      <div className="relative">
        {/* Local Video */}
        {media.type === "video" && (
            <video className="w-full h-48 object-cover" controls autoPlay muted loop>
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        )}

        {/* YouTube Embed */}
        {media.type === "youtube" && (
          <iframe
            className="w-full h-48"
            src={`https://www.youtube.com/embed/${media.videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {/* Overlay Text */}
        {imageText && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-30">
            <h2 className="text-2xl font-bold text-white">{imageText}</h2>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {/* Title */}
        {title && <div className="font-bold text-xl mb-2">{title}</div>}

        {/* Description */}
        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Video;