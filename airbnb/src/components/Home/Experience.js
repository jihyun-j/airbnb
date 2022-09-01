import React from "react";
import "./Experience.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Experience = function () {
  return (
    <div className="experience-container">
      <div className="experience-card first">
        <div className="experience-card">
          <small className="experience-small">Collection</small>
          <p className="experience-title">Most popular around the world</p>
          <div className="btn-container">
            <a href="#" className="btn-showmore">
              Show more
            </a>
            <HiArrowNarrowRight className="icon-right-arrow" />
          </div>
        </div>
      </div>

      <div className="experience-card second">
        <div className="experience-card">
          <small className="experience-small">Collection</small>
          <p className="experience-title">Great for team building</p>
          <div className="btn-container">
            <a href="#" className="btn-showmore">
              Show more
            </a>
            <HiArrowNarrowRight className="icon-right-arrow" />
          </div>
        </div>
      </div>

      <div className="experience-card third">
        <div className="experience-card">
          <small className="experience-small">Collection</small>
          <p className="experience-title">Fun for family</p>
          <div className="btn-container">
            <a href="#" className="btn-showmore">
              Show more
            </a>
            <HiArrowNarrowRight className="icon-right-arrow" />
          </div>
        </div>
      </div>

      <div className="experience-card fourth">
        <div className="experience-card">
          <small className="experience-small">Collection</small>
          <p className="experience-title">Murder Mystery Escape Room Game</p>
          <div className="btn-container">
            <a href="#" className="btn-showmore">
              Show more
            </a>
            <HiArrowNarrowRight className="icon-right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
