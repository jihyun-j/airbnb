import React from "react";
import "./GuestCard.css";

const GuestCard = function (props) {
  return (
    <div className="guest-each">
      <div className="guest-age-container">
        <p className="guest-title">{props.guestType}</p>
        <small className="guest-description">{props.guestDesc}</small>
      </div>

      <div className="guest-btn-container">
        <button className="btn-subtract" onClick={props.subGuest}>
          -
        </button>
        <p className="guest-count">{props.guestNum}</p>
        <button className="btn-plus" onClick={props.addGuest}>
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCard;
