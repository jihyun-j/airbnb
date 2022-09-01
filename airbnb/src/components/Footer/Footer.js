import React from "react";
import "./Footer.css";
import { HiGlobeAlt } from "react-icons/hi";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = function () {
  return (
    <footer className="footer-container">
      <div className="footer-upper">
        <div className="footer-each">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">AirCover</a>
          <a href="#">Safety information</a>
          <a href="#">Supporting people with disabilities</a>
          <a href="#">Cancellation options</a>
          <a href="#">Our COVID-19 Response</a>
          <a href="#">Report a neighborhood concern</a>
        </div>

        <div className="footer-each">
          <h4>Community</h4>
          <a href="#">Airbnb.org: disaster relief housing</a>
          <a href="#">Support Afghan refugees</a>
          <a href="#">Combating discrimination</a>
        </div>

        <div className="footer-each">
          <h4>Hosting</h4>
          <a href="#">Try hosting</a>
          <a href="#">AirCover for Hosts</a>
          <a href="#">Explore hosting resources</a>
          <a href="#">Visit our community forum</a>
          <a href="#">How to host responsibly</a>
        </div>

        <div className="footer-each">
          <h4>Airbnb</h4>
          <a href="#">Newsroom</a>
          <a href="#">Learn about new features</a>
          <a href="#">Letter from our founders</a>
          <a href="#">Careers</a>
          <a href="#">Investors</a>
          <a href="#">Gift cards</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2022 Airbnb · Privacy · Terms · Sitemap</p>
        <p className="logo-container">
          <HiGlobeAlt />
          English(US) $USD
          <IoLogoTwitter />
          <IoLogoFacebook />
          <IoLogoInstagram />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
