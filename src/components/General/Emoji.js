import React from "react";
import { PropTypes } from "prop-types";

export default function Emoji(props) {
  const { symbol, label } = props;
  return (
    <span aria-label={label} role="img">
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
