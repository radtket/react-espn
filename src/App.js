import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarGlobal from "./componets/Navbar";
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

  const { MLB, NBA, NFL } = state.Teams;

  return (
    <Router>
      <>
        <Route path="/" exact render={() => <SiteHome {...state} />} />

        <Route
          exact
          path="/:id/:pathParam1?"
          render={props => {
            const { match } = props;
            const { id } = match.params;
            return <NavbarGlobal sports={state.Teams} sport={id} {...props} />;
          }}
        />

        {/* Sport Teams Routes */}
        <Route
          path="/:id/teams/:pathParamSportTeam"
          render={props => {
            const { match } = props;
            const { id, pathParamSportTeam } = match.params;
            return (
              <>
                <NavbarGlobal sports={state.Teams} sport={id} {...props} />
                <Route
                  exact
                  path="/:id/teams/:pathParamSportTeam"
                  render={() => (
                    <h1 team={pathParamSportTeam}>Teams Home: Fuck Yeah!</h1>
                  )}
                />
                <Route
                  exact
                  path="/:id/teams/:pathParamSportTeam/schedule"
                  render={() => (
                    <h1 team={pathParamSportTeam}>Schedule: Fuck Yeah!</h1>
                  )}
                />
              </>
            );
          }}
        />

        <Route
          path="/MLB"
          render={props => {
            return (
              <ProviderMLB>
                <RoutesMLB {...props} sport="MLB" teams={MLB} />
              </ProviderMLB>
            );
          }}
        />

        <Route
          path="/NBA"
          render={props => (
            <ProviderNBA>
              <RoutesNBA {...props} sport="NBA" teams={NBA} />
            </ProviderNBA>
          )}
        />

        <Route
          path="/NFL"
          render={props => (
            <ProviderNFL>
              <RoutesNFL {...props} sport="NFL" teams={NFL} />
            </ProviderNFL>
          )}
        />
      </>
    </Router>
  );
};

export default App;
