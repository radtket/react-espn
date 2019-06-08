import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarSecondary = ({ sport }) => {
  return (
    <nav className="navbar-secondary">
      <div className="global-nav-container">
        <ul>
          <li className="navbar-secondary__logo">
            <Link to={`/${sport}`}>
              <figure>
                <img
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/${sport}.png?w=100&h=100&transparent=true`}
                  alt={`${sport} logo`}
                />
              </figure>
              <figcaption>{sport}</figcaption>
            </Link>
          </li>
          <li>
            <NavLink exact to={`/${sport}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`/${sport}/standings`}>
              Standings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavbarSecondary.propTypes = {
  sport: PropTypes.string.isRequired,
};

export default NavbarSecondary;
