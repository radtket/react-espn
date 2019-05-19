import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import { isObjectEmpty, handleErrors } from "./utils/helpers";

// Pages
import SiteHome from "./pages/SiteHome";

// Routes - Sport
import { RoutesMLB, RoutesNBA, RoutesNFL } from "./routes";

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
        <Route path="/" exact render={() => <SiteHome {...state} />} />

        <Route
          path="/:id"
          render={({ match }) => (
            <Navbar sports={state.Teams} hasSportNav={match.params.id} />
          )}
        />

        <Route
          path="/MLB"
          render={props => {
            return (
              <ProviderMLB>
                <RoutesMLB {...props} sport="MLB" />
              </ProviderMLB>
            );
          }}
        />
        <Route
          path="/NBA"
          render={props => (
            <ProviderNBA>
              <RoutesNBA {...props} sport="NBA" />
            </ProviderNBA>
          )}
        />
        <Route
          path="/NFL"
          render={props => (
            <ProviderNFL>
              <RoutesNFL {...props} sport="NFL" />
            </ProviderNFL>
          )}
        />
      </>
    </Router>
  );
};

export default App;
