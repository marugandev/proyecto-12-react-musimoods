import React from "react";
import "./Button.css";

const Button = ({ className, onClick, text, icon }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
