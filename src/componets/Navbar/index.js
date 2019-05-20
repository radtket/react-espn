import React from "react";
import PropTypes from "prop-types";

import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";

const NavbarGlobal = ({ sports, hasSportNav }) => {
  return (
    <header className="global-header">
      <NavbarPrimary sports={sports} />
      {hasSportNav && <NavbarSecondary sport={hasSportNav} />}
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
};

NavbarGlobal.defaultProps = {
  sports: {},
  hasSportNav: null,
};

export default NavbarGlobal;
