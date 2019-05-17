/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { StoreNFL } from "../../stores/NFL";
import Standings from "../Shared/Standings";
import Home from "../Shared/Home";
import NavbarSport from "../../componets/NavbarSport";
import { isArrayEmpty } from "../../utils/helpers";

const NFL = () => {
  const { state, dispatch } = useContext(StoreNFL);

  const fetchDataAction = async () => {
    const data = await fetch("/data/NFL/standings-2019.json");
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON,
    });
  };

  useEffect(() => {
    isArrayEmpty(state.NflStandings) && fetchDataAction();
  });

  return (
    <>
      <NavbarSport {...state} />
      <Route path="/nfl" exact render={() => <Home {...state} />} />
      <Route
        path="/nfl/standings"
        render={() => (
          <Standings teamStandings={state.NflStandings} {...state} />
        )}
      />
    </>
  );
};

export default NFL;
