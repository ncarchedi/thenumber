export default function calculateAnnualContribution(
  principal,
  futureValue,
  annualReturn,
  nYears
) {
  return (
    (futureValue - principal * (1 + annualReturn / 100) ** nYears) /
    (((1 + annualReturn / 100) ** nYears - 1) / (annualReturn / 100))
  );
}
