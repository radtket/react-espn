import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CreateTeamsMegaMenu from "./CreateTeamsMegaMenu";
import { sortTeamsByDivion } from "../../utils/helpers";

const LeagueDropdown = ({
  Title,
  teams,
  route,
  NotMobile,
  closeMobileMenu,
}) => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(false);
    closeMobileMenu();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const allTeams = sortTeamsByDivion(teams);
  const NumberOfTeamsInRow = allTeams.length / 2;

  return (
    <li
      ref={node}
      onMouseEnter={() => NotMobile && setOpen(true)}
      onMouseLeave={() => NotMobile && handleChange()}>
      <NavLink
        className={`sports-megamenu__button ${
          open ? "sports-megamenu__button--is-open" : ""
        }`}
        exact
        to={`/${route}`}
        onClick={() => handleChange()}>
        {Title}
      </NavLink>

      {open && (
        <div className="sports-megamenu">
          <ul className="sports-megamenu__nav">
            <li>
              <NavLink exact to={`/${route}`} onClick={() => handleChange()}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/scores`}
                onClick={() => handleChange()}>
                Scores
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/schedule`}
                onClick={() => handleChange()}>
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/standings`}
                onClick={() => handleChange()}>
                Standings
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/stats`}
                onClick={() => handleChange()}>
                Stats
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/news`}
                onClick={() => handleChange()}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/teams`}
                onClick={() => handleChange()}>
                Teams
              </NavLink>
            </li>
          </ul>

          <div
            className={`sports-megamenu__teams sports-megamenu__teams--${NumberOfTeamsInRow}`}>
            <CreateTeamsMegaMenu
              teams={allTeams}
              sport={route}
              route={route}
              handleChange={handleChange}
              NumberOfTeamsInRow={NumberOfTeamsInRow}
            />
          </div>
        </div>
      )}
    </li>
  );
};

LeagueDropdown.propTypes = {
  Title: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  route: PropTypes.string.isRequired,
};

export default LeagueDropdown;
