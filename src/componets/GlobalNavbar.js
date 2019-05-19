import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SiteLogo } from "./Icons";
import LeagueDropdown from "./MegaMenu/LeagueDropdown";

const GlobalNavbar = ({ sports }) => {
  const BuildSportsNav = SportsArg => {
    return Object.entries(SportsArg).map(sport => {
      const [name, teams] = sport;
      return (
        <LeagueDropdown Title={name} teams={teams} route={name} key={sport} />
      );
    });
  };

  return (
    <nav className="global-navbar">
      <div className="global-nav-container">
        <figure className="global-navbar__logo">
          <Link to="/">
            <SiteLogo />
          </Link>
        </figure>

        <nav className="global-nav">
          <ul>{sports && BuildSportsNav(sports)}</ul>
        </nav>
      </div>
    </nav>
  );
};

GlobalNavbar.propTypes = {
  sports: PropTypes.shape({
    MLB: PropTypes.arrayOf(PropTypes.object),
    NBA: PropTypes.arrayOf(PropTypes.object),
    NFL: PropTypes.arrayOf(PropTypes.object),
  }),
};

GlobalNavbar.defaultProps = {
  sports: {},
};

export default GlobalNavbar;
