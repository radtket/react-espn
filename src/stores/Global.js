import React, { createContext, useReducer } from "react";

const initialState = {
  Teams: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TEAMS":
      return { ...state, Teams: action.payload };
    default:
      return state;
  }
};

export const StoreGlobal = createContext();

export const ProviderGlobal = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreGlobal.Provider value={value}>{children}</StoreGlobal.Provider>;
};
