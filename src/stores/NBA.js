import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  StandingsNBA: [],
  sport: "NBA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NBA_STANDINGS":
      return { ...state, StandingsNBA: action.payload };
    default:
      return state;
  }
};

export const StoreNBA = createContext();

export const ProviderNBA = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreNBA.Provider value={value}>{children}</StoreNBA.Provider>;
};

ProviderNBA.propTypes = {
  children: PropTypes.element.isRequired,
};
