const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, item) => acc * item, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  // if (number === 0 || number === 1){
  //   return 1;
  // }else{
  //   return number*factorial(number-1);
  // }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
