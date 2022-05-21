const currencyFormatter = (number: number, format: string = "USD") => {
  return Intl.NumberFormat(format).format(number);
};

const decimalToFull = (number: number, formatToCurrency: boolean = true) => {
  return currencyFormatter(number / 100);
};

export { currencyFormatter, decimalToFull };
