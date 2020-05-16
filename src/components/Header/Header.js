import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
  feedbackLink: {
    float: "right",
    fontFamily: ["Racing Sans One", "cursive"],
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
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
        <div className={classes.feedbackLink}>give us feedback</div>
      </Link>
    </div>
  );
}
