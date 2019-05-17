import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ sports }) => {
  const BuildSportsNav = SportsArg => {
    return Object.entries(SportsArg).map(sport => {
      const [name, teams] = sport;
      return (
        <li teams={teams} key={name}>
          <Link to={`/${name.toLowerCase()}`}>{name}</Link>
        </li>
      );
    });
  };

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {sports && BuildSportsNav(sports)}
    </ul>
  );
};

export default Navbar;
