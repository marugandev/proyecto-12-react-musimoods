import "./Songs.css";

import { useNavigate, useParams } from "react-router-dom";
import { moods } from "../../data/moods";

import StepBar from "../../components/atoms/StepBar/StepBar";
import SongCard from "../../components/molecules/SongCard/SongCard";
import { useEffect } from "react";

const Songs = () => {
  const { moodName } = useParams();
  const navigate = useNavigate();

  const mood = moods.find((m) => m.name === moodName);

  useEffect(() => {
    if (!mood) navigate("/*");
  }, [mood]);

  if (!mood) return null;

  const { color, name } = mood;

  return (
    <section className="mood-songs page-enter-animation">
      <StepBar>
        mood → <strong style={{ backgroundColor: color }}>{name}</strong> → mood
        → <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> → mood →{" "}
        <strong style={{ backgroundColor: color }}>{name}</strong> →
      </StepBar>
      <ul className="song-card-list">
        <SongCard mood={mood}></SongCard>
      </ul>
    </section>
  );
};

export default Songs;
