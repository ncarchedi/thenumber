import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  logoLink: {
    flexGrow: 1,
    textDecoration: "none",
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
        <IconButton
          aria-label="dark mode toggle"
          color="primary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </IconButton>
        <Link to="/feedback">
          <IconButton aria-label="dark mode toggle" color="primary">
            <FeedbackIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
