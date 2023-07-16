const reverseString = function (string) {
  let isAnswer = "";
  let i = 0;
  while (i < string.length) {
    isAnswer += string[string.length - i - 1];
    i++;
  }
  return isAnswer;
};

// Do not edit below this line
module.exports = reverseString;
