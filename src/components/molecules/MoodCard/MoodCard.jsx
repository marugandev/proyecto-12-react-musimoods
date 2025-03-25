import "./MoodCard.css";
import React from "react";

import { useNavigate } from "react-router-dom";

const MoodCard = ({ mood }) => {
  console.log("Render MoodCard");
  const { img, name, color, description } = mood;

  const navigate = useNavigate();

  return (
    <>
      <article
        className="mood-card"
        onClick={() => navigate("/moodSongs", { state: { mood } })}
      >
        <div className="mood-card-img-container">
          <img className="mood-card-img" src={img} alt={name} />
        </div>
        <div className="mood-card-overlay-container">
          <h2 className="mood-card-title" style={{ color: color }}>
            {name}{" "}
          </h2>
          <p className="mood-card-description">{description}</p>
          <p className="mood-card-arrow" style={{ color: color }}>
            →
          </p>
        </div>
      </article>
    </>
  );
};

export default MoodCard;
