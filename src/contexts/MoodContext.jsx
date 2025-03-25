import React, { createContext, useReducer, useContext } from "react";
import { INITIAL_STATE, moodReducer } from "../reducers/mood.reducer";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moodReducer, INITIAL_STATE);

  return (
    <MoodContext.Provider value={{ state, dispatch }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => useContext(MoodContext);
