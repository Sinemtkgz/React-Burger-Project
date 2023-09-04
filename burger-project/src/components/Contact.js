import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name / Last Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your first and last name"
          />

          <label>E-Mail : </label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your E-mail"
          />

          <label>Message : </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Please enter your message"
          ></textarea>
          <button>SUBMİT</button>
        </form>
      </div>
    </div>
  );
};
