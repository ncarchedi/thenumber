export default function toDollars(num) {
  const wholeNumberText = num.toString().split(".")[0];
  const digits = wholeNumberText.length;

  // TODO: make this compatible with non-US currencies?
  // https://stackoverflow.com/a/16233919/2338922
  const dollarFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: digits,
  });

  return dollarFormatter.format(wholeNumberText);
}
