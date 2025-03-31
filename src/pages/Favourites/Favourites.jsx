import "./Favourites.css";

import { useMood } from "../../contexts/moodContext";
import { useRef } from "react";
import { types } from "../../reducers/mood.reducer";
import ErrorAlert from "../../components/molecules/ErrorAlert/ErrorAlert";
import Button from "../../components/atoms/Button/Button";
import SongCard from "../../components/molecules/SongCard/SongCard";
import Dialog from "../../components/molecules/Dialog/Dialog";

const Favourites = () => {
  const { state, dispatch } = useMood();
  const dialogRef = useRef(null);

  const handleMoodChange = (e) => {
    const selectedMoodId = e.target.value;

    if (selectedMoodId !== "all") {
      dispatch({
        type: types.FILTER_MOOD,
        payload: { mood: { id: selectedMoodId } }
      });
    } else {
      dispatch({ type: types.RESET_FAVOURITES });
    }
  };

  /*   const handleConfirmDelete = () => {
    onClick={() => dispatch({ type: types.CLEAR_FAVOURITES })}
  }; */

  return (
    <section className="favourites page-enter-animation">
      {state.favourites.length === 0 ? (
        <ErrorAlert text={"No tienes ningún favorito"} />
      ) : (
        <>
          <div className="favourites-filters-container">
            <select
              className="favourites-filters-select"
              onChange={handleMoodChange}
            >
              <option
                className="moods-option favourites-filters-options"
                value="all"
              >
                moods
              </option>
              {state.favourites.map((mood) => (
                <option
                  className="favourites-filters-options"
                  key={mood.id}
                  value={mood.id}
                  style={{ backgroundColor: mood.color }}
                >
                  {mood.name}
                </option>
              ))}
            </select>
            <Button
              className={"tertiary"}
              text={"Eliminar favoritos"}
              onClick={() => dialogRef.current.open()}
            />
            <Dialog ref={dialogRef}></Dialog>
          </div>
          <ul className="song-card-list">
            {state.favourites.map((mood) => (
              <SongCard key={mood.id} mood={mood} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Favourites;
