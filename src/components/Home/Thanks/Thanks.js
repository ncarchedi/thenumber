import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BigButton from "../../General/BigButton";
import ReplayIcon from "@material-ui/icons/Replay";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  gif: {
    margin: theme.spacing(3, "auto"),
    display: "block",
  },
}));

export default function Thanks(props) {
  const classes = useStyles();
  const { startOver } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h2">Thanks for stopping by!</Typography>
      <img
        src="https://media.giphy.com/media/WmkqburJqXziM/giphy.gif"
        alt="carlton dance"
        className={classes.gif}
        width="50%"
      />
      <BigButton
        variant="contained"
        endIcon={<ReplayIcon />}
        onClick={startOver}
      >
        Start Over
      </BigButton>
    </div>
  );
}
