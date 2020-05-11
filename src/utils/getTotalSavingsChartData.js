const getTotalSavingsChartData = (
  startAge,
  endAge,
  principal,
  annualContribution,
  annualReturn
) => {
  const nYears = endAge - startAge + 1;

  var ageArray = [];
  var savingsArray = [];

  for (var i = 0; i < nYears; i++) {
    ageArray.push(Number(startAge) + i);

    const balance =
      principal * (1 + annualReturn) ** i +
      annualContribution * (((1 + annualReturn) ** i - 1) / annualReturn);
    savingsArray.push(balance);
  }

  return { ageArray: ageArray, savingsArray: savingsArray };
};

export default getTotalSavingsChartData;
