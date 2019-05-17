import React from "react";
import PropTypes from "prop-types";

const StandingsTableHead = ({ division }) => {
  return (
    <thead>
      <tr>
        <th>{division}</th>
        <th>W</th>
        <th>L</th>
        <th>PCT</th>
        <th>GB</th>
        <th className="standings__sec-stat">Home</th>
        <th className="standings__sec-stat">Road</th>
      </tr>
    </thead>
  );
};

StandingsTableHead.propTypes = {
  division: PropTypes.string.isRequired,
};

export default StandingsTableHead;
