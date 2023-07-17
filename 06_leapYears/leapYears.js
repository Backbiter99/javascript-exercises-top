const leapYears = function (year) {
  if (!Number.isInteger(year)) return false;
  if (year % 4) {
    return false;
  } else {
    if (year % 100) {
      return true;
    } else {
      if (year % 400) {
        return false;
      } else return true;
    }
  }
};

// Do not edit below this line
module.exports = leapYears;
