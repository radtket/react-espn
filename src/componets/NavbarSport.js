import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarSport = ({ sport }) => {
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
            <Link to={`/${sport}`}>Home</Link>
          </li>
          <li>
            <Link to={`/${sport}/standings`}>Standings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavbarSport.propTypes = {
  sport: PropTypes.string.isRequired,
};

export default NavbarSport;
