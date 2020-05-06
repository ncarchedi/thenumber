import { Finance } from "financejs";

const getResultsChartData = (
  currentAge,
  targetAge,
  currentSavings,
  targetSavings
) => {
  const ageDiff = targetAge - currentAge;

  const finance = new Finance();
  const cagr = finance.CAGR(currentSavings, targetSavings, ageDiff) / 100;

  var ageArray = [currentAge];
  var savingsArray = [currentSavings];

  var i;
  for (i = 1; i <= ageDiff; i++) {
    ageArray.push(Number(currentAge) + i);
    savingsArray.push(savingsArray[i - 1] * (1 + cagr));
  }

  return { ageArray: ageArray, savingsArray: savingsArray };
};

export default getResultsChartData;
