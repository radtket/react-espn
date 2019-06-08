import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavbarTeam = ({ City, Name, WikipediaLogoUrl, sport, Key }) => {
  return (
    <nav className="navbar-secondary">
      <div className="clubhouse-header">
        <div className="clubhouse-header__container">
          <figure className="clubhouse-header__logo">
            <img src={WikipediaLogoUrl} alt="" />
          </figure>
          <figcaption className="clubhouse-header__content">
            <h1 className="clubhouse-header__name">
              <span className="clubhouse-header__name--city">{City}</span>
              {Name}
            </h1>
            <div className="clubhouse-header__details">
              <button
                className="btn clubhouse-header__details--btn"
                type="button">
                Follow
              </button>
              <ul className="clubhouse-header__details--record">
                <li>7-9</li>
                <li>2nd in AFC East</li>
              </ul>
            </div>
          </figcaption>
        </div>
      </div>

      <div className="global-nav-container">
        <ul>
          <li>
            <NavLink exact to={`/${sport}/teams/${Key}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`/${sport}/teams/${Key}/schedule`}>
              Schedule
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavbarTeam.propTypes = {
  City: PropTypes.string.isRequired,
  Key: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  WikipediaLogoUrl: PropTypes.string.isRequired,
};

export default NavbarTeam;
