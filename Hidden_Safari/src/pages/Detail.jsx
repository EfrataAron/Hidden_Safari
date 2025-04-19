import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMountain, FaUsers } from 'react-icons/fa';
import { MdTerrain } from 'react-icons/md';
import { FaUtensils, FaBed, FaBus, FaMedkit, FaTools, FaChalkboardTeacher } from 'react-icons/fa';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { ENDPOINTS } from "../assets/EndPoints";
import "../components/styles.css";

const Detail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(ENDPOINTS.EVENT_DETAIL(eventId));
        setEvent(response.data);
      } catch (err) {
        setError("Error fetching event details");
        console.error("Error fetching event details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <Navbar title="HiddenSafari" />
        <div className="container mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="w-screen h-screen">
        <Navbar title="HiddenSafari" />
        <div className="container mx-auto p-6 text-red-500">
          {error || "Event not found"}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <Navbar title="HiddenSafari" />

      {/* Main Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Event Details Section - Left */}
          <div className="w-full md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-[#69372D] mb-4">{event.heading}</h1>
            <p className="text-lg text-gray-700 mb-6">{event.about}</p>
            
            {/* Event Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <FaRegCalendarAlt className="text-green-500 mr-2" />
                <span>{event.calendarDates}</span>
              </div>
              <div className="flex items-center">
                <FaMountain className="text-green-500 mr-2" />
                <span>{event.numberOfDays} Days</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-green-500 mr-2" />
                <span>Group Size: {event.groupSize || 'N/A'}</span>
              </div>
            </div>

            {/* Event Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {event.bannerImages1 && (
                <img src={event.bannerImages1} alt={event.heading} className="w-full h-64 object-cover rounded-lg" />
              )}
              {event.bannerImages2 && (
                <img src={event.bannerImages2} alt={event.heading} className="w-full h-64 object-cover rounded-lg" />
              )}
            </div>

            {/* Event Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <FaUtensils className="text-green-500 mr-2" />
                  <span>Meals</span>
                </div>
                <div className="flex items-center">
                  <FaBed className="text-green-500 mr-2" />
                  <span>Accommodation</span>
                </div>
                <div className="flex items-center">
                  <FaBus className="text-green-500 mr-2" />
                  <span>Transport</span>
                </div>
                <div className="flex items-center">
                  <FaMedkit className="text-green-500 mr-2" />
                  <span>First Aid</span>
                </div>
                <div className="flex items-center">
                  <FaTools className="text-green-500 mr-2" />
                  <span>Equipment</span>
                </div>
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-green-500 mr-2" />
                  <span>Expert Guide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card - Right */}
          <div className="w-full md:w-1/3 p-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Event Pricing</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span className="font-semibold">₹{event.price || 'Contact for pricing'}</span>
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;