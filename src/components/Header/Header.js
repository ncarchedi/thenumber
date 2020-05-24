import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { darkMode, setDarkMode, setOpenFeedbackModal } = props;

  return (
    <AppBar color="default" elevation={1}>
      <Toolbar>
        <Link to="/" className={classes.logo}>
          <Logo />
        </Link>
        <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
          <IconButton
            aria-label="dark mode toggle"
            color="primary"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Give Us Feedback">
          <IconButton
            aria-label="give us feedback"
            color="primary"
            onClick={() => setOpenFeedbackModal(true)}
          >
            <FeedbackIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  setOpenFeedbackModal: PropTypes.func.isRequired,
};
