import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SiteLogo } from "./Icons";
import LeagueDropdown from "./MegaMenu/LeagueDropdown";

const BuildSportsNav = ({ SportsArg }) => {
  return Object.entries(SportsArg).map(sport => {
    const [name, teams] = sport;
    return (
      <LeagueDropdown Title={name} teams={teams} route={name} key={sport} />
    );
  });
};

const GlobalNavbar = ({ sports }) => {
  const [isHover, setIfHover] = useState(false);
  const [isItemActive, checkIfItemIsActive] = useState(false);

  useLayoutEffect(() => {
    let buttons;
    return () => {
      buttons = Array.from(
        document.querySelectorAll(".sports-megamenu__button")
      ).some(item => item.classList.contains("active"));
      !isItemActive && checkIfItemIsActive(buttons);
    };
  });

  return (
    <nav className="global-navbar">
      <div className="global-nav-container">
        <figure className="global-navbar__logo">
          <Link to="/">
            <SiteLogo />
          </Link>
        </figure>

        <nav className="global-nav">
          <ul
            className={isHover && isItemActive ? "global-nav__is-hovering" : ""}
            onMouseEnter={() => isItemActive && setIfHover(true)}
            onMouseLeave={() => isItemActive && setIfHover(!isHover)}>
            {sports && <BuildSportsNav SportsArg={sports} />}
            {/* {sports && BuildSportsNav(sports)} */}
          </ul>
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
