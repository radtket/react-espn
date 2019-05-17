import React from "react";
import PropTypes from "prop-types";
import StandingsTableHead from "./StandingsTableHead";

const StandingsDivision = ({ division, divisionTeams }) => (
  <table
    className="table table--standings"
    style={{
      margin: "24px auto",
    }}>
    <StandingsTableHead division={division} />
    <tbody>{divisionTeams}</tbody>
  </table>
);

StandingsDivision.propTypes = {
  division: PropTypes.string.isRequired,
  divisionTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingsDivision;
