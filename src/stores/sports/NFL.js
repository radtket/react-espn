import React, { createContext, useReducer } from "react";

const initialState = {
  NflStandings: [],
  sport: "NFL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, NflStandings: action.payload };
    default:
      return state;
  }
};

export const StoreNFL = createContext();

export const ProviderNFL = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreNFL.Provider value={value}>{children}</StoreNFL.Provider>;
};
