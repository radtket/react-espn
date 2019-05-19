import React from "react";
import PropTypes from "prop-types";

import GlobalNavbar from "./GlobalNavbar";
import NavbarSport from "./NavbarSport";

const Navbar = ({ sports, hasSportNav }) => {
  return (
    <>
      <header className="global-header">
        <GlobalNavbar sports={sports} />
        {hasSportNav && <NavbarSport sport={hasSportNav} />}
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
