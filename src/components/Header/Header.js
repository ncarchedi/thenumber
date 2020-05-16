import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  logoLink: {
    textDecoration: "none",
    flexGrow: 1,
  },
  feedbackLink: {
    textDecoration: "none",
    marginRight: theme.spacing(1),
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
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Link to="/" className={classes.logoLink}>
          <Logo />
        </Link>
        <Link to="/feedback" className={classes.feedbackLink}>
          <Typography variant="subtitle1" className={classes.feedbackLinkText}>
            give us feedback
          </Typography>
        </Link>
        <IconButton
          aria-label="dark mode toggle"
          color="primary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
