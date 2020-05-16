import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: "inline-block",
  },
  logo: {
    color: "#59cd90",
    fontFamily: ["Racing Sans One", "cursive"],
    fontSize: "2.5rem",
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <div className={classes.logo}>the number</div>
    </div>
  );
}
