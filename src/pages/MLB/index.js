/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { StoreMLB } from "../../stores";
import Standings from "../Shared/Standings";
import Home from "../Shared/Home";
import NavbarSport from "../../componets/NavbarSport";
import { isArrayEmpty } from "../../utils/helpers";

const MLB = () => {
  const { state, dispatch } = useContext(StoreMLB);

  const fetchDataAction = () => {
    fetch("/data/MLB/standings-2019.json")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: "FETCH_DATA",
          payload: data,
        })
      );
  };

  useEffect(() => {
    isArrayEmpty(state.MlbStandings) && fetchDataAction();
  });

  return (
    <>
      <NavbarSport {...state} />
      <Route path="/mlb" exact render={() => <Home {...state} />} />
      <Route
        path="/mlb/standings"
        render={() => (
          <Standings teamStandings={state.MlbStandings} {...state} />
        )}
      />
    </>
  );
};

export default MLB;
