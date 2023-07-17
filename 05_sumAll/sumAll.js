const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  let min, max;
  if (a > b) {
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
