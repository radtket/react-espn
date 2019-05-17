import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mlb">MLB</Link>
      </li>
      <li>
        <Link to="/nba">NBA</Link>
      </li>
      <li>
        <Link to="/nfl">NFL</Link>
      </li>
    </ul>
  );
};

export default Navbar;
