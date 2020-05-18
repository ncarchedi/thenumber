export default function calculateExpectedSavingsByAge(
  currentAge,
  monthlyExpenses,
  monthlySavings,
  totalSavings,
  inflationRate,
  annualReturn,
  withdrawalRate
) {
  const annualExpenses = monthlyExpenses * 12;
  const annualSavings = monthlySavings * 12;
  const multiplier = 100 / withdrawalRate;

  const age = [currentAge];
  const requiredSavings = [multiplier * annualExpenses];
  const expectedSavings = [totalSavings];
  const canRetire = [expectedSavings[0] >= requiredSavings[0]];

  const maxYears = 100;

  for (var i = 1; i < maxYears; i++) {
    age.push(Number(currentAge) + i);
    requiredSavings.push(
      multiplier * annualExpenses * (1 + inflationRate / 100) ** i
    );
    expectedSavings.push(
      expectedSavings[i - 1] * (1 + annualReturn / 100) + annualSavings
    );
    canRetire.push(expectedSavings[i] >= requiredSavings[i]);

    // show 3 years after breakeven
    if (canRetire[i - 3]) break;
  }

  return { age, requiredSavings, expectedSavings, canRetire };
}
