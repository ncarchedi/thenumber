import React, { useState } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz/Quiz";
import Checkpoint from "./Checkpoint/Checkpoint";
import content from "../../api/content";

export default function Home(props) {
  const [showCheckpoint, setShowCheckpoint] = useState(false);
  const [user, setUser] = useState({
    name: "",
    currentAge: "",
    monthlyExpenses: "",
    monthlySavings: "",
    totalSavings: "",
    inflationRate: "",
    annualReturn: "",
  });

  // // For testing purposes only
  // const [showCheckpoint, setShowCheckpoint] = useState(true);
  // const [user, setUser] = useState({
  //   name: "Marley",
  //   currentAge: "35",
  //   monthlyExpenses: "4000",
  //   monthlySavings: "2000",
  //   totalSavings: "250000",
  //   inflationRate: "3",
  //   annualReturn: "7",
  // });

  const setUserValue = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };

    if (key === "name") props.onSetName(value);

    setUser(updatedUser);
  };

  return showCheckpoint ? (
    <Checkpoint user={user} setUser={setUser} />
  ) : (
    <Quiz
      questions={content}
      userName={user.name}
      setUserValue={setUserValue}
      setShowCheckpoint={setShowCheckpoint}
    />
  );
}

Home.propTypes = {
  onSetName: PropTypes.func.isRequired,
};
