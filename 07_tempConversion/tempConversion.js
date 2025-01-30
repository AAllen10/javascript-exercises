const convertToCelsius = function(value) {
  let celValue = (value - 32) * 5/9;
  celValue = Number(celValue.toFixed(1));
  return celValue;

};

const convertToFahrenheit = function(value) {
  let farValue = (value * 9/5) + 32;
  farValue = Number(farValue.toFixed(1));
  return farValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
