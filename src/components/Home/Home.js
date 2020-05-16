import React, { useState } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz/Quiz";
import Checkpoint from "./Checkpoint/Checkpoint";
import quiz1 from "../../api/quiz1";

export default function Home(props) {
  const [showCheckpoint, setShowCheckpoint] = useState(false);
  const [user, setUser] = useState({
    name: "",
    retirementAge: "",
    currentAge: "",
    monthlyExpenses: "",
    currentSavings: "",
  });

  // // For testing purposes only
  // const [showCheckpoint, setShowCheckpoint] = useState(true);
  // const [user, setUser] = useState({
  //   name: "Marley",
  //   retirementAge: "60",
  //   currentAge: "30",
  //   monthlyExpenses: "4000",
  //   currentSavings: "200000",
  // });

  const [assumptions, setAssumptions] = useState({
    annualReturn: "7",
    withdrawalRate: "4",
    inflationRate: "3",
  });

  const setUserValue = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };

    if (key === "name") props.onSetName(value);

    setUser(updatedUser);
  };

  return showCheckpoint ? (
    <Checkpoint
      user={user}
      assumptions={assumptions}
      setUser={setUser}
      setAssumptions={setAssumptions}
    />
  ) : (
    <Quiz
      questions={quiz1}
      userName={user.name}
      setUserValue={setUserValue}
      setShowCheckpoint={setShowCheckpoint}
    />
  );
}

Home.propTypes = {
  onSetName: PropTypes.func.isRequired,
};
