import React, { createContext, useReducer, useContext, useEffect } from "react";
import { INITIAL_STATE, moodReducer } from "../reducers/mood.reducer";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moodReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state.favourites]);

  return (
    <MoodContext.Provider value={{ state, dispatch }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => useContext(MoodContext);
