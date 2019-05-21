import React, { useState, useEffect } from "react";
import GameScore from "./GameScore";
import { isArrayEmpty } from "../../utils/helpers";

const GameLeague = ({ sport }) => {
  const [games, setGames] = useState([]);

  // https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/date/20190430/games.json
  // const getGames = () =>
  //   fetch(`/data/${sport.toUpperCase()}/2019-05-05.json`)
  //     .then(res => res.json())
  //     .then(data => setGames(data));

  const getGames = () =>
    fetch(
      `${
        sport === "MLB"
          ? "https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/date/20190519/games.json"
          : "https://api.mysportsfeeds.com/v2.1/pull/nba/2019-playoff/date/20190519/games.json"
      }`,
      {
        headers: new Headers({
          Authorization: `Basic ${btoa(
            `9f009b21-7cb8-4636-84e9-bcd1c5:MYSPORTSFEEDS`
          )}`,
        }),
      }
    )
      .then(res => res.json())
      .then(data => setGames(data.games));

  useEffect(() => {
    isArrayEmpty(games) && getGames();
  });

  return (
    <figure className="league">
      <div className="scoreboard">
        <div className={`score-label ${sport.toLowerCase()}`}>
          <div className="score-label__content">
            <h2 className="score-label__title">{sport.toUpperCase()}</h2>
          </div>
        </div>
        {games.map(game => (
          <GameScore
            {...game}
            key={game.schedule.id}
            sport={sport.toUpperCase()}
          />
          // <GameScore {...game} key={game.GameID} sport={sport.toUpperCase()} />
        ))}
      </div>
    </figure>
  );
};

export default GameLeague;
