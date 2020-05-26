import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  logoLink: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const notOnMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { showResults, darkMode, setDarkMode, setOpenFeedbackModal } = props;

  const renderDesktopMenu = () => {
    return (
      <React.Fragment>
        {showResults && (
          <Button
            color="primary"
            onClick={() => history.push("/mynumber")}
            startIcon={<TrendingUpIcon />}
          >
            My number
          </Button>
        )}
        <Button
          color="primary"
          onClick={() => history.push("/manifesto")}
          startIcon={<AssignmentIcon />}
        >
          Manifesto
        </Button>
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
      </React.Fragment>
    );
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const renderMobileMenu = () => {
    return (
      <React.Fragment>
        <IconButton aria-label="menu" color="primary" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="top"
          open={openDrawer}
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
        >
          <List>
            {showResults && (
              <ListItem
                button
                onClick={() => {
                  toggleDrawer();
                  history.push("/mynumber");
                }}
              >
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary={"My Number"} />
              </ListItem>
            )}

            <ListItem
              button
              onClick={() => {
                toggleDrawer();
                history.push("/manifesto");
              }}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Manifesto"} />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                toggleDrawer();
                setDarkMode(!darkMode);
              }}
            >
              <ListItemIcon>
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </ListItemIcon>
              <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                toggleDrawer();
                setOpenFeedbackModal(true);
              }}
            >
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText primary={"Give Us Feedback"} />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </React.Fragment>
    );
  };

  return (
    <AppBar color="default" elevation={1}>
      <Toolbar>
        <Link to="/" className={classes.logoLink}>
          <Logo />
        </Link>
        {notOnMobile ? renderDesktopMenu() : renderMobileMenu()}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  showResults: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  setOpenFeedbackModal: PropTypes.func.isRequired,
};
