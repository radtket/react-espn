import React, { createContext, useReducer } from "react";

const initialState = {
  NbaStandings: [],
  sport: "NBA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, NbaStandings: action.payload };
    default:
      return state;
  }
};

export const StoreNBA = createContext();

export const NBAProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreNBA.Provider value={value}>{children}</StoreNBA.Provider>;
};
