import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { espnLogo } from "../../utils/helpers";

const MegaMenuTeam = ({ Name, City, Key, route, handleChange }) => {
  return (
    <Link
      onClick={() => handleChange()}
      to={`/${route}/teams/${Key}`}
      style={{ display: "block" }}>
      <img src={espnLogo(Key, 24, route)} alt={`${Name} ${City} Logo`} />
      <span>
        <span className="team-city">{City} </span>
        {Name}
      </span>
    </Link>
  );
};

MegaMenuTeam.propTypes = {
  Name: PropTypes.string.isRequired,
  City: PropTypes.string.isRequired,
  Key: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MegaMenuTeam;
