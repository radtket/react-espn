import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  StandingsMLB: [],
  sport: "MLB",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MLB_STANDINGS":
      return { ...state, StandingsMLB: action.payload };
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

ProviderMLB.propTypes = {
  children: PropTypes.element.isRequired,
};
