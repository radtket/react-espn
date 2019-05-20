import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SiteLogo } from "./Icons";
import LeagueDropdown from "./MegaMenu/LeagueDropdown";
import useWindowDimensions from "../utils/useWindowDimensions";

const BuildSportsNav = ({ SportsArg, NotMobile, closeMobileMenu }) => {
  return Object.entries(SportsArg).map(sport => {
    const [name, teams] = sport;
    return (
      <LeagueDropdown
        Title={name}
        teams={teams}
        route={name}
        key={sport}
        NotMobile={NotMobile}
        closeMobileMenu={closeMobileMenu}
      />
    );
  });
};

const GlobalNavbar = ({ sports }) => {
  const [isHover, setIfHover] = useState(false);
  const [isItemActive, checkIfItemIsActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { width: windowWidth } = useWindowDimensions();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useLayoutEffect(() => {
    let buttons;
    return () => {
      buttons = Array.from(
        document.querySelectorAll(".sports-megamenu__button")
      ).some(item => item.classList.contains("active"));
      !isItemActive && checkIfItemIsActive(buttons);
    };
  });

  const NotMobile = windowWidth >= 1023;

  return (
    <nav className="global-navbar">
      <div className="global-nav-container">
        <button
          className="hamburger"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="hamburger__menu">
            <div
              className={`hamburger__menu--bar ${
                mobileMenuOpen ? "animate" : ""
              }`}
            />
          </div>
        </button>

        <figure className="global-navbar__logo">
          <Link to="/">
            <SiteLogo />
          </Link>
        </figure>

        <nav
          className={`global-nav ${
            mobileMenuOpen && !NotMobile ? "global-nav__open" : ""
          }`}>
          <ul
            className={
              isHover && isItemActive && NotMobile
                ? "global-nav__is-hovering"
                : ""
            }
            onMouseEnter={() => isItemActive && NotMobile && setIfHover(true)}
            onMouseLeave={() =>
              isItemActive && NotMobile && setIfHover(!isHover)
            }>
            <li>
              <span className="global-nav__label">
                <span className="link-text">Sports</span>
              </span>
            </li>

            {sports && (
              <BuildSportsNav
                SportsArg={sports}
                NotMobile={NotMobile}
                closeMobileMenu={closeMobileMenu}
              />
            )}
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
