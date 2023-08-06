const fibonacci = function (num) {
  if (typeof num !== "number") {
    num = +num;
  }
  if (num < 0) {
    return "OOPS";
  } else if (num == 1 || num == 2) {
    return 1;
  }
  let fib = 0;
  let prev1 = 1;
  let prev2 = 1;
  for(let i = 0; i < num-2; i++){
    fib = prev1+prev2;
    prev2 = prev1;
    prev1 = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
