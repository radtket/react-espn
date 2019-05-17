import React from "react";
import StandingsTable from "../../componets/Standings/StandingsTable";

const Standings = ({ teamStandings, sport }) => {
  return (
    <div>
      <h1>{sport} Standings</h1>
      <StandingsTable teamStandings={teamStandings} sport={sport} />
    </div>
  );
};

export default Standings;
