import React from "react";
import PropTypes from "prop-types";

const TableWinsLossesCell = ({ Wins, Losses }) => {
  return <td className="standings__sec-stat">{`${Wins} - ${Losses}`}</td>;
};

TableWinsLossesCell.propTypes = {
  Wins: PropTypes.number,
  Losses: PropTypes.number,
};

TableWinsLossesCell.defaultProps = {
  Wins: 0,
  Losses: 0,
};

export default TableWinsLossesCell;
