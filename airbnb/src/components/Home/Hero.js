import React from "react";
import "./Hero.css";

const Hero = function () {
  return (
    <div className="hero-container">
      <h2 className="hero-cta">Find places to stay on Airbnb</h2>
      <p className="hero-explain">
        Discover entire homes and private rooms perfect for any trip.
      </p>
      <button className="hero-btn">Explore</button>
    </div>
  );
};
export default Hero;
