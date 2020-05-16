import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  logoLink: {
    textDecoration: "none",
    flexGrow: 1,
  },
  feedbackLink: {
    textDecoration: "none",
    marginLeft: theme.spacing(1),
  },
  feedbackLinkText: {
    fontFamily: ["Racing Sans One", "cursive"],
    color: theme.palette.primary.main,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const { darkMode, setDarkMode } = props;

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      className={classes.appBar}
    >
      <Toolbar>
        <Link to="/" className={classes.logoLink}>
          <Logo />
        </Link>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="primary"
          inputProps={{ "aria-label": "theme switcher" }}
        />
        {/* <Link to="/feedback" className={classes.feedbackLink}>
            <Typography
              variant="subtitle1"
              className={classes.feedbackLinkText}
            >
              give us feedback
            </Typography>
          </Link> */}
      </Toolbar>
    </AppBar>
  );
}
