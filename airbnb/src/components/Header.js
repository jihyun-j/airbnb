import { React, useState, useEffect, useRef } from "react";
import { HiOutlineHeart, HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "./Search";

const Header = function () {
  const [openSearch, setOpenSearch] = useState(false);

  // Open Search Handler
  const openSearchHandler = function () {
    setOpenSearch(true);
  };

  // Close Search bar when click outside of search bar
  const menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenSearch(false);
      }
    });
  });

  return (
    <div>
      {!openSearch && (
        <header>
          <div className="header-container">
            <Link to="/">
              <img
                src="./img/Airbnb-logo.jpeg"
                alt=""
                className="airbnb-logo"
              />
            </Link>
            <div className="header-center__search" onClick={openSearchHandler}>
              <p className="header-center__text">Anywhere</p>
              <p className="header-center__text">Any week</p>
              <p className="header-center__text gray--text">Add guests</p>
              <HiOutlineSearch className="search-icon__outline" />
            </div>

            <HiOutlineHeart className="heart-icon__outline" />
          </div>
        </header>
      )}

      <div ref={menuRef}>{openSearch && <Search />}</div>
    </div>
  );
};

export default Header;
