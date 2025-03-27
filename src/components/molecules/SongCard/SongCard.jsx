import "./SongCard.css";

import Button from "../../atoms/Button/Button";
import { useMood } from "../../../contexts/moodContext";
import { types } from "../../../reducers/mood.reducer";

const SongCard = ({ mood }) => {
  console.log("Render SongCard");

  const { state, dispatch } = useMood();

  const isFavourite = (songId) => {
    return state.favourites.some((m) => m.songs.some((s) => s.id === songId));
  };

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
            className={`song-card-button ${
              isFavourite(song.id) ? "" : "secondary"
            }`}
            text={`${isFavourite(song.id) ? "- Favorito" : "+ Favorito"}`}
            onClick={() => {
              isFavourite(song.id)
                ? dispatch({
                    type: types.REMOVE_FAVOURITE,
                    payload: {
                      song: song
                    }
                  })
                : dispatch({
                    type: types.ADD_FAVOURITE,
                    payload: {
                      mood: mood,
                      song: song
                    }
                  });
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SongCard;
