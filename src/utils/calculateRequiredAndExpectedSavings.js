import { Finance } from "financejs";
import PropTypes from "prop-types";

export default function calculateRequiredAndExpectedSavings(
  currentAge,
  monthlyExpenses,
  percentExpenses,
  monthlySavings,
  totalSavings,
  inflationRate,
  stocksReturn,
  percentStocks,
  lifeExpectancy,
  taxRate
) {
  const annualExpenses = monthlyExpenses * 12 * (percentExpenses / 100);
  const annualWithdrawal = annualExpenses / (1 - taxRate / 100);
  const annualSavings = monthlySavings * 12;
  const annualReturn = stocksReturn * (percentStocks / 100);

  const futureSpending = [];

  for (let i = 0; i <= lifeExpectancy - currentAge; i++) {
    futureSpending.push(annualWithdrawal * (1 + inflationRate / 100) ** i);
  }

  const finance = new Finance();

  // initialize arrays
  const age = [Number(currentAge)];
  const expectedSavings = [totalSavings];
  const requiredSavings = [finance.NPV(annualReturn, ...futureSpending)];
  const canRetire = [expectedSavings[0] >= requiredSavings[0]];

  for (let i = 1; i < futureSpending.length; i++) {
    age.push(Number(currentAge) + i);
    requiredSavings.push(finance.NPV(annualReturn, ...futureSpending.slice(i)));
    expectedSavings.push(
      expectedSavings[i - 1] * (1 + annualReturn / 100) + annualSavings
    );
    canRetire.push(expectedSavings[i] >= requiredSavings[i]);

    // show 5 years after breakeven
    if (canRetire[i - 5]) break;
  }

  return {
    age,
    requiredSavings,
    expectedSavings,
    canRetire,
  };
}

calculateRequiredAndExpectedSavings.propTypes = {
  currentAge: PropTypes.number.isRequired,
  monthlyExpenses: PropTypes.number.isRequired,
  monthlySavings: PropTypes.number.isRequired,
  totalSavings: PropTypes.number.isRequired,
  inflationRate: PropTypes.number.isRequired,
  stocksReturn: PropTypes.number.isRequired,
  percentStocks: PropTypes.number.isRequired,
  lifeExpectancy: PropTypes.number.isRequired,
  taxRate: PropTypes.number.isRequired,
};
