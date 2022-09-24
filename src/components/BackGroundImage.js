import React from "react";
import mainboxlogo from "../img/mainboxlogo.svg";

function BackGroundImage(props) {
  return (
    <div className="grid grid-cols-1 items-center justify-center main-box">
      <div className="overlaymyintro">
        <img src={props.logo} className="main-box-logo" />
        <div className="scroll-down">
          <div className="scroll-down-text">{props.txt}</div>
          <div className="scroll-down-arrow">
            <div className="scroll-down-logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackGroundImage;
