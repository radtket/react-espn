import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import { isObjectEmpty } from "./utils/helpers";

// Pages
import SiteHome from "./pages/SiteHome";

// Routes - Sport
import { RoutesMLB, RoutesNBA, RoutesNFL } from "./routes";

// Stores
import { ProviderMLB, ProviderNBA, ProviderNFL, StoreGlobal } from "./stores";

import { fetchTeams } from "./stores/Global";

const App = () => {
  const { state, dispatch } = useContext(StoreGlobal);

  const getTeamsData = () => {
    return fetchTeams.then(data =>
      dispatch({
        type: "FETCH_TEAMS",
        payload: data,
      })
    );
  };

  useEffect(() => {
    isObjectEmpty(state.Teams) && getTeamsData();
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
