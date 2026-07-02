const sumAll = function (number1, number2) {
  if (
    !Number.isFinite(number1) || !Number.isFinite(number2) ||
    !Number.isInteger(number1) || !Number.isInteger(number2) ||
    number1 < 0 || number2 < 0
  ) return "ERROR";

  const inferiorLimit = Math.min(number1, number2);
  const superiorLimit = Math.max(number1, number2);

  // Gauss formula for the sum of an arithmetic series from a to b
  return ((superiorLimit-inferiorLimit+1)*(inferiorLimit+superiorLimit)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
