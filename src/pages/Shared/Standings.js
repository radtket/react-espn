import React from "react";
import StandingsTable from "../../componets/Standings/StandingsTable";

const Standings = ({ teamStandings, sport }) => {
  return (
    <div>
      <h1>{sport} Standings</h1>
      <StandingsTable {...{ teamStandings, sport }} />
    </div>
  );
};

export default Standings;
