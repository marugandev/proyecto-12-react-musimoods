import { moods } from "../data/moods";

export const INITIAL_STATE = {
  moods: moods,
  favourites: JSON.parse(localStorage.getItem("favourites")) || []
};
/* favourites {
  mood: {
  id
  name
  categ...
  songs: [{
    id
    name
    ...
    favourite: true }]
}
} */

export const moodReducer = (state, action) => {
  let updatedFavourites;

  switch (action.type) {
    case "GET_FAVOURITES":
      return {
        favourites: JSON.parse(localStorage.getItem("favourites")) || []
      };

    case "ADD_FAVOURITE":
      updatedFavourites = [
        ...state.favourites,
        {
          ...action.payload
        }
      ];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return {
        ...state,
        favourites: updatedFavourites
      };

    case "REMOVE_FAVOURITE":
      updatedFavourites = state.favourites.filter(
        (song) => song.id !== action.payload.id
      );
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return {
        ...state,
        favourites: updatedFavourites
      };

    case "FILTER_FAVOURITES_BY_MOOD":
      const filteredFavourites = state.favourites.filter(
        (fav) => fav.mood.id === action.payload.moodId
      );
      return {
        ...state,
        favourites: filteredFavourites
      };

    case "CLEAR_FAVOURITES":
      localStorage.removeItem("favourites");
      return {
        ...state,
        favourites: []
      };

    default:
      return state;
  }
};
