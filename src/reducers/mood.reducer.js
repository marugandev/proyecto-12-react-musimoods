export const INITIAL_STATE = {
  setInLocal: true,
  favourites: JSON.parse(localStorage.getItem("favourites") || "[]")
};

export const types = {
  ADD_FAVOURITE: "ADD_FAVOURITE",
  REMOVE_FAVOURITE: "REMOVE_FAVOURITE",
  FILTER_MOOD: "FILTER_MOOD",
  CLEAR_FAVOURITES: "CLEAR_FAVOURITES",
  RESET_FAVOURITES: "RESET_FAVOURITES"
};

export const moodReducer = (state, action) => {
  let updatedFavourites;
  const { mood, song } = action.payload || {};

  switch (action.type) {
    case types.ADD_FAVOURITE:
      updatedFavourites = [...state.favourites];
      const existingMood = updatedFavourites.find((m) => m.id === mood.id);

      if (existingMood) {
        const existingSong = existingMood.songs.some((s) => s.id === song.id);
        if (!existingSong) {
          existingMood.songs.push(song);
        }
      } else {
        updatedFavourites.push({
          ...mood,
          songs: [song]
        });
      }

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      return {
        ...state,
        favourites: updatedFavourites
      };

    case types.REMOVE_FAVOURITE:
      updatedFavourites = state.favourites
        .map((m) => ({
          ...m,
          songs: m.songs.filter((s) => s.id !== song.id)
        }))
        .filter((m) => m.songs.length > 0);

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      return {
        ...state,
        favourites: updatedFavourites
      };

    case types.FILTER_MOOD:
      return {
        ...state,
        setInLocal: false,
        favourites: state.favourites.filter((fav) => fav.id === mood.id)
      };

    case types.CLEAR_FAVOURITES:
      localStorage.removeItem("favourites");
      return {
        ...state,
        setInLocal: true,
        favourites: []
      };

    case types.RESET_FAVOURITES:
      return {
        ...state,
        favourites: JSON.parse(localStorage.getItem("favourites") || "[]")
      };

    default:
      return state;
  }
};
