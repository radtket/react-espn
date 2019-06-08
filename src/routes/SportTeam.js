import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import NavbarGlobal from "../componets/Navbar";

const RoutesSportTeam = ({ Teams }) => {
  return (
    <Route
      path="/:id/teams/:pathParamSportTeam"
      render={props => {
        // eslint-disable-next-line react/prop-types
        const { match } = props;
        const { id, pathParamSportTeam } = match.params;
        return (
          <>
            <NavbarGlobal sports={Teams} sport={id} {...props} />
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
  );
};

RoutesSportTeam.propTypes = {
  Teams: PropTypes.shape({
    MLB: PropTypes.arrayOf(PropTypes.object),
    NBA: PropTypes.arrayOf(PropTypes.object),
    NFL: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default RoutesSportTeam;
