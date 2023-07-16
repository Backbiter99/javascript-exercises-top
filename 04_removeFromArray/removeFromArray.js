const removeFromArray = function (...args) {
  let array = [];
  for (let i = 0; i < arguments[0].length; i++) {
    let check = true;
    for (let j = 1; j < arguments.length; j++) {
      if (arguments[0][i] === arguments[j]) {
        check = false;
      }
    }
    if (check) {
      array.push(arguments[0][i]);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
