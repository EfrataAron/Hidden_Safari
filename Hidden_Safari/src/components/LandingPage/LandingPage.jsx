import React from "react";
import Navbar from "./navbar";
// import HeroSection from "./HeroSection";
// import HighlightedPlaces from "./HighlightedPlaces";
// import Activities from "./Activities";
// import HikingTrails from "./HikingTrails";
// import MoreActivities from "./MoreActivities";
// import SpecialEvents from "./SpecialEvents";
// import ExperienceSharing from "./ExperienceSharing";
// import Testimonials from "./Testimonials";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <HighlightedPlaces />
      <Activities />
      <HikingTrails />
      <MoreActivities />
      <SpecialEvents />
      <ExperienceSharing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
