import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CreateTeamsMegaMenu from "./CreateTeamsMegaMenu";

const LeagueDropdown = ({ Title, teams, route, NotMobile }) => {
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
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <li
      ref={node}
      className="global-nav__item"
      onMouseEnter={() => NotMobile && setOpen(true)}
      onMouseLeave={() => NotMobile && handleChange()}>
      <NavLink
        className={`sports-megamenu__button ${
          open ? "sports-megamenu__button--is-open" : ""
        }`}
        exact
        to={`/${route}`}
        onClick={() => handleChange()}>
        <span className="link-text"> {Title}</span>
      </NavLink>

      {open && (
        <div className="sports-megamenu">
          <ul className="sports-megamenu--nav">
            <li>
              <NavLink exact to={`/${route}`} onClick={() => handleChange()}>
                <span className="link-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/scores`}
                onClick={() => handleChange()}>
                <span className="link-text">Scores</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/schedule`}
                onClick={() => handleChange()}>
                <span className="link-text">Schedule</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/standings`}
                onClick={() => handleChange()}>
                <span className="link-text">Standings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/stats`}
                onClick={() => handleChange()}>
                <span className="link-text">Stats</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/news`}
                onClick={() => handleChange()}>
                <span className="link-text">News</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/${route}/teams`}
                onClick={() => handleChange()}>
                <span className="link-text">Teams</span>
              </NavLink>
            </li>
          </ul>

          <div className="dropdown__content">
            <CreateTeamsMegaMenu
              teams={teams}
              sport={route}
              route={route}
              handleChange={handleChange}
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
