const getAnnualWithdrawalChartData = (
  currentAge,
  retirementAge,
  deathAge,
  currentMonthlyExpenses,
  annualInflation
) => {
  const yearsFromNowUntilRetirement = retirementAge - currentAge;
  const yearsFromRetirementToDeath = deathAge - retirementAge + 1;
  const currentAnnualExpenses = currentMonthlyExpenses * 12;

  var ageArray = [];
  var withdrawalArray = [];

  for (var i = 0; i < yearsFromRetirementToDeath; i++) {
    const age = Number(retirementAge) + i;
    const withdrawal =
      currentAnnualExpenses *
      (1 + annualInflation) ** (yearsFromNowUntilRetirement + i);

    ageArray.push(age);
    withdrawalArray.push(withdrawal);
  }

  return { ageArray: ageArray, withdrawalArray: withdrawalArray };
};

export default getAnnualWithdrawalChartData;
