// https://www.forbes.com/sites/wadepfau/2018/01/16/the-trinity-study-and-portfolio-success-rates-updated-to-2018/#4092f97b6860

const getWithdrawalRate = (percentStocks) => {
  let rate = 0.04;
  if (percentStocks === "mostlyNotStocks") rate = 0.03;

  return rate;
};

export default getWithdrawalRate;
