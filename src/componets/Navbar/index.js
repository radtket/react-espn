import React from "react";
import PropTypes from "prop-types";

import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";
import NavbarTeam from "./NavbarTeam";

const NavbarGlobal = ({ sports, sport, match }) => {
  const LeaugeSportsTeam = sports[sport];

  return (
    <header className="global-header">
      <NavbarPrimary sports={sports} />
      {sport && !match.params.pathParamSportTeam && (
        <NavbarSecondary sport={sport} />
      )}
      {LeaugeSportsTeam && match.params.pathParamSportTeam && (
        <NavbarTeam
          sport={sport}
          {...LeaugeSportsTeam.find(
            team => team.Key === match.params.pathParamSportTeam
          )}
        />
      )}
    </header>
  );
};

NavbarGlobal.propTypes = {
  sports: PropTypes.shape({
    MLB: PropTypes.arrayOf(PropTypes.object),
    NBA: PropTypes.arrayOf(PropTypes.object),
    NFL: PropTypes.arrayOf(PropTypes.object),
  }),
  sport: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      pathParamSportTeam: PropTypes.string,
    }),
  }),
};

NavbarGlobal.defaultProps = {
  sports: {},
  sport: null,
  match: null,
};

export default NavbarGlobal;
