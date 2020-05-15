import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6),
  },
  feedbackPageLink: {
    float: "right",
    marginTop: theme.spacing(2),
    fontFamily: ["Racing Sans One", "cursive"],
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link to="/">
        <Logo />
      </Link>
      {/* <Link to="/about">
        <div className="aboutPageLink">about</div>
      </Link> */}
      <Link to="/feedback">
        <div className={classes.feedbackPageLink}>give us feedback</div>
      </Link>
    </div>
  );
}
