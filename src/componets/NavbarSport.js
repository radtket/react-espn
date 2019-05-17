import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarSport = ({ sport }) => {
  return (
    <header>
      <h3>{sport}</h3>
      <ul>
        <li>
          <Link to={`/${sport.toLowerCase()}`}>{sport} Home</Link>
        </li>
        <li>
          <Link to={`/${sport.toLowerCase()}/standings`}>
            {sport} Standings
          </Link>
        </li>
      </ul>
    </header>
  );
};

NavbarSport.propTypes = {
  sport: PropTypes.string.isRequired,
};

export default NavbarSport;
