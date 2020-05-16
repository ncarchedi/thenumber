import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  count: {
    padding: ["1.5rem", 0],
    fontSize: "14px",
    color: "darkgrey",
    fontStyle: "italic",
  },
}));

export default function QuestionCount(props) {
  const classes = useStyles();

  return (
    <div className={classes.count}>
      Question <span>{props.current}</span> of <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
