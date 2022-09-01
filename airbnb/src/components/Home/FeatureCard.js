import React from "react";
import "./FeatureCard.css";
import { HiStar, HiOutlineHeart } from "react-icons/hi";

const FeatureCard = function (props) {
  return (
    <div className="feature-container">
      <div className="feature-card">
        <img className="feature-img" src={props.items[0].image} alt="" />
        <div className="feature-title-rating">
          <span className="feature-title">{props.items[0].title}</span>
          <span className="feature-ratinge">
            <HiStar className="star-icon" />
            {props.items[0].rating}
          </span>
        </div>
        <p className="feature-date">{props.items[0].date}</p>
        <p className="feature-price">{props.items[0].price} night</p>
      </div>

      <div className="feature-card">
        <img className="feature-img" src={props.items[1].image} alt="" />
        <div className="feature-title-rating">
          <span className="feature-title">{props.items[1].title}</span>
          <span className="feature-ratinge">
            <HiStar className="star-icon" />
            {props.items[1].rating}
          </span>
        </div>
        <p className="feature-date">{props.items[1].date}</p>
        <p className="feature-price">{props.items[1].price} night</p>
      </div>

      <div className="feature-card">
        <img className="feature-img" src={props.items[2].image} alt="" />
        <div className="feature-title-rating">
          <span className="feature-title">{props.items[2].title}</span>
          <span className="feature-ratinge">
            <HiStar className="star-icon" />
            {props.items[2].rating}
          </span>
        </div>
        <p className="feature-date">{props.items[2].date}</p>
        <p className="feature-price">{props.items[2].price} night</p>
      </div>

      <div className="feature-card">
        <div className="img-container">
          <img className="feature-img" src={props.items[3].image} alt="" />
          <HiOutlineHeart className="heart-outlined" />
        </div>
        <div className="feature-title-rating">
          <span className="feature-title">{props.items[3].title}</span>
          <span className="feature-ratinge">
            <HiStar className="star-icon" />
            {props.items[3].rating}
          </span>
        </div>
        <p className="feature-date">{props.items[3].date}</p>
        <p className="feature-price">{props.items[3].price} night</p>
      </div>
    </div>
  );
};

export default FeatureCard;
