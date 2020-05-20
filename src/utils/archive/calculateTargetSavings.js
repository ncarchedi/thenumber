export default function calculateTargetSavings(
  currentAge,
  retirementAge,
  monthlyExpenses,
  withdrawalRate,
  inflationRate
) {
  // TODO: validate things like currentAge <= retirementAge
  const yearsToRetirement = retirementAge - currentAge;
  // compute annual expenses
  const annualExpenses = monthlyExpenses * 12;
  // adjust annual expenses for inflation
  const futureAnnualExpenses =
    annualExpenses * (1 + inflationRate / 100) ** yearsToRetirement;
  // apply the rule of 25 to inflation-adjusted expenses
  // TODO: give a more conservative option (e.g. rule of 33)?
  return futureAnnualExpenses / (withdrawalRate / 100);
}
