import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { espnLogo } from "../../utils/helpers";
import GameTeam from "./GameTeam";

const GameScore = ({
  // IsClosed,
  // Status,

  // AwayTeam,
  // AwayTeamRuns,
  // HomeTeam,
  // HomeTeamRuns,
  // DateTime,
  // GameID,
  // sport,

  // AwayTeamScore,
  // HomeTeamScore,

  // startTime,

  schedule,
  score,
  sport,
}) => {
  const { awayTeam, homeTeam, startTime, playedStatus, id } = schedule;
  const { awayScoreTotal, homeScoreTotal } = score;
  const gameIsFinal = playedStatus === "COMPLETED";

  return (
    // <h1>Hi</h1>
    <div className="cscore">
      <Link to={`/${sport}/game/${id}`} className="cscore__link">
        <div className="cscore__overview">
          <div
            className="cscore__date-time"
            data-date={format(new Date(startTime), "YYYY-MM-DD[T]HH:mm:ssZ")}>
            <span className="ccscore__date-time--time">
              {/* {!IsClosed &&
                Status === "Scheduled" &&
                format(new Date(startTime), "h:mm A")} */}
              {gameIsFinal && "Final"}
            </span>
          </div>

          {/* <div className="cscore__info-overview">2 Outs</div> */}

          {/* <div className="cscore__network ">
            <div className="cscore__channels icon-font-before icon-play-arrow-solid-before" />
          </div> */}
        </div>
        {/* TODO: cscore__details is probally useless */}
        <div className="cscore__details">
          <ul className="cscore__competitors">
            <GameTeam
              {...schedule}
              {...score}
              {...awayTeam}
              score={awayScoreTotal}
              sport={sport}
            />

            <GameTeam
              {...schedule}
              {...score}
              {...homeTeam}
              score={homeScoreTotal}
              sport={sport}
              isHomeTeam
            />
          </ul>
        </div>
      </Link>
    </div>

    // <div className="cscore">
    //   <Link to={`/${sport}/game/`} className="cscore__link">
    //     <div className="cscore__overview">
    //       <div
    //         className="cscore__date-time"
    //         data-date={format(new Date(startTime), "YYYY-MM-DD[T]HH:mm:ssZ")}>
    //         <span className="cscore__time time">
    //           {!IsClosed &&
    //             Status === "Scheduled" &&
    //             format(new Date(startTime), "h:mm A")}
    //           {IsClosed && Status}
    //           {/* Top 2nd */}
    //         </span>
    //       </div>

    //       <div className="cscore__info-overview">{/* 2 Outs */}</div>

    //       <div className="cscore__network ">
    //         <div className="cscore__channels icon-font-before icon-play-arrow-solid-before" />
    //       </div>
    //     </div>
    //     <div className="cscore__details">
    //       <ul className="cscore__competitors">
    //         <li className="cscore__item cscore__item--away ">
    //           <div className="cscore__logo">
    //             <img
    //               className="cscore__image gs-logo-away  imageLoaded lazyloaded"
    //               src={espnLogo(AwayTeam, 30, sport)}
    //               alt={`${AwayTeam} Logo`}
    //             />
    //           </div>

    //           <div className="cscore__team  icon-font-after">
    //             <div className="cscore__truncate">
    //               <span className="cscore__name cscore__name--long">
    //                 Oakland Athletics
    //               </span>
    //               <span className="cscore__name cscore__name--short">
    //                 Athletics
    //               </span>
    //               <span className="cscore__name cscore__name--abbrev">
    //                 {AwayTeam}
    //               </span>
    //             </div>
    //             <div className="cscore__score update__score  ">
    //               {AwayTeamRuns || AwayTeamScore}
    //             </div>
    //           </div>
    //         </li>

    //         <li className="cscore__item cscore__item--home last">
    //           <div className="cscore__logo">
    //             <img
    //               className="cscore__image gs-logo-home  imageLoaded lazyloaded"
    //               src={espnLogo(HomeTeam, 30, sport)}
    //               alt={`${HomeTeam} Logo`}
    //             />
    //           </div>

    //           <div className="cscore__team  icon-font-after">
    //             <div className="cscore__truncate">
    //               <span className="cscore__name cscore__name--long">
    //                 Cleveland Indians
    //               </span>
    //               <span className="cscore__name cscore__name--short">
    //                 Indians
    //               </span>
    //               <span className="cscore__name cscore__name--abbrev">
    //                 {HomeTeam}
    //               </span>
    //             </div>
    //             <div className="cscore__score update__score  ">
    //               {HomeTeamRuns || HomeTeamScore}
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default GameScore;
