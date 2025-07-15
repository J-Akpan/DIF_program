import React from "react";
import "../styles/text.scss";

import joy from "../assets/photos/joy2.png";

export default function Text() {
  return (
    <div className="text-container">
      <div className="joy">
        <img className="couple" src={joy} alt="" />
      </div>

      <div className="joy">
        <div>
            <p className="abouts">About Us</p> 
          <p className="agric"> We’re Best Agriculture & <br />Organic Farms</p>
          <p className="many-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <p></p>
        </div>

        <div className="listing">
          <ul>
            <li className="li">Garlic Farming</li>
            <li className="li">Lavender Farming</li>
            <li className="li">Gommunt Mushrooms</li>
          </ul>

          <ul className="sec">
            <li className="li">Garlic Farming</li>
            <li className="li">Lavender Farming</li>
            <li className="li">Gommunt Mushrooms</li>
          </ul>
        </div>

        <button className="butt">Know More</button>
      </div>
    </div>
  );
}
