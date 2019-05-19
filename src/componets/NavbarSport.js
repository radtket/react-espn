import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarSport = ({ sport }) => {
  return (
    <nav id="global-nav-secondary" className="global-nav-secondary">
      <div className="global-nav-container">
        <ul>
          <li className="sport">
            <Link to={`/${sport}`}>
              <span className="sport__logo ">
                <img
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/${sport}.png?w=100&h=100&transparent=true`}
                  alt={`${sport} logo`}
                />
              </span>
              <span>{sport}</span>
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
