import React from "react";
import PropTypes from "prop-types";
import { TableTeamCell, TableWinsLossesCell } from "../TableParts";

const StandingsSingleTeam = ({
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
  sport,
}) => {
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
  AwayLosses: PropTypes.number,
  AwayWins: PropTypes.number,
  City: PropTypes.string,
  GamesBehind: PropTypes.number,
  HomeLosses: PropTypes.number,
  HomeWins: PropTypes.number,
  Key: PropTypes.string,
  Losses: PropTypes.number,
  Name: PropTypes.string,
  sport: PropTypes.string,
  Team: PropTypes.string,
  TeamID: PropTypes.number,
  Wins: PropTypes.number,
};

StandingsSingleTeam.defaultProps = {
  AwayLosses: null,
  AwayWins: null,
  City: null,
  GamesBehind: null,
  HomeLosses: null,
  HomeWins: null,
  Key: null,
  Losses: null,
  Name: null,
  sport: "MLB",
  Team: null,
  TeamID: null,
  Wins: null,
};

export default StandingsSingleTeam;
