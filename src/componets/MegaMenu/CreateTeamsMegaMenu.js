import React from "react";
import { sortTeamsByDivion } from "../../utils/helpers";
import MegaMenuDivision from "./MegaMenuDivision";

const CreateTeamsMegaMenu = ({ teams, sport, route, handleChange }) => {
  const cols = [];

  return sortTeamsByDivion(teams).reduce((rows, element, index) => {
    const [DivisionName, TeamsInComponents] = element;
    const { League: LeaugeName, Conference } = TeamsInComponents[0];

    cols.push(
      <MegaMenuDivision
        DivisionName={DivisionName}
        handleChange={handleChange}
        key={DivisionName}
        route={route}
        Sport={sport}
        TeamsInDivision={TeamsInComponents}
      />
    );

    if ((index + 1) % 3 === 0) {
      rows.push(
        <div
          className="row"
          key={LeaugeName || `${Conference} ${DivisionName}`}>
          {cols}
        </div>
      );
    }

    return rows;
  }, []);
};

export default CreateTeamsMegaMenu;
