import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { espnLogo, NflTeamDecoders } from "../../utils/helpers";

const TableTeamCellWrap = styled.td`
  a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }

    > * {
      vertical-align: middle;
    }

    img {
      height: 24px;
      width: 24px;
      margin-right: 6px;
    }

    .standings__team {
      &--arbv,
      &--city,
      &--full {
        display: inline;
      }

      &--arbv {
        @media (min-width: 400px) {
          display: none;
        }
      }

      &--full {
        @media (max-width: 399px) {
          display: none;
        }
      }

      &--city {
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
  }
`;

const TableTeamCell = ({ Key: TeamAbrv, City, Name, hideCity, sport }) => {
  let TeamCity = City;
  let TeamName = Name;

  if (sport === "NFL") {
    const { name, city } = NflTeamDecoders(TeamAbrv);
    TeamCity = city;
    TeamName = name;
  }

  return (
    <TableTeamCellWrap className="standings__team">
      <Link to={`/teams/${TeamAbrv}`}>
        <img
          src={espnLogo(`${TeamAbrv}`, 36, sport)}
          alt={`${TeamCity} ${TeamName} Logo`}
        />
        {TeamAbrv && <abbr className="standings__team--arbv">{TeamAbrv}</abbr>}
        {TeamCity && !hideCity && (
          <figcaption className="standings__team--city">{TeamCity} </figcaption>
        )}
        {TeamName && (
          <figcaption className="standings__team--full">{TeamName}</figcaption>
        )}
      </Link>
    </TableTeamCellWrap>
  );
};

TableTeamCell.propTypes = {
  Key: PropTypes.string.isRequired,
  City: PropTypes.string,
  Name: PropTypes.string,
  hideCity: PropTypes.bool,
  sport: PropTypes.string,
};

TableTeamCell.defaultProps = {
  City: null,
  Name: null,
  hideCity: false,
  sport: "MLB",
};

export default TableTeamCell;
