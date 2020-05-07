const calculateTargetSavings = (currentAge, targetAge, monthlyExpenses) => {
  // TODO: validate things like currentAge <= targetAge
  const yearsToRetirement = targetAge - currentAge;
  // compute annual expenses
  const annualExpenses = monthlyExpenses * 12;
  // adjust annual expenses for inflation at 3% a year
  const futureAnnualExpenses = annualExpenses * 1.03 ** yearsToRetirement;
  // apply the rule of 25 to inflation-adjusted expenses
  return futureAnnualExpenses * 25;
};

export default calculateTargetSavings;
