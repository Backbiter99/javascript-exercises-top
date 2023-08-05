const palindromes = function (str) {
  let strForwards = str
    .split("")
    .filter((element) => {
      if (element === " ") return false;
      if (
        (element >= "a" && element <= "z") ||
        (element >= "A" && element <= "Z") ||
        (element >= 0 && element <= 9)
      ) {
        return true;
      }
    })
    .join("")
    .toLowerCase();
  let strBackwards = strForwards.split("").reverse().join("");
  if (strForwards === strBackwards) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
