import React, { useState } from "react";
import "./SparshIntro.css"; // External CSS file

const SparshIntro = (props) => {
  return (
    <section
      className={`intro-section ${props.isFaded ? "fade-out" : ""}`}
      onClick={props.func}
    >
      <h1 className="text-shadow"> -- Ask The Alumni -- </h1>
      <div className="tags">
        <p className="text-shadow">
          <small>#mentorship #SAIC</small>
        </p>
      </div>
    </section>
  );
};

export default SparshIntro;
