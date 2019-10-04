import React from "react";
import PropTypes from "prop-types";

const Home = ({ sport }) => {
  return (
    <div>
      <h1>{sport && sport} Home</h1>
    </div>
  );
};

Home.propTypes = {
  sport: PropTypes.string,
};

Home.defaultProps = {
  sport: null,
};

export default Home;
