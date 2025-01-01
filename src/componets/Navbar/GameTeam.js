import React from "react";
import PropTypes from "prop-types";
import { espnLogo } from "../../utils/helpers";

const GameTeam = ({ abbreviation, sport, score, isHomeTeam }) => {
  return (
    <li
      className={`cscore__item cscore__item--${isHomeTeam ? "home" : "away"}`}>
      <figure className="cscore__logo">
        <img
          className={`cscore__image gs-logo-${isHomeTeam ? "home" : "away"}`}
          src={espnLogo(abbreviation, 30, sport)}
          alt={`${abbreviation} Logo`}
        />
      </figure>

      <div className="cscore__team  icon-font-after">
        <div className="cscore__truncate">
          <span className="cscore__name cscore__name--long">
            Oakland Athletics
          </span>
          <span className="cscore__name cscore__name--short">Athletics</span>
          <span className="cscore__name cscore__name--abbrev">
            {abbreviation}
          </span>
        </div>
        <div className="cscore__score update__score">{score}</div>
      </div>
    </li>
  );
};

GameTeam.propTypes = {
  abbreviation: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  score: PropTypes.number,
  isHomeTeam: PropTypes.bool,
};

GameTeam.defaultProps = {
  score: null,
  isHomeTeam: false,
};

export default GameTeam;
