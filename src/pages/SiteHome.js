import React from "react";
import PropTypes from "prop-types";
import NavbarGlobal from "../componets/Navbar";

const SiteHome = ({ Teams }) => {
  return (
    <>
      <NavbarGlobal sports={Teams} />
      <h1>Site Home</h1>
    </>
  );
};

SiteHome.propTypes = {
  Teams: PropTypes.shape({
    MLB: PropTypes.arrayOf(PropTypes.object),
    NBA: PropTypes.arrayOf(PropTypes.object),
    NFL: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default SiteHome;
