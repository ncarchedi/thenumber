const calculateAnnualContribution = (
  principal,
  futureValue,
  annualReturn,
  nYears
) => {
  return (
    (futureValue - principal * (1 + annualReturn) ** nYears) /
    (((1 + annualReturn) ** nYears - 1) / annualReturn)
  );
};

export default calculateAnnualContribution;
