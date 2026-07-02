const factorial = function (n) {
  if (
    typeof n !== "number" ||
    Number.isNaN(n) ||
    !Number.isInteger(n) ||
    n < 0
  ) {
    return;
  }

  if (n === 0) return 1;

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;