export default function getTotalSavingsChartData(
  startAge,
  endAge,
  principal,
  annualContribution,
  annualReturn
) {
  const nYears = endAge - startAge + 1;

  var ageArray = [];
  var savingsArray = [];

  for (var i = 0; i < nYears; i++) {
    ageArray.push(Number(startAge) + i);

    const balance =
      principal * (1 + annualReturn / 100) ** i +
      annualContribution *
        (((1 + annualReturn / 100) ** i - 1) / (annualReturn / 100));
    savingsArray.push(balance);
  }

  return { ageArray: ageArray, savingsArray: savingsArray };
}
