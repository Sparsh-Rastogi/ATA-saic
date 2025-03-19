import React from "react";
import "./ToggleLove.css"; // External CSS file

const ToggleLove = () => {
  return (
    <div className="love">
      <input id="switch" type="checkbox" />
      <label className="love-heart" htmlFor="switch">
        <i className="left"></i>
        <i className="right"></i>
        <i className="bottom"></i>
        <div className="round"></div>
      </label>
    </div>
  );
};

export default ToggleLove;