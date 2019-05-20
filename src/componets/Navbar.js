import React from "react";
import PropTypes from "prop-types";

import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";

const Navbar = ({ sports, hasSportNav }) => {
  return (
    <>
      <header className="global-header">
        <NavbarPrimary sports={sports} />
        {hasSportNav && <NavbarSecondary sport={hasSportNav} />}
      </header>
    </>
  );
};

Navbar.propTypes = {
  sports: PropTypes.shape({
    MLB: PropTypes.arrayOf(PropTypes.object),
    NBA: PropTypes.arrayOf(PropTypes.object),
    NFL: PropTypes.arrayOf(PropTypes.object),
  }),
  hasSportNav: PropTypes.string,
};

Navbar.defaultProps = {
  sports: {},
  hasSportNav: null,
};

export default Navbar;
