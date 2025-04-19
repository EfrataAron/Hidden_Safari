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
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-[#69372D]">{event.heading}</h1>
              <div className="text-2xl font-bold text-green-500">₹7,999</div>
            </div>
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">₹7,999 / person</h2>
              <p className="text-gray-600 mb-4">Includes</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FaUtensils className="text-green-500" />
                  </div>
                  <span>Food</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FaBed className="text-green-500" />
                  </div>
                  <span>Accommodation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FaBus className="text-green-500" />
                  </div>
                  <span>Travelling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FaMedkit className="text-green-500" />
                  </div>
                  <span>First Aid</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FaTools className="text-green-500" />
                  </div>
                  <span>Accessories</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FaChalkboardTeacher className="text-green-500" />
                  </div>
                  <span>Instructor</span>
                </div>
              </div>
              <button className="w-full bg-green-500! text-white py-3 rounded-lg mt-6 hover:bg-green-600 transition-colors font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg relative">
        <h3 className="text-xl font-bold text-green-500 mb-4">Schedule</h3>

        {/* Looping through Days */}
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div key={day} className="mb-6">
            <h4 className="text-lg font-semibold">Day {day}</h4>
            <p className="text-gray-700 font-medium">
              {day === 1 && "Londorossi Gate to Forest Camp"}
              {day === 2 && "Forest Camp to Shira Camp 1"}
              {day === 3 && "Shira Camp 1 to Moir Hut"}
              {day === 4 && "Moir Hut to Lava Tower to Barranco Camp"}
              {day === 5 && "Barranco Camp to Karanga Camp"}
              {day === 6 && "Karanga Camp to Barafu Camp"}
              {day === 7 && "Barafu Camp to Summit to Mweka Hut"}
            </p>
            <p className="text-gray-500 text-sm">
              Elevation: {day === 1 ? "7,800ft to 9,500ft" :
                day === 2 ? "9,500ft to 11,500ft" :
                  day === 3 ? "11,500ft to 13,800ft" :
                    day === 4 ? "13,800ft to 15,190ft" :
                      day === 5 ? "13,000ft to 13,100ft" :
                        day === 6 ? "13,100ft to 15,300ft" :
                          "15,300ft to 19,345ft (and down to 10,000ft)"}
            </p>
            <p className="text-gray-500 text-sm">
              Distance: {day === 1 ? "6 km" :
                day === 2 ? "8 km" :
                  day === 3 ? "14 km" :
                    day === 4 ? "12 km" :
                      day === 5 ? "5 km" :
                        day === 6 ? "4 km" :
                          "5 km ascent / 12 km descent"}
            </p>
            <p className="text-gray-500 text-sm">
              Hiking Time: {day === 1 ? "3-4 hours" :
                day === 2 ? "5-6 hours" :
                  day === 3 ? "5-7 hours" :
                    day === 4 ? "6-7 hours" :
                      day === 5 ? "4-5 hours" :
                        day === 6 ? "3-4 hours" :
                          "7-8 hours ascent / 4-6 hours descent"}
            </p>

            <p className="text-gray-500 text-sm">
              Habitat: {day === 1 ? "Rain Forest" :
                day === 2 ? "Moorland" :
                  day === 3 ? "Moorland" :
                    day === 4 ? "Alpine Desert" :
                      day === 5 ? "Alpine Desert" :
                        day === 6 ? "Alpine Desert" :
                          "Arctic to Moorland"}
            </p>
            <p className="text-gray-600 mt-2">
              {day === 1 ? (
                "We'll depart Moshi for Londorossi Gate, taking about 4 hours. Here you will complete the entry formalities. Then you'll drive to the Lemosho trailhead (another hour to reach the trailhead). Upon arrival at the trailhead, we'll eat lunch, and then commence through the undisturbed forest which winds to the first campsite."
              ) : day === 2 ? (
                "We'll continue on the trail leading out of the forest and into a savannah of tall grasses, heather, and volcanic rock draped with lichen beards. As we ascend through the lush rolling hills and cross several streams, we will reach the Shira Ridge before dropping gently down to Shira 1 Camp. The view of Kibo from across the plateau is amazing."
              ) : day === 3 ? (
                "We explore the Shira plateau for a full day. It is a gentle walk east toward Kibo's glaciered peak, across the plateau which leads to Shira 2 Camp on moorland meadows by a stream. Then we'll continue to Moir Hut, a little-used site on the base of Lent Hills. A variety of walks are available on Lent Hills making this an excellent acclimatization opportunity. Shira is one of the highest plateaus on earth."
              ) : day === 4 ? (
                "From the Shira Plateau, we continue to the east up a ridge, passing the junction towards the peak of Kibo. As we continue, our direction changes to the southeast towards the Lava Tower, called the 'Shark's Tooth.' Shortly after the tower, we come to the second junction which brings us up to the Arrow Glacier at an altitude of 16,000ft. We now continue down to the Barranco Hut at an altitude of 13,000ft. Here we rest, enjoy dinner, and overnight. Although you end the day at the same elevation as when you started, this day is very important for acclimatization."
              ) : day === 5 ? (
                "After breakfast, we'll leave Barranco and continue on a steep ridge passing the Barranco Wall, to the Karanga Valley Campsite. Then, we will leave Karanga and hit the junction which connects to the Mweka Trail. We'll continue up to the Barafu Hut. At this point, you have completed the South Circuit, which offers views of the summit from many different angles. Here we'll make camp, rest, enjoy dinner, and prepare for the summit day. The two peaks of Mawenzi and Kibo are to be seen from this position."
              ) : day === 6 ? (
                "This is a short day meant for acclimatization and rest. We'll have a leisurely breakfast followed by a short hike to the Kosovo Camp. The afternoon will be spent resting and preparing for the summit attempt. Early dinner will be served to allow for maximum rest before the midnight wake-up call for the summit push."
              ) : (
                <>
                  Early morning, we'll continue our way to the summit between the Rebmann and Ratzel glaciers. You head in a northwesterly direction and ascend through heavy scree towards Stella Point on the crater rim. This is the most mentally and physically challenging portion of the trek.
                  <div className="mt-4">
                    <p className="font-semibold">End of tour</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Additional accommodation can be arranged for an extra cost.</li>
                      <li>You'll be dropped off at the airport.</li>
                    </ul>
                  </div>
                </>
              )}
            </p>

            {/* Conditional rendering for image: Applies only to days 1-6 */}
            {day <= 6 && (
              <img
                src={`/detailpage/day${day}.png`} 
                alt={`Image for day ${day}`}
                className="mt-4 rounded-lg shadow-lg object-cover"
                width="702"
                height="468"
              />
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Detail;