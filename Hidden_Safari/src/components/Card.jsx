// // components/Card.js
// import React from "react";

// const Card = ({ image, title, description, imageText, icons }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//       {/* Image with Overlay Text */}
//       <div className="relative">
//         {/* Image */}
//         <img className="w-full h-48 object-cover" src={image} alt={title} />

//         {/* Overlay Text */}
//         {imageText && (
//           <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-10">
//             <h2 className="text-2xl font-bold text-white">{imageText}</h2>
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="px-6 py-4">
//         {/* Title */}
//         {title && <div className="font-bold text-xl mb-2">{title}</div>}

//         {/* Description */}
//         {description && (
//           <p className="text-gray-700 text-base">{description}</p>
//         )}
//       </div>

//       {/* Icons */}
//       {icons && (
//         <div className="px-6 py-2 flex justify-center space-x-2" style={{ background: 'transparent' }}> {/* Transparent container */}
//           {icons.map((icon, index) => (
//             <span key={index} className="text-lg" style={{ background: 'transparent' }}>{icon}</span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = ({ image, title, description, imageText, icons }) => {
  return (
    <div className=" max-w-sm rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      {/* Image with Overlay Text */}
      <div className="relative">
        {/* Image */}
        <img className="w-full h-48 object-cover" src={image} alt={title} />

        {/* Overlay Text */}
        {imageText && (
          <div className="absolute inset-0 bg-black bg-transparent bg-opacity-10 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white drop-shadow-md text-center px-4">{imageText}</h2>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {/* Title */}
        {title && (
          <div className="font-semibold text-lg text-gray-800 mb-2">
            {title}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        )}
      </div>

      {/* Icons */}
      {icons && (
        <div className="px-6 pb-4 flex justify-center space-x-3">
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

export default Card;
