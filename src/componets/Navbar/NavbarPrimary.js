import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SiteLogo } from "../Icons";
import LeagueDropdown from "../MegaMenu/LeagueDropdown";
import useWindowDimensions from "../../utils/useWindowDimensions";

const BuildSportsNav = ({ SportsArg, NotMobile, closeMobileMenu }) => {
  return Object.entries(SportsArg).map(sport => {
    const [name, teams] = sport;

    return (
      <LeagueDropdown
        Title={name}
        teams={teams}
        route={name}
        key={name}
        NotMobile={NotMobile}
        closeMobileMenu={closeMobileMenu}
      />
    );
  });
};

const NavbarPrimary = ({ sports }) => {
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
    <section className="navbar-primary">
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

        <figure className="navbar-primary__logo">
          <Link to="/">
            <SiteLogo />
          </Link>
        </figure>

        <nav
          className={`navbar-primary__nav navbar-primary__drawer ${
            mobileMenuOpen && !NotMobile
              ? "navbar-primary__nav--drawer-open"
              : ""
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
            {/* Drawer Label */}
            <li>
              <span>Sports</span>
            </li>
            <BuildSportsNav
              SportsArg={sports}
              NotMobile={NotMobile}
              closeMobileMenu={closeMobileMenu}
            />
          </ul>
        </nav>
      </div>
    </section>
  );
};

NavbarPrimary.propTypes = {
  sports: PropTypes.shape({
    MLB: PropTypes.arrayOf(PropTypes.object),
    NBA: PropTypes.arrayOf(PropTypes.object),
    NFL: PropTypes.arrayOf(PropTypes.object),
  }),
};

NavbarPrimary.defaultProps = {
  sports: {},
};

export default NavbarPrimary;
