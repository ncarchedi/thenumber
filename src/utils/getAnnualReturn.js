// https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp

const getAnnualReturn = (percentStocks) => {
  let annualReturn = null;

  if (percentStocks === "mostlyStocks") {
    annualReturn = 0.07;
  } else if (percentStocks === "halfStocks") {
    annualReturn = 0.05;
  } else if (percentStocks === "mostlyNotStocks") {
    annualReturn = 0.03;
  }

  return annualReturn;
};

export default getAnnualReturn;
