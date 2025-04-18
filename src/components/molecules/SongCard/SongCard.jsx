import "./SongCard.css";

import Button from "../../atoms/Button/Button";
import { useMood } from "../../../contexts/MoodContext";
import { types } from "../../../reducers/mood.reducer";
import { useModalPlayer } from "../../../contexts/ModalPlayerContext";

const SongCard = ({ mood }) => {
  const { state, dispatch } = useMood();

  const { openModal } = useModalPlayer();

  const isFavourite = (songName) => {
    return state.favourites.some((m) =>
      m.songs.some((s) => s.name === songName)
    );
  };

  return (
    <>
      {mood.songs.map((song) => (
        <li
          key={song.id}
          className="song-card-container"
          style={{ backgroundColor: mood.color }}
        >
          <div
            className="song-card-wrapper-modal"
            onClick={() => {
              openModal(song);
            }}
          >
            <iframe
              className="song-card-iframe"
              type="text/html"
              width="100%"
              height="390"
              src={`https://www.youtube.com/embed/${song.youtubeId}`}
              frameBorder="0"
              title={song.name}
              aria-label={`Reproductor de video de ${song.name} de ${song.artist}`}
            ></iframe>
          </div>
          <figcaption className="song-card-figcaption">
            <h3>{song.name}</h3>
            <p>| {song.artist}</p>
            <p>| [{song.genre}]</p>
          </figcaption>
          <Button
            className={`song-card-button ${
              isFavourite(song.name) ? "" : "secondary"
            }`}
            text={`${isFavourite(song.name) ? "- Favorito" : "+ Favorito"}`}
            onClick={() => {
              isFavourite(song.name)
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
    </>
  );
};

export default SongCard;
