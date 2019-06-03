import React from "react";
import PropTypes from "prop-types";

import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";
import NavbarTeam from "./NavbarTeam";

const NavbarGlobal = ({ sports, hasSportNav, match }) => {
  const LeaugeSportsTeam = sports[hasSportNav];

  return (
    <header className="global-header">
      <NavbarPrimary sports={sports} />
      {hasSportNav && !match.params.pathParam2 && (
        <NavbarSecondary sport={hasSportNav} />
      )}
      {LeaugeSportsTeam && match.params.pathParam2 && (
        <NavbarTeam
          {...LeaugeSportsTeam.find(
            team => team.Key === match.params.pathParam2
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
  hasSportNav: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      pathParam2: PropTypes.string,
    }),
  }),
};

NavbarGlobal.defaultProps = {
  sports: {},
  hasSportNav: null,
  match: null,
};

export default NavbarGlobal;
