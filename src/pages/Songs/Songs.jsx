import "./Songs.css";

import { useParams } from "react-router-dom";
import { moods } from "../../data/moods";

import StepBar from "../../components/atoms/StepBar/StepBar";
import SongCard from "../../components/molecules/SongCard/SongCard";

const Songs = () => {
  console.log("Render MoodSongs");

  const { moodName } = useParams();

  const mood = moods.find((m) => m.name === moodName);
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
