import React, { createContext, useReducer } from "react";

const initialState = {
  MlbStandings: [],
  sport: "MLB",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, MlbStandings: action.payload };
    default:
      return state;
  }
};

export const StoreMLB = createContext();

export const ProviderMLB = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreMLB.Provider value={value}>{children}</StoreMLB.Provider>;
};
