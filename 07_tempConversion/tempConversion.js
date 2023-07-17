const convertToCelsius = function (tempF) {
  const tempC = ((tempF - 32) * 5) / 9;
  if(Number.isInteger(tempC)) return tempC;
  return +tempC.toFixed(1);
};

const convertToFahrenheit = function (tempC) {
  const tempF = (9 * tempC) / 5 + 32;
  if(Number.isInteger(tempC)) return tempF;
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
