import "./SongCard.css";
import React, { useReducer } from "react";
import Button from "../../atoms/Button/Button";
import { INITIAL_STATE, moodReducer } from "../../../reducers/mood.reducer";

const SongCard = ({ mood }) => {
  console.log("Render SongCard");
  console.log("SongCard", mood);

  const [state, dispatch] = useReducer(moodReducer, INITIAL_STATE);
  console.log("state", state);

  return (
    <ul className="song-card-list">
      {mood.songs.map((song) => (
        <li
          key={song.id}
          className="song-card-container"
          style={{ backgroundColor: mood.color }}
        >
          <iframe
            className="song-card-iframe"
            id="player"
            type="text/html"
            width="100%"
            height="390"
            src={`https://www.youtube.com/embed/${song.youtubeId}`}
            frameBorder="0"
            title={song.name}
            aria-label={`Reproductor de video de ${song.name} de ${song.artist}`}
          ></iframe>
          <figcaption className="song-card-figcaption">
            <h3>{song.name}</h3>
            <p>| {song.artist}</p>
            <p>| [{song.genre}]</p>
          </figcaption>
          <Button
            className={`song-card-button ${song.favourite ? "" : "secondary"}`}
            text={song.favourite ? "- Favorito" : "+ Favorito"}
            onClick={() => {
              song.favourite = !song.favourite;
              /* REVISAR MUTABLE */
              if (song.favourite) {
                dispatch({ type: "ADD_FAVOURITE", payload: song });
              } else {
                dispatch({ type: "REMOVE_FAVOURITE", payload: song });
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SongCard;
