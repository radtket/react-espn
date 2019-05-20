import React from "react";
import MegaMenuDivision from "./MegaMenuDivision";

const CreateTeamsMegaMenu = ({
  teams,
  route,
  handleChange,
  NumberOfTeamsInRow,
}) => {
  let cols = [];

  return teams.reduce((rows, element, index) => {
    const [DivisionName, TeamsInComponents] = element;
    const { League: LeaugeName, Conference } = TeamsInComponents[0];

    cols.push(
      <MegaMenuDivision
        key={DivisionName}
        DivisionName={DivisionName}
        handleChange={handleChange}
        NumberOfTeamsInRow={NumberOfTeamsInRow}
        route={route}
        TeamsInDivision={TeamsInComponents}
      />
    );

    if ((index + 1) % NumberOfTeamsInRow === 0) {
      rows.push(
        <div
          className="row"
          key={LeaugeName || `${Conference} ${DivisionName}`}>
          {cols}
        </div>
      );
      cols = [];
    }

    return rows;
  }, []);
};

export default CreateTeamsMegaMenu;
