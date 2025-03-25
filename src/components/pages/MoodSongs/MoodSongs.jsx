import "./MoodSongs.css";

import { useLocation } from "react-router-dom";

import StepBar from "../../atoms/StepBar/StepBar";
import SongCard from "../../molecules/SongCard/SongCard";
import ErrorAlert from "../../molecules/ErrorAlert/ErrorAlert";

const MoodSongs = () => {
  console.log("Render MoodSongs");

  const location = useLocation();
  const { mood } = location.state || "";
  const { color, name } = mood || "";
  /*  console.log("mood", mood); */
  /* recibes el mood elegido pero no esta guardado su estado, con lo cual no sabes si es favourite: true */
  /* PROP DRILLING?? */

  return (
    <section className="mood-songs page-enter-animation">
      {mood ? (
        <>
          <StepBar>
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
            mood → <strong style={{ backgroundColor: color }}>{name}</strong> →
          </StepBar>
          <SongCard mood={mood}></SongCard>
        </>
      ) : (
        <>
          <ErrorAlert text={"Tienes que escoger un mood"} />
        </>
      )}
    </section>
  );
};

export default MoodSongs;
