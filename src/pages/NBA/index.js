/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { StoreNBA } from "../../stores/NBA";
import Standings from "../Shared/Standings";
import Home from "../Shared/Home";
import NavbarSport from "../../componets/NavbarSport";
import { isArrayEmpty } from "../../utils/helpers";

const NBA = () => {
  const { state, dispatch } = useContext(StoreNBA);

  const fetchDataAction = async () => {
    const data = await fetch("/data/NBA/standings-2019.json");
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON,
    });
  };

  useEffect(() => {
    isArrayEmpty(state.NbaStandings) && fetchDataAction();
  });

  return (
    <>
      <NavbarSport {...state} />
      <Route path="/nba" exact render={() => <Home {...state} />} />
      <Route
        path="/nba/standings"
        render={() => (
          <Standings teamStandings={state.NbaStandings} {...state} />
        )}
      />
    </>
  );
};

export default NBA;
