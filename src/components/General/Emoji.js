import React from "react";

export default function Emoji(props) {
  const { symbol, label } = props;
  return (
    <span aria-label={label} role="img">
      {symbol}
    </span>
  );
}
