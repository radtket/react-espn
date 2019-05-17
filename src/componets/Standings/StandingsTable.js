import React from "react";
import { sortTeamsByDivion } from "../../utils/helpers";
import StandingsDivision from "./DivisionComponent";
import StandingsSingleTeam from "./SingleTeamComponent";

const StandingsTable = ({ teamStandings, sport }) => {
  return sortTeamsByDivion(teamStandings).reduce(
    (standingsComponent, divisionComponent) => {
      const [divisionName, divisionTeamsComponents] = divisionComponent;
      standingsComponent.push(
        <StandingsDivision
          className="table"
          key={divisionName}
          division={divisionName}
          divisionTeams={divisionTeamsComponents.map(team => {
            const { Key, Team } = team;
            return (
              <StandingsSingleTeam
                key={Key || Team}
                team={team}
                sport={sport}
              />
            );
          })}
        />
      );
      return standingsComponent;
    },
    []
  );
};

StandingsTable.propTypes = {};

export default StandingsTable;
