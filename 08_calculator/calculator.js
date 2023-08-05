const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((totalSum, element) => totalSum + element, 0);
};

const multiply = function () {
  let ans = 1;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans * arguments[i];
  }
  return ans;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let x = 1,
    ans = 1;
  while (x <= a) {
    ans = ans * x;
    x++;
  }
  return ans;
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
