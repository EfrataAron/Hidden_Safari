import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import HighlightedEvents from "./components/HighlightedEvents";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import SnowTreks from "./components/SnowTreks";
import SummerEvents from "./components/SummerEvents";
import MonsoonEvents from "./components/MonsoonEvents";
import EpicAdventure from "./components/EpicAdventure";
import SpecialEvents from "./components/SpecialEvents";
import ExperienceYourself from "./components/ExperienceYourself";
import About from "./pages/About";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Detail from "./pages/Detail";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login";
import Profile from "./pages/Profile"; 

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect from root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <>
              <HeroSection />
              <HighlightedEvents />
              <SnowTreks />
              <SummerEvents />
              <MonsoonEvents />
              <EpicAdventure />
              <SpecialEvents />
              <ExperienceYourself />
              <Testimonials />
            </>
          }
        />

        {/* Public Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/detail/:eventId" element={<Detail />} />
        
        {/* Contact Routes with Nested Routing */}
        <Route path="/contact" element={<Contact />}/>
          {/* <Route path="support" element={<Support />} /> */}
          
          {/* <Route path="feedback" element={<Feedback />} /> */}
        {/* </Route> */}

        
            {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/team" element={<ProtectedRoute component={<Team />} />} />
        <Route path="/events" element={<ProtectedRoute component={<Events />} />} />
        <Route path="/profile" element={<ProtectedRoute component={<Profile />} />} /> 
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
