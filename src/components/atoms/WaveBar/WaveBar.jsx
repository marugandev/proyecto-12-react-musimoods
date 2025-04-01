import "./WaveBar.css";
import React from "react";

const WaveBar = () => {
  return (
    <div className="wave-bar-container">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
};

export default WaveBar;
