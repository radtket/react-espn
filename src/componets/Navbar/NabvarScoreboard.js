import React from "react";
import Slider from "react-slick";
import GameLeague from "./GameLeague";

const NabvarScoreboard = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
  };

  return (
    <section className="navbar-scoreboard">
      <div className="wrap">
        <Slider {...settings} className="leagues">
          <GameLeague sport="MLB" />
          <GameLeague sport="NBA" />
        </Slider>
      </div>
    </section>
  );
};

export default NabvarScoreboard;
