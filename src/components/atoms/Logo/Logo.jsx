import "./Logo.css";
import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import WaveBar from "../WaveBar/WaveBar";

const Logo = memo(() => {
  return (
    <>
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          <h1 className="logo">musimoOds</h1>
        </NavLink>
        <WaveBar />
      </div>
    </>
  );
});

export default Logo;
