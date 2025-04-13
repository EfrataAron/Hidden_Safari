// components/Testimonials.js
import React, { useState } from "react";

const testimonials = [
  {
    name: "Milton Austin",
    role: "Sales Manager, ABC",
    review:
      "This trekking organization is excellent. Their costs are minimal due to their NGO’s non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and balanced.",
    rating: "★★★★★",
    image: "./william.png", // Replace with actual image URL
  },
  {
    name: "Annie",
    role: "Head of Sales, ABC",
    review:
      "The trekking experience was amazing! The guides were knowledgeable, and the scenery was breathtaking. I highly recommend this organization for anyone looking for an affordable and memorable adventure.",
    rating: "★★★★★",
    image: "./emily.png", // Replace with actual image URL
  },
  {
    name: "Sandra",
    role: "Head of Sales, ABC",
    review:
      "I had an incredible time trekking with this organization. The food was delicious, the guides were friendly, and the overall experience was top-notch. I will definitely be returning for another adventure!",
    rating: "★★★★★",
    image: "./hana.png", // Replace with actual image URL
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Why People 💬 Invincible
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Experience the best with us
        </p>

        {/* Testimonial Layout */}
        <div className=" flex flex-col md:flex-row items-start max-w-6xl mx-auto">
          {/* Reviewer List (Left Side) */}
          <div className=" w-full md:w-1/3 space-y-4 pr-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-orange-100 flex items-center p-4 rounded-lg cursor-pointer ${
                  index === currentIndex ? "bg-red-400 shadow-md" : "bg-gray-50"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Review (Right Side) */}
          <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
            {/* Rating */}
            <div className="text-yellow-500 text-2xl mb-4">
              {currentTestimonial.rating}
            </div>

            {/* Review Text */}
            <p className=" text-gray-700 mb-6">{currentTestimonial.review}</p>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center">
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