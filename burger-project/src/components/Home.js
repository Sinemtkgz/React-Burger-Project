import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bannerback.jpg";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link>
          <button>ORDER !</button>
        </Link>
      </div>
    </div>
  );
};
