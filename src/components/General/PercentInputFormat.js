import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export default function PercentInputFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      decimalScale={0}
      suffix="%"
      isNumericString
    />
  );
}

PercentInputFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
