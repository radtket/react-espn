import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import { isObjectEmpty, handleErrors } from "./utils/helpers";

// Pages
import Home from "./pages/Shared/Home";

// Pages - Sport
import { MLB, NBA, NFL } from "./pages";

// Stores
import { ProviderMLB, ProviderNBA, ProviderNFL, StoreGlobal } from "./stores";

const App = () => {
  const { state, dispatch } = useContext(StoreGlobal);

  const fetchTeamsFromSport = () => {
    return Promise.all(
      ["MLB", "NBA", "NFL"].map(sport => {
        return fetch(`/data/${sport}/teams.json`)
          .then(handleErrors)
          .then(value => value.json());
      })
    ).then(data => {
      // eslint-disable-next-line no-shadow
      const [MLB, NBA, NFL] = data;
      return dispatch({
        type: "FETCH_TEAMS",
        payload: { MLB, NBA, NFL },
      });
    });
  };

  useEffect(() => {
    isObjectEmpty(state.Teams) && fetchTeamsFromSport();
  });

  return (
    <Router>
      <>
        <Navbar sports={state.Teams} />
        <hr />
        <Route path="/" exact component={Home} />
        <Route
          path="/mlb"
          render={() => (
            <ProviderMLB>
              <MLB sport="MLB" />
            </ProviderMLB>
          )}
        />
        <Route
          path="/nba"
          render={() => (
            <ProviderNBA>
              <NBA sport="NBA" />
            </ProviderNBA>
          )}
        />
        <Route
          path="/nfl"
          render={() => (
            <ProviderNFL>
              <NFL sport="NFL" />
            </ProviderNFL>
          )}
        />
      </>
    </Router>
  );
};

export default App;
