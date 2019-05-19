import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { StoreNBA } from "../stores";
import Standings from "../pages/Shared/Standings";
import Home from "../pages/Shared/Home";
import { isArrayEmpty } from "../utils/helpers";

const RoutesNBA = ({ match, sport }) => {
  const { state, dispatch } = useContext(StoreNBA);

  const fetchDataAction = () => {
    fetch(`/data/${sport}/standings-2019.json`)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: `FETCH_${sport}_STANDINGS`,
          payload: data,
        })
      );
  };

  useEffect(() => {
    isArrayEmpty(state[`Standings${sport}`]) && fetchDataAction();
  });

  return (
    <>
      <Route path={match.url} exact render={() => <Home {...state} />} />
      <Route
        path={`${match.url}/standings`}
        exact
        render={() => (
          <Standings teamStandings={state[`Standings${sport}`]} {...state} />
        )}
      />
    </>
  );
};

RoutesNBA.propTypes = {
  sport: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default RoutesNBA;
