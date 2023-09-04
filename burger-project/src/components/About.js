import React from "react";
import BannerImage from "../assets/bannerback.jpg";
import "../styles/About.css";
export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem
          eaque eos enim provident officiis nulla, tempora, dolores nostrum
          ipsum in ipsa ut, saepe quaerat? Voluptatum non eaque atque eos!
          Reiciendis, porro architecto. Enim ea, iure qui suscipit atque
          ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta rem eaque eos enim provident officiis nulla, tempora, dolores
          nostrum ipsum in ipsa ut, saepe quaerat? Voluptatum non eaque atque
          eos! Reiciendis, porro architecto. Enim ea, iure qui suscipit atque
          ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          rem eaque eos enim provident officiis nulla, tempora, dolores nostrum
          ipsum in ipsa ut, saepe quaerat? Voluptatum non eaque atque eos!
          Reiciendis, porro architecto. Enim ea, iure qui suscipit atque
          ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          rem eaque eos enim provident officiis nulla, tempora, dolores nostrum
          ipsum in ipsa ut, saepe quaerat? Voluptatum non eaque atque eos!
          Reiciendis, porro architecto. Enim ea, iure qui suscipit atque
          ducimus!
        </p>
      </div>
    </div>
  );
};
