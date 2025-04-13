import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMountain, FaUsers } from 'react-icons/fa';
import { MdTerrain } from 'react-icons/md';
import { FaUtensils, FaBed, FaBus, FaMedkit, FaTools, FaChalkboardTeacher } from 'react-icons/fa';
import Navbar from "../components/navbar";

// import IMAGES from './detailpage/mountain';
import Footer from "../components/Footer";
import "../components/styles.css";

const Detail = () => {
  return (
    <div className="w-screen h-screen">
      {/* Navigation Bar */}
      <Navbar title="HiddenSafari" />

   

      {/* Main Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Event Details Section - Left */}
          <div className="w-2/3 p-6">
            <p className="text-2xl font-bold text-[#69372D]">Highlighted Events</p>
            <p className="text-lg text-[#69372D]">Embark on an unforgettable adventure <br /> Kilimanjaro</p>

            {/* Info Icons */}
            <div className="flex flex-wrap space-x-6 mt-4 text-[#69372D]">
              <div className="flex items-center">
                <FaRegCalendarAlt className="mr-2 text-xl" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p>6 Days / 5 Nights</p>
                </div>
              </div>
              <div className="flex items-center">
                <MdTerrain className="mr-2 text-xl" />
                <div>
                  <p className="font-semibold">Difficulty</p>
                  <p>Easy to Moderate</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-2 text-xl" />
                <div>
                  <p className="font-semibold">Age Group</p>
                  <p>15 to 35 years</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMountain className="mr-2 text-xl" />
                <div>
                  <p className="font-semibold">Max Altitude</p>
                  <p>5,895 meters</p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <h3 className="mt-4 text-lg font-semibold text-black">About</h3>
            <p className="mt-2 text-gray-600">
              Mount Kilimanjaro, the highest peak in Africa, stands tall at 5,895 meters (19,341 feet) above sea level. Located in Tanzania,
              this iconic free-standing mountain is a dream destination for adventurers and nature enthusiasts.
            </p>
          </div>

          {/* Pricing Card - Right */}
          <div className="w-1/3 bg-white shadow-lg rounded-lg p-6 ml-6">
            <h3 className="text-xl font-bold text-gray-800">₹7,999 / person</h3>
            <p className="text-gray-600 font-semibold mt-2">Includes:</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center text-gray-700"><FaUtensils className="mr-2 text-orange-500" /> Food</div>
              <div className="flex items-center text-gray-700"><FaBed className="mr-2 text-orange-500" /> Accommodation</div>
              <div className="flex items-center text-gray-700"><FaBus className="mr-2 text-orange-500" /> Travelling</div>
              <div className="flex items-center text-gray-700"><FaMedkit className="mr-2 text-orange-500" /> First Aid</div>
              <div className="flex items-center text-gray-700"><FaTools className="mr-2 text-orange-500" /> Accessories</div>
              <div className="flex items-center text-gray-700"><FaChalkboardTeacher className="mr-2 text-orange-500" /> Instructor</div>
            </div>
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600">Book Now</button>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg relative">
        <h3 className="text-xl font-bold text-orange-500 mb-4">Schedule</h3>

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
      {/* Footer Section */}
      <Footer />
</div>
 );

};



export default Detail;