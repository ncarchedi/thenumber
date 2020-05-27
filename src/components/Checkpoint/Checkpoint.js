import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Assumptions from "./Assumptions";
import Results from "./Results";

const useStyles = makeStyles((theme) => ({
  assumptionsContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  resultsContainer: {
    textAlign: "center",
  },
}));

export default function Checkpoint(props) {
  const classes = useStyles();
  const [showAssumptions, setShowAssumptions] = useState(false);
  const { user, setUser } = props;

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    const element = document.getElementById("assumptions");
    element &&
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [showAssumptions]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Grid container spacing={6}>
        <Grid
          item
          xs={12}
          md={showAssumptions ? 9 : 12}
          className={classes.resultsContainer}
        >
          <Results
            user={user}
            showAssumptions={showAssumptions}
            setShowAssumptions={setShowAssumptions}
          />
        </Grid>
        {showAssumptions && (
          <Grid
            id="assumptions"
            item
            xs={12}
            md={3}
            className={classes.assumptionsContainer}
          >
            <Assumptions user={user} setUser={setUser} />
          </Grid>
        )}
      </Grid>
    </Slide>
  );
}

Checkpoint.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    percentExpenses: PropTypes.string.isRequired,
    monthlySavings: PropTypes.string.isRequired,
    totalSavings: PropTypes.string.isRequired,
    inflationRate: PropTypes.string.isRequired,
    stocksReturn: PropTypes.string.isRequired,
    percentStocks: PropTypes.string.isRequired,
    lifeExpectancy: PropTypes.string.isRequired,
    taxRate: PropTypes.string.isRequired,
    hasResults: PropTypes.bool.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};
