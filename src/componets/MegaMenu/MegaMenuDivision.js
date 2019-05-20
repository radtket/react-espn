import React from "react";
import PropTypes from "prop-types";
import { smallestToLargest } from "../../utils/helpers";
import MegaMenuTeam from "./MegaMenuTeam";

const MegaMenuDivision = ({
  DivisionName,
  handleChange,
  NumberOfTeamsInRow,
  route,
  TeamsInDivision,
}) => {
  return (
    <div
      className={`sports-megamenu__teams--division sports-megamenu__teams--division--${NumberOfTeamsInRow}`}
      key={DivisionName}>
      <h6>{DivisionName}</h6>
      <nav>
        {TeamsInDivision.sort(smallestToLargest("City")).map(team => {
          const { TeamID } = team;
          return (
            <MegaMenuTeam
              key={`${route} ${TeamID}`}
              {...team}
              route={route}
              handleChange={handleChange}
            />
          );
        })}
      </nav>
    </div>
  );
};

MegaMenuDivision.propTypes = {
  DivisionName: PropTypes.string.isRequired,
  NumberOfTeamsInRow: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  TeamsInDivision: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MegaMenuDivision;
