/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";
import { handleErrors } from "../utils/helpers";

const initialState = {
  Teams: {},
};

export const fetchTeams = Promise.all(
  ["MLB", "NBA", "NFL"].map(sport => {
    return fetch(`${process.env.PUBLIC_URL}/data/${sport}/teams.json`)
      .then(handleErrors)
      .then(value => value.json());
  })
).then(data => {
  const [MLB, NBA, NFL] = data;
  return { MLB, NBA, NFL };
});

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
