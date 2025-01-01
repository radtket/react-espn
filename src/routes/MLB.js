import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { StoreMLB } from "../stores";
import Standings from "../pages/Shared/Standings";
import Home from "../pages/Shared/Home";
import { isArrayEmpty } from "../utils/helpers";

const RoutesMLB = ({ match, sport }) => {
  const { state, dispatch } = useContext(StoreMLB);

  const fetchDataAction = () => {
    fetch(`${process.env.PUBLIC_URL}/data/${sport}/standings-2019.json`)
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

RoutesMLB.propTypes = {
  sport: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default RoutesMLB;
