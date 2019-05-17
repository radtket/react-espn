import React from "react";
import PropTypes from "prop-types";
import { TableTeamCell, TableWinsLossesCell } from "../TableParts";

const StandingsSingleTeam = ({ team, sport }) => {
  const {
    City,
    Wins,
    Losses,
    GamesBehind,
    HomeWins,
    HomeLosses,
    AwayWins,
    AwayLosses,
    TeamID,
    Name,
    Key,
    Team,
  } = team;
  return (
    <tr key={TeamID}>
      <TableTeamCell Key={Key || Team} City={City} Name={Name} sport={sport} />
      <td>{Wins}</td>
      <td>{Losses}</td>
      <td>
        {(Number(`${Wins}`) / (Number(`${Wins}`) + Number(`${Losses}`)))
          .toFixed(3)
          .replace(/^0+/, "")}
      </td>
      <td>{GamesBehind || "-"}</td>
      <TableWinsLossesCell Wins={HomeWins} Losses={HomeLosses} />
      <TableWinsLossesCell Wins={AwayWins} Losses={AwayLosses} />
    </tr>
  );
};

StandingsSingleTeam.propTypes = {
  team: PropTypes.shape({
    City: PropTypes.string,
    Wins: PropTypes.number,
    Losses: PropTypes.number,
    GamesBehind: PropTypes.number,
    HomeWins: PropTypes.number,
    HomeLosses: PropTypes.number,
    AwayWins: PropTypes.number,
    AwayLosses: PropTypes.number,
    TeamID: PropTypes.number,
    Name: PropTypes.string,
  }).isRequired,
  sport: PropTypes.string,
};

StandingsSingleTeam.defaultProps = {
  sport: "MLB",
};

export default StandingsSingleTeam;
