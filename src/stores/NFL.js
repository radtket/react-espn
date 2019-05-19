import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  StandingsNFL: [],
  sport: "NFL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NFL_STANDINGS":
      return { ...state, StandingsNFL: action.payload };
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

ProviderNFL.propTypes = {
  children: PropTypes.element.isRequired,
};
