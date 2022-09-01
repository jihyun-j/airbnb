import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import { HiOutlineHeart, HiOutlineSearch } from "react-icons/hi";
import GuestCard from "./GuestCard";
import "./Search.css";

// Date Picker library
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Search = function () {
  const [destination, setDestination] = useState("");
  // Date Picker
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Hide Search bar
  const [hideSearch, setHideSearch] = useState(true);

  // Show DatePicker Handler
  const [showDate, setShowDate] = useState(false);
  const showDateHandler = function () {
    setShowDate(!showDate);
    setShowGuest(false);
  };

  // Show Guest Handler
  const [showGuest, setShowGuest] = useState(false);
  const showGuestHandler = function () {
    setShowGuest(!showGuest);
    setShowDate(false);
  };

  // Guest Counter
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [pet, setPet] = useState(0);

  // Adult Counter
  const addAdult = function () {
    setAdult((adult) => adult + 1);
  };

  const subtractAdult = function () {
    if (adult === 0) {
      setAdult(0);
    } else {
      setAdult((adult) => adult - 1);
    }
  };

  // Children Counter
  const addChildren = function () {
    setChildren((children) => children + 1);
  };

  const subtractChildren = function () {
    if (children === 0) {
      setChildren(0);
    } else {
      setChildren((children) => children - 1);
    }
  };

  // Infant Counter
  const addInfant = function () {
    setInfant((infant) => infant + 1);
  };

  const subtractInfant = function () {
    if (infant === 0) {
      setInfant(0);
    } else {
      setInfant((infant) => infant - 1);
    }
  };

  // Pets Counter
  const addPet = function () {
    setPet((pet) => pet + 1);
  };

  const subtractPet = function () {
    if (pet === 0) {
      setPet(0);
    } else {
      setPet((pet) => pet - 1);
    }
  };
  // Move to home screen

  // Search Handler
  const history = useHistory();
  const searchHandler = function () {
    setShowGuest(!showGuest);
    setShowDate(false);
    setHideSearch(false);

    history.push("/results", {
      destination,
      date,
      adult,
      children,
      infant,
      pet,
    });
  };

  return (
    <section className="seach-box">
      <div className="search-container">
        <Link to="/">
          <img src="./img/Airbnb-logo.jpeg" alt="" className="airbnb-logo" />
        </Link>
        <div className="search-center__container">
          <p className="search-text unerline">Stays</p>
          <p className="search-text">Experiences</p>
          <p className="search-text">Online Experiences</p>
        </div>
        <HiOutlineHeart className="heart-icon__outline"></HiOutlineHeart>
      </div>

      {hideSearch && (
        <div className="search-input__container">
          <div className="input-container">
            <label htmlFor="where">Where</label>
            <input
              type="text"
              id="where"
              placeholder="Search destinations"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="input-container" onClick={showDateHandler}>
            <label htmlFor="date">Date</label>
            <div>
              <span className="check-in">
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} -{" "}
              </span>

              <span className="check-out">
                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
            </div>
          </div>

          <div className="input-container" onClick={showGuestHandler}>
            <label htmlFor="who">Who</label>
            <div className="guest">{`Adult ${adult} / Children ${children} / Infents ${infant} / Pet ${pet}`}</div>
          </div>

          <button className="btn-search" onClick={searchHandler}>
            <HiOutlineSearch /> Search
          </button>
        </div>
      )}

      <div className="card-place">
        <div>
          {showDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date-pick"
              rangeColors={["#FD5B61"]}
            />
          )}

          {showGuest && (
            <div className="guest-container">
              <GuestCard
                guestType="Adult"
                guestNum={adult}
                addGuest={addAdult}
                subGuest={subtractAdult}
                guestDesc="Ages 13 or above"
              />
              <GuestCard
                guestType="Children"
                guestNum={children}
                addGuest={addChildren}
                subGuest={subtractChildren}
                guestDesc="Ages 2-12"
              />
              <GuestCard
                guestType="Infant"
                guestNum={infant}
                addGuest={addInfant}
                subGuest={subtractInfant}
                guestDesc="Under 2"
              />
              <GuestCard
                guestType="Pet"
                guestNum={pet}
                addGuest={addPet}
                subGuest={subtractPet}
                guestDesc="Bring a service animal?"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Search;
