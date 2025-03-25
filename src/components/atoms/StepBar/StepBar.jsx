import "./StepBar.css";
import React from "react";

const StepBar = ({ children }) => {
  return (
    <div className="step-bar">
      <p className="step-bar-text">{children}</p>
    </div>
  );
};

export default StepBar;
